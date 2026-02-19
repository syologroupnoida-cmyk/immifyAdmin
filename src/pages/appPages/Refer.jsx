import React from 'react';
import { FaUserPlus, FaEnvelopeOpenText, FaGift, FaArrowRight, FaShareAlt, FaHandHoldingUsd } from 'react-icons/fa';

const Refer = () => {
    return (
        <div className="w-full bg-white font-sans text-gray-900">
            
            {/* --- HERO SECTION --- */}
            <div className="bg-[#6A2B86] text-white py-20 px-6 md:px-20 text-center relative border-b-8 border-[#E6412E]">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                        Refer & <span className="text-yellow-400">Earn Rewards</span>
                    </h1>
                    <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-8">
                        Apne doston aur family ko Immify ke baare mein batayein aur unki global journey shuru karwane par exciting rewards payein.
                    </p>
                    <button className="bg-[#E6412E] text-white px-12 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl">
                        Get My Referral Link
                    </button>
                </div>
            </div>

            {/* --- HOW IT WORKS (Three Pillars) --- */}
            <div className="max-w-7xl mx-auto py-24 px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-black uppercase text-gray-800">How It Works</h2>
                    <div className="w-20 h-1 bg-[#E6412E] mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Step 1 */}
                    <div className="text-center group">
                        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-dashed border-gray-200 group-hover:border-[#E6412E] group-hover:bg-red-50 transition-all">
                            <FaShareAlt className="text-3xl text-[#6A2B86]" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 uppercase italic">1. Share Link</h3>
                        <p className="text-gray-500 text-sm leading-relaxed px-4">
                            Apna unique referral link WhatsApp, Email ya Social Media par share karein.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="text-center group">
                        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-dashed border-gray-200 group-hover:border-[#E6412E] group-hover:bg-red-50 transition-all">
                            <FaEnvelopeOpenText className="text-3xl text-[#6A2B86]" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 uppercase italic">2. Friend Joins</h3>
                        <p className="text-gray-500 text-sm leading-relaxed px-4">
                            Jab aapka friend aapke link se sign-up karke hamari coaching ya visa service leta hai.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="text-center group">
                        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-dashed border-gray-200 group-hover:border-[#E6412E] group-hover:bg-red-50 transition-all">
                            <FaGift className="text-3xl text-[#6A2B86]" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 uppercase italic">3. Earn Rewards</h3>
                        <p className="text-gray-500 text-sm leading-relaxed px-4">
                            Successfull enrollment par aapko Amazon vouchers ya cash rewards milte hain.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- EARNING POTENTIAL CARD --- */}
            <div className="bg-[#F4F7F9] py-20 px-6">
                <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-sm overflow-hidden flex flex-col md:flex-row border border-gray-100">
                    <div className="md:w-1/2 p-12 bg-[#2D3E50] text-white">
                        <h2 className="text-3xl font-black uppercase mb-6 leading-tight">Your Friends <br /> Benefit Too!</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <FaHandHoldingUsd className="text-yellow-400 mt-1" />
                                <span className="text-sm">Unhe milta hai flat ₹2000 tak ka discount coaching fees par.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaUserPlus className="text-yellow-400 mt-1" />
                                <span className="text-sm">Free technical evaluation report unke visa profile ke liye.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 p-12 flex flex-col justify-center items-center text-center">
                        <p className="text-gray-400 uppercase font-bold tracking-widest text-xs mb-2">Earning Potential</p>
                        <h3 className="text-5xl font-black text-[#E6412E] mb-4">Upto ₹5000</h3>
                        <p className="text-gray-600 mb-8 text-sm italic">Per successful referral referral!</p>
                        <button className="w-full bg-[#6A2B86] text-white py-4 font-bold uppercase tracking-widest hover:bg-black transition-all">
                            Refer a Friend Now <FaArrowRight className="inline ml-2" />
                        </button>
                    </div>
                </div>
            </div>

            {/* --- FAQ MINI SECTION --- */}
            <div className="max-w-4xl mx-auto py-20 px-6">
                <h2 className="text-2xl font-black uppercase mb-8 text-center underline decoration-[#E6412E] underline-offset-8">Terms & Conditions</h2>
                <div className="space-y-4 text-sm text-gray-500 leading-relaxed">
                    <p>• Referral bonus tabhi credit hoga jab referral client successfully full fee pay karega.</p>
                    <p>• Ek person multiple referrals bhej sakta hai, koi limit nahi hai.</p>
                    <p>• Vouchers ya cash rewards registration ke 30 days ke andar process honge.</p>
                </div>
            </div>
        </div>
    );
};

export default Refer;