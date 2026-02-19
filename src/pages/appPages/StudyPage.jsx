import React, { useState } from 'react';
import { FaGraduationCap, FaUniversity, FaBookOpen, FaGlobe, FaPlayCircle, FaArrowRight, FaDollarSign, FaClock, FaChartLine, FaShieldAlt, FaCheckCircle, FaLightbulb, FaChevronDown, FaChevronUp, FaPassport, FaBook, FaCertificate } from 'react-icons/fa';

const StudyPage = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const [acceptTerms, setAcceptTerms] = useState(false);

    const studyBenefits = [
        { icon: <FaGraduationCap />, title: 'World-Class Education', desc: 'Access to top-ranked universities globally' },
        { icon: <FaCertificate />, title: 'Globally Recognized Degrees', desc: 'Qualifications valued worldwide' },
        { icon: <FaShieldAlt />, title: 'Post-Study Work Rights', desc: 'Work opportunities after graduation' },
        { icon: <FaGlobe />, title: 'Cultural Experience', desc: 'Broaden horizons with global exposure' },
    ];

    const studyDestinations = [
        { country: 'USA', flag: '🇺🇸', desc: 'Home to Ivy League & top tech schools', color: 'bg-blue-700', unis: '4,000+' },
        { country: 'UK', flag: '🇬🇧', desc: 'World-class education & history', color: 'bg-red-600', unis: '160+' },
        { country: 'Canada', flag: '🇨🇦', desc: 'Quality education & easy PR path', color: 'bg-red-500', unis: '100+' },
        { country: 'Australia', flag: '🇦🇺', desc: 'High living standards & research', color: 'bg-blue-800', unis: '43+' },
        { country: 'Germany', flag: '🇩🇪', desc: 'Free/Low tuition & strong economy', color: 'bg-yellow-600', unis: '400+' },
        { country: 'Ireland', flag: '🇮🇪', desc: 'English-speaking & tech hub', color: 'bg-green-600', unis: '30+' },
    ];

    const services = [
        { icon: <FaUniversity />, title: 'University Selection', desc: 'Find the perfect fit for your goals' },
        { icon: <FaPassport />, title: 'Visa Assistance', desc: 'Complete guidance for student visa' },
        { icon: <FaDollarSign />, title: 'Scholarship Guidance', desc: 'Maximize financial aid opportunities' },
        { icon: <FaBook />, title: 'Application Support', desc: 'End-to-end admission assistance' },
        { icon: <FaCertificate />, title: 'Test Preparation', desc: 'IELTS, TOEFL, GRE coaching' },
        { icon: <FaShieldAlt />, title: 'Pre-Departure Briefing', desc: 'Get ready for your journey' },
    ];

    const topCourses = [
        'Business & Management',
        'Computer Science & IT',
        'Engineering',
        'Medicine & Healthcare',
        'Arts & Humanities',
        'Law',
    ];

    const countryData = [
        { country: 'USA', cost: '$30,000-$70,000', duration: '2-4 years', intake: 'Fall, Spring, Summer' },
        { country: 'UK', cost: '£15,000-£35,000', duration: '1-3 years', intake: 'September, January' },
        { country: 'Canada', cost: 'CAD 15,000-35,000', duration: '1-4 years', intake: 'January, September' },
        { country: 'Australia', cost: 'AUD 20,000-45,000', duration: '1-4 years', intake: 'February, July' },
        { country: 'Germany', cost: '€0-€20,000', duration: '2-3 years', intake: 'October, April' },
        { country: 'Ireland', cost: '€10,000-€25,000', duration: '1-4 years', intake: 'September, January' },
    ];

    const faqs = [
        { q: 'Which country is best for studying abroad?', a: 'The best country depends on your course, budget, and career goals. USA, UK, Canada, and Australia are top choices for quality education. Germany offers free/low-cost education. Consider factors like post-study work rights, living costs, and visa policies.' },
        { q: 'How much does it cost to study abroad?', a: 'Costs vary significantly by country and university. USA ($30K-$70K/year), UK (£15K-£35K/year), Canada (CAD 15K-35K/year), Australia (AUD 20K-45K/year), Germany (€0-€20K/year). This includes tuition and living expenses.' },
        { q: 'Do I need IELTS for studying abroad?', a: 'Most English-speaking countries require English proficiency tests like IELTS, TOEFL, or PTE. Minimum scores vary by university and program. Some universities waive this requirement if your previous education was in English.' },
        { q: 'Can I work while studying abroad?', a: 'Yes, most countries allow part-time work during studies. Canada (20 hrs/week), Australia (48 hrs/fortnight), UK (20 hrs/week), USA (on-campus only). This helps cover living expenses and gain experience.' },
        { q: 'What is the student visa process?', a: 'Process varies by country but generally requires: university admission letter, proof of funds, visa application form, passport, academic documents, English proficiency scores, medical examination, and visa interview (for some countries).' },
        { q: 'Are scholarships available for international students?', a: 'Yes, many universities and governments offer scholarships based on merit, need, or specific criteria. Examples include Fulbright (USA), Chevening (UK), Australia Awards, and DAAD (Germany). We help identify and apply for relevant scholarships.' },
        { q: 'Can I get PR after studying abroad?', a: 'Many countries offer post-study work visas and pathways to PR. Canada offers 1-3 year PGWP with easy PR path. Australia has Graduate visa (2-4 years). UK offers 2-year Graduate Route. USA has Optional Practical Training (OPT).' },
        { q: 'How long does the admission process take?', a: 'Timeline varies: Research and shortlisting (1-2 months), Application preparation (1-2 months), University decision (2-8 weeks), Visa process (1-3 months). Start 8-12 months before intended intake for best results.' },
        { q: 'What documents are required for university applications?', a: 'Common documents include: Academic transcripts, Degree certificates, Letters of recommendation, Statement of Purpose (SOP), Resume/CV, English proficiency scores, Passport copy, Financial documents, and Portfolio (for creative courses).' },
        { q: 'Which intake is better - Fall or Spring?', a: 'Fall intake (September/October) is the main intake with maximum course options and scholarship opportunities. Spring intake (January/February) has fewer options but works well if you miss Fall deadlines or need extra preparation time.' },
    ];

    return (
        <div className="w-full bg-white font-sans text-gray-800">
            
            {/* --- HERO SECTION WITH FORM --- */}
            <div className="bg-gradient-to-br from-[#6A2B86] via-[#8B3A9C] to-[#6A2B86] text-white py-16 px-6 md:px-20 relative overflow-hidden border-b-8 border-[#E6412E]">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E6412E] rounded-full blur-3xl"></div>
                </div>
                
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                    {/* Text Area */}
                    <div className="lg:w-1/2">
                        <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 text-sm font-bold">
                            🎓 Study at World's Top Universities
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                            Study Abroad<br /> 
                            <span className="text-yellow-300">Your Path to Success</span>
                        </h1>
                        <p className="text-lg opacity-90 max-w-lg mb-8">
                            India's No.1 Overseas Education Consultant. Join 1 million+ students who achieved their academic dreams with our expert guidance.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                                <div className="text-3xl font-black text-yellow-300">500+</div>
                                <div className="text-sm opacity-80">Partner Universities</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                                <div className="text-3xl font-black text-yellow-300">25+</div>
                                <div className="text-sm opacity-80">Countries Worldwide</div>
                            </div>
                        </div>

                        <button className="bg-white text-[#6A2B86] px-8 py-4 rounded-lg font-black hover:bg-yellow-300 transition-all shadow-lg">
                            Find Your University →
                        </button>
                    </div>

                    {/* Sidebar Form */}
                    <div className="lg:w-[420px] bg-white rounded-2xl shadow-2xl p-8 text-gray-800">
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-black mb-2">Get Expert Guidance</h3>
                            <p className="text-sm text-gray-500">Confused about your study destination?</p>
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
                                <option>Select Target Country</option>
                                <option>🇺🇸 USA</option>
                                <option>🇬🇧 United Kingdom</option>
                                <option>🇨🇦 Canada</option>
                                <option>🇦🇺 Australia</option>
                                <option>🇩🇪 Germany</option>
                                <option>🇮🇪 Ireland</option>
                            </select>

                            <select className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 outline-none bg-white focus:border-[#E6412E]">
                                <option>Course of Interest</option>
                                <option>Business & Management</option>
                                <option>Computer Science & IT</option>
                                <option>Engineering</option>
                                <option>Medicine & Healthcare</option>
                                <option>Arts & Humanities</option>
                            </select>

                            <div className="flex items-start gap-2 text-xs text-gray-500">
                                <input type="checkbox" className="mt-1" />
                                <label>I accept the <span className="text-[#E6412E] underline cursor-pointer">Terms & Conditions</span></label>
                            </div>
                            
                            <button className="w-full bg-[#E6412E] text-white font-black py-4 rounded-lg uppercase tracking-wider hover:bg-black transition-all shadow-lg">
                                Get Free Counseling
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- WHY STUDY ABROAD SECTION --- */}
            <div className="max-w-7xl mx-auto py-20 px-6">
                <div className="text-center mb-16">
                    <div className="inline-block bg-yellow-100 px-4 py-2 rounded-full mb-4">
                        <FaLightbulb className="inline mr-2 text-yellow-600" />
                        <span className="font-bold text-sm text-gray-700">Why Study Abroad?</span>
                    </div>
                    <h2 className="text-4xl font-black mb-4">Transform Your Future with Global Education</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Studying abroad opens doors to world-class education, international career opportunities, and life-changing experiences.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {studyBenefits.map((benefit, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-xl hover:border-[#6A2B86] transition-all">
                            <div className="w-14 h-14 bg-[#E6412E] text-white rounded-full flex items-center justify-center text-2xl mb-4">
                                {benefit.icon}
                            </div>
                            <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                            <p className="text-sm text-gray-600">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- STUDY DESTINATIONS --- */}
            <div className="bg-gray-50 py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">Popular Study Destinations</h2>
                        <div className="w-20 h-1 bg-[#E6412E] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {studyDestinations.map((dest, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all group cursor-pointer">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-12 h-12 ${dest.color} rounded-lg flex items-center justify-center text-white text-2xl`}>
                                        {dest.flag}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg group-hover:text-[#6A2B86]">Study in {dest.country}</h4>
                                        <p className="text-xs text-gray-500">{dest.unis} Universities</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 mb-4">{dest.desc}</p>
                                <button className="text-[#E6412E] font-bold text-sm hover:underline flex items-center gap-2">
                                    Explore <FaArrowRight />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- TOP COURSES --- */}
            <div className="max-w-7xl mx-auto py-20 px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black mb-4">Popular Courses</h2>
                    <div className="w-20 h-1 bg-[#E6412E] mx-auto"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {topCourses.map((course, idx) => (
                        <div key={idx} className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#6A2B86] hover:shadow-lg transition-all cursor-pointer text-center group">
                            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                                <FaBookOpen className="inline text-[#6A2B86]" />
                            </div>
                            <div className="font-bold text-sm text-gray-700">{course}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- COUNTRY COMPARISON --- */}
            <div className="bg-gradient-to-br from-[#2D3E50] to-[#1a252f] text-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">Compare Study Destinations</h2>
                        <p className="text-white/80">Tuition fees, duration, and intake periods</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {countryData.map((data, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl hover:bg-white/20 transition-all">
                                <h4 className="text-2xl font-black mb-4 text-yellow-300">{data.country}</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <FaDollarSign className="text-green-300" />
                                        <div className="text-sm">
                                            <div className="text-white/60">Annual Cost</div>
                                            <div className="font-bold">{data.cost}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaClock className="text-blue-300" />
                                        <div className="text-sm">
                                            <div className="text-white/60">Course Duration</div>
                                            <div className="font-bold">{data.duration}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaCheckCircle className="text-yellow-300" />
                                        <div className="text-sm">
                                            <div className="text-white/60">Intake Periods</div>
                                            <div className="font-bold">{data.intake}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- OUR SERVICES --- */}
            <div className="max-w-7xl mx-auto py-20 px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black mb-4">Our Services</h2>
                    <p className="text-gray-600">End-to-end support for your study abroad journey</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all">
                            <div className="text-4xl text-[#6A2B86] mb-4">{service.icon}</div>
                            <h4 className="font-bold text-lg mb-2">{service.title}</h4>
                            <p className="text-sm text-gray-600">{service.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-gradient-to-r from-purple-50 to-red-50 p-8 rounded-2xl border border-gray-200">
                    <div className="text-center">
                        <h3 className="text-2xl font-black mb-4">Complete Application Support</h3>
                        <p className="text-gray-600 mb-6">From university selection to visa approval, we handle everything</p>
                        <div className="grid md:grid-cols-4 gap-4 text-center">
                            <div className="bg-white p-4 rounded-lg">
                                <FaCheckCircle className="text-green-600 text-2xl mx-auto mb-2" />
                                <div className="font-bold text-sm">Document Preparation</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                                <FaCheckCircle className="text-green-600 text-2xl mx-auto mb-2" />
                                <div className="font-bold text-sm">SOP/LOR Writing</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                                <FaCheckCircle className="text-green-600 text-2xl mx-auto mb-2" />
                                <div className="font-bold text-sm">Visa Interview Prep</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                                <FaCheckCircle className="text-green-600 text-2xl mx-auto mb-2" />
                                <div className="font-bold text-sm">Post-Landing Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- SCHOLARSHIP CTA --- */}
            <div className="bg-gradient-to-r from-[#6A2B86] to-[#8B3A9C] py-16 px-6 text-center text-white">
                <h2 className="text-4xl font-black mb-4">Looking for Scholarships?</h2>
                <p className="text-lg mb-8 opacity-90">We help you find and apply for scholarships up to 100% tuition coverage</p>
                <button className="bg-white text-[#6A2B86] px-12 py-4 rounded-lg font-black hover:bg-yellow-300 hover:scale-105 transition-all shadow-2xl">
                    Explore Scholarships →
                </button>
            </div>

            {/* --- TESTIMONIALS --- */}
            <div className="max-w-7xl mx-auto py-24 px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black mb-4">Student Success Stories</h2>
                    <p className="text-gray-600">Explore what students say about Immify in shaping their future</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { name: 'Siddharth Gupta', country: 'Masters in UK', img: 'photo-1507003211169-0a1dd7228f2d' },
                        { name: 'Priya Sharma', country: 'Canada Student Visa', img: 'photo-1494790108377-be9c29b29330' },
                        { name: 'Rahul Verma', country: 'Australia Masters', img: 'photo-1500648767791-00dcc994a43e' }
                    ].map((student, i) => (
                        <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all group">
                            <div className="relative h-56 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                                <img src={`https://images.unsplash.com/${student.img}?q=80&w=400`} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" alt={student.name} />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <FaPlayCircle className="text-6xl text-white cursor-pointer hover:scale-110 transition-transform drop-shadow-lg" />
                                </div>
                            </div>
                            <div className="p-6">
                                <h4 className="font-black text-xl mb-1">{student.name}</h4>
                                <p className="text-xs font-bold text-[#E6412E] uppercase mb-4">{student.country}</p>
                                <p className="text-sm text-gray-600 mb-4">"Immify made my application process seamless. From university selection to visa approval, their team was exceptional and supportive."</p>
                                <button className="text-[#6A2B86] text-sm font-bold hover:underline">Read Full Story →</button>
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
                            <div key={idx} className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#6A2B86] transition-all">
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
            <div className="bg-[#E6412E] py-16 px-6 text-center text-white">
                <h3 className="text-3xl font-black mb-4 tracking-tight">Ready to Start Your Study Abroad Journey?</h3>
                <p className="text-lg mb-8 opacity-90">Get personalized guidance from Immify - Your trusted education partner</p>
                <button className="bg-white text-[#E6412E] px-12 py-4 rounded-lg font-black hover:bg-black hover:text-white transition-all shadow-2xl">
                    Book Free Consultation
                </button>
            </div>
        </div>
    );
};

export default StudyPage;