import React, { useState, useEffect } from 'react';
import { 
    HiEye, HiEyeOff, HiMail, HiLockClosed, HiUser, 
    HiPhone, HiGlobeAlt, HiOfficeBuilding, HiCheckCircle 
} from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AgentSignupApi } from '../../redux/actions/agentAction';
import { 
    FaStar, FaArrowRight, FaUserCheck, FaChartLine, 
    FaRocket, FaShieldAlt, FaCoins 
} from 'react-icons/fa';

const AgentSignup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', phone: '', country: '', companyName: '', password: '',
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { agentLoading, isAuthenticated, error } = useSelector(state => state.agentContainer);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AgentSignupApi(
            formData.firstName, formData.lastName, formData.email, 
            formData.phone, formData.country, formData.companyName, formData.password
        ));
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/agent');
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className="bg-[#F8FAFC] font-sans text-slate-900">
            
            {/* 1. HERO & COMPACT SIGNUP SECTION */}
            <section className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4 md:p-10 border-b border-slate-200">
                <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-12">
                    
                    {/* Left: Professional Content */}
                    <div className="lg:w-1/2 space-y-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-blue-600 p-2 rounded-lg text-white"><FaRocket /></span>
                            <span className="text-xl font-bold tracking-tight text-blue-900">IMMIFY PARTNERS</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                            Grow Your Agency with <span className="text-blue-600">Verified Leads.</span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-lg">
                            Immify connects verified immigration seekers with top consultants. Join 3,000+ experts today.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                            {[
                                "100% Phone Verified",
                                "Dedicated Support",
                                "Instant Lead Access",
                                "Zero Registration Fee"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                                    <HiCheckCircle className="text-emerald-500 text-xl" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 pt-6">
                            <div className="flex text-yellow-400"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                            <span className="text-sm font-bold text-slate-500">1M+ HAPPY CLIENTS</span>
                        </div>
                    </div>

                    {/* Right: Compact Form Card */}
                    <div className="lg:w-1/2 w-full max-w-md">
                        <div className="bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Agent Signup</h2>
                            <p className="text-slate-500 text-sm mb-6">Start your success program for free.</p>

                            <form onSubmit={handleSubmit} className="space-y-3">
                                <div className="grid grid-cols-2 gap-3">
                                    <input type="text" name="firstName" placeholder="First Name" required onChange={handleChange}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:border-blue-500 focus:bg-white outline-none transition-all" />
                                    <input type="text" name="lastName" placeholder="Last Name" required onChange={handleChange}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:border-blue-500 focus:bg-white outline-none transition-all" />
                                </div>
                                <input type="email" name="email" placeholder="Email Address" required onChange={handleChange}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:border-blue-500 focus:bg-white outline-none transition-all" />
                                <div className="grid grid-cols-2 gap-3">
                                    <input type="tel" name="phone" placeholder="Phone" required onChange={handleChange}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:border-blue-500 focus:bg-white outline-none transition-all" />
                                    <input type="text" name="country" placeholder="Country" required onChange={handleChange}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:border-blue-500 focus:bg-white outline-none transition-all" />
                                </div>
                                <input type="text" name="companyName" placeholder="Agency Name" required onChange={handleChange}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:border-blue-500 focus:bg-white outline-none transition-all" />
                                <div className="relative">
                                    <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" required onChange={handleChange}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:border-blue-500 focus:bg-white outline-none transition-all" />
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600">
                                        {showPassword ? <HiEyeOff size={18} /> : <HiEye size={18} />}
                                    </button>
                                </div>
                                <button type="submit" 
                                        disabled={agentLoading}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98] mt-2 disabled:bg-blue-400 disabled:cursor-not-allowed">
                                    {agentLoading ? 'Creating Account...' : 'Create Account'}
                                </button>
                            </form>
                            <p className="text-center mt-4 text-xs text-slate-500 uppercase tracking-widest font-bold">
                                Already Registered? <button onClick={() => navigate('/agent-login')} className="text-blue-600 hover:underline">Sign In</button>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ... rest of the component is the same ... */}
        </div>
    );
};

export default AgentSignup;
