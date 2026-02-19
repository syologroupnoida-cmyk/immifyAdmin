import React from 'react';
import aboutImg from '../../assets/about.jpg';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Globe, MapPin } from 'lucide-react';

const Migrate = () => {
    const navigate = useNavigate();
    const migrateImg = aboutImg;

    return (
        <section className="w-full bg-white py-14 px-4 flex justify-center font-sans">
            {/* Main Card: Rounded-3xl and subtle border to match Consulting */}
            <div className="max-w-6xl w-full flex flex-col md:flex-row bg-slate-50 rounded-3xl overflow-hidden border border-slate-100">
                
                {/* --- LEFT SIDE: Elegant Content (55% width) --- */}
                {/* Note: Consulting mein image left thi, yahan order-2 use karke text ko left laya gaya hai */}
                <div className="md:w-[55%] w-full p-8 md:p-14 flex flex-col justify-center relative bg-white order-2 md:order-1">
                    {/* Decorative Element: Signature Purple accent line */}
                    <div className="w-12 h-1 bg-[#6A2B86] mb-6 rounded-full"></div>
                    
                    <h2 className="text-slate-900 text-3xl md:text-5xl font-extrabold mb-5 tracking-tight leading-[1.1]">
                        Global <span className="text-[#6A2B86]">Migration</span> Made Simple.
                    </h2>
                    
                    <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium opacity-80">
                        Join millions of successful immigrants with our personalized and reliable migration pathways.
                    </p>

                    {/* Country Action Buttons: Modern Pill Style */}
                    <div className="flex flex-wrap gap-4 items-center">
                        <button 
                            onClick={() => navigate('/migrate')}
                            className="bg-[#6A2B86] text-white px-8 py-3.5 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-purple-200 transition-all flex items-center group"
                        >
                            <Globe size={18} className="mr-2 opacity-80" />
                            Canada
                            <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button 
                            onClick={() => navigate('/migrate')}
                            className="bg-white border border-slate-200 text-slate-700 px-8 py-3.5 rounded-full text-sm font-bold hover:bg-slate-50 transition-all flex items-center group"
                        >
                            <MapPin size={18} className="mr-2 text-[#6A2B86]" />
                            Australia
                        </button>
                    </div>

                    {/* Subtle Background Watermark */}
                    <span className="absolute bottom-4 right-8 text-[80px] font-black text-slate-50 opacity-[0.04] pointer-events-none select-none uppercase">
                        Migrate
                    </span>
                </div>

                {/* --- RIGHT SIDE: Image Section (45% width) --- */}
                <div className="md:w-[45%] w-full h-[280px] md:h-[400px] order-1 md:order-2">
                    <img 
                        src={migrateImg} 
                        alt="Global Migration" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Migrate;