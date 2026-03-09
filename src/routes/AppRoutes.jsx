import { lazy } from "react";
import App from "../App";
import Contact from "../pages/appPages/Contact";
import HowItWork from "../pages/appPages/HowItWork";
import BuyLeads from "../pages/appPages/BuyLeads";
import MigratePage from "../pages/appPages/MigratePage";
import WorkPage from "../pages/appPages/WorkPage";
import StudyPage from "../pages/appPages/StudyPage";
import Visit from "../pages/appPages/Visit";
import Search from "../pages/appPages/Search";
import About from "../pages/appPages/About";
import Home from "../pages/appPages/Home";
import Eligibility from "../pages/appPages/Eligibility";
import Visa from "../pages/appPages/Visa";
import CoachingPage from "../pages/appPages/Coaching";
import Refer from "../pages/appPages/Refer";
import Jobsite from "../pages/appPages/Jobsite";
import AgentLogin from "../pages/agentPages/AgentLogin";
import AgentSignup from "../pages/agentPages/AgentSignup";
import AdminLogin from "../pages/adminPages/AdminLogin";
import BuyLeadDetails from "../pages/appPages/BuyLeadDetails";
import TermsOfService from "../pages/appPages/TermsOfService";
import PrivacyPolicy from "../pages/appPages/PrivacyPolicy";
import BlogDetails from "../pages/appPages/BlogDetails";
import TestimonialsPage from "../pages/appPages/TestimonialsPage";
import MarketPlace from "../pages/appPages/MarketPlace";
// const About = lazy(() => import("../pages/appPages/About"));
// const Home = lazy(() => import("../pages/appPages/Home"));




const AppRoutes = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'contact', element: <Contact /> },
            { path: 'how-it-work', element: <HowItWork /> },
            { path: 'buy-Leads', element: <BuyLeads /> },
            { path: 'migrate', element: <MigratePage /> },
            { path: 'work', element: <WorkPage /> },
            { path: 'study', element: <StudyPage /> },
            { path: 'visit', element: <Visit /> },
            { path: 'search', element: <Search /> },
            { path: 'eligibility', element: <Eligibility /> },
            { path: 'visa', element: <Visa /> },
            { path: 'coaching', element: <CoachingPage /> },
            { path: 'refer', element: <Refer /> },
            { path: 'marketplace', element: <MarketPlace /> },
            { path: 'jobsite', element: <Jobsite /> },
            { path: 'termsOfService', element: <TermsOfService /> },
            { path: 'privacyPolicy', element: <PrivacyPolicy /> },
            { path: 'testimonials', element: <TestimonialsPage /> },

            { path: 'buy-Lead/details/:id', element: <BuyLeadDetails /> },
            { path: 'blog/:id', element: <BlogDetails /> },
            
            
            { path: 'admin-login', element: <AdminLogin /> },
            { path: 'agent-login', element: <AgentLogin /> },
            { path: 'agent-signup', element: <AgentSignup /> },
        ]
    }
]

export default AppRoutes;