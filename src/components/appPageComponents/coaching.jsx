import React from 'react';
import contactImg from '../../assets/contact.jpg';
import { useNavigate } from 'react-router-dom';
import { BookOpenCheck, ChevronRight, PlayCircle, Star } from 'lucide-react';

const Coaching = () => {
    const navigate = useNavigate();
    const coachingImg = contactImg;

    return (
        <section className="w-full bg-white py-14 px-4 flex justify-center font-sans">
            {/* Main Card: Consistent rounded-3xl and white theme */}
            <div className="max-w-6xl w-full flex flex-col md:flex-row bg-slate-50 rounded-3xl overflow-hidden border border-slate-100">
                
                {/* --- LEFT SIDE: Image Section (45% width) --- */}
                <div className="md:w-[45%] w-full h-[280px] md:h-[400px]">
                    <img 
                        src={coachingImg} 
                        alt="Expert Coaching" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* --- RIGHT SIDE: Elegant Content (55% width) --- */}
                <div className="md:w-[55%] w-full p-8 md:p-14 flex flex-col justify-center relative bg-white">
                    {/* Decorative Accent */}
                    <div className="w-12 h-1 bg-[#6A2B86] mb-6 rounded-full"></div>
                    
                    <h2 className="text-slate-900 text-3xl md:text-5xl font-extrabold mb-5 tracking-tight leading-[1.1]">
                        Master Your <span className="text-[#6A2B86]">Test Scores</span>.
                    </h2>
                    
                    <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium opacity-80">
                        Achieve your target score in IELTS, PTE, or TOEFL with guidance from our certified master trainers.
                    </p>

                    {/* Action Buttons: Matching the new professional style */}
                    <div className="flex flex-wrap gap-4 items-center">
                        <button 
                            onClick={() => navigate('/coaching')}
                            className="bg-[#6A2B86] text-white px-8 py-3.5 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-purple-200 transition-all flex items-center group"
                        >
                            <BookOpenCheck size={18} className="mr-2 opacity-80" />
                            IELTS / PTE Coaching
                            <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button 
                            onClick={() => navigate('/coaching')}
                            className="bg-white border border-slate-200 text-slate-700 px-8 py-3.5 rounded-full text-sm font-bold hover:bg-slate-50 transition-all flex items-center group"
                        >
                            <PlayCircle size={18} className="mr-2 text-[#6A2B86]" />
                            Free Demo Class
                        </button>
                    </div>

                    {/* Trust Factor Label */}
                    <div className="mt-8 flex items-center gap-2 text-slate-400">
                        <div className="flex text-amber-400">
                            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest italic">Top Rated by Students</span>
                    </div>

                    {/* Subtle Watermark */}
                    <span className="absolute bottom-4 right-8 text-[80px] font-black text-slate-50 opacity-[0.04] pointer-events-none select-none uppercase">
                        Coach
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Coaching;