import React, { useState, useEffect } from 'react';
import { HiEye, HiEyeOff, HiMail, HiLockClosed, HiShieldCheck, HiLightningBolt, HiChartBar, HiSupport } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AgentLoginApi } from '../../redux/actions/agentAction';
import { FaLock, FaUserShield, FaArrowRight, FaGlobeAmericas } from 'react-icons/fa';

const AgentLogin = () => {
    const { isAuthenticated, agentLoading } = useSelector((state) => state.agentContainer);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AgentLoginApi(formData.email, formData.password));
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/agent');
        }
    }, [isAuthenticated, navigate]);


    return (
        <div className="bg-[#F8FAFC] font-sans text-slate-900">
            
            {/* 1. LOGIN CARD SECTION */}
            <section className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4 md:p-10 border-b border-slate-200">
                <div className="max-w-4xl w-full bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col lg:flex-row border border-slate-100">
                    
                    {/* Left: Branding */}
                    <div className="lg:w-[45%] p-10 bg-slate-50 border-r border-slate-100 flex flex-col justify-center">
                        <div className="mb-8">
                            <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                                <FaUserShield className="text-white text-2xl" />
                            </div>
                            <h1 className="text-3xl font-bold text-slate-900 mb-4">Partner Login</h1>
                            <p className="text-slate-600 text-sm">Access your Immify account to manage leads and monitor your agency's performance in real-time.</p>
                        </div>
                        
                        <div className="space-y-4 mb-10">
                            <div className="flex items-center gap-3 text-xs font-bold text-slate-500 uppercase tracking-widest">
                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span> 256-bit Encryption
                            </div>
                            <div className="flex items-center gap-3 text-xs font-bold text-slate-500 uppercase tracking-widest">
                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span> Verified Leads Only
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-200">
                            <button onClick={() => navigate('/agent-signup')} className="text-blue-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                                New Agent? Register Here <FaArrowRight size={12} />
                            </button>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="lg:w-[55%] p-10 md:p-14 flex items-center">
                        <div className="w-full max-w-sm mx-auto">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="space-y-1.5">
                                    <label className="text-slate-700 text-xs font-bold ml-1">Work Email</label>
                                    <div className="relative group">
                                        <HiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                                        <input type="email" name="email" placeholder="agent@company.com" required onChange={handleChange}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:border-blue-500 focus:bg-white outline-none transition-all" />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <div className="flex justify-between items-center px-1">
                                        <label className="text-slate-700 text-xs font-bold">Password</label>
                                        <button type="button" className="text-[10px] text-blue-600 font-bold uppercase">Forgot?</button>
                                    </div>
                                    <div className="relative group">
                                        <HiLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                                        <input type={showPassword ? 'text' : 'password'} name="password" placeholder="••••••••" required onChange={handleChange}
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-12 py-3 text-sm focus:border-blue-500 focus:bg-white outline-none transition-all" />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600">
                                            {showPassword ? <HiEyeOff size={18} /> : <HiEye size={18} />}
                                        </button>
                                    </div>
                                </div>

                                <button type="submit" 
                                        disabled={agentLoading}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 mt-4 disabled:bg-blue-400 disabled:cursor-not-allowed">
                                    {agentLoading ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Logging In...
                                        </>
                                    ) : (
                                        <>
                                            <FaLock size={14} /> Log In to Portal
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            
           
        </div>
    );
};

export default AgentLogin;
