import React from 'react';
import { Link } from 'react-router-dom';

const testimonials = [
    {
        id: 1,
        name: 'Urvashi Sharma',
        visa: 'Canada PR',
        description: 'Urvashi Sharma was impressed a lot with Immify services and got Canada PR',
        videoThumb: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop',
    },
    {
        id: 2,
        name: 'Varun Mathur',
        visa: 'Australia PR',
        description: 'Varun Mathur, Australia PR Visa. Very much satisfied with the process...',
        videoThumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop',
    },
    {
        id: 3,
        name: 'Anisha Naidu',
        visa: 'USA Visit',
        description: 'Immify is the best immigration consultant for her USA visit visa grant.',
        videoThumb: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&auto=format&fit=crop',
    },
];

const Testimonials = () => {
    return (
        <section className="w-full bg-white py-16 px-4 md:px-20">
            <div className="max-w-7xl mx-auto text-center">
                {/* Header Section */}
                <h2 className="text-4xl font-black text-gray-900 mb-2 uppercase tracking-tighter">
                    Looking for inspiration
                </h2>
                <p className="text-gray-600 font-medium mb-12">
                    Explore what Global Indians say about Immify...
                </p>

                {/* Testimonials Grid/Carousel Area */}
                <div className="relative group">
                    {/* Navigation Arrows (Simplified) */}
                    <button className="absolute left-[-50px] top-1/2 -translate-y-1/2 text-5xl font-light text-gray-400 hover:text-black hidden lg:block">‹</button>
                    <button className="absolute right-[-50px] top-1/2 -translate-y-1/2 text-5xl font-light text-gray-400 hover:text-black hidden lg:block">›</button>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t) => (
                            <div key={t.id} className="flex flex-col text-left">
                                {/* Black Video Card */}
                                <div className="relative bg-black aspect-video rounded-xl overflow-hidden shadow-xl mb-4 group/video">
                                    <img 
                                        src={t.videoThumb} 
                                        alt={t.name} 
                                        className="w-full h-full object-cover opacity-60 group-hover/video:scale-105 transition-transform duration-500" 
                                    />
                                    
                                    {/* Purple Floating Label */}
                                    <div className="absolute top-1/2 right-0 -translate-y-1/2 bg-[#6A2B86] text-white p-3 pr-8 pl-4 rounded-l-full flex items-center gap-3 z-10 shadow-lg">
                                        <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden flex-shrink-0">
                                            <img src={t.videoThumb} alt="mini" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="text-[10px] leading-tight font-bold">
                                            <p className="uppercase opacity-70">Immify Testimonial</p>
                                            <p>{t.name} | {t.visa}</p>
                                        </div>
                                    </div>

                                    {/* Play Button Icon */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:bg-red-700 transition-colors">
                                            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[15px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                                        </div>
                                    </div>

                                    {/* Red Side Accent (Seen in Screenshot) */}
                                    <div className="absolute right-0 top-1/4 w-1.5 h-16 bg-[#E6412E]"></div>
                                </div>

                                {/* Content Below Card */}
                                <div className="px-1">
                                    <h3 className="text-xl font-black text-gray-900 border-b-2 border-[#E6412E] w-fit mb-2">{t.name}</h3>
                                    <p className="text-gray-800 font-bold text-sm mb-1">{t.visa}</p>
                                    <p className="text-gray-600 text-[14px] leading-snug line-clamp-2">
                                        {t.description}
                                    </p>
                                    <button className="text-[#E6412E] text-sm font-bold mt-2 hover:underline decoration-2">Read More...</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View All Button */}
                <div className="mt-16">
                    <Link to="/testimonials" className="bg-[#E6412E] text-white px-10 py-4 font-black uppercase tracking-widest text-sm hover:bg-red-700 transition-all shadow-lg shadow-red-200">
                        View all testimonials
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;