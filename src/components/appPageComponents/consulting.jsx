import React from 'react';
import contactImg from '../../assets/contact.jpg';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Consulting = () => {
    const navigate = useNavigate();
    const consultantImg = contactImg;

    return (
        <section className="w-full bg-white py-14 px-4 flex justify-center font-sans">
            {/* Main Card: Thin border, no heavy shadows */}
            <div className="max-w-6xl w-full flex flex-col md:flex-row bg-slate-50 rounded-3xl overflow-hidden border border-slate-100">
                
                {/* --- LEFT SIDE: Image Section (45% width) --- */}
                <div className="md:w-[45%] w-full h-[280px] md:h-[400px]">
                    <img 
                        src={consultantImg} 
                        alt="Expert Consulting" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* --- RIGHT SIDE: Elegant Content (55% width) --- */}
                <div className="md:w-[55%] w-full p-8 md:p-14 flex flex-col justify-center relative bg-white">
                    {/* Decorative Element: A small purple accent line */}
                    <div className="w-12 h-1 bg-[#6A2B86] mb-6 rounded-full"></div>
                    
                    <h2 className="text-slate-900 text-3xl md:text-5xl font-extrabold mb-5 tracking-tight leading-[1.1]">
                        Strategic <span className="text-[#6A2B86]">Consulting</span> for Your Global Future.
                    </h2>
                    
                    <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium opacity-80">
                        Expert guidance tailored to your vision. Let's build your path to success together.
                    </p>

                    {/* Simple Professional Buttons */}
                    <div className="flex flex-wrap gap-4 items-center">
                        <button 
                            onClick={() => navigate('/contact')}
                            className="bg-[#6A2B86] text-white px-8 py-3.5 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-purple-200 transition-all flex items-center group"
                        >
                            Book Free Session
                            <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button 
                            onClick={() => navigate('/about')}
                            className="text-slate-700 hover:text-[#6A2B86] px-4 py-3 text-sm font-bold transition-all underline underline-offset-8 decoration-slate-200 hover:decoration-[#6A2B86]"
                        >
                            Why Choose Us?
                        </button>
                    </div>

                    {/* Subtle Background Text (Optional for a design touch) */}
                    <span className="absolute bottom-4 right-8 text-[80px] font-black text-slate-50 opacity-[0.03] pointer-events-none select-none">
                        EXPERT
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Consulting;