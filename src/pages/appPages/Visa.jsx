import React, { useState } from 'react';
import { FaPassport, FaSuitcaseRolling, FaUserTie, FaGraduationCap, FaPlayCircle, FaArrowRight, FaGlobe, FaCheckDouble, FaShieldAlt, FaLightbulb, FaCheckCircle, FaChevronDown, FaChevronUp, FaClock, FaDollarSign, FaFileAlt } from 'react-icons/fa';

const Visa = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const [acceptTerms, setAcceptTerms] = useState(false);

    const visaBenefits = [
        { icon: <FaShieldAlt />, title: '100% Success Rate', desc: 'Expert guidance ensures highest approval rates' },
        { icon: <FaClock />, title: 'Fast Processing', desc: 'Quick and efficient visa application handling' },
        { icon: <FaFileAlt />, title: 'Document Support', desc: 'Complete assistance with paperwork' },
        { icon: <FaCheckCircle />, title: 'End-to-End Service', desc: 'From consultation to visa approval' },
    ];

    const visaCategories = [
        { 
            title: 'Study Visa', 
            desc: 'Secure your admission and visa for top global universities', 
            icon: <FaGraduationCap />, 
            color: 'bg-blue-600',
            countries: ['USA', 'UK', 'Canada', 'Australia']
        },
        { 
            title: 'Work Visa', 
            desc: 'Expert guidance for skilled worker permits and job search', 
            icon: <FaUserTie />, 
            color: 'bg-red-600',
            countries: ['Canada', 'Germany', 'UK', 'UAE']
        },
        { 
            title: 'PR Visa', 
            desc: 'Comprehensive support for Permanent Residency applications', 
            icon: <FaPassport />, 
            color: 'bg-purple-600',
            countries: ['Canada', 'Australia', 'New Zealand']
        },
        { 
            title: 'Visit Visa', 
            desc: 'Quick and hassle-free processing for tourist & family visits', 
            icon: <FaSuitcaseRolling />, 
            color: 'bg-yellow-600',
            countries: ['USA', 'UK', 'Schengen', 'Australia']
        },
        { 
            title: 'Business Visa', 
            desc: 'Strategic visa solutions for international entrepreneurs', 
            icon: <FaGlobe />, 
            color: 'bg-green-600',
            countries: ['USA', 'UK', 'Dubai', 'Singapore']
        },
        { 
            title: 'Visa Assessment', 
            desc: 'Analyze your profile for maximum success chances', 
            icon: <FaCheckDouble />, 
            color: 'bg-blue-800',
            countries: ['All Countries']
        },
    ];

    const visaProcess = [
        { step: '1', title: 'Initial Consultation', desc: 'Free assessment of your profile and visa options' },
        { step: '2', title: 'Documentation', desc: 'Gather and prepare all required documents' },
        { step: '3', title: 'Application Filing', desc: 'Submit application with expert guidance' },
        { step: '4', title: 'Interview Preparation', desc: 'Mock interviews and preparation support' },
        { step: '5', title: 'Visa Approval', desc: 'Track status and receive your visa' },
    ];

    const countryVisas = [
        { country: 'Canada', visas: ['Study Permit', 'Work Permit', 'PR Visa', 'Visit Visa'], color: 'bg-red-500' },
        { country: 'Australia', visas: ['Student Visa', 'Work Visa', 'PR Visa', 'Tourist Visa'], color: 'bg-blue-600' },
        { country: 'USA', visas: ['F-1 Visa', 'H-1B Visa', 'B1/B2 Visa', 'Green Card'], color: 'bg-blue-800' },
        { country: 'UK', visas: ['Student Visa', 'Skilled Worker', 'Visit Visa', 'BNO Visa'], color: 'bg-purple-600' },
        { country: 'Germany', visas: ['Student Visa', 'Job Seeker', 'Blue Card', 'Tourist Visa'], color: 'bg-yellow-600' },
        { country: 'UAE', visas: ['Work Permit', 'Golden Visa', 'Tourist Visa', 'Business Visa'], color: 'bg-green-600' },
    ];

    const faqs = [
        { q: 'What documents are required for visa application?', a: 'Common documents include valid passport, photographs, financial documents, invitation letters (if applicable), travel itinerary, proof of accommodation, education/work certificates, and visa application forms. Specific requirements vary by visa type and country.' },
        { q: 'How long does the visa process take?', a: 'Processing time varies: Study visas (4-12 weeks), Work visas (4-16 weeks), PR visas (6-18 months), Visit visas (2-4 weeks), Business visas (2-8 weeks). Timeline depends on country, visa type, and application completeness.' },
        { q: 'What is the visa application fee?', a: 'Fees vary by country and visa type: USA ($160-$265), UK (£95-£610), Canada (CAD 150-1,325), Australia (AUD 620-4,045), Germany (€75-100), UAE (AED 300-1,000). Additional service fees may apply.' },
        { q: 'Can I apply for a visa without a job offer?', a: 'Depends on visa type. Most work visas require job offers. However, some countries offer job seeker visas (Germany Opportunity Card, Portugal Job Seeker). PR pathways like Canada Express Entry and Australia SkillSelect don\'t require job offers initially.' },
        { q: 'What if my visa application is rejected?', a: 'We analyze rejection reasons and advise on next steps. Options include: reapplying with stronger documentation, appealing the decision (if allowed), or exploring alternative visa categories. Our high success rate minimizes rejection risks.' },
        { q: 'Do I need to appear for a visa interview?', a: 'Interview requirements vary by country. USA requires interviews for most visas. UK, Canada, and Australia may request interviews based on application. We provide comprehensive interview preparation including mock sessions.' },
        { q: 'Can I extend my visa after arrival?', a: 'Most countries allow visa extensions if you meet eligibility criteria. Study and work visas can typically be extended. Visit visas have limited extension options. Extension processes vary by country and must be initiated before current visa expires.' },
        { q: 'What is the difference between visa and immigration?', a: 'A visa is temporary permission to enter a country for specific purpose (study, work, visit). Immigration refers to moving permanently to another country, usually through PR visa or citizenship. Visa is often the first step toward immigration.' },
        { q: 'Can family members accompany me on my visa?', a: 'Most long-term visas (study, work, PR) allow dependent family members. Spouse and children can usually accompany you. Requirements include proof of relationship, financial capacity, and dependent visa applications. Rules vary by country.' },
        { q: 'How can Immify help with my visa application?', a: 'We provide end-to-end support: free consultation, eligibility assessment, document preparation, application filing, interview preparation, status tracking, and post-landing support. Our expert counselors have helped 1M+ clients achieve visa success.' },
    ];

    return (
        <div className="w-full bg-white font-sans text-gray-800">
            
            {/* --- HERO SECTION WITH FORM --- */}
            <div className="bg-gradient-to-br from-[#2D3E50] via-[#3a4f66] to-[#2D3E50] text-white py-16 px-6 md:px-20 relative overflow-hidden border-b-8 border-[#E6412E]">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E6412E] rounded-full blur-3xl"></div>
                </div>
                
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                    {/* Text Area */}
                    <div className="lg:w-1/2">
                        <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 text-sm font-bold">
                            ✈️ Expert Visa Assistance Services
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                            Get Your Visa<br /> 
                            <span className="text-yellow-300">Approved with Confidence</span>
                        </h1>
                        <p className="text-lg opacity-90 max-w-lg mb-8">
                            India's No.1 Overseas Career Consultant. We provide personal one-on-one counseling for migration, study, work, and visit visas.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                                <div className="text-3xl font-black text-yellow-300">1M+</div>
                                <div className="text-sm opacity-80">Successful Visas</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                                <div className="text-3xl font-black text-yellow-300">50+</div>
                                <div className="text-sm opacity-80">Global Offices</div>
                            </div>
                        </div>

                        <button className="bg-white text-[#2D3E50] px-8 py-4 rounded-lg font-black hover:bg-yellow-300 transition-all shadow-lg">
                            Check Visa Eligibility →
                        </button>
                    </div>

                    {/* Sidebar Form */}
                    <div className="lg:w-[420px] bg-white rounded-2xl shadow-2xl p-8 text-gray-800">
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-black mb-2">Get Free Consultation</h3>
                            <p className="text-sm text-gray-500">Expert guidance for your visa journey</p>
                        </div>
                        
                        <div className="space-y-4">
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-[#E6412E] outline-none transition-all" 
                            />
                            <input 
                                type="email" 
                                placeholder="Email ID" 
                                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-[#E6412E] outline-none transition-all" 
                            />
                            
                            <div className="flex gap-2">
                                <select className="w-24 border-2 border-gray-200 rounded-lg px-2 py-3 outline-none bg-white">
                                    <option>🇮🇳 +91</option>
                                    <option>🇺🇸 +1</option>
                                    <option>🇬🇧 +44</option>
                                </select>
                                <input 
                                    type="tel" 
                                    placeholder="Mobile Number" 
                                    className="flex-1 border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-[#E6412E] outline-none transition-all" 
                                />
                            </div>

                            <div className="flex items-center gap-2 text-sm">
                                <input 
                                    type="checkbox" 
                                    checked={acceptTerms}
                                    onChange={(e) => setAcceptTerms(e.target.checked)}
                                    className="w-4 h-4"
                                />
                                <label className="text-gray-600">Use this as WhatsApp number</label>
                            </div>

                            <select className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 outline-none bg-white focus:border-[#E6412E]">
                                <option>Select Visa Type</option>
                                <option>Study Visa</option>
                                <option>Work Visa</option>
                                <option>PR Visa</option>
                                <option>Visit Visa</option>
                                <option>Business Visa</option>
                            </select>

                            <select className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 outline-none bg-white focus:border-[#E6412E]">
                                <option>Select Destination Country</option>
                                <option>🇨🇦 Canada</option>
                                <option>🇦🇺 Australia</option>
                                <option>🇬🇧 United Kingdom</option>
                                <option>🇺🇸 USA</option>
                                <option>🇩🇪 Germany</option>
                                <option>🇦🇪 UAE</option>
                            </select>

                            <div className="flex items-start gap-2 text-xs text-gray-500">
                                <input type="checkbox" className="mt-1" />
                                <label>I accept the <span className="text-[#E6412E] underline cursor-pointer">Terms & Conditions</span></label>
                            </div>
                            
                            <button className="w-full bg-[#E6412E] text-white font-black py-4 rounded-lg uppercase tracking-wider hover:bg-black transition-all shadow-lg">
                                Get Free Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- WHY CHOOSE US --- */}
            <div className="max-w-7xl mx-auto py-20 px-6">
                <div className="text-center mb-16">
                    <div className="inline-block bg-yellow-100 px-4 py-2 rounded-full mb-4">
                        <FaLightbulb className="inline mr-2 text-yellow-600" />
                        <span className="font-bold text-sm text-gray-700">Why Choose Immify?</span>
                    </div>
                    <h2 className="text-4xl font-black mb-4">Your Trusted Visa Partner</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">With over 1 million successful visa applications, we ensure the highest approval rates through expert guidance and personalized support.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {visaBenefits.map((benefit, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-xl hover:border-[#2D3E50] transition-all">
                            <div className="w-14 h-14 bg-[#E6412E] text-white rounded-full flex items-center justify-center text-2xl mb-4">
                                {benefit.icon}
                            </div>
                            <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                            <p className="text-sm text-gray-600">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- VISA CATEGORIES --- */}
            <div className="bg-gray-50 py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">Our Visa Expertise</h2>
                        <div className="w-20 h-1 bg-[#E6412E] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {visaCategories.map((visa, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all group cursor-pointer">
                                <div className={`w-14 h-14 ${visa.color} rounded-lg flex items-center justify-center text-white text-2xl mb-4`}>
                                    {visa.icon}
                                </div>
                                <h4 className="font-bold text-xl mb-3 group-hover:text-[#E6412E]">{visa.title}</h4>
                                <p className="text-sm text-gray-600 mb-4">{visa.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {visa.countries.map((country, i) => (
                                        <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">{country}</span>
                                    ))}
                                </div>
                                <button className="mt-4 text-[#E6412E] font-bold text-sm hover:underline flex items-center gap-2">
                                    Learn More <FaArrowRight />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- VISA PROCESS --- */}
            <div className="max-w-7xl mx-auto py-20 px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black mb-4">Visa Application Process</h2>
                    <p className="text-gray-600">Simple 5-step process to get your visa approved</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {visaProcess.map((process, i) => (
                        <div key={i} className="text-center relative">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#E6412E] to-[#ff5542] rounded-full flex items-center justify-center text-2xl text-white font-black mb-4 mx-auto hover:scale-110 transition-transform border-4 border-red-100">
                                {process.step}
                            </div>
                            <h5 className="font-bold text-sm mb-2">{process.title}</h5>
                            <p className="text-xs text-gray-600">{process.desc}</p>
                            {i < visaProcess.length - 1 && (
                                <div className="hidden lg:block absolute top-8 -right-3 w-6 h-0.5 bg-gray-300"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* --- COUNTRY-WISE VISAS --- */}
            <div className="bg-gradient-to-br from-[#2D3E50] to-[#1a252f] text-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">Visa Services by Country</h2>
                        <p className="text-white/80">We handle all types of visas for top destinations</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {countryVisas.map((data, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl hover:bg-white/20 transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-12 h-12 ${data.color} rounded-lg flex items-center justify-center text-white text-2xl font-bold`}>
                                        {data.country[0]}
                                    </div>
                                    <h4 className="text-2xl font-black text-yellow-300">{data.country}</h4>
                                </div>
                                <div className="space-y-2">
                                    {data.visas.map((visa, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm">
                                            <FaCheckCircle className="text-green-400 shrink-0" />
                                            <span>{visa}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- CTA SECTION --- */}
            <div className="bg-gradient-to-r from-[#E6412E] to-[#ff5542] py-16 px-6 text-center text-white">
                <h2 className="text-4xl font-black mb-4">Not Sure Which Visa to Apply?</h2>
                <p className="text-lg mb-8 opacity-90">Get personalized visa recommendations based on your profile</p>
                <button className="bg-white text-[#E6412E] px-12 py-4 rounded-lg font-black hover:bg-yellow-300 hover:scale-105 transition-all shadow-2xl">
                    Get Free Assessment →
                </button>
            </div>

            {/* --- TESTIMONIALS --- */}
            <div className="max-w-7xl mx-auto py-24 px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black mb-4">Success Stories</h2>
                    <p className="text-gray-600">Explore what our clients say about Immify visa services</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { name: 'Urvashi Sharma', visa: 'Canada PR Visa', img: 'photo-1494790108377-be9c29b29330' },
                        { name: 'Varun Mathur', visa: 'Australia PR Visa', img: 'photo-1507003211169-0a1dd7228f2d' },
                        { name: 'Anisha Naidu', visa: 'USA Visit Visa', img: 'photo-1573496359142-b8d87734a5a2' }
                    ].map((client, i) => (
                        <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all group">
                            <div className="relative h-56 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                                <img src={`https://images.unsplash.com/${client.img}?q=80&w=400`} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" alt={client.name} />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <FaPlayCircle className="text-6xl text-white cursor-pointer hover:scale-110 transition-transform drop-shadow-lg" />
                                </div>
                            </div>
                            <div className="p-6">
                                <h4 className="font-black text-xl mb-1">{client.name}</h4>
                                <p className="text-xs font-bold text-[#E6412E] uppercase mb-4">{client.visa}</p>
                                <p className="text-sm text-gray-600 mb-4">"Immify made my visa process smooth and stress-free. Their team guided me at every step with professionalism and expertise."</p>
                                <button className="text-[#2D3E50] text-sm font-bold hover:underline">Read Full Story →</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- FAQ SECTION --- */}
            <div className="bg-gray-50 py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-black mb-4">Frequently Asked Questions</h2>
                        <div className="w-20 h-1 bg-[#E6412E] mx-auto"></div>
                    </div>

                    <div className="space-y-3">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#2D3E50] transition-all">
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-bold text-gray-800 pr-4">{faq.q}</span>
                                    {openFaq === idx ? (
                                        <FaChevronUp className="text-[#E6412E] shrink-0" />
                                    ) : (
                                        <FaChevronDown className="text-gray-400 shrink-0" />
                                    )}
                                </button>
                                {openFaq === idx && (
                                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- FINAL CTA --- */}
            <div className="bg-[#2D3E50] py-16 px-6 text-center text-white">
                <h3 className="text-3xl font-black mb-4 tracking-tight">Ready to Start Your Visa Application?</h3>
                <p className="text-lg mb-8 opacity-90">Get expert guidance from Immify - India's most trusted visa consultant</p>
                <button className="bg-[#E6412E] text-white px-12 py-4 rounded-lg font-black hover:bg-white hover:text-[#E6412E] transition-all shadow-2xl">
                    Book Consultation Now
                </button>
            </div>
        </div>
    );
};

export default Visa;