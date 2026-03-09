import React, { useState } from 'react';
import { FaGraduationCap, FaBriefcase, FaPlaneDeparture, FaUsers, FaArrowRight, FaCheckCircle, FaCalculator, FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { href, useNavigate } from 'react-router-dom';

const Eligibility = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const Navigate = useNavigate()

    const calculators = [
        { id: 1, title: 'Australia PR', icon: <FaPlaneDeparture />, color: 'bg-blue-600', country: 'Australia', href: "australia-pr" },
        { id: 2, title: 'Canada PR', icon: <FaUsers />, color: 'bg-red-600', country: 'Canada',href: "CanadaPR" },
        { id: 3, title: 'Germany Job Seeker', icon: <FaBriefcase />, color: 'bg-yellow-500', country: 'Germany' },
        { id: 4, title: 'UK Immigration', icon: <FaPlaneDeparture />, color: 'bg-purple-600', country: 'UK' },
        { id: 5, title: 'Saskatchewan SINP', icon: <FaUsers />, color: 'bg-orange-600', country: 'Saskatchewan' },
        { id: 6, title: 'Quebec Immigration', icon: <FaUsers />, color: 'bg-indigo-600', country: 'Quebec' },
    ];

    const benefits = [
        'Check your eligibility for FREE',
        'Get your score instantly',
        'Easy steps to follow',
        'Expert tips to improve your score',
        'Immediate assistance by Immify professionals'
    ];

    const faqs = [
        {
            q: 'What are the advantages of using a points-based system?',
            a: 'Points-based systems provide transparency and clarity in the immigration process. They allow applicants to self-assess their eligibility before applying, saving time and resources. The system is objective and treats all applicants fairly based on predetermined criteria.'
        },
        {
            q: 'What are the general criteria for calculating points?',
            a: 'Common criteria include age, education level, work experience, language proficiency (IELTS/PTE), spouse qualifications, and job offers. Each country has specific weightage for these factors based on their immigration priorities.'
        },
        {
            q: 'How many points do I need for Canada Express Entry?',
            a: 'For Canada Express Entry, you need a minimum of 67 points out of 100 to be eligible to enter the pool. However, the actual CRS (Comprehensive Ranking System) score required for invitation varies with each draw, typically ranging from 470-500 points.'
        },
        {
            q: 'Can I make profile with Express Entry of Canada if I score less than 67 points?',
            a: 'No, you must score at least 67 points on the FSW (Federal Skilled Worker) eligibility criteria to create an Express Entry profile. However, you can improve your score through better language tests, additional education, or work experience.'
        },
        {
            q: 'How many points for Australia eligibility calculation?',
            a: 'For Australia SkillSelect, you need a minimum of 65 points to be eligible to submit an Expression of Interest (EOI). However, competitive occupations may require higher scores (70-85 points) to receive an invitation.'
        },
        {
            q: 'What is the new points-based UK immigration system?',
            a: 'The UK uses a points-based system where applicants must score 70 points to qualify. Points are awarded for job offers (20 points), skill level (20 points), English language ability (10 points), and salary thresholds (20 points). Additional points can be earned through education and other factors.'
        },
        {
            q: 'How many points for UK immigration?',
            a: 'You need a minimum of 70 points to qualify for UK Skilled Worker visa. This includes mandatory requirements like job offer (20 points), appropriate skill level (20 points), and English language proficiency (10 points), plus salary-based points.'
        }
    ];

    return (
        <div className="w-full bg-[#f8f9fa] min-h-screen">
            {/* Red Header Strip */}
            <div className="bg-[#E6412E] text-white py-12 px-4 text-center">
                <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Eligibility Evaluation</h1>
                <p className="mt-3 text-lg opacity-90">Calculate your points and check your chances instantly - FREE & QUICK</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-10 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    
                    {/* --- LEFT: Calculator Grid --- */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b-4 border-[#6A2B86] w-fit pb-2">
                            Immigration Points Calculator
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {calculators.map((calc) => (
                                <div 
                                    key={calc.id} 
                                    className="bg-white p-6 flex items-center justify-between border border-gray-200 group hover:border-[#6A2B86] hover:shadow-xl transition-all cursor-pointer rounded-sm"
                                    onClick={()=> Navigate(calc.href)}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 ${calc.color} text-white flex items-center justify-center text-xl rounded-full`}>
                                            {calc.icon}
                                        </div>
                                        <span className="font-bold text-gray-700 text-base group-hover:text-[#6A2B86] transition-colors">
                                            {calc.title}
                                        </span>
                                    </div>
                                    <FaArrowRight className="text-gray-300 group-hover:text-[#E6412E] group-hover:translate-x-2 transition-all" />
                                </div>
                            ))}
                        </div>

                        {/* Why Choose Section */}
                        <div className="mt-12 bg-white border-l-4 border-[#6A2B86] p-8 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <FaCalculator className="text-[#E6412E]" />
                                Why opt Immify Eligibility Calculator?
                            </h3>
                            <div className="space-y-3">
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <FaCheckCircle className="text-green-600 text-lg shrink-0" />
                                        <span className="text-gray-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Description Text */}
                        <div className="mt-8 bg-gradient-to-r from-purple-50 to-red-50 p-8 rounded-sm border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Immify Eligibility Evaluation</h3>
                            <div className="text-gray-700 leading-relaxed text-sm space-y-4">
                                <p>
                                    When you plan to migrate abroad to work, invest, or settle, you must first determine whether you can apply for a visa to enter that nation. This can help you evaluate whether applying for a visa to migrate to a given nation is worth your time and effort.
                                </p>
                                <p>
                                    Each country has its own set of eligibility criteria. Countries such as Australia, Canada, Saskatchewan, Quebec, the United Kingdom, and Germany use a points-based system to determine whether applicants are eligible to live, work, or study in their country.
                                </p>
                                <p>
                                    Immify helps you decide about moving abroad with our eligibility evaluation process. With an Eligibility Evaluation, we assess your profile against the prevailing visa norms and evaluate your application's chances of success.
                                </p>
                                <div className="bg-white p-4 rounded border-l-4 border-yellow-500 mt-6">
                                    <p className="text-xs text-gray-600 italic">
                                        <strong>Disclaimer:</strong> A quick eligibility check of Immify is only to help the applicants understand their scores. The points displayed are based on your answers only. A technical evaluation is a must to know your accurate scores and eligibility. The Quick eligibility check does not guarantee the points; you may score high or low points once our expert team technically evaluates you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT: Sidebar Form --- */}
                    <div className="bg-white border border-gray-200 h-fit sticky top-10 shadow-sm">
                        <div className="bg-[#6A2B86] text-white p-3 text-center font-bold uppercase tracking-widest text-sm">
                            Talk to an Expert
                        </div>
                        
                        <div className="p-5">
                            <div className="text-center mb-4">
                                <div className="bg-[#E6412E] text-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-2">
                                    <FaStar className="text-2xl" />
                                </div>
                                <p className="text-lg font-black text-gray-800">Your Score</p>
                                <p className="text-4xl font-black text-[#6A2B86] mt-1">00/100</p>
                            </div>

                            <form className="space-y-3 mt-6">
                                <div>
                                    <input type="text" className="w-full border-b-2 border-gray-200 py-2 text-sm outline-none focus:border-[#E6412E] transition-colors" placeholder="Full Name" />
                                </div>
                                <div>
                                    <input type="email" className="w-full border-b-2 border-gray-200 py-2 text-sm outline-none focus:border-[#E6412E] transition-colors" placeholder="Email Address" />
                                </div>
                                <div>
                                    <input type="tel" className="w-full border-b-2 border-gray-200 py-2 text-sm outline-none focus:border-[#E6412E] transition-colors" placeholder="Phone Number" />
                                </div>
                                <div>
                                    <select className="w-full border-b-2 border-gray-200 py-2 text-sm outline-none bg-transparent focus:border-[#E6412E]">
                                        <option>Select Country</option>
                                        <option>Australia</option>
                                        <option>Canada</option>
                                        <option>UK</option>
                                        <option>Germany</option>
                                    </select>
                                </div>
                                
                                <button className="w-full bg-[#E6412E] text-white py-3 text-sm font-black uppercase tracking-tighter hover:bg-black transition-all mt-3">
                                    Get Free Assessment
                                </button>

                                <div className="text-center mt-4 pt-4 border-t border-gray-200">
                                    <p className="text-xs font-bold text-gray-600 mb-1">Call Us Now</p>
                                    <a href="tel:+917670800000" className="text-xl font-black text-[#6A2B86] hover:text-[#E6412E] transition-colors">
                                        +91-7670800000
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

                {/* FAQ Section */}
                <div className="mt-20 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-bold text-gray-800 pr-4">{faq.q}</span>
                                    {openFaq === idx ? (
                                        <FaChevronUp className="text-[#E6412E] shrink-0" />
                                    ) : (
                                        <FaChevronDown className="text-gray-400 shrink-0" />
                                    )}
                                </button>
                                {openFaq === idx && (
                                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Eligibility;