import React from 'react';
import Heading2 from '../common/Heading2';
import { LuMousePointerClick } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6"; // Using FaCheck for a cleaner look

const LeadPricing = () => {
    const pricingData = [
        {
            Icon: LuMousePointerClick,
            title: 'Manual Lead Purchase',
            priceTag: '₹70 - ₹399',
            badge: 'Pay Per Selection',
            description: 'Browse our real-time database and handpick immigration leads that match your expertise.',
            points: [
                'Filter by Study, PR, or Work Visa',
                'OTP & Phone verified prospects',
                'No monthly commitment required',
                'Instant data access after purchase',
            ],
            btnColor: 'bg-[#E6412E]',
        },
        {
            Icon: CiSettings,
            title: 'Auto Lead Purchase',
            priceTag: 'Starts ₹130',
            badge: 'Hands-Free Growth',
            description: 'Automate your sales pipeline. Our system pushes qualified leads directly to your CRM.',
            points: [
                'Tiered options: Base & Premium',
                'Real-time lead distribution',
                'Advanced geographical filtering',
                'Daily lead limit control',
            ],
            btnColor: 'bg-[#6A2B86]',
        },
    ];

    return (
        <div className="bg-[#1a1a2e] py-20 px-6 text-white overflow-hidden relative">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full -mr-20 -mt-20"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <Heading2 text="Lead Pricing & Strategic Delivery" textColor="text-white" />
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm uppercase tracking-[0.2em]">
                        Scalable Lead Solutions for Immigration Consultants
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {pricingData.map((item, index) => (
                        <div 
                            key={index} 
                            className="group bg-white rounded-sm border-b-4 border-transparent hover:border-[#E6412E] transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col"
                        >
                            <div className="p-10 flex-grow">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-4 bg-gray-50 rounded-lg group-hover:scale-110 transition-transform duration-500">
                                        <item.Icon className="text-4xl text-[#1a1a2e]" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
                                        {item.badge}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-1">
                                    {item.title}
                                </h3>
                                <div className="text-3xl font-black text-[#E6412E] mb-4">
                                    {item.priceTag} <span className="text-sm text-gray-400 font-medium">/ lead</span>
                                </div>
                                
                                <p className="text-gray-500 text-sm leading-relaxed mb-8 border-l-2 border-gray-100 pl-4 italic">
                                    {item.description}
                                </p>

                                <ul className="space-y-4">
                                    {item.points.map((point, idx) => (
                                        <li key={idx} className="flex items-center gap-3 group/item">
                                            <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                                                <FaCheck className="text-[10px] text-green-600" />
                                            </div>
                                            <span className="text-gray-700 text-sm font-medium group-hover/item:text-black transition-colors">
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="px-10 pb-10">
                                <button className={`w-full ${item.btnColor} text-white py-4 font-black uppercase text-xs tracking-[0.2em] shadow-xl hover:bg-black transition-all duration-300 active:scale-95`}>
                                    Get Started Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-gray-500 text-xs uppercase tracking-widest">
                        Trusted by 500+ Partner Agencies Globally
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LeadPricing;