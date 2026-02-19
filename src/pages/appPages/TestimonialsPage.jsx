import React from 'react';
import { Link } from 'react-router-dom';

const allTestimonials = [
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
    {
        id: 4,
        name: 'Rajesh Kumar',
        visa: 'UK Work Permit',
        description: 'A seamless experience from start to finish. The team at Immify is knowledgeable and professional.',
        videoThumb: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop',
    },
    {
        id: 5,
        name: 'Priya Patel',
        visa: 'Student Visa - Canada',
        description: 'I was guided at every step of my student visa application. Highly recommended for students.',
        videoThumb: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=500&auto=format&fit=crop',
    },
    {
        id: 6,
        name: 'Mohammed Khan',
        visa: 'Family Sponsorship',
        description: 'They handled my family\'s sponsorship case with utmost care and transparency. Thank you, Immify!',
        videoThumb: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop',
    },
];

const TestimonialsPage = () => {
    return (
        <section className="w-full bg-white py-16 px-4 md:px-20">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-black text-gray-900 mb-2 uppercase tracking-tighter">
                    Our Testimonials
                </h2>
                <p className="text-gray-600 font-medium mb-12">
                    See what our clients have to say about us.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allTestimonials.map((t) => (
                        <div key={t.id} className="flex flex-col text-left">
                            <div className="relative bg-black aspect-video rounded-xl overflow-hidden shadow-xl mb-4 group/video">
                                <img 
                                    src={t.videoThumb} 
                                    alt={t.name} 
                                    className="w-full h-full object-cover opacity-60 group-hover/video:scale-105 transition-transform duration-500" 
                                />
                                
                                <div className="absolute top-1/2 right-0 -translate-y-1/2 bg-[#6A2B86] text-white p-3 pr-8 pl-4 rounded-l-full flex items-center gap-3 z-10 shadow-lg">
                                    <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden flex-shrink-0">
                                        <img src={t.videoThumb} alt="mini" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="text-[10px] leading-tight font-bold">
                                        <p className="uppercase opacity-70">Immify Testimonial</p>
                                        <p>{t.name} | {t.visa}</p>
                                    </div>
                                </div>

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:bg-red-700 transition-colors">
                                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[15px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                                    </div>
                                </div>

                                <div className="absolute right-0 top-1/4 w-1.5 h-16 bg-[#E6412E]"></div>
                            </div>

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
                <div className="mt-16">
                    <Link to="/" className="text-blue-600 font-semibold hover:underline">
                        &larr; Back to Home
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsPage;
