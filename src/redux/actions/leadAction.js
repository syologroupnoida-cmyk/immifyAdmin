import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../store";
import { createLeadFail, createLeadRequest, createLeadSuccess, deleteLeadFail, deleteLeadRequest, deleteLeadSuccess, getAllLeadFail, getAllLeadRequest, getAllLeadSuccess, getAllLeadToSaleFail, getAllLeadToSaleRequest, getAllLeadToSaleSuccess, getAllSoldLeadFail, getAllSoldLeadRequest, getAllSoldLeadSuccess, getSingleLeadFail, getSingleLeadRequest, getSingleLeadSuccess, updateLeadDetailsFail, updateLeadDetailsRequest, updateLeadDetailsSuccess, verifyLeadFail, verifyLeadRequest, verifyLeadSuccess } from "../reducers/leadReducer";


export const GetAllToLeadApi = (page = 1, limit, search = "", country = "", destination = "") => async (dispatch) => {
    try {

        dispatch(getAllLeadToSaleRequest());
        const { data } = await axios.get(`${server}/leads/new?page=${page}&limit=${limit}&search=${search}&country=${country}&destination=${destination}`, {
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${localStorage.getItem("agentToken")}`
            }
        });
        dispatch(getAllLeadToSaleSuccess(data));

    } catch (error) {
        dispatch(getAllLeadToSaleFail(error?.response?.data?.message || "something went worng in leadData"));
    }
};

export const GetAllLeadApi =  (page = 1, limit = 3, search = "") => async (dispatch) => {
    try {
        dispatch(getAllLeadRequest());
        const { data } = await axios.get(`${server}/leads?page=${page}&limit=${limit}&search=${encodeURIComponent(search)}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("adminToken")}`
            }
        });
        dispatch(getAllLeadSuccess(data));

    } catch (error) {
        dispatch(getAllLeadFail(error?.response?.data?.message || "something went worng in leadData"));
    }
};

// ----------------------------admin--------------------------------------


export const GetAllSoldLeadApi = (page = 1, limit = 3, search = "") => async (dispatch) => {
    try {
        dispatch(getAllSoldLeadRequest());

        const { data } = await axios.get(`${server}/leads/test/sold?page=${page}&limit=${limit}&search=${encodeURIComponent(search)}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("adminToken")}`
            }
        });
        dispatch(getAllSoldLeadSuccess(data));

    } catch (error) {
        dispatch(getAllSoldLeadFail(error?.response?.data?.message || "Login failed"));
    }
};

export const GetSingleLeadApi = (leadId) => async (dispatch) => {
    try {
        dispatch(getSingleLeadRequest());
        // alert(leadId)
        const { data } = await axios.get(`${server}/leads/${leadId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("adminToken")}`
            }
        });
        dispatch(getSingleLeadSuccess(data));

    } catch (error) {
        dispatch(getSingleLeadFail(error?.response?.data?.message || "not get Lead data"));
    }
};

export const DeleteSingleLeadApi = (leadId) => async (dispatch) => {
    try {
        dispatch(deleteLeadRequest());

        const { data } = await axios.delete(`${server}/leads/${leadId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("adminToken")}`
            }
        });
        dispatch(deleteLeadSuccess(data));
        toast.success(data?.message ? data.message : 'lead deleted successfully')

    } catch (error) {
        dispatch(deleteLeadFail(error?.response?.data?.message || "something went wrong"));
    }
};

export const UpdateLeadPriceApi = (leadId, price) => async (dispatch) => {
    try {
        dispatch(updateLeadDetailsRequest());

        const { data } = await axios.put(`${server}/leads/${leadId}`, { price }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("adminToken")}`
            }
        });
        toast.success(data?.message ? data.message : 'Lead price update successfully')
        dispatch(updateLeadDetailsSuccess(data));


    } catch (error) {
        dispatch(updateLeadDetailsFail(error?.response?.data?.message || "something went wrong"));
    }
};

export const VerifyLeadApi = (leadId) => async (dispatch) => {
    try {
        dispatch(verifyLeadRequest());

        const { data } = await axios.patch(`${server}/leads/verify/${leadId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("adminToken")}`
            }
        });
        dispatch(verifyLeadSuccess(data));

        toast.success(data.message ? data.message : 'lead verified successfully')

    } catch (error) {
        dispatch(verifyLeadFail(error?.response?.data?.message || "something went wrong"));
    }
};


export const CreateMigrateLead=(info)=>async (dispatch) => {
    try{

        console.log('info',info);
        dispatch(createLeadRequest());

        const { data } = await axios.post(`${server}/leads/userLead/migrate-work`, info);

        dispatch(createLeadSuccess(data));
         toast.success(data.message ? data.message : 'lead submitted successfully')
    }
    catch(error){
        dispatch(createLeadFail(error?.response?.data?.message || "something went wrong"));
    }
}

export const CreateWorkLead=(info)=>async (dispatch) => {
    try{
        console.log('info',info);
        dispatch(createLeadRequest());

        const { data } = await axios.post(`${server}/leads/userLead/work`, info);

        dispatch(createLeadSuccess(data));
         toast.success(data.message ? data.message : 'lead submitted successfully')
    }
    catch(error){
        dispatch(createLeadFail(error?.response?.data?.message || "something went wrong"));
    }
}


