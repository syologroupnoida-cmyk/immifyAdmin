import React from 'react';
import { FaLaptop, FaChalkboardTeacher, FaUserCheck, FaArrowRight, FaPlayCircle } from 'react-icons/fa';

const CoachingPage = () => {
    // Exact cards from the provided image
    const programs = [
        { name: 'IELTS', desc: 'International English', color: 'border-blue-500' },
        { name: 'PTE', desc: 'Test of English Academic', color: 'border-red-500' },
        { name: 'PTE', desc: 'Pearson Test General', color: 'border-orange-400' },
        { name: 'TOEFL', desc: 'Test of English', color: 'border-yellow-500' },
        { name: 'PTE', desc: 'Pearson Test Academic', color: 'border-red-600' },
        { name: 'TOEFL', desc: 'Internet Based Test', color: 'border-yellow-600' },
        { name: 'CELPIP', desc: 'General', color: 'border-purple-500' },
        { name: 'CELPIP', desc: 'LS', color: 'border-purple-400' },
        { name: 'Duolingo', desc: 'English Test', color: 'border-green-500' },
        { name: 'OET', desc: 'Occupational English', color: 'border-blue-400' },
        { name: 'GRE', desc: 'General Test', color: 'border-green-600' },
        { name: 'GMAT', desc: 'Focus Edition', color: 'border-orange-500' },
    ];

    return (
        <div className="w-full bg-[#FDFDFD] font-sans">
            
            {/* --- HERO SECTION (Exact Image Layout) --- */}
            <div className="bg-[#2D3E50] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between border-b-8 border-[#E6412E]">
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-black uppercase leading-tight">
                        Ace Your English Tests <br /> 
                        <span className="text-white">with Immify Programs</span>
                    </h1>
                    <p className="text-gray-300 text-sm max-w-md">
                        The fast track for your overseas goals. Experience our premium coaching with certified trainers and proven results.
                    </p>
                    <button className="bg-[#E6412E] px-8 py-3 font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">
                        Book a Free Demo
                    </button>
                </div>
                <div className="md:w-1/3 mt-10 md:mt-0">
                    <img 
                        src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=400" 
                        alt="Smiling Student" 
                        className="rounded-lg shadow-2xl grayscale-[20%]"
                    />
                </div>
            </div>

            {/* --- POPULAR COACHING PROGRAMS --- */}
            <div className="max-w-7xl mx-auto py-20 px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-gray-800 uppercase tracking-tighter">Popular Coaching Programs</h2>
                    <div className="w-16 h-1 bg-[#E6412E] mx-auto mt-2"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {programs.map((item, index) => (
                        <div key={index} className={`bg-white border border-gray-200 border-t-4 ${item.color} p-5 hover:shadow-xl transition-all cursor-pointer group relative`}>
                            <h3 className="font-black text-xl text-gray-800">{item.name}</h3>
                            <p className="text-[10px] text-gray-400 uppercase mt-1 mb-6">{item.desc}</p>
                            <div className="flex justify-end">
                                <FaArrowRight className="text-gray-300 group-hover:text-[#E6412E] transition-colors" />
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="text-center mt-10">
                    <button className="bg-[#6A2B86] text-white px-10 py-3 text-xs font-bold uppercase tracking-widest rounded-sm">
                        Find the right test for you
                    </button>
                </div>
            </div>

            {/* --- OUR LEARNING MODES (White Card Section) --- */}
            <div className="bg-white border-y border-gray-100 py-20">
                <div className="max-w-5xl mx-auto text-center px-6">
                    <h2 className="text-3xl font-black text-gray-800 uppercase mb-12">Our Learning Modes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="flex flex-col items-center">
                            <FaChalkboardTeacher className="text-4xl text-[#E6412E] mb-4" />
                            <h4 className="font-bold text-gray-800">Expert Trainers</h4>
                            <p className="text-xs text-gray-500 mt-2 px-4 leading-relaxed">Highly qualified faculty with years of experience in test prep.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaLaptop className="text-4xl text-[#E6412E] mb-4" />
                            <h4 className="font-bold text-gray-800">Live Online</h4>
                            <p className="text-xs text-gray-500 mt-2 px-4 leading-relaxed">Flexible virtual classes that fit your schedule perfectly.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaUserCheck className="text-4xl text-[#E6412E] mb-4" />
                            <h4 className="font-bold text-gray-800">One-on-One</h4>
                            <p className="text-xs text-gray-500 mt-2 px-4 leading-relaxed">Dedicated focus sessions for personalized score improvement.</p>
                        </div>
                    </div>
                    <button className="mt-12 bg-[#E6412E] text-white px-10 py-4 font-bold uppercase text-xs tracking-widest shadow-lg">
                        Register Now
                    </button>
                </div>
            </div>

            {/* --- VIDEO SECTION (FAQs & SUCCESS) --- */}
            <div className="bg-[#F4F7F9] py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-black text-center text-gray-800 uppercase mb-10">Why Choose Immify As Your Coaching Partner?</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((v) => (
                            <div key={v} className="bg-white rounded-lg overflow-hidden shadow-md group">
                                <div className="relative h-48">
                                    <img 
                                        src={`https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=300`} 
                                        className="w-full h-full object-cover" 
                                        alt="Video Thumbnail"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                        <FaPlayCircle className="text-white text-5xl opacity-80 group-hover:scale-110 transition-transform cursor-pointer" />
                                    </div>
                                </div>
                                <div className="p-4 text-center">
                                    <p className="font-bold text-gray-700 text-sm italic">"Immify helped me get 8.5 in IELTS!"</p>
                                    <p className="text-[10px] text-gray-400 mt-1 uppercase">- Student Review</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <button className="text-[#6A2B86] font-bold uppercase text-xs border-b-2 border-[#6A2B86] pb-1">
                            Check more success stories
                        </button>
                    </div>
                </div>
            </div>

            {/* --- FINAL CTA --- */}
            <div className="w-full bg-[#6A2B86] py-12 text-center">
                <h3 className="text-white font-bold text-xl uppercase tracking-widest mb-6">Want to improve your test scores?</h3>
                <button className="bg-white text-[#6A2B86] px-12 py-3 font-black uppercase text-xs hover:bg-black hover:text-white transition-all">
                    Talk to our Expert
                </button>
            </div>
        </div>
    );
};

export default CoachingPage;