import React from 'react';
import { FaYoutube, FaInstagram, FaLinkedinIn, FaFacebookF, FaPinterestP, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="w-full bg-[#EEEEEE] text-gray-800 pt-12 pb-6 px-6 md:px-16 font-sans border-t border-gray-200">
            <div className="max-w-[1400px] mx-auto">
                
                {/* --- SECTION 1: Links Grid --- */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b border-gray-300">
                    
                    {/* Column 1: Study Abroad */}
                    <div>
                        <h4 className="font-bold text-[13px] mb-5 uppercase tracking-wider text-black">Study Abroad</h4>
                        <ul className="space-y-2 text-[12px] text-gray-700">
                            <li className="hover:text-[#E6412E] cursor-pointer">Study in USA</li>
                            <li className="hover:text-[#E6412E] cursor-pointer">Study in UK</li>
                            <li className="hover:text-[#E6412E] cursor-pointer">Study in New Zealand</li>
                            <li className="hover:text-[#E6412E] cursor-pointer">Study in Australia</li>
                            <li className="hover:text-[#E6412E] cursor-pointer">Study in Germany</li>
                            <li className="hover:text-[#E6412E] cursor-pointer">Study in Ireland</li>
                            <li className="hover:text-[#E6412E] cursor-pointer">Study in Europe</li>
                            <li className="hover:text-[#E6412E] cursor-pointer">Study in Singapore</li>
                        </ul>
                    </div>

                    {/* Column 2: Popular Courses */}
                    <div>
                        <h4 className="font-bold text-[13px] mb-5 uppercase tracking-wider text-black">Popular Courses</h4>
                        <ul className="space-y-1.5 text-[12px] text-gray-700">
                            <li className="hover:text-[#E6412E] cursor-pointer">MBBS / MSC / PHD</li>
                            <li className="hover:text-[#E6412E] cursor-pointer">Engineering / Polytechnic</li>
                            <li className="hover:text-[#E6412E] cursor-pointer">Computer Science</li>
                            <li className="hover:text-[#E6412E] cursor-pointer">Data Science & AIML</li>
                            <li className="hover:text-[#E6412E] cursor-pointer">MBA / Law</li>
                            <li className="hover:text-[#E6412E] cursor-pointer">Design (Interior & Fashion)</li>
                        </ul>
                    </div>

                    {/* Column 3: Visas & Permits */}
                    <div>
                        <h4 className="font-bold text-[13px] mb-5 uppercase tracking-wider text-black">Visas</h4>
                        <ul className="space-y-1.5 text-[12px] text-gray-700">
                            <li className="hover:text-[#E6412E] cursor-pointer">Study Visas (Global)</li>
                            <li className="hover:text-[#E6412E] cursor-pointer">Tourist Visas (Europe/USA/AUS)</li>
                            <li className="hover:text-[#E6412E] cursor-pointer">Work Permits & Visas</li>
                            <li className="hover:text-[#E6412E] cursor-pointer">Investor Visas (Canada)</li>
                            <li className="hover:text-[#E6412E] cursor-pointer">Start-up & Self Employed</li>
                            <li className="hover:text-[#E6412E] cursor-pointer">Dependant Visas</li>
                        </ul>
                    </div>

                    {/* Column 4: Professional Migration */}
                    <div>
                        <h4 className="font-bold text-[13px] mb-5 uppercase tracking-wider text-black">Professionals</h4>
                        <ul className="space-y-1 text-[11px] text-gray-700">
                            <li className="font-bold text-black border-b border-gray-300 mb-1">Canada & Australia:</li>
                            <li>Software & Mechanical Engineer</li>
                            <li>Electrical & Mining Engineer</li>
                            <li>Doctor / Nursing / Dentist</li>
                            <li>Chartered Accountant</li>
                            <li>Teachers / Lawyers</li>
                            <li>Marketing Manager / Chef</li>
                        </ul>
                    </div>

                    {/* Column 5: Support & Services */}
                    <div>
                        <h4 className="font-bold text-[13px] mb-5 uppercase tracking-wider text-black">Services</h4>
                        <ul className="space-y-2 text-[12px] text-gray-700">
                            <li className="hover:text-[#E6412E] cursor-pointer font-bold text-[#E6412E]">Free Consultation</li>
                            <li className="hover:text-[#E6412E] cursor-pointer">Quick Assistance</li>
                            <li className="hover:text-[#E6412E] cursor-pointer">IELTS Training</li>
                            <li className="hover:text-[#E6412E] cursor-pointer">Post Landing Services</li>
                            <li className="hover:text-[#E6412E] cursor-pointer">Job Assistance</li>
                        </ul>
                    </div>

                    {/* Column 6: Consultants Location */}
                    <div>
                        <h4 className="font-bold text-[13px] mb-5 uppercase tracking-wider text-black">Presence</h4>
                        <div className="text-[11px] text-gray-600 leading-relaxed">
                            <p className="font-semibold text-black mb-1">Domestic:</p>
                            <p>Delhi, Mumbai, Hyderabad, Noida, Gurugram, Bangalore</p>
                            <p className="font-semibold text-black mt-2 mb-1">International:</p>
                            <p>Nigeria, Dubai, Philippines, UK, USA</p>
                            <p className="mt-4 font-bold text-black border-t pt-2">mail@immify.in</p>
                        </div>
                    </div>
                </div>

                {/* --- SECTION 2: Social & Newsletter --- */}
                <div className="flex flex-col lg:flex-row justify-between items-center py-10 gap-8">
                    <div className="flex items-center gap-5">
                        <span className="font-bold text-[12px] uppercase tracking-widest text-black">Follow Us</span>
                        <div className="flex gap-2">
                            {[<FaYoutube />, <FaXTwitter />, <FaInstagram />, <FaLinkedinIn />, <FaFacebookF />, <FaPinterestP />].map((icon, idx) => (
                                <div key={idx} className="w-9 h-9 bg-black text-white flex items-center justify-center rounded hover:bg-[#E6412E] transition-all cursor-pointer">
                                    {icon}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
                        <span className="font-bold text-[12px] uppercase tracking-widest text-black">Subscribe</span>
                        <div className="flex w-full md:w-[450px]">
                            <input type="email" placeholder="Enter your Email" className="flex-1 px-4 py-3 text-[13px] border border-gray-300 focus:outline-none bg-white" />
                            <button className="bg-[#5F6D79] text-white px-8 py-3 text-[13px] font-bold uppercase hover:bg-black transition-all">Submit</button>
                        </div>
                    </div>
                </div>

                {/* --- SECTION 3: Bottom Legal & Extra Links --- */}
                <div className="text-center pt-4 border-t border-gray-300">
                    <div className="flex flex-wrap justify-center gap-6 mb-4 text-[11px] text-gray-600 uppercase tracking-widest">
                        <span className="hover:text-black cursor-pointer">MIGRATE</span>
                        <span className="hover:text-black cursor-pointer">FAQs</span>
                        <span className="hover:text-black cursor-pointer">Careers</span>
                        <span className="hover:text-black cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-black cursor-pointer">Terms & Conditions</span>
                    </div>
                    <p className="text-[11px] text-gray-500 uppercase tracking-widest">
                        © 2026 immify.in - All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;