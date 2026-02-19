import React from 'react';
import { useNavigate } from 'react-router-dom';

const ForStudents = () => {
    const navigate = useNavigate();

    const visaCountries = [
        { 
            name: 'CANADA', 
            img: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop',
            visas: ['PR Visa', 'Work Visa', 'Student Visa', 'Express Entry', 'PNP', 'Business Visa']
        },
        { 
            name: 'AUSTRALIA', 
            img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1000&auto=format&fit=crop',
            visas: ['Skilled Visa', 'Work Visa', 'Student Visa', 'PR Visa', 'Visitor Visa']
        },
        { 
            name: 'GERMANY', 
            img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1000&auto=format&fit=crop',
            visas: ['Job Seeker', 'Student Visa', 'EU Blue Card', 'Work Visa', 'Training Visa']
        },
        { 
            name: 'USA', 
            img: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1000&auto=format&fit=crop',
            visas: ['H1-B Visa', 'F1 Student', 'L1 Visa', 'Green Card', 'B1/B2 Visa']
        },
        { 
            name: 'UK', 
            img: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=1000&auto=format&fit=crop',
            visas: ['Skilled Worker', 'Student Visa', 'Innovator Visa', 'HPI Visa']
        },
        { 
            name: 'UAE', 
            img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop',
            visas: ['Golden Visa', 'Green Visa', 'Work Permit', 'Freelance Visa']
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    
                    {/* LEFT SIDE: Heading */}
                    <div className="lg:w-1/4 flex flex-col justify-center">
                        <div className="w-16 h-1.5 bg-[#E6412E] mb-6"></div>
                        <h2 className="text-5xl font-black text-black leading-[1.1] mb-6 uppercase tracking-tighter">
                            Popular <br /> Visa
                        </h2>
                        <p className="text-lg text-gray-600 font-medium mb-10 leading-relaxed">
                            <span className="text-[#E6412E] font-bold text-xl">Immify</span> offers expert guidance that increases your chances of visa success.
                        </p>
                        <button 
                            onClick={() => navigate('/buy-leads')}
                            className="border-2 border-black text-black px-8 py-3 font-black hover:bg-black hover:text-white transition-all uppercase tracking-widest text-sm"
                        >
                            Buy leads
                        </button>
                    </div>

                    {/* RIGHT SIDE: Flipping Cards */}
                    <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {visaCountries.map((country) => (
                            <div key={country.name} className="group h-[320px] [perspective:1000px] cursor-pointer">
                                <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    
                                    {/* FRONT SIDE */}
                                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden shadow-md">
                                        <img src={country.img} alt={country.name} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/40"></div>
                                        <div className="absolute inset-0 p-8 flex flex-col">
                                            <h3 className="text-white font-black text-2xl uppercase tracking-wider">{country.name}</h3>
                                            <div className="w-10 h-1 bg-[#E6412E] mt-4"></div>
                                        </div>
                                    </div>

                                    {/* BACK SIDE */}
                                    <div className="absolute inset-0 w-full h-full bg-white p-8 text-black rounded-lg shadow-xl border border-gray-100 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col">
                                        <h3 className="text-[#E6412E] font-black text-xl mb-4 uppercase border-b pb-2">{country.name}</h3>
                                        <ul className="space-y-2 overflow-y-auto flex-1">
                                            {country.visas.map((visa) => (
                                                <li key={visa} className="text-[14px] font-bold text-gray-700 flex items-center gap-2">
                                                    <span className="text-[#E6412E]">›</span> {visa}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-4 pt-4 border-t border-gray-50">
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Apply with Immify</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ForStudents;