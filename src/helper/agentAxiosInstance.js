import axios from "axios";
import toast from "react-hot-toast";
import { server } from "../redux/store";

const agentApi = axios.create({
  baseURL: server, // e.g. http://localhost:4000/api
  headers: {
    "Content-Type": "application/json",
  },
});

/* ================= REQUEST INTERCEPTOR ================= */
agentApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("agentToken");

    // 🔥 IMPORTANT: Signup & Login par token mat bhejo
    const publicRoutes = ["/agent/signup", "/agent/login"];

    const isPublicRoute = publicRoutes.some((route) =>
      config.url.includes(route)
    );

    if (token && !isPublicRoute) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/* ================= RESPONSE INTERCEPTOR ================= */
agentApi.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    const url = error?.config?.url || "";

    // 🔥 Signup/Login par redirect mat karo
    const authRoutes = ["/agent/signup", "/agent/login"];
    const isAuthRoute = authRoutes.some((route) =>
      url.includes(route)
    );

    if (status === 401 && !isAuthRoute) {
      localStorage.removeItem("agentToken");
      localStorage.removeItem("agentProfile");

      toast.error("Session expired. Please login again.");
      window.location.href = "/agent-login";
    }

    return Promise.reject(error);
  }
);

export default agentApi;
