import React, { useState } from 'react';
import {
    FaBriefcase, FaGlobeAmericas, FaUserTie, FaArrowRight, FaDollarSign,
    FaClock, FaShieldAlt, FaCheckCircle, FaLightbulb, FaChevronDown,
    FaChevronUp, FaGraduationCap, FaHospital, FaCode, FaBuilding,
    FaPlayCircle, FaChartLine, FaPassport
} from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CreateWorkLead } from '../../redux/actions/leadAction';

// ─────────────────────────────────────────────
// COUNTRY DATA
// ─────────────────────────────────────────────
const allCountryData = {
    australia: {
        name: 'Australia',
        flag: '🇦🇺',
        themeColor: '#00008B',
        heroTitle: 'Work in Australia',
        heroSubtitle: 'Over 800,000 job vacancies across healthcare, IT, engineering & trades',
        jobOpenings: '800,000+',
        avgSalary: 'AUD 84,831/yr',
        processingTime: '2–4 months',
        prPathway: 'Yes (ENS/RSMS)',
        overview: `Australia's Temporary Skill Shortage (TSS) visa lets employers sponsor skilled overseas workers for up to 4 years. 
        Australia has one of the strongest job markets in the world with critical shortages in healthcare, construction, and IT. 
        The points-based SkillSelect system also offers a direct PR pathway for skilled migrants.`,
        visaTypes: [
            { name: 'TSS Subclass 482', desc: 'Employer-sponsored, up to 4 years', tag: 'Most Popular' },
            { name: 'Skilled Independent (189)', desc: 'Points-based, no sponsorship needed', tag: 'PR Pathway' },
            { name: 'Skilled Nominated (190)', desc: 'State government nomination', tag: 'State Sponsored' },
            { name: 'Working Holiday (417/462)', desc: 'Ages 18–35, up to 3 years', tag: 'Youth Visa' },
        ],
        topJobs: [
            { title: 'Registered Nurse', salary: 'AUD 85,000' },
            { title: 'Software Engineer', salary: 'AUD 110,000' },
            { title: 'Civil Engineer', salary: 'AUD 95,000' },
            { title: 'Electrician', salary: 'AUD 88,000' },
            { title: 'Accountant', salary: 'AUD 80,000' },
            { title: 'Chef', salary: 'AUD 65,000' },
        ],
        eligibility: [
            'Job offer from an approved Australian employer',
            'Occupation on the MLTSSL or STSOL skills list',
            'Minimum 2 years relevant work experience',
            'English proficiency: IELTS 5.0+ (overall)',
            'Skills assessment by relevant authority',
            'Health and character requirements',
        ],
        services: [
            { icon: <FaUserTie />, title: 'Career Strategy', desc: 'Personalized roadmap for Australian job market' },
            { icon: <FaCheckCircle />, title: 'Profile Building', desc: 'LinkedIn & Resume for Australian standards' },
            { icon: <FaBriefcase />, title: 'Resume Writing', desc: 'ATS-optimized for Australian employers' },
            { icon: <FaGlobeAmericas />, title: 'Resume Marketing', desc: 'We apply to jobs on your behalf' },
            { icon: <FaPassport />, title: 'Visa Assistance', desc: 'Complete TSS/PR visa guidance' },
            { icon: <FaShieldAlt />, title: 'Pre-Departure Brief', desc: 'Get ready for life in Australia' },
        ],
        marketData: [
            { label: 'Unemployment Rate', value: '3.7%' },
            { label: 'Min. Wage', value: 'AUD 23.23/hr' },
            { label: 'Avg. Work Hours', value: '38 hrs/week' },
        ],
        faqs: [
            { q: 'Can I bring my family to Australia on a work visa?', a: 'Yes, TSS visa holders can bring their spouse and dependent children as secondary applicants. Spouses may also be eligible to work.' },
            { q: 'Can I apply for PR from a TSS visa?', a: 'Yes, after working for your sponsor for 3 years, you can apply for the Employer Nomination Scheme (ENS) Subclass 186 for permanent residency.' },
            { q: 'What is the minimum salary requirement?', a: 'You must be paid at least the Temporary Skilled Migration Income Threshold (TSMIT), currently AUD 70,000 per year.' },
            { q: 'Which occupations are in demand in Australia?', a: 'Healthcare workers, IT professionals, engineers, construction workers, and hospitality staff are in high demand across Australia.' },
        ],
    },

    canada: {
        name: 'Canada',
        flag: '🇨🇦',
        themeColor: '#CC0000',
        heroTitle: 'Work in Canada',
        heroSubtitle: 'Over 1.1 million job openings with a transparent points-based system and clear PR pathway',
        jobOpenings: '1.1 million',
        avgSalary: 'CAD 64,850/yr',
        processingTime: '1–27 weeks',
        prPathway: 'Yes (Express Entry / PNP)',
        overview: `Canada is one of the most immigrant-friendly countries in the world, planning to welcome over 1.1 million new permanent residents by 2027. 
        The Express Entry system and Provincial Nominee Programs offer transparent, points-based pathways that are particularly favorable for skilled Indian professionals in IT, healthcare, and engineering.`,
        visaTypes: [
            { name: 'LMIA Work Permit', desc: 'Employer-sponsored with Labour Market Impact Assessment', tag: 'Most Common' },
            { name: 'Express Entry (FSWP)', desc: 'Points-based federal skilled worker program', tag: 'PR Pathway' },
            { name: 'Provincial Nominee (PNP)', desc: 'Province-specific nomination streams', tag: 'Provincial' },
            { name: 'CUSMA/USMCA', desc: 'For US & Mexico citizens in eligible professions', tag: 'Trade Agreement' },
        ],
        topJobs: [
            { title: 'Software Developer', salary: 'CAD 95,000' },
            { title: 'Registered Nurse', salary: 'CAD 80,000' },
            { title: 'Truck Driver', salary: 'CAD 65,000' },
            { title: 'Financial Analyst', salary: 'CAD 78,000' },
            { title: 'Electrician', salary: 'CAD 72,000' },
            { title: 'Construction Manager', salary: 'CAD 90,000' },
        ],
        eligibility: [
            'Valid job offer from a Canadian employer (for work permit)',
            'Minimum CLB 7 English — IELTS 6.0+ for Express Entry',
            'At least 1 year of skilled work experience (NOC 0, A, or B)',
            'Educational Credential Assessment (ECA) for foreign degrees',
            'Minimum CRS score (current cutoffs ~480–500)',
            'Health and character background check',
        ],
        services: [
            { icon: <FaUserTie />, title: 'Career Strategy', desc: 'CRS score optimization roadmap' },
            { icon: <FaCheckCircle />, title: 'Profile Building', desc: 'LinkedIn & Resume for Canadian employers' },
            { icon: <FaBriefcase />, title: 'Resume Writing', desc: 'ATS-optimized for Canadian job boards' },
            { icon: <FaGlobeAmericas />, title: 'Job Marketing', desc: 'We apply to Canadian jobs on your behalf' },
            { icon: <FaPassport />, title: 'Visa Assistance', desc: 'LMIA & Express Entry guidance' },
            { icon: <FaShieldAlt />, title: 'Pre-Departure Brief', desc: 'Get ready for life in Canada' },
        ],
        marketData: [
            { label: 'Unemployment Rate', value: '5.8%' },
            { label: 'Min. Wage', value: 'CAD 17.30/hr' },
            { label: 'Avg. Work Hours', value: '36 hrs/week' },
        ],
        faqs: [
            { q: 'What is the Express Entry CRS cutoff?', a: 'CRS cutoffs vary per draw, typically ranging from 470–520. IT and healthcare workers often receive additional points via provincial nominations.' },
            { q: 'Can I get PR directly without a job offer?', a: 'Yes, through the Federal Skilled Worker Program (FSWP) under Express Entry. A job offer gives extra CRS points but is not mandatory.' },
            { q: 'How long is a Canadian work permit valid?', a: 'Usually tied to your employment contract, up to 3 years. It is renewable and can lead to permanent residency.' },
            { q: 'Which provinces are best for Indian workers?', a: 'Ontario (tech), British Columbia (tech & healthcare), Alberta (energy & construction), and Saskatchewan (agriculture & trades) are highly favorable for Indians.' },
        ],
    },

    germany: {
        name: 'Germany',
        flag: '🇩🇪',
        themeColor: '#8B0000',
        heroTitle: 'Work in Germany',
        heroSubtitle: '770,000+ vacancies with the Opportunity Card — enter Germany without a job offer',
        jobOpenings: '770,000+',
        avgSalary: '€51,000/yr',
        processingTime: '1–3 months',
        prPathway: 'Yes (after 2–3 years)',
        overview: `Germany introduced the Chancenkarte (Opportunity Card) in 2024, allowing skilled workers to enter Germany to job-hunt without a prior offer. 
        Germany issued 350% more visas to Indians in 2024. The EU Blue Card offers the fastest track to permanent residency in Europe for high earners, 
        making Germany a top destination for Indian engineers, IT professionals, and healthcare workers.`,
        visaTypes: [
            { name: 'EU Blue Card', desc: 'High-skilled workers with university degree', tag: 'Most Popular' },
            { name: 'Opportunity Card', desc: 'Job-seeker visa — no job offer needed', tag: 'New 2024' },
            { name: 'Skilled Worker Visa', desc: 'Vocational training recognized in Germany', tag: 'Trades' },
            { name: 'Job Seeker Visa', desc: 'Up to 6 months to find employment', tag: 'Job Search' },
        ],
        topJobs: [
            { title: 'Software Engineer', salary: '€65,000' },
            { title: 'Mechanical Engineer', salary: '€58,000' },
            { title: 'Doctor/Physician', salary: '€75,000' },
            { title: 'Data Scientist', salary: '€62,000' },
            { title: 'Electrician', salary: '€45,000' },
            { title: 'Logistics Manager', salary: '€52,000' },
        ],
        eligibility: [
            'Recognized university degree or vocational qualification',
            'Job offer with salary ≥ €45,300/yr (EU Blue Card)',
            'German B1 or English B2 proficiency',
            'For Opportunity Card: 1yr experience + degree + language',
            'Valid health insurance coverage',
            'Clean criminal record',
        ],
        services: [
            { icon: <FaUserTie />, title: 'Career Strategy', desc: 'Roadmap aligned with German job market' },
            { icon: <FaCheckCircle />, title: 'Profile Building', desc: 'German-style CV (Lebenslauf) preparation' },
            { icon: <FaBriefcase />, title: 'Resume Writing', desc: 'Tailored for German employer standards' },
            { icon: <FaGlobeAmericas />, title: 'Job Marketing', desc: 'Applications to German job portals' },
            { icon: <FaPassport />, title: 'Visa Assistance', desc: 'EU Blue Card & Opportunity Card guidance' },
            { icon: <FaShieldAlt />, title: 'Pre-Departure Brief', desc: 'Get ready for life in Germany' },
        ],
        marketData: [
            { label: 'Unemployment Rate', value: '3.0%' },
            { label: 'Min. Wage', value: '€12.41/hr' },
            { label: 'Avg. Work Hours', value: '34 hrs/week' },
        ],
        faqs: [
            { q: 'Do I need to speak German to work there?', a: 'Not always — many MNCs operate in English. However, German B1/B2 significantly increases job prospects and is required for some visa categories.' },
            { q: 'How fast can I get PR in Germany?', a: 'EU Blue Card holders can apply for PR after just 21 months with B1 German skills, or 33 months otherwise.' },
            { q: 'What is the Opportunity Card?', a: 'The Chancenkarte is a points-based job-seeker visa launched in 2024. You can enter Germany for up to 1 year to find a job without a prior offer.' },
            { q: 'Can I bring my family to Germany?', a: 'Yes, EU Blue Card holders can bring their spouse and children. Spouses get immediate work authorization — no waiting period.' },
        ],
    },

    'united-kingdom': {
        name: 'United Kingdom',
        flag: '🇬🇧',
        themeColor: '#012169',
        heroTitle: 'Work in the UK',
        heroSubtitle: '13 million job opportunities across tech, healthcare, finance & engineering',
        jobOpenings: '13 million',
        avgSalary: '£35,000/yr',
        processingTime: '3 weeks – 3 months',
        prPathway: 'Yes (ILR after 5 years)',
        overview: `The UK Skilled Worker visa replaced the old Tier 2 visa post-Brexit and is now the primary route for skilled overseas professionals. 
        With 13 million job openings and a world-class financial, tech, and healthcare sector, the UK remains a top destination. 
        After 5 years on a Skilled Worker visa, you can apply for Indefinite Leave to Remain (ILR) — permanent residency.`,
        visaTypes: [
            { name: 'Skilled Worker Visa', desc: 'Main route for skilled overseas workers', tag: 'Primary Route' },
            { name: 'Health & Care Worker', desc: 'Fast-track for NHS and healthcare roles', tag: 'Healthcare' },
            { name: 'Global Talent Visa', desc: 'For leaders in tech, science & arts', tag: 'Elite' },
            { name: 'Youth Mobility Scheme', desc: 'Ages 18–30 for 2 years', tag: 'Youth' },
        ],
        topJobs: [
            { title: 'Software Developer', salary: '£55,000' },
            { title: 'Registered Nurse', salary: '£35,000' },
            { title: 'Civil Engineer', salary: '£45,000' },
            { title: 'Accountant', salary: '£42,000' },
            { title: 'Teacher', salary: '£30,000' },
            { title: 'Data Analyst', salary: '£48,000' },
        ],
        eligibility: [
            'Job offer from a UK Home Office licensed sponsor',
            'Role must be at RQF Level 3 or above (A-level equivalent)',
            'Minimum salary: £26,200/yr or the going rate for the role',
            'English language proficiency (B1 CEFR)',
            'Valid Certificate of Sponsorship (CoS) from employer',
            'Sufficient funds (£1,270 in savings for 28 days)',
        ],
        services: [
            { icon: <FaUserTie />, title: 'Career Strategy', desc: 'UK job market roadmap & employer targeting' },
            { icon: <FaCheckCircle />, title: 'Profile Building', desc: 'UK-standard LinkedIn & CV optimization' },
            { icon: <FaBriefcase />, title: 'Resume Writing', desc: 'UK-format CV tailored to your sector' },
            { icon: <FaGlobeAmericas />, title: 'Job Marketing', desc: 'Applications to UK job boards & agencies' },
            { icon: <FaPassport />, title: 'Visa Assistance', desc: 'Skilled Worker & CoS guidance' },
            { icon: <FaShieldAlt />, title: 'Pre-Departure Brief', desc: 'Get ready for life in the UK' },
        ],
        marketData: [
            { label: 'Unemployment Rate', value: '4.2%' },
            { label: 'Min. Wage', value: '£11.44/hr' },
            { label: 'Avg. Work Hours', value: '36 hrs/week' },
        ],
        faqs: [
            { q: 'Can my family join me in the UK?', a: 'Yes, your spouse/partner and children under 18 can apply as dependants on your Skilled Worker visa.' },
            { q: 'What is the path to UK permanent residency?', a: 'After 5 continuous years on a Skilled Worker visa, you can apply for Indefinite Leave to Remain (ILR) — permanent residency.' },
            { q: 'What is the Immigration Salary List (ISL)?', a: 'The ISL replaced the Shortage Occupation List in April 2024. Workers in ISL roles receive a 20% salary threshold discount, making sponsorship easier.' },
            { q: 'How long does UK visa processing take?', a: 'Standard processing takes up to 8 weeks. Priority service (£500 extra) typically takes 5 working days from outside the UK.' },
        ],
    },

    usa: {
        name: 'USA',
        flag: '🇺🇸',
        themeColor: '#002868',
        heroTitle: 'Work in the USA',
        heroSubtitle: '8.8 million job vacancies across tech, healthcare, finance and more',
        jobOpenings: '8.8 million',
        avgSalary: '$78,040/yr',
        processingTime: '3–5 months',
        prPathway: 'Yes (EB Green Card)',
        overview: `The USA H-1B visa is the most sought-after work visa in the world for skilled professionals. With 8.8 million job openings 
        and average salaries exceeding $78,000, the USA is the #1 destination for Indian IT and engineering professionals. 
        Despite the H-1B lottery system, employer sponsorship for Green Cards provides a long-term permanent residency pathway.`,
        visaTypes: [
            { name: 'H-1B Visa', desc: 'Specialty occupation workers, 3+3 years', tag: 'Most Popular' },
            { name: 'L-1 Visa', desc: 'Intracompany transferees', tag: 'Transfer' },
            { name: 'O-1 Visa', desc: 'Extraordinary ability in science/arts/business', tag: 'Elite' },
            { name: 'EB-2 / EB-3 Green Card', desc: 'Employment-based permanent residency', tag: 'PR Route' },
        ],
        topJobs: [
            { title: 'Software Engineer', salary: '$120,000' },
            { title: 'Data Scientist', salary: '$115,000' },
            { title: 'Financial Analyst', salary: '$85,000' },
            { title: 'Civil Engineer', salary: '$88,000' },
            { title: 'Doctor/Physician', salary: '$200,000' },
            { title: 'Management Consultant', salary: '$105,000' },
        ],
        eligibility: [
            "Bachelor's degree or higher in a specialty field",
            'Job offer from a US employer willing to sponsor',
            'Employer must file a Labor Condition Application (LCA)',
            'H-1B cap lottery — 65,000 regular + 20,000 Masters quota',
            'Minimum salary: Prevailing wage for the role and location',
            'Valid passport for entire duration of stay',
        ],
        services: [
            { icon: <FaUserTie />, title: 'Career Strategy', desc: 'US job market targeting & H-1B readiness' },
            { icon: <FaCheckCircle />, title: 'Profile Building', desc: 'US-standard LinkedIn & resume optimization' },
            { icon: <FaBriefcase />, title: 'Resume Writing', desc: 'ATS-optimized for US employer systems' },
            { icon: <FaGlobeAmericas />, title: 'Job Marketing', desc: 'Applications to US companies sponsoring H-1B' },
            { icon: <FaPassport />, title: 'Visa Assistance', desc: 'H-1B lottery & petition guidance' },
            { icon: <FaShieldAlt />, title: 'Pre-Departure Brief', desc: 'Get ready for life in the USA' },
        ],
        marketData: [
            { label: 'Unemployment Rate', value: '3.9%' },
            { label: 'Min. Wage (Federal)', value: '$7.25/hr' },
            { label: 'Avg. Work Hours', value: '40 hrs/week' },
        ],
        faqs: [
            { q: 'What is the H-1B lottery and when does it happen?', a: 'USCIS runs the H-1B lottery in March each year for an October start. Due to ~700,000 applications for 85,000 slots, selection is random via electronic lottery.' },
            { q: 'Can I switch jobs on an H-1B?', a: 'Yes, H-1B is portable. Once approved, you can change employers as long as the new employer files an H-1B transfer petition before you join.' },
            { q: 'How long does an H-1B visa last?', a: 'Initially 3 years, extendable to 6 years. If a Green Card is pending, you can extend H-1B indefinitely in 1 or 3-year increments.' },
            { q: 'Which US cities pay the most for Indian tech workers?', a: 'San Francisco Bay Area, New York, Seattle, Austin, and Boston consistently offer the highest salaries and have the most H-1B sponsoring companies.' },
        ],
    },

    uae: {
        name: 'UAE',
        flag: '🇦🇪',
        themeColor: '#006400',
        heroTitle: 'Work in the UAE',
        heroSubtitle: '418,500+ annual vacancies with 0% income tax and a fast 15-day visa process',
        jobOpenings: '418,500+',
        avgSalary: 'AED 191,807/yr',
        processingTime: '15 days',
        prPathway: 'Yes (Golden / Green Visa)',
        overview: `The UAE is the fastest and most accessible work destination for Indian professionals. With zero income tax, a cosmopolitan lifestyle, 
        and a booming job market in Dubai and Abu Dhabi, the UAE is home to 3.5 million+ Indian expats — the largest diaspora group in the country. 
        The new Green Visa allows skilled workers to self-sponsor for 5 years without needing an employer.`,
        visaTypes: [
            { name: 'Employment Visa', desc: 'Employer-sponsored, most common route', tag: 'Standard' },
            { name: 'Green Visa', desc: '5-year self-sponsored for skilled workers', tag: 'Self Sponsored' },
            { name: 'Golden Visa', desc: '10-year residency for investors & top talent', tag: 'Premium' },
            { name: 'Freelance Permit', desc: 'For self-employed professionals', tag: 'Freelancers' },
        ],
        topJobs: [
            { title: 'Project Manager', salary: 'AED 180,000' },
            { title: 'Software Developer', salary: 'AED 210,000' },
            { title: 'Sales Executive', salary: 'AED 130,000' },
            { title: 'Civil Engineer', salary: 'AED 165,000' },
            { title: 'Marketing Manager', salary: 'AED 155,000' },
            { title: 'Finance Manager', salary: 'AED 200,000' },
        ],
        eligibility: [
            'Valid job offer from a UAE-based employer',
            'Relevant educational qualifications and work experience',
            'Medical fitness test and Emirates ID registration',
            'For Green Visa: Salary ≥ AED 15,000/month or self-employed',
            'No strict age restrictions for most visa categories',
            'Valid passport with minimum 6 months validity',
        ],
        services: [
            { icon: <FaUserTie />, title: 'Career Strategy', desc: 'UAE job market targeting by emirate & sector' },
            { icon: <FaCheckCircle />, title: 'Profile Building', desc: 'Gulf-standard LinkedIn & CV optimization' },
            { icon: <FaBriefcase />, title: 'Resume Writing', desc: 'Tailored for UAE employer expectations' },
            { icon: <FaGlobeAmericas />, title: 'Job Marketing', desc: 'Applications to UAE companies & agencies' },
            { icon: <FaPassport />, title: 'Visa Assistance', desc: 'Employment & Green Visa guidance' },
            { icon: <FaShieldAlt />, title: 'Pre-Departure Brief', desc: 'Get ready for life in the UAE' },
        ],
        marketData: [
            { label: 'Income Tax', value: '0%' },
            { label: 'Min. Wage', value: 'No set minimum' },
            { label: 'Avg. Work Hours', value: '48 hrs/week' },
        ],
        faqs: [
            { q: 'Is there income tax in the UAE?', a: 'No personal income tax in the UAE. Your entire salary is take-home pay, making it extremely attractive for professionals of all levels.' },
            { q: 'What is the UAE Green Visa?', a: 'The UAE Green Visa is a 5-year self-sponsored residency for skilled employees, freelancers, and investors — no employer sponsorship required.' },
            { q: 'Can I bring my family to the UAE?', a: 'Yes, once you have a valid residence visa, you can sponsor your spouse, children, and in some cases parents for UAE residency.' },
            { q: 'Which sectors are hiring the most in UAE?', a: 'Technology, construction, hospitality, healthcare, finance, and logistics are the biggest hiring sectors in Dubai and Abu Dhabi.' },
        ],
    },
};

// slug normalizer
const getCountryData = (param) => {
    const map = {
        australia: 'australia',
        canada: 'canada',
        germany: 'germany',
        'united-kingdom': 'united-kingdom',
        uk: 'united-kingdom',
        usa: 'usa',
        uae: 'uae',
    };
    return allCountryData[map[param?.toLowerCase()]];
};

// ─────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────
const CountryWorkVisaPage = () => {
    const { country } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [openFaq, setOpenFaq] = useState(null);
    const [agreement, setAgreement] = useState(false);
    const [mobileType, setMobileType] = useState('Mobile');

    const data = getCountryData(country);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!agreement) return;
        const form = new FormData(e.target);
        const formData = Object.fromEntries(form.entries());
        dispatch(CreateWorkLead({ ...formData, visaType: 'WorkVisa', mobileType, destination: data.name }));
    };

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-black mb-4">Country not found</h2>
                    <button onClick={() => navigate('/work')}
                        className="bg-[#E6412E] text-white px-6 py-3 rounded-lg font-bold">
                        ← Back to Work Visa Page
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full bg-white font-sans text-gray-800">

            {/* ── HERO + FORM ── */}
            <div
                className="text-white py-16 px-6 md:px-20 relative overflow-hidden border-b-8 border-[#E6412E]"
                style={{
                    background: `linear-gradient(135deg, ${data.themeColor}ee, ${data.themeColor}99)`
                }}
            >
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E6412E] rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">

                    {/* Left text */}
                    <div className="lg:w-1/2">
                        <button onClick={() => navigate('/work')}
                            className="text-white/70 hover:text-white text-sm mb-6 flex items-center gap-2 transition-colors">
                            ← All Work Visa Countries
                        </button>
                        <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 text-sm font-bold">
                            {data.flag} Work Abroad with Your Family
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                            {data.heroTitle}<br />
                            <span className="text-yellow-300">Quickly & Easily</span>
                        </h1>
                        <p className="text-lg opacity-90 max-w-lg mb-8">{data.heroSubtitle}</p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                                <div className="text-3xl font-black text-yellow-300">{data.jobOpenings}</div>
                                <div className="text-sm opacity-80">Job Openings</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                                <div className="text-3xl font-black text-yellow-300">{data.avgSalary}</div>
                                <div className="text-sm opacity-80">Average Salary</div>
                            </div>
                        </div>

                        <button className="bg-white text-[#6A2B86] px-8 py-4 rounded-lg font-black hover:bg-yellow-300 transition-all shadow-lg">
                            Search {data.name} Jobs →
                        </button>
                    </div>

                    {/* Form */}
                    <div className="lg:w-[420px] bg-white rounded-2xl shadow-2xl p-8 text-gray-800">
                        <div className="text-center mb-6">
                            <div className="text-4xl mb-2">{data.flag}</div>
                            <h3 className="text-2xl font-black mb-2">Work in {data.name}?</h3>
                            <p className="text-sm text-gray-500">Get Free Expert Consultation</p>
                        </div>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder="Your Name"
                                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-[#E6412E] outline-none transition-all" />
                            <input type="email" name="email" placeholder="Email ID"
                                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-[#E6412E] outline-none transition-all" />
                            <div className="flex gap-2">
                                <select name="mobileExtension" className="w-24 border-2 border-gray-200 rounded-lg px-2 py-3 outline-none bg-white">
                                    <option value={91}>🇮🇳 +91</option>
                                    <option value={1}>🇺🇸 +1</option>
                                    <option value={44}>🇬🇧 +44</option>
                                </select>
                                <input type="tel" name="mobile" placeholder="Mobile Number"
                                    className="flex-1 border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-[#E6412E] outline-none transition-all" />
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <input type="checkbox" onChange={(e) => setMobileType(e.target.checked ? 'Whatsapp' : 'Mobile')} className="w-4 h-4" />
                                <label className="text-gray-600">Use this as WhatsApp number</label>
                            </div>

                            {/* Pre-filled locked destination */}
                            <div className="w-full border-2 border-gray-100 bg-gray-50 rounded-lg px-4 py-3 font-bold text-gray-700">
                                {data.flag} {data.name} — Work Visa
                            </div>

                            <div className="flex items-start gap-2 text-xs text-gray-500">
                                <input type="checkbox" className="mt-1" onChange={() => setAgreement(p => !p)} />
                                <label>I accept the <span className="text-[#E6412E] underline cursor-pointer">Terms & Conditions</span></label>
                            </div>
                            <button type="submit" disabled={!agreement}
                                className={`w-full text-white font-black py-4 rounded-lg uppercase tracking-wider transition-all shadow-lg
                                    ${agreement ? 'bg-[#E6412E] hover:bg-black' : 'bg-gray-300 cursor-not-allowed'}`}>
                                Get Free Consultation
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* ── WHY WORK IN {COUNTRY} ── */}
            <div className="max-w-7xl mx-auto py-20 px-6">
                <div className="text-center mb-16">
                    <div className="inline-block bg-yellow-100 px-4 py-2 rounded-full mb-4">
                        <FaLightbulb className="inline mr-2 text-yellow-600" />
                        <span className="font-bold text-sm text-gray-700">Why Work in {data.name}?</span>
                    </div>
                    <h2 className="text-4xl font-black mb-4">{data.name} Work Visa Overview</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">{data.overview}</p>
                </div>

                {/* Market stats */}
                <div className="bg-gradient-to-r from-purple-50 to-red-50 p-8 rounded-xl border border-gray-200">
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        {data.marketData.map((stat, i) => (
                            <div key={i}>
                                <div className={`text-4xl font-black mb-2 ${i % 2 === 0 ? 'text-[#6A2B86]' : 'text-[#E6412E]'}`}>
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── VISA TYPES ── */}
            <div className="bg-gray-50 py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">{data.name} Visa Types</h2>
                        <div className="w-20 h-1 bg-[#E6412E] mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {data.visaTypes.map((v, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:border-[#6A2B86] transition-all">
                                <span className="inline-block bg-[#E6412E] text-white text-xs font-bold px-2 py-1 rounded mb-3">
                                    {v.tag}
                                </span>
                                <h4 className="font-black text-lg mb-2">{v.name}</h4>
                                <p className="text-sm text-gray-600">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── TOP JOBS ── */}
            <div className="max-w-7xl mx-auto py-20 px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black mb-4">Top In-Demand Jobs in {data.name}</h2>
                    <div className="w-20 h-1 bg-[#E6412E] mx-auto"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {data.topJobs.map((job, i) => (
                        <div key={i} className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#6A2B86] hover:shadow-lg transition-all cursor-pointer text-center group">
                            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                                <FaBriefcase className="inline text-[#6A2B86]" />
                            </div>
                            <div className="font-bold text-sm text-gray-700 mb-1">{job.title}</div>
                            <div className="text-xs text-[#E6412E] font-bold">{job.salary}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── ELIGIBILITY ── */}
            <div className="bg-gradient-to-br from-[#2D3E50] to-[#1a252f] text-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">Eligibility Requirements</h2>
                        <p className="text-white/80">Key criteria to qualify for a {data.name} work visa</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.eligibility.map((item, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl hover:bg-white/20 transition-all flex items-start gap-4">
                                <FaCheckCircle className="text-yellow-300 text-xl mt-1 shrink-0" />
                                <p className="text-sm leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── OUR SERVICES ── */}
            <div className="max-w-7xl mx-auto py-20 px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black mb-4">Our Services for {data.name}</h2>
                    <p className="text-gray-600">End-to-end support for your overseas career journey</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.services.map((service, i) => (
                        <div key={i} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all">
                            <div className="text-4xl text-[#6A2B86] mb-4">{service.icon}</div>
                            <h4 className="font-bold text-lg mb-2">{service.title}</h4>
                            <p className="text-sm text-gray-600">{service.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-gradient-to-r from-purple-50 to-red-50 p-8 rounded-2xl border border-gray-200">
                    <div className="text-center">
                        <h3 className="text-2xl font-black mb-4">Complete Job Search Support</h3>
                        <p className="text-gray-600 mb-6">From profile building to work visa approval, we handle everything</p>
                        <div className="grid md:grid-cols-4 gap-4 text-center">
                            {['Resume Marketing', 'LinkedIn Optimization', 'Interview Coaching', 'Visa Filing'].map((item, i) => (
                                <div key={i} className="bg-white p-4 rounded-lg">
                                    <FaCheckCircle className="text-green-600 text-2xl mx-auto mb-2" />
                                    <div className="font-bold text-sm">{item}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── POST RESUME CTA ── */}
            <div className="bg-gradient-to-r from-[#6A2B86] to-[#8B3A9C] py-16 px-6 text-center text-white">
                <h2 className="text-4xl font-black mb-4">Post Your Resume for {data.name} Jobs</h2>
                <p className="text-lg mb-8 opacity-90">Your overseas career in {data.name} starts here!</p>
                <button className="bg-white text-[#6A2B86] px-12 py-4 rounded-lg font-black hover:bg-yellow-300 hover:scale-105 transition-all shadow-2xl">
                    Post Resume Now →
                </button>
            </div>

            {/* ── TESTIMONIALS ── */}
            <div className="max-w-7xl mx-auto py-24 px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black mb-4">Success Stories from {data.name}</h2>
                    <p className="text-gray-600">What Global Indians say about Immify in shaping their career in {data.name}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { name: 'Rajesh Kumar', role: `Software Engineer, ${data.name}`, img: 'photo-1507003211169-0a1dd7228f2d' },
                        { name: 'Priya Sharma', role: `Healthcare Worker, ${data.name}`, img: 'photo-1494790108377-be9c29b29330' },
                        { name: 'Amit Patel', role: `Finance Manager, ${data.name}`, img: 'photo-1500648767791-00dcc994a43e' },
                    ].map((user, i) => (
                        <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all group">
                            <div className="relative h-56 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                                <img src={`https://images.unsplash.com/${user.img}?q=80&w=400`}
                                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                                    alt={user.name} />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <FaPlayCircle className="text-6xl text-white cursor-pointer hover:scale-110 transition-transform drop-shadow-lg" />
                                </div>
                            </div>
                            <div className="p-6">
                                <h4 className="font-black text-xl mb-1">{user.name}</h4>
                                <p className="text-xs font-bold text-[#E6412E] uppercase mb-4">{user.role}</p>
                                <p className="text-sm text-gray-600 mb-4">
                                    "Immify helped me land my dream job in {data.name}. Their job search services and visa guidance were exceptional throughout."
                                </p>
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

            {/* ── FAQ ── */}
            <div className="bg-gray-50 py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-black mb-4">{data.name} Work Visa — FAQs</h2>
                        <div className="w-20 h-1 bg-[#E6412E] mx-auto"></div>
                    </div>
                    <div className="space-y-3">
                        {data.faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#6A2B86] transition-all">
                                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                                    <span className="font-bold text-gray-800 pr-4">{faq.q}</span>
                                    {openFaq === idx
                                        ? <FaChevronUp className="text-[#E6412E] shrink-0" />
                                        : <FaChevronDown className="text-gray-400 shrink-0" />}
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

            {/* ── FINAL CTA ── */}
            <div className="bg-[#E6412E] py-16 px-6 text-center text-white">
                <h3 className="text-3xl font-black mb-4 tracking-tight">Ready to Start Your Career in {data.name}?</h3>
                <p className="text-lg mb-8 opacity-90">Get end-to-end job search services from Immify — Your trusted career partner</p>
                <button onClick={scrollToTop}
                    className="bg-white text-[#E6412E] px-12 py-4 rounded-lg font-black hover:bg-black hover:text-white transition-all shadow-2xl">
                    Book Free Consultation
                </button>
            </div>
        </div>
    );
};

export default CountryWorkVisaPage;
