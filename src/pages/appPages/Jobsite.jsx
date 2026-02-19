import React from 'react';
import { 
    FaSearch, 
    FaMapMarkerAlt, 
    FaBriefcase, 
    FaBuilding, 
    FaArrowRight, 
    FaFilter, 
    FaFileAlt,
    FaCheckDouble // <--- Yeh missing tha, ab add kar diya hai
} from 'react-icons/fa';

const Jobsite = () => {
    const hotJobs = [
        { title: 'Software Engineer', location: 'Canada', company: 'Tech Solutions Inc.', type: 'Full-Time' },
        { title: 'Registered Nurse', location: 'UK', company: 'NHS Trust', type: 'Contract' },
        { title: 'Civil Engineer', location: 'Australia', company: 'Build-Right Ltd.', type: 'Full-Time' },
        { title: 'Data Scientist', location: 'Germany', company: 'AI Innovations', type: 'Full-Time' },
    ];

    return (
        <div className="w-full bg-[#f4f7f9] font-sans overflow-hidden">
            
            {/* --- HERO SEARCH SECTION --- */}
            <div className="bg-[#2D3E50] py-20 px-6 border-b-8 border-[#E6412E]">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                        Search Your <span className="text-[#E6412E]">International Dream Job</span>
                    </h1>
                    <p className="text-gray-300 mb-10 max-w-2xl mx-auto uppercase text-xs tracking-[0.2em]">
                        Connecting 1 Million+ Professionals to Global Opportunities
                    </p>

                    {/* Search Bar Container */}
                    <div className="bg-white p-4 rounded-sm shadow-2xl flex flex-col md:flex-row gap-4 max-w-5xl mx-auto">
                        <div className="flex-1 flex items-center gap-3 border-b-2 md:border-b-0 md:border-r border-gray-100 px-3">
                            <FaSearch className="text-gray-400" />
                            <input type="text" placeholder="Job Title or Keywords" className="w-full py-2 outline-none text-sm text-gray-700 bg-transparent" />
                        </div>
                        <div className="flex-1 flex items-center gap-3 border-b-2 md:border-b-0 md:border-r border-gray-100 px-3">
                            <FaMapMarkerAlt className="text-gray-400" />
                            <select className="w-full py-2 outline-none text-sm text-gray-500 bg-transparent cursor-pointer">
                                <option>Select Country</option>
                                <option>Canada</option>
                                <option>UK</option>
                                <option>Australia</option>
                            </select>
                        </div>
                        <button className="bg-[#E6412E] text-white px-10 py-4 font-black uppercase tracking-widest hover:bg-black transition-all text-sm">
                            Find Jobs
                        </button>
                    </div>
                </div>
            </div>

            {/* --- FEATURES STRIP --- */}
            <div className="bg-[#6A2B86] py-6 px-6">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10 text-white text-[10px] font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2"><FaCheckDouble className="text-yellow-400" /> Verified Employers</span>
                    <span className="flex items-center gap-2"><FaCheckDouble className="text-yellow-400" /> Expert Resume Writing</span>
                    <span className="flex items-center gap-2"><FaCheckDouble className="text-yellow-400" /> Visa Sponsorship Jobs</span>
                </div>
            </div>

            {/* --- HOT JOBS GRID --- */}
            <div className="max-w-7xl mx-auto py-20 px-6">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-black uppercase text-gray-800 tracking-tighter">Hot Destinations</h2>
                        <div className="w-16 h-1 bg-[#E6412E] mt-2"></div>
                    </div>
                    <button className="text-[#6A2B86] font-bold flex items-center gap-2 text-sm uppercase hover:underline">
                        View All Jobs <FaArrowRight />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {hotJobs.map((job, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center text-xl text-[#6A2B86] group-hover:bg-[#E6412E] group-hover:text-white transition-all">
                                    <FaBuilding />
                                </div>
                                <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full uppercase">{job.type}</span>
                            </div>
                            <h4 className="font-black text-lg text-gray-800 mb-1 leading-tight group-hover:text-[#E6412E]">{job.title}</h4>
                            <p className="text-xs text-gray-400 font-bold mb-4 uppercase">{job.company}</p>
                            <div className="flex items-center gap-2 text-gray-500 text-sm mb-6 border-t pt-4">
                                <FaMapMarkerAlt className="text-[#E6412E]" />
                                <span>{job.location}</span>
                            </div>
                            <button className="w-full border-2 border-[#6A2B86] text-[#6A2B86] py-2 font-bold uppercase text-xs hover:bg-[#6A2B86] hover:text-white transition-all">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- RESUME SERVICES --- */}
            <div className="bg-white py-20 px-6">
                <div className="max-w-5xl mx-auto bg-[#F9FAFB] border border-gray-100 p-12 flex flex-col md:flex-row items-center gap-12 shadow-inner rounded-sm">
                    <div className="text-center md:text-left md:w-2/3">
                        <h2 className="text-3xl font-black text-gray-800 uppercase mb-4 tracking-tighter leading-tight">Make Your Resume <br /> <span className="text-[#6A2B86]">Stand Out Globally</span></h2>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Our resume experts optimize your profile to meet international standards (ATS compliant) for countries like Canada, Australia, and Germany.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-[#E6412E] text-white px-8 py-3 font-bold uppercase text-xs tracking-widest shadow-lg hover:bg-black transition-all">Upload Resume</button>
                            <button className="bg-[#2D3E50] text-white px-8 py-3 font-bold uppercase text-xs tracking-widest shadow-lg hover:bg-[#6A2B86] transition-all">Resume Writing Help</button>
                        </div>
                    </div>
                    <div className="md:w-1/3 flex justify-center">
                        <FaFileAlt className="text-[120px] text-gray-200" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobsite;