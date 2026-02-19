import React from 'react';
import { FaPlaneDeparture, FaPassport, FaSuitcaseRolling, FaUmbrellaBeach, FaGlobe, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const Visit = () => {
    const destinations = [
        { country: 'USA', type: 'B1/B2 Visa', img: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { country: 'UK', type: 'Standard Visitor', img: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { country: 'Schengen', type: 'Tourist Visa', img: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { country: 'Australia', type: 'Subclass 600', img: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ];

    return (
        <div className="w-full bg-white font-sans text-gray-900">
            
            {/* --- HERO SECTION: Vibrant Travel Theme --- */}
            <div className="bg-[#005B96] text-white py-20 px-6 md:px-20 relative border-b-8 border-[#78B928]">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
                    
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] mb-6 tracking-tighter">
                            Explore The <br /> 
                            <span className="text-[#78B928]">World with Ease</span>
                        </h1>
                        <p className="text-lg opacity-90 max-w-lg mb-8 leading-relaxed">
                            Fast-track your Tourist, Business, or Family visit visa with India's most trusted consultant. 98% Success rate on visitor visa applications.
                        </p>
                        <div className="flex gap-6">
                            <div className="flex items-center gap-2 font-bold uppercase text-xs tracking-widest">
                                <FaCheckCircle className="text-[#78B928]" /> Quick Documentation
                            </div>
                            <div className="flex items-center gap-2 font-bold uppercase text-xs tracking-widest">
                                <FaCheckCircle className="text-[#78B928]" /> Mock Interviews
                            </div>
                        </div>
                    </div>

                    {/* Inquiry Form */}
                    <div className="lg:w-[400px] bg-white rounded-sm shadow-2xl p-8 text-gray-800">
                        <h3 className="text-xl font-black mb-6 text-center text-[#005B96] uppercase italic">Where to next?</h3>
                        <form className="space-y-4">
                            <input type="text" placeholder="Full Name" className="w-full border-b-2 border-gray-100 py-3 focus:border-[#78B928] outline-none text-sm transition-all" />
                            <input type="tel" placeholder="Mobile Number" className="w-full border-b-2 border-gray-100 py-3 focus:border-[#78B928] outline-none text-sm transition-all" />
                            <select className="w-full border-b-2 border-gray-100 py-3 focus:border-[#78B928] outline-none bg-transparent text-sm text-gray-400">
                                <option>Target Destination</option>
                                <option>USA / UK</option>
                                <option>Europe (Schengen)</option>
                                <option>Dubai / Singapore</option>
                            </select>
                            <button className="w-full bg-[#78B928] text-white font-black py-4 mt-4 uppercase tracking-widest hover:bg-black transition-all shadow-lg">
                                Start Application
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* --- POPULAR DESTINATIONS GRID --- */}
            <div className="max-w-7xl mx-auto py-20 px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-black uppercase text-gray-800 tracking-tighter italic">Top Travel Destinations</h2>
                    <div className="w-20 h-1 bg-[#005B96] mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {destinations.map((dest, i) => (
                        <div key={i} className="group relative h-80 overflow-hidden cursor-pointer shadow-lg rounded-sm">
                            <img src={dest.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={dest.country} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#78B928] mb-1">{dest.type}</p>
                                <h4 className="text-2xl font-black uppercase tracking-tighter">{dest.country}</h4>
                            </div>
                            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                <FaArrowRight className="text-white" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- SERVICES LISTING (Modern Layout) --- */}
            <div className="bg-gray-50 py-24 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: 'Tourist Visa', icon: <FaUmbrellaBeach />, desc: 'For leisure and sightseeing travel.' },
                                { title: 'Business Visa', icon: <FaSuitcaseRolling />, desc: 'For meetings and conferences.' },
                                { title: 'Family Visit', icon: <FaPassport />, desc: 'To visit relatives and friends.' },
                                { title: 'Travel Insurance', icon: <FaGlobe />, desc: 'Comprehensive safety for your trip.' },
                            ].map((service, i) => (
                                <div key={i} className="bg-white p-8 border-l-4 border-[#005B96] hover:shadow-xl transition-all">
                                    <div className="text-2xl text-[#78B928] mb-4">{service.icon}</div>
                                    <h4 className="font-black uppercase text-sm mb-2">{service.title}</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-black uppercase text-gray-800 mb-6 leading-tight">Expert Travel <br /> <span className="text-[#005B96]">Visa Assistance</span></h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Planning a holiday or a business trip? Our experts ensure your visa application is flawless. We handle everything from document checklists to embassy interview coaching.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                <FaCheckCircle className="text-[#78B928]" /> End-to-end Documentation Support
                            </li>
                            <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                <FaCheckCircle className="text-[#78B928]" /> Precise Financial Guidance
                            </li>
                            <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                <FaCheckCircle className="text-[#78B928]" /> Fast Application Processing
                            </li>
                        </ul>
                        <button className="bg-[#005B96] text-white px-10 py-4 font-black uppercase text-xs tracking-[0.2em] hover:bg-black transition-all">
                            Get A Free Quote
                        </button>
                    </div>
                </div>
            </div>

            {/* --- FINAL CTA --- */}
            <div className="w-full bg-[#2D3E50] py-16 px-6 text-center text-white">
                <FaPlaneDeparture className="text-5xl mx-auto mb-6 text-[#78B928]" />
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">The World is Waiting for You</h3>
                <p className="text-gray-400 mb-10 uppercase text-xs tracking-widest">Start your hassle-free visa process today</p>
                <button className="bg-[#78B928] text-white px-12 py-4 font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl">
                    Apply Now
                </button>
            </div>
        </div>
    );
};

export default Visit;