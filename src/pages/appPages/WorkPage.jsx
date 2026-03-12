import React, { useState } from 'react';
import { FaBriefcase, FaGlobeAmericas, FaUserTie, FaCheckDouble, FaPlayCircle, FaArrowRight, FaDollarSign, FaClock, FaChartLine, FaShieldAlt, FaCheckCircle, FaLightbulb, FaChevronDown, FaChevronUp, FaGraduationCap, FaHospital, FaCode, FaBuilding } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { CreateWorkLead } from '../../redux/actions/leadAction';
import { Link } from 'react-router-dom';

const WorkPage = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const [agreement, setAgreement]=useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);

    const [mobileType, setMobileType] =useState('Mobile');

    const dispatch=useDispatch();


    const handleSubmit=(e)=>{
        e.preventDefault();

        const form= new FormData(e.target);
        const data= Object.fromEntries(form.entries());
        
        const completeEntries= {...data,visaType:'WorkVisa',mobileType};

        console.log("form",e.target.value,completeEntries);

        dispatch(CreateWorkLead(completeEntries));

    }


    const workBenefits = [
        { icon: <FaDollarSign />, title: '5x Higher Income', desc: 'Earn significantly more than your current salary' },
        { icon: <FaBriefcase />, title: 'Millions of Jobs', desc: 'Opportunities in various sectors globally' },
        { icon: <FaShieldAlt />, title: 'Healthcare Benefits', desc: 'World-class healthcare & social security' },
        { icon: <FaGraduationCap />, title: 'Career Growth', desc: 'Better opportunities and prospects abroad' },
    ];

    const workVisas = [
        { title: 'Australia Work Visa', desc: '800,000+ job vacancies', color: 'bg-blue-600', flag: '🇦🇺' },
        { title: 'Canada Work Permit', desc: '1.1 million job openings', color: 'bg-red-600', flag: '🇨🇦' },
        { title: 'Germany Opportunity Card', desc: '770,000+ job vacancies', color: 'bg-yellow-600', flag: '🇩🇪' },
        { title: 'UK Skilled Worker', desc: '13 million job opportunities', color: 'bg-purple-600', flag: '🇬🇧' },
        { title: 'USA H-1B Visa', desc: '8.8 million job vacancies', color: 'bg-blue-800', flag: '🇺🇸' },
        { title: 'UAE Work Permit', desc: '418,500+ annual vacancies', color: 'bg-green-600', flag: '🇦🇪' },
    ];

    const professions = [
        { name: 'IT & Software', icon: <FaCode />, color: 'text-blue-600' },
        { name: 'Engineering', icon: <FaBuilding />, color: 'text-orange-600' },
        { name: 'Healthcare', icon: <FaHospital />, color: 'text-red-600' },
        { name: 'Marketing & Sales', icon: <FaChartLine />, color: 'text-green-600' },
        { name: 'Accounting', icon: <FaDollarSign />, color: 'text-purple-600' },
        { name: 'Hospitality', icon: <FaUserTie />, color: 'text-pink-600' },
    ];

    const jobMarketData = [
        { country: 'USA', jobs: '8.8 million', salary: '$78,040', visa: 'H-1B Visa' },
        { country: 'Canada', jobs: '1.1 million', salary: 'CAD 64,850', visa: 'Work Permit' },
        { country: 'UK', jobs: '13 million', salary: '£35,000', visa: 'Skilled Worker' },
        { country: 'Australia', jobs: '800,000', salary: 'AUD 84,831', visa: 'TSS Visa' },
        { country: 'Germany', jobs: '770,000', salary: '€51,000', visa: 'Opportunity Card' },
        { country: 'UAE', jobs: '418,500', salary: 'AED 191,807', visa: 'Work Permit' },
    ];

    const processSteps = [
        { icon: <FaUserTie />, title: 'Career Strategy', desc: 'Get your personalized career roadmap' },
        { icon: <FaCheckCircle />, title: 'Profile Building', desc: 'LinkedIn & Resume optimization' },
        { icon: <FaBriefcase />, title: 'Resume Writing', desc: 'Professional international standards' },
        { icon: <FaGlobeAmericas />, title: 'Resume Marketing', desc: 'Apply to jobs on your behalf' },
        { icon: <FaArrowRight />, title: 'Job Offers', desc: 'Get interview calls & work visa' },
    ];

    const faqs = [
        { q: 'How can I get a work visa?', a: 'To get a work visa, you typically need a job offer from an employer in the destination country. The employer often sponsors your visa application. You must meet eligibility criteria including qualifications, work experience, and language proficiency.' },
        { q: 'What is the difference between visa and work permit?', a: 'A work visa is entry clearance to live and work abroad issued by embassy/consulate. A work permit is permission to work in a specific job/employer issued by labor authorities. Work visa has broader scope while work permit is tied to one role.' },
        { q: 'Which country is best for Indians to work in?', a: 'Canada, Australia, UK, USA, and Germany are top choices for Indians. Canada and Australia have points-based systems favorable for skilled Indians. UAE is also popular for tax-free income. The best country depends on your profession and qualifications.' },
        { q: 'How many types of work visas are there?', a: 'There are two main types: Temporary work visas (2-4 years) and Permanent work visas (5+ years with PR). Each country offers various categories like H-1B (USA), Skilled Worker (UK), TSS (Australia), and Opportunity Card (Germany).' },
        { q: 'What is the eligibility for a work visa?', a: 'Common eligibility requirements include: Job offer from employer, relevant qualifications and certifications, required work experience, language proficiency (IELTS/PTE), health and character assessment, and visa application fees.' },
        { q: 'Which work visa is easiest to get?', a: 'UAE and Canada work permits are relatively easier to obtain. Canada Express Entry for skilled workers and Australia SkillSelect are points-based and transparent. Germany Opportunity Card allows job seekers to enter without a job offer.' },
        { q: 'How long does it take to get a working visa?', a: 'Processing time varies by country: Canada (1-27 weeks), USA H-1B (3-5 months), UK Skilled Worker (3 weeks-3 months), Australia TSS (2-4 months), Germany Blue Card (1-3 months), UAE (15 days).' },
        { q: 'Which country gives work permits easily for Indians?', a: 'Canada, Australia, and Germany are favorable for Indians. Canada plans to invite 1.1 million immigrants by 2027. Australia issued cap of 1,000 Work & Holiday visas for Indians. Germany issued 350% more visas to Indians in 2024.' },
        { q: 'What is the maximum duration of the work permit?', a: 'Duration varies: Temporary work permits last 2-4 years and are renewable. Permanent work permits last 5+ years with pathway to PR. Some countries like Canada allow extending work permits multiple times.' },
        { q: 'What would you suggest I do first, get a job or apply for work permit/PR?', a: 'For most countries, you need a job offer first to apply for work permit. However, Canada Express Entry and Australia SkillSelect allow you to create a profile first. Use our Job Search Services to find jobs and we help with visa process.' },
    ];

    const visaSlugMap = {
    'Australia Work Visa': 'australia',
    'Canada Work Permit': 'canada',
    'Germany Opportunity Card': 'germany',
    'UK Skilled Worker': 'united-kingdom',
    'USA H-1B Visa': 'usa',
    'UAE Work Permit': 'uae',
   };


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
                            💼 Work Abroad with Your Family
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                            Secure Your Work Visa<br /> 
                            <span className="text-yellow-300">Quickly & Easily</span>
                        </h1>
                        <p className="text-lg opacity-90 max-w-lg mb-8">
                            Immify is India's No.1 Overseas Career Consultant. We help 100,000+ professionals every month achieve their global career dreams.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                                <div className="text-3xl font-black text-yellow-300">1M+</div>
                                <div className="text-sm opacity-80">Customers Served</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                                <div className="text-3xl font-black text-yellow-300">40M+</div>
                                <div className="text-sm opacity-80">Global Job Openings</div>
                            </div>
                        </div>

                        <button className="bg-white text-[#6A2B86] px-8 py-4 rounded-lg font-black hover:bg-yellow-300 transition-all shadow-lg">
                            Search Overseas Jobs →
                        </button>
                    </div>

                    {/* Sidebar Form */}
                    <div className="lg:w-[420px] bg-white rounded-2xl shadow-2xl p-8 text-gray-800">
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-black mb-2">Want to Work Overseas?</h3>
                            <p className="text-sm text-gray-500">Don't know what to do? Get Free Consultation</p>
                        </div>
                        
                    <form className="space-y-4" onSubmit={(e)=>{if(agreement) handleSubmit(e); else e.preventDefault()}}>

                            <input 
                                type="text" 
                                placeholder="Your Name" 
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
                                <select name='mobileExtension' className="w-24 border-2 border-gray-200 rounded-lg px-2 py-3 outline-none bg-white">
                                    <option value={91}>🇮🇳 +91</option>
                                    <option value={1}>🇺🇸 +1</option>
                                    <option value={44}>🇬🇧 +44</option>
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
                                    name='acceptTerms'
                                />
                                <label className="text-gray-600">Use this as WhatsApp number</label>
                            </div>

                            <select name='destination' className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 outline-none bg-white focus:border-[#E6412E]">
                                <option value=''>Select Destination Country</option>
                                <option value='Canada'>🇨🇦 Canada</option>
                                <option value='Australia'>🇦🇺 Australia</option>
                                <option value='United Kingdom'>🇬🇧 United Kingdom</option>
                                <option value='Germany'>🇩🇪 Germany</option>
                                <option value='USA'>🇺🇸 USA</option>
                                <option value='UAE'>🇦🇪 UAE</option>
                            </select>

                            <div className="flex items-start gap-2 text-xs text-gray-500">
                                <input type="checkbox" className="mt-1" name='agreement' onChange={()=>setAgreement(prev=>!prev)}/>
                                <label>I accept the <span className="text-[#E6412E] underline cursor-pointer">Terms & Conditions</span></label>
                            </div>
                            
                            <button className="w-full bg-[#E6412E] text-white font-black py-4 rounded-lg uppercase tracking-wider hover:bg-black transition-all shadow-lg">
                                Get Started
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* --- WHY WORK ABROAD SECTION --- */}
            <div className="max-w-7xl mx-auto py-20 px-6">
                <div className="text-center mb-16">
                    <div className="inline-block bg-yellow-100 px-4 py-2 rounded-full mb-4">
                        <FaLightbulb className="inline mr-2 text-yellow-600" />
                        <span className="font-bold text-sm text-gray-700">Why Apply for Work Permit?</span>
                    </div>
                    <h2 className="text-4xl font-black mb-4">Work Abroad - Build Your Global Career</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Working abroad can dramatically transform your life and career. The professional job market is truly global with millions of opportunities.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {workBenefits.map((benefit, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-xl hover:border-[#6A2B86] transition-all">
                            <div className="w-14 h-14 bg-[#E6412E] text-white rounded-full flex items-center justify-center text-2xl mb-4">
                                {benefit.icon}
                            </div>
                            <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                            <p className="text-sm text-gray-600">{benefit.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-gradient-to-r from-purple-50 to-red-50 p-8 rounded-xl border border-gray-200">
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                            <div className="text-4xl font-black text-[#6A2B86] mb-2">40M+</div>
                            <div className="text-sm text-gray-600">Global Job Vacancies</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-[#E6412E] mb-2">5x</div>
                            <div className="text-sm text-gray-600">Higher Income Potential</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-[#6A2B86] mb-2">100K+</div>
                            <div className="text-sm text-gray-600">Monthly Consultations</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- WORK VISA OPTIONS --- */}
            <div className="bg-gray-50 py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">Work Visa by Country</h2>
                        <div className="w-20 h-1 bg-[#E6412E] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {workVisas.map((visa, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all group cursor-pointer">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-12 h-12 ${visa.color} rounded-lg flex items-center justify-center text-white text-2xl`}>
                                        {visa.flag}
                                    </div>
                                    <h4 className="font-bold text-lg group-hover:text-[#6A2B86]">{visa.title}</h4>
                                </div>
                                <p className="text-sm text-gray-600 mb-4">{visa.desc}</p>
                                <Link to={`/work/${visaSlugMap[visa.title]}`}>
                                <button className="text-[#E6412E] font-bold text-sm hover:underline flex items-center gap-2">
                                    Learn More <FaArrowRight />
                                </button>
                            </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- SEARCH BY PROFESSION --- */}
            <div className="max-w-7xl mx-auto py-20 px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black mb-4">Search Jobs by Profession</h2>
                    <div className="w-20 h-1 bg-[#E6412E] mx-auto"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {professions.map((prof, idx) => (
                        <div key={idx} className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#6A2B86] hover:shadow-lg transition-all cursor-pointer text-center group">
                            <div className={`text-4xl ${prof.color} mb-3 group-hover:scale-110 transition-transform`}>
                                {prof.icon}
                            </div>
                            <div className="font-bold text-sm text-gray-700">{prof.name}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- JOB MARKET DATA --- */}
            <div className="bg-gradient-to-br from-[#2D3E50] to-[#1a252f] text-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">Top Countries to Work Abroad</h2>
                        <p className="text-white/80">Compare job markets, salaries, and visa types</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobMarketData.map((data, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl hover:bg-white/20 transition-all">
                                <h4 className="text-2xl font-black mb-4 text-yellow-300">{data.country}</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <FaBriefcase className="text-blue-300" />
                                        <div className="text-sm">
                                            <div className="text-white/60">Job Openings</div>
                                            <div className="font-bold">{data.jobs}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaDollarSign className="text-green-300" />
                                        <div className="text-sm">
                                            <div className="text-white/60">Avg. Salary</div>
                                            <div className="font-bold">{data.salary}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaCheckCircle className="text-yellow-300" />
                                        <div className="text-sm">
                                            <div className="text-white/60">Visa Type</div>
                                            <div className="font-bold">{data.visa}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- JOB SEARCH PROCESS --- */}
            <div className="max-w-7xl mx-auto py-20 px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black mb-4">Immify Job Search Services</h2>
                    <p className="text-gray-600">End-to-end solution to make your profile attractive to international employers</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {processSteps.map((step, i) => (
                        <div key={i} className="text-center relative">
                            <div className="w-20 h-20 bg-gradient-to-br from-[#6A2B86] to-[#8B3A9C] rounded-full flex items-center justify-center text-3xl text-white mb-4 mx-auto hover:scale-110 transition-transform border-4 border-purple-100">
                                {step.icon}
                            </div>
                            <h5 className="font-bold text-sm mb-2">{step.title}</h5>
                            <p className="text-xs text-gray-600">{step.desc}</p>
                            {i < processSteps.length - 1 && (
                                <div className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-gray-300"></div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-gradient-to-r from-purple-50 to-red-50 p-8 rounded-2xl border border-gray-200">
                    <div className="text-center">
                        <h3 className="text-2xl font-black mb-4">Our Services Include:</h3>
                        <div className="grid md:grid-cols-3 gap-4 text-left">
                            <div className="bg-white p-4 rounded-lg">
                                <FaCheckCircle className="text-green-600 mb-2" />
                                <div className="font-bold text-sm mb-1">Job Search Strategy</div>
                                <div className="text-xs text-gray-600">Comprehensive profile-based report</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                                <FaCheckCircle className="text-green-600 mb-2" />
                                <div className="font-bold text-sm mb-1">Resume Marketing</div>
                                <div className="text-xs text-gray-600">Apply to jobs on your behalf</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                                <FaCheckCircle className="text-green-600 mb-2" />
                                <div className="font-bold text-sm mb-1">LinkedIn Optimization</div>
                                <div className="text-xs text-gray-600">Professional profile enhancement</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- POST RESUME CTA --- */}
            <div className="bg-gradient-to-r from-[#6A2B86] to-[#8B3A9C] py-16 px-6 text-center text-white">
                <h2 className="text-4xl font-black mb-4">Post Your Resume</h2>
                <p className="text-lg mb-8 opacity-90">Your overseas job search starts here!</p>
                <button className="bg-white text-[#6A2B86] px-12 py-4 rounded-lg font-black hover:bg-yellow-300 hover:scale-105 transition-all shadow-2xl">
                    Post Resume Now →
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
                        { name: 'Rajesh Kumar', country: 'Canada Work Permit', img: 'photo-1507003211169-0a1dd7228f2d' },
                        { name: 'Priya Sharma', country: 'Australia Work Visa', img: 'photo-1494790108377-be9c29b29330' },
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
                                <p className="text-sm text-gray-600 mb-4">"Immify helped me land my dream job abroad. Their job search services are exceptional and the team is very supportive throughout."</p>
                                <button className="text-[#6A2B86] text-sm font-bold hover:underline">Read Full Story →</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-[#E6412E] text-white px-10 py-3 font-bold rounded-lg hover:bg-black transition-all">
                        View All Testimonials
                    </button>
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
                <h3 className="text-3xl font-black mb-4 tracking-tight">Ready to Start Your International Career?</h3>
                <p className="text-lg mb-8 opacity-90">Get end-to-end job search services from Immify - Your trusted career partner</p>
                <button className="bg-white text-[#E6412E] px-12 py-4 rounded-lg font-black hover:bg-black hover:text-white transition-all shadow-2xl">
                    Apply Now
                </button>
            </div>
        </div>
    );
};

export default WorkPage;