import React from 'react';
import about1Img from '../../assets/about1.jpg';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, ChevronRight, BookOpen, Users, UserCheck } from 'lucide-react';

const Study = () => {
    const navigate = useNavigate();
    const studyImg = about1Img;

    return (
        <section className="w-full bg-white py-14 px-4 flex justify-center font-sans">
            {/* Main Card: Matching Consulting & Migrate components */}
            <div className="max-w-6xl w-full flex flex-col md:flex-row bg-slate-50 rounded-3xl overflow-hidden border border-slate-100">
                
                {/* --- LEFT SIDE: Image Section (45% width) --- */}
                <div className="md:w-[45%] w-full h-[280px] md:h-[420px]">
                    <img 
                        src={studyImg} 
                        alt="Study Abroad" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* --- RIGHT SIDE: Elegant Content (55% width) --- */}
                <div className="md:w-[55%] w-full p-8 md:p-14 flex flex-col justify-center relative bg-white">
                    {/* Decorative Element: Signature Purple accent line */}
                    <div className="w-12 h-1 bg-[#6A2B86] mb-6 rounded-full"></div>
                    
                    <h2 className="text-slate-900 text-3xl md:text-5xl font-extrabold mb-5 tracking-tight leading-[1.1]">
                        Global <span className="text-[#6A2B86]">Education</span>. <br />
                        Infinite Possibilities.
                    </h2>
                    
                    <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium opacity-80">
                        From school to post-graduation, we pave the way for your academic success at the world's top universities.
                    </p>

                    {/* Action Buttons: Clean Grid Style */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        <button 
                            onClick={() => navigate('/study')}
                            className="flex items-center gap-3 px-5 py-3 bg-slate-50 border border-slate-100 rounded-xl text-slate-700 font-bold text-sm hover:border-[#6A2B86] hover:text-[#6A2B86] transition-all group"
                        >
                            <BookOpen size={18} className="text-[#6A2B86]" />
                            School Students
                            <ChevronRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-all" />
                        </button>

                        <button 
                            onClick={() => navigate('/study')}
                            className="flex items-center gap-3 px-5 py-3 bg-slate-50 border border-slate-100 rounded-xl text-slate-700 font-bold text-sm hover:border-[#6A2B86] hover:text-[#6A2B86] transition-all group"
                        >
                            <GraduationCap size={18} className="text-[#6A2B86]" />
                            Graduates
                            <ChevronRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-all" />
                        </button>

                        <button 
                            onClick={() => navigate('/study')}
                            className="flex items-center gap-3 px-5 py-3 bg-slate-50 border border-slate-100 rounded-xl text-slate-700 font-bold text-sm hover:border-[#6A2B86] hover:text-[#6A2B86] transition-all group"
                        >
                            <UserCheck size={18} className="text-[#6A2B86]" />
                            Professionals
                            <ChevronRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-all" />
                        </button>

                        <button 
                            onClick={() => navigate('/study')}
                            className="flex items-center gap-3 px-5 py-3 bg-slate-50 border border-slate-100 rounded-xl text-slate-700 font-bold text-sm hover:border-[#6A2B86] hover:text-[#6A2B86] transition-all group"
                        >
                            <Users size={18} className="text-[#6A2B86]" />
                            Parents
                            <ChevronRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-all" />
                        </button>
                    </div>

                    {/* Subtle Background Watermark */}
                    <span className="absolute bottom-4 right-8 text-[80px] font-black text-slate-50 opacity-[0.04] pointer-events-none select-none uppercase">
                        Study
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Study;