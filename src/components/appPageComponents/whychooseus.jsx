import React from 'react';
import missionImg from '../../assets/mission.jpg';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Award, ShieldCheck, Zap } from 'lucide-react';

const WhyChooseUs = () => {
    const navigate = useNavigate();
    const whyUsImg = missionImg;

    return (
        <section className="w-full bg-white py-14 px-4 flex justify-center font-sans">
            {/* Main Card: Consistent with previous components */}
            <div className="max-w-6xl w-full flex flex-col md:flex-row bg-slate-50 rounded-3xl overflow-hidden border border-slate-100">
                
                {/* --- LEFT SIDE: Elegant Content (55% width) --- */}
                <div className="md:w-[55%] w-full p-8 md:p-14 flex flex-col justify-center relative bg-white order-2 md:order-1">
                    {/* Decorative Accent */}
                    <div className="w-12 h-1 bg-[#6A2B86] mb-6 rounded-full"></div>
                    
                    <h2 className="text-slate-900 text-3xl md:text-5xl font-extrabold mb-5 tracking-tight leading-[1.1]">
                        Why Choose <span className="text-[#6A2B86]">Immify?</span>
                    </h2>
                    
                    <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium opacity-80">
                        Experience the difference with a trusted partner dedicated to your global success. We combine expertise with personalized care.
                    </p>

                    {/* Simple Feature List for extra Professionalism */}
                    <div className="space-y-4 mb-10">
                        <div className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                            <div className="bg-purple-50 p-2 rounded-lg text-[#6A2B86]"><Award size={18} /></div>
                            Certified Industry Experts
                        </div>
                        <div className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                            <div className="bg-purple-50 p-2 rounded-lg text-[#6A2B86]"><ShieldCheck size={18} /></div>
                            Transparent & Secure Process
                        </div>
                        <div className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                            <div className="bg-purple-50 p-2 rounded-lg text-[#6A2B86]"><Zap size={18} /></div>
                            End-to-End Support
                        </div>
                    </div>

                    {/* Action Button: Pill style to match overall theme */}
                    <div className="flex flex-wrap gap-4 items-center">
                        <button 
                            onClick={() => navigate('/about')}
                            className="bg-[#6A2B86] text-white px-10 py-4 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-purple-200 transition-all flex items-center group"
                        >
                            Learn More About Us
                            <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Subtle Watermark */}
                    <span className="absolute bottom-4 right-8 text-[80px] font-black text-slate-50 opacity-[0.04] pointer-events-none select-none uppercase">
                        Expert
                    </span>
                </div>

                {/* --- RIGHT SIDE: Image Section (45% width) --- */}
                <div className="md:w-[45%] w-full h-[300px] md:h-auto order-1 md:order-2">
                    <img 
                        src={whyUsImg} 
                        alt="Why Choose Immify" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;