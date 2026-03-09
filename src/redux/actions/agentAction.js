import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../store";
import { agentAuthExpired, agentDashboardCountFail, agentDashboardCountRequest, agentDashboardCountSuccess, agentGetBuyLeadsFail, agentGetBuyLeadsRequest, agentGetBuyLeadsSuccess, agentLoginFail, agentLoginRequest, agentLoginSuccess, agentSignupFail, agentSignupRequest, agentSignupSuccess, deleteAgentFail, deleteAgentRequest, deleteAgentSuccess, getAgentProfileFail, getAgentProfileRequest, getAgentProfileSuccess, getAllAgentFail, getAllAgentRequest, getAllAgentSuccess, getSingleAgentFail, getSingleAgentRequest, getSingleAgentSuccess, updateAgentDocumentFail, updateAgentDocumentRequest, updateAgentDocumentSuccess, updateAgentProfileFail, updateAgentProfileRequest, updateAgentProfileSuccess, verifyAgentFail, verifyAgentRequest, verifyAgentSuccess,
    agentGetAllServicesRequest,
    agentGetAllServicesSuccess,
    agentGetAllServicesFail,
    agentGetSingleServiceRequest,
    agentGetSingleServiceSuccess,
    agentGetSingleServiceFail,
    agentCreateServiceRequest,
    agentCreateServiceFail,
    agentCreateServiceSuccess,
    agentUpdateServiceRequest,
    agentUpdateServiceSuccess,
    agentUpdateServiceFail,

} from "../reducers/agentReducer";
import { adminAuthExpired } from "../reducers/adminReducer";
import agentApi from "../../helper/agentAxiosInstance";

export const AgentSignupApi = (firstName, lastName, email, phone, country, companyName, password) => async (dispatch) => {
    try {
        dispatch(agentSignupRequest());

        const { data } = await agentApi.post(`/agent/signup`, { firstName, lastName, email, phone, country, companyName, password });

        dispatch(agentSignupSuccess(data));
        localStorage.setItem("agentToken", data.token);
        localStorage.setItem("agentProfile", JSON.stringify(data.agent));
        toast.success(data?.message || "Signup successful");
    } catch (error) {
        dispatch(agentSignupFail(error?.response?.data?.message || "Signup failed"));
        toast.error(error?.response?.data?.message || "Signup failed");
    }
};

export const AgentLoginApi = (email, password) => async (dispatch) => {
    try {
        dispatch(agentLoginRequest());

        const { data } = await agentApi.post(`/agent/login`, { email, password });

        dispatch(agentLoginSuccess(data));
        localStorage.setItem("agentToken", data.token);
        localStorage.setItem("agentProfile", JSON.stringify(data.agent));
        toast.success(data?.message || "Login successful");
    } catch (error) {
        dispatch(agentLoginFail(error?.response?.data?.message || "Login failed"));
        toast.error(error?.response?.data?.message || "Login failed");
    }
};

export const AgentLogoutApi = () => async (dispatch) => {
    try {

        localStorage.removeItem("agentToken");
        localStorage.removeItem("agentProfile");
        dispatch(agentAuthExpired(true));

        toast.success("Logout successful");
    } catch (error) {
        toast.error("Logout failed");
    }
};

export const GetAgentProfileApi = () => async (dispatch) => {
    try {
        dispatch(getAgentProfileRequest());

        const { data } = await agentApi.get(`/agent/profile`);
        
        dispatch(getAgentProfileSuccess(data));

    } catch (error) {
        dispatch(getAgentProfileFail(error?.response?.data?.message || "failed to get agent profile"));
        if (error.response.status == 401) {
            localStorage.removeItem("agentToken");
            localStorage.removeItem("agentProfile");
            dispatch(agentAuthExpired(true));
        }
    }
};

export const AgentUpateProfileApi = (firstName, lastName, email, phone, country, companyName, agentProfile) => async (dispatch) => {
    try {
        dispatch(updateAgentProfileRequest());

        const { data } = await agentApi.put(`/agent/profile`, { firstName, lastName, email, phone, country, companyName, agentProfile });

        dispatch(updateAgentProfileSuccess(data));
        toast.success(data?.message || "update profile successful");
    } catch (error) {
        dispatch(updateAgentProfileFail(error?.response?.data?.message || "failed update profile successful"));
        toast.error(error?.response?.data?.message || "failed update profile successful");
        if (error.response.status == 401) {
            localStorage.removeItem("agentToken");
            localStorage.removeItem("agentProfile");
            dispatch(agentAuthExpired(true));
        }
    }
};

export const AgentUpateDocumentApi = (panCard, aadharCard, vetCertificate, companyCertificate, gstCertificate,) => async (dispatch) => {
    try {
        dispatch(updateAgentDocumentRequest());

        const { data } = await agentApi.put(`/agent/document`, { panCard, aadharCard, vetCertificate, companyCertificate, gstCertificate, });
        dispatch(updateAgentDocumentSuccess(data));
        toast.success(data?.message || "update profile successful");
    } catch (error) {
        dispatch(updateAgentDocumentFail(error?.response?.data?.message || "failed update profile successful"));
        toast.error(error?.response?.data?.message || "failed update profile successful");
        if (error.response.status == 401) {
            localStorage.removeItem("agentToken");
            localStorage.removeItem("agentProfile");
            dispatch(agentAuthExpired(true));
        }
    }
};

export const AgentGetAllBuyLeadsApi = (page = 1, limit = 3, search = "") => async (dispatch) => {
    try {
        dispatch(agentGetBuyLeadsRequest());

        const { data } = await agentApi.get(`/agent/lead?page=${page}&limit=${limit}&search=${encodeURIComponent(search)}`);
        dispatch(agentGetBuyLeadsSuccess(data));

    } catch (error) {
        dispatch(agentGetBuyLeadsFail(error?.response?.data?.message || "failed to get lead"));
        if (error.response.status == 401) {
            localStorage.removeItem("agentToken");
            localStorage.removeItem("agentProfile");
            dispatch(agentAuthExpired(true));
        }
    }
};

export const AgentDashboardCountApi = () => async (dispatch) => {
    try {
        dispatch(agentDashboardCountRequest());

        const { data } = await agentApi.get(`/agent/dashboard-count`);
        dispatch(agentDashboardCountSuccess(data));
    } catch (error) {
        dispatch(agentDashboardCountFail(error?.response?.data?.message || "count failed"));
        if (error.response.status == 401) {
            localStorage.removeItem("agentToken");
            localStorage.removeItem("agentProfile");
            dispatch(agentAuthExpired(true));
        }
    }
};


// ------------------------------admin api-------------------------

export const GetAllAgentApi = (page = 1, limit = 3, search = "") => async (dispatch) => {
    try {
        dispatch(getAllAgentRequest());

        const { data } = await axios.get(`${server}/admin/agent?page=${page}&limit=${limit}&search=${encodeURIComponent(search)}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("adminToken")}`
            }
        });
        dispatch(getAllAgentSuccess(data));

    } catch (error) {
        dispatch(getAllAgentFail(error?.response?.data?.message || "Login failed"));
        if (error.status == 401) {
            localStorage.removeItem("adminToken");
            localStorage.removeItem("adminProfile");
            dispatch(adminAuthExpired(true));
        }

    }
};

export const GetSingleAgentApi = (id) => async (dispatch) => {
    try {
        dispatch(getSingleAgentRequest());

        const { data } = await axios.get(`${server}/admin/agent/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("adminToken")}`
            }
        });
        dispatch(getSingleAgentSuccess(data));

    } catch (error) {
        dispatch(getSingleAgentFail(error?.response?.data?.message || "not get agent data"));
    }
};

export const DeleteSingleAgentApi = (id) => async (dispatch) => {
    try {
        dispatch(deleteAgentRequest());

        const { data } = await axios.delete(`${server}/admin/agent/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("adminToken")}`
            }
        });
        dispatch(deleteAgentSuccess(data));
        toast.success(data?.message || "Delete Single Agent successful");


    } catch (error) {
        dispatch(deleteAgentFail(error?.response?.data?.message || "not get agent data"));
    }
};

export const VerifyAgentApi = (id, status) => async (dispatch) => {
    try {
        dispatch(verifyAgentRequest());

        const { data } = await axios.put(`${server}/admin/agent/verify/${id}`, { status }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("adminToken")}`
            }
        });
        dispatch(verifyAgentSuccess(data));

        toast.success(data?.message || "Agent verified successful");

    } catch (error) {
        dispatch(verifyAgentFail(error?.response?.data?.message || "faild to verify agent"));
    }
};


export const AgentGetAllServicesApi = (page = 1, limit = 9, search = "", country = "") => async (dispatch) => {
    try {
        dispatch(agentGetAllServicesRequest());

        let queryParams = `page=${page}&limit=${limit}`;
        if (search) queryParams += `&search=${encodeURIComponent(search)}`;
        if (country) queryParams += `&country=${encodeURIComponent(country)}`;

        const { data } = await agentApi.get(`/agent/services?${queryParams}`);

        console.log('data',data.data);
        dispatch(agentGetAllServicesSuccess({services:data.data}));

    } catch (error) {
        dispatch(agentGetAllServicesFail(error?.response?.data?.message || "Failed to fetch services"));
        if (error.response?.status == 401) {
            localStorage.removeItem("agentToken");
            localStorage.removeItem("agentProfile");
            dispatch(agentAuthExpired(true));
        }
    }
};

// ADD THESE OTHER SERVICE APIS (optional - same pattern)
export const AgentGetSingleServiceApi = (id) => async (dispatch) => {
    try {
        dispatch(agentGetSingleServiceRequest());
        const { data } = await agentApi.get(`/agent/services/${id}`);
        dispatch(agentGetSingleServiceSuccess(data));
    } catch (error) {
        dispatch(agentGetSingleServiceFail(error?.response?.data?.message || "Failed to fetch service"));
        if (error.response?.status == 401) {
            localStorage.removeItem("agentToken");
            localStorage.removeItem("agentProfile");
            dispatch(agentAuthExpired(true));
        }
    }
};

export const AgentCreateServiceApi = (serviceData) => async (dispatch) => {
    try {
        dispatch(agentCreateServiceRequest());

        console.log('d',serviceData);

        const { data } = await agentApi.post(`/agent/services`, serviceData);

        dispatch(agentCreateServiceSuccess(data));
        toast.success(data?.message || "Service created successfully");

    } catch (error) {
        dispatch(agentCreateServiceFail(error?.response?.data?.message || "Failed to create service"));
        toast.error(error?.response?.data?.message || "Failed to create service");
        if (error.response?.status == 401) {
            localStorage.removeItem("agentToken");
            localStorage.removeItem("agentProfile");
            dispatch(agentAuthExpired(true));
        }
    }
}
    
    
export const AgentUpdateServiceApi = (serviceData) => async (dispatch) => {
    try {
        dispatch(agentUpdateServiceRequest());

        console.log('update',serviceData);
        
        const { data } = await agentApi.put(`/agent/services`, serviceData);

        dispatch(agentUpdateServiceSuccess(data));
        toast.success(data?.message || "Service updated successfully");

    } 
    catch (error) {
        dispatch(agentUpdateServiceFail(error?.response?.data?.message || "Failed to create service"));
        toast.error(error?.response?.data?.message || "Failed to create service");
        if (error.response?.status == 401) {
            localStorage.removeItem("agentToken");
            localStorage.removeItem("agentProfile");
            dispatch(agentAuthExpired(true));
        }
    }
}