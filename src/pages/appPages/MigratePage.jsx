import React, { useState } from 'react';
import { FaPlaneDeparture, FaFileAlt, FaSearch, FaUserCheck, FaRegCheckCircle, FaPlayCircle, FaChartLine, FaGraduationCap, FaBriefcase, FaHome, FaShieldAlt, FaCheckCircle, FaDollarSign, FaClock, FaChevronDown, FaChevronUp, FaLightbulb } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Form, useNavigate } from 'react-router-dom';
import { CreateMigrateLead } from '../../redux/actions/leadAction';

const MigratePage = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const [agreement, setAgreement]=useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);

    const [mobileType, setMobileType] =useState('Mobile');
    const navigate = useNavigate()
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };



    const migrationReasons = [
        { icon: <FaDollarSign />, title: 'High Income', desc: 'Earn 5x more than your current salary' },
        { icon: <FaBriefcase />, title: 'Job Opportunities', desc: 'Millions of opportunities in various sectors' },
        { icon: <FaGraduationCap />, title: 'Free Education', desc: 'Quality education for your children' },
        { icon: <FaShieldAlt />, title: 'Healthcare Benefits', desc: 'World-class healthcare & social security' },
    ];

    const visaOptions = [
        { title: 'Australia PR Visa', desc: 'Secure your future with permanent residency', color: 'bg-blue-600', href: "/migrate/australia" },
        { title: 'Canada PR Visa', desc: 'Settle permanently with Express Entry', color: 'bg-red-600', href: "/migrate/canada" },
        { title: 'Germany Opportunity Card', desc: 'Job seeker visa for skilled professionals', color: 'bg-yellow-600', href: "/migrate/germany" },
        { title: 'UK Skilled Worker Visa', desc: 'Points-based system for skilled workers', color: 'bg-purple-600' },
        { title: 'USA H-1B Visa', desc: 'Work visa for specialty occupations', color: 'bg-blue-800' },
        { title: 'Portugal Job Seeker Visa', desc: 'Explore career opportunities in Europe', color: 'bg-green-600' },
    ];

    const processSteps = [
        { icon: <FaSearch />, title: 'Inquiry', desc: 'Your immigration journey starts here' },
        { icon: <FaUserCheck />, title: 'Expert Counselling', desc: 'Personalized guidance based on your goals' },
        { icon: <FaChartLine />, title: 'Eligibility', desc: 'Check eligibility for specific country' },
        { icon: <FaFileAlt />, title: 'Documentation', desc: 'Compile documents for strong application' },
        { icon: <FaRegCheckCircle />, title: 'Processing', desc: 'Assistance in every step of filing' },
    ];

    const costs = [
        { country: 'Canada PR', cost: 'CAD 4,500', time: '6-8 months', points: '67 points' },
        { country: 'Australia PR', cost: 'AUD 4,700', time: '6-8 months', points: '65 points' },
    ];

    const faqs = [
        { q: 'Who can migrate?', a: 'Anyone who meets the eligibility criteria of age, education, work experience, and language proficiency can migrate. Each country has specific requirements based on their immigration programs.' },
        { q: 'Which country gives easy PR for Indian?', a: 'Canada and Australia are popular choices for Indians due to their points-based immigration systems, large Indian diaspora, and welcoming immigration policies. Both countries actively seek skilled workers.' },
        { q: 'Which is the best country to migrate from India?', a: 'Canada and Australia are top choices offering excellent quality of life, job opportunities, healthcare, and education. The best country depends on your skills, profession, and personal preferences.' },
        { q: 'What is the first step to immigrate?', a: 'Get evaluated through our free eligibility calculator to check if you meet the minimum points requirement. This helps determine your chances before investing time and money in the application process.' },
        { q: 'What documents do I need?', a: 'Common documents include passport, educational certificates, language test results (IELTS/PTE), work experience letters, police clearance certificate, medical examination reports, and proof of funds.' },
        { q: 'How much funding balance should I show?', a: 'Proof of funds varies by country and family size. For Canada Express Entry, single applicant needs CAD 13,310. For Australia, financial capacity depends on the visa subclass you are applying for.' },
        { q: 'Can my spouse also work?', a: 'Yes, most PR visas allow your spouse to work without restrictions. In countries like Canada and Australia, PR holders can work, study, and live anywhere in the country.' },
        { q: 'How long does it take to migrate?', a: 'Processing times vary by country and visa type. Canada PR takes 6-8 months, Australia PR takes 6-8 months. Some provincial programs may be faster.' },
        { q: 'What is Express Entry of Canada?', a: 'Express Entry is Canada\'s online immigration system for managing applications for permanent residence under economic immigration programs. It uses CRS (Comprehensive Ranking System) to rank candidates.' },
        { q: 'What is SkillSelect of Australia?', a: 'SkillSelect is Australia\'s online system for managing skilled migration. You submit an Expression of Interest (EOI) and may receive an invitation to apply if you meet requirements and score sufficient points.' },
    ];


    const dispatch=useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();

        const form=new FormData(e.target)
        const entries=Object.fromEntries(form.entries())

        const completeEntries={...entries,visaType:'Migrate', mobileType}

        console.log("form",e.target.value,completeEntries);

        dispatch(CreateMigrateLead(completeEntries));

    }

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
                            🌍 Move Abroad with Your Family
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                            Migrate to Your<br />
                            <span className="text-yellow-300">Dream Country</span>
                        </h1>
                        <p className="text-lg opacity-90 max-w-lg mb-8">
                            Build a better future abroad. High standards of living, excellent work-life balance, and millions of job opportunities await you.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                                <div className="text-3xl font-black text-yellow-300">281M+</div>
                                <div className="text-sm opacity-80">Global Migrants</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                                <div className="text-3xl font-black text-yellow-300">18M+</div>
                                <div className="text-sm opacity-80">Indians Abroad</div>
                            </div>
                        </div>

                        <button className="bg-white text-[#6A2B86] px-8 py-4 rounded-lg font-black hover:bg-yellow-300 transition-all shadow-lg">
                            Check Eligibility FREE →
                        </button>
                    </div>

                    {/* Sidebar Form */}
                    <div className="lg:w-[420px] bg-white rounded-2xl shadow-2xl p-8 text-gray-800">
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-black mb-2">Get Free Consultation</h3>
                            <p className="text-sm text-gray-500">Confused? Don't know what to do?</p>
                        </div>
                        <form className="space-y-4" onSubmit={(e)=>{if(agreement) handleSubmit(e); else e.preventDefault()}}>
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-[#E6412E] outline-none transition-all"
                                name='name'
                          />

                            <input
                                type="email"
                                placeholder="Email ID"
                                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-[#E6412E] outline-none transition-all"
                                name='email'
                           />

                            <div className="flex gap-2">
                                <select className="w-24 border-2 border-gray-200 rounded-lg px-2 py-3 outline-none bg-white" name="mobileExtension">
                                    <option value={+91}>🇮🇳 +91</option>
                                    <option value={+1}>🇺🇸 +1</option>
                                    <option value={+44}>🇬🇧 +44</option>
                                </select>
                                <input
                                    type="tel"
                                    placeholder="Mobile Number"
                                    className="flex-1 border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-[#E6412E] outline-none transition-all"
                                    name='mobile'
                                 />
                            </div>

                            <div className="flex items-center gap-2 text-sm">
                                <input
                                    type="checkbox"
     
                                    onChange={(e) => setMobileType(e.target.checked?'Whatsapp':'Mobile')}
                                    className="w-4 h-4"
                                    name='acceptedterms'
                                />
                                <label className="text-gray-600">Use this as WhatsApp number</label>
                            </div>

                            <select name='destination' className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 outline-none bg-white focus:border-[#E6412E]">
                                <option value="">Select Destination Country</option>
                                <option value={'Canada'}>🇨🇦 Canada</option>
                                <option value={'Australia'}>🇦🇺 Australia</option>
                                <option value={'United Kingdom'}>🇬🇧 United Kingdom</option>
                                <option value={'Germany'}>🇩🇪 Germany</option>
                                <option value={'USA'}>🇺🇸 USA</option>
                            </select>

                            <div className="flex items-start gap-2 text-xs text-gray-500">
                                <input type="checkbox" className="mt-1" name='agreement' onChange={()=>setAgreement(prev=>!prev)} />
                                <label>I accept the <span className="text-[#E6412E] underline cursor-pointer">Terms & Conditions</span></label>
                            </div>

                            <button type='submit' className="w-full bg-[#E6412E] text-white font-black py-4 rounded-lg uppercase tracking-wider hover:bg-black transition-all shadow-lg">
                                Get Started
                            </button>
                        </form>



                    </div>
                </div>
            </div>

            {/* --- WHY MIGRATE SECTION --- */}
            <div className="max-w-7xl mx-auto py-20 px-6">
                <div className="text-center mb-16">
                    <div className="inline-block bg-yellow-100 px-4 py-2 rounded-full mb-4">
                        <FaLightbulb className="inline mr-2 text-yellow-600" />
                        <span className="font-bold text-sm text-gray-700">Did You Know?</span>
                    </div>
                    <h2 className="text-4xl font-black mb-4">Migrate Overseas to Build a Better Future</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">The number of international migrants has grown by 49% since 2000. Currently, there are 281 million international migrants around the world.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {migrationReasons.map((reason, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-xl hover:border-[#6A2B86] transition-all">
                            <div className="w-14 h-14 bg-[#E6412E] text-white rounded-full flex items-center justify-center text-2xl mb-4">
                                {reason.icon}
                            </div>
                            <h4 className="font-bold text-lg mb-2">{reason.title}</h4>
                            <p className="text-sm text-gray-600">{reason.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- VISA OPTIONS --- */}
            <div className="bg-gray-50 py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">PR & Work Visas</h2>
                        <div className="w-20 h-1 bg-[#E6412E] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {visaOptions.map((visa, idx) => (
                            <div onClick={() => navigate(visa.href)} key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all group cursor-pointer">
                                <div className={`w-12 h-12 ${visa.color} rounded-lg flex items-center justify-center text-white text-xl mb-4`}>
                                    <FaPlaneDeparture />
                                </div>
                                <h4 className="font-bold text-lg mb-2 group-hover:text-[#6A2B86]">{visa.title}</h4>
                                <p className="text-sm text-gray-600 mb-4">{visa.desc}</p>
                                <button className="text-[#E6412E] font-bold text-sm hover:underline">Learn More →</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- MIGRATION PROCESS --- */}
            <div className="bg-gradient-to-br from-[#2D3E50] to-[#1a252f] text-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">Migrate Process</h2>
                        <p className="text-white/80">In recent times, migration has become a dream for everyone willing to settle abroad</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {processSteps.map((step, i) => (
                            <div key={i} className="text-center relative">
                                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-3xl text-yellow-300 mb-4 mx-auto border-2 border-white/20 hover:scale-110 transition-transform">
                                    {step.icon}
                                </div>
                                <h5 className="font-bold text-sm uppercase tracking-wider mb-2">{step.title}</h5>
                                <p className="text-xs text-white/70">{step.desc}</p>
                                {i < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-white/20"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- COST & TIME --- */}
            <div className="max-w-7xl mx-auto py-20 px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black mb-4">Costs & Processing Time</h2>
                    <div className="w-20 h-1 bg-[#E6412E] mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {costs.map((item, idx) => (
                        <div key={idx} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#6A2B86] transition-all">
                            <h4 className="text-2xl font-black mb-6 text-[#6A2B86]">{item.country}</h4>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <FaDollarSign className="text-green-600 text-xl" />
                                    <div>
                                        <div className="text-sm text-gray-500">Approx. Cost</div>
                                        <div className="font-bold text-lg">{item.cost}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaClock className="text-blue-600 text-xl" />
                                    <div>
                                        <div className="text-sm text-gray-500">Processing Time</div>
                                        <div className="font-bold text-lg">{item.time}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaChartLine className="text-purple-600 text-xl" />
                                    <div>
                                        <div className="text-sm text-gray-500">Minimum Points</div>
                                        <div className="font-bold text-lg">{item.points}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- CHECK ELIGIBILITY CTA --- */}
            <div className="bg-gradient-to-r from-[#6A2B86] to-[#8B3A9C] py-16 px-6 text-center text-white">
                <h2 className="text-4xl font-black mb-4">Check Your Eligibility</h2>
                <p className="text-lg mb-8 opacity-90">Evaluate your eligibility instantly for FREE!</p>
                <button className="bg-white text-[#6A2B86] px-12 py-4 rounded-lg font-black hover:bg-yellow-300 hover:scale-105 transition-all shadow-2xl">
                    Check Eligibility Now →
                </button>
            </div>

            {/* --- TESTIMONIALS --- */}
            <div className="max-w-7xl mx-auto py-24 px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black mb-4">Looking for Inspiration</h2>
                    <p className="text-gray-600">Explore what Global Indians say about Immify in shaping their future</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { name: 'Rajesh Kumar', country: 'Canada PR', img: 'photo-1507003211169-0a1dd7228f2d' },
                        { name: 'Priya Sharma', country: 'Australia PR', img: 'photo-1494790108377-be9c29b29330' },
                        { name: 'Amit Patel', country: 'UK Skilled Worker', img: 'photo-1500648767791-00dcc994a43e' }
                    ].map((user, i) => (
                        <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all group">
                            <div className="relative h-56 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                                <img src={`https://images.unsplash.com/${user.img}?q=80&w=400`} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" alt={user.name} />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <FaPlayCircle className="text-6xl text-white cursor-pointer hover:scale-110 transition-transform drop-shadow-lg" />
                                </div>
                            </div>
                            <div className="p-6">
                                <h4 className="font-black text-xl mb-1">{user.name}</h4>
                                <p className="text-xs font-bold text-[#E6412E] uppercase mb-4">{user.country}</p>
                                <p className="text-sm text-gray-600 mb-4">"Immify made my dream come true. Their team is professional, knowledgeable, and supportive throughout the entire process."</p>
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
                <h3 className="text-3xl font-black mb-4 tracking-tight">Ready to Start Your Migration Journey?</h3>
                <p className="text-lg mb-8 opacity-90">Get professional guidance from Immify - Your trusted immigration partner</p>
                <button onClick={scrollToTop} className="bg-white text-[#E6412E] px-12 py-4 rounded-lg font-black hover:bg-black hover:text-white transition-all shadow-2xl">
                    Get Free Counseling Now
                </button>
            </div>
        </div>
    );
};

export default MigratePage;