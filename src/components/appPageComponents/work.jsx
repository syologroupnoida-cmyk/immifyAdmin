import React from 'react';
import workStepImg from '../../assets/workStep.png';
import { useNavigate } from 'react-router-dom';
import { Briefcase, ChevronRight, FileText, Search, Linkedin, Rocket, PlusCircle, HelpCircle } from 'lucide-react';

const Work = () => {
    const navigate = useNavigate();
    const workImg = workStepImg;

    return (
        <section className="w-full bg-white py-14 px-4 flex justify-center font-sans">
            {/* Main Card: Consistent with previous components */}
            <div className="max-w-6xl w-full flex flex-col md:flex-row bg-slate-50 rounded-3xl overflow-hidden border border-slate-100">
                
                {/* --- LEFT SIDE: Elegant Content (55% width) --- */}
                <div className="md:w-[55%] w-full p-8 md:p-14 flex flex-col justify-center relative bg-white order-2 md:order-1">
                    {/* Decorative Accent */}
                    <div className="w-12 h-1 bg-[#6A2B86] mb-6 rounded-full"></div>
                    
                    <h2 className="text-slate-900 text-3xl md:text-5xl font-extrabold mb-5 tracking-tight leading-[1.1]">
                        Build Your <span className="text-[#6A2B86]">Global Career</span>.
                    </h2>
                    
                    <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium opacity-80">
                        From professional resume writing to job search services, we provide everything you need to land your dream job overseas.
                    </p>

                    {/* Action Buttons: 2-Column Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                        <WorkButton label="Search Overseas Jobs" icon={<Search size={16}/>} navigate={navigate} />
                        <WorkButton label="Post Your Resume" icon={<PlusCircle size={16}/>} navigate={navigate} />
                        <WorkButton label="Job Search Services" icon={<Briefcase size={16}/>} navigate={navigate} />
                        <WorkButton label="Resume Writing" icon={<FileText size={16}/>} navigate={navigate} />
                        <WorkButton label="LinkedIn Optimization" icon={<Linkedin size={16}/>} navigate={navigate} />
                        <WorkButton label="Resume Marketing" icon={<Rocket size={16}/>} navigate={navigate} />
                    </div>
                    
                    {/* Secondary/Info Link */}
                    <div className="mt-4">
                        <button 
                            onClick={() => navigate('/about')}
                            className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-[#6A2B86] transition-colors"
                        >
                            <HelpCircle size={16} /> Why choose our services?
                        </button>
                    </div>

                    {/* Subtle Watermark */}
                    <span className="absolute bottom-4 right-8 text-[80px] font-black text-slate-50 opacity-[0.04] pointer-events-none select-none uppercase">
                        Work
                    </span>
                </div>

                {/* --- RIGHT SIDE: Image Section (45% width) --- */}
                <div className="md:w-[45%] w-full h-[300px] md:h-auto order-1 md:order-2">
                    <img 
                        src={workImg} 
                        alt="Work Abroad" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

// Modern Compact Button Component
const WorkButton = ({ label, icon, navigate }) => (
    <button 
        onClick={() => navigate('/work')}
        className="flex items-center gap-3 px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-slate-700 font-bold text-[12px] hover:border-[#6A2B86] hover:text-[#6A2B86] transition-all group shadow-sm hover:shadow-md"
    >
        <span className="text-[#6A2B86] opacity-80 group-hover:opacity-100 transition-opacity">
            {icon}
        </span>
        {label}
        <ChevronRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
    </button>
);

export default Work;