import React, { useState } from "react";
import InquiryForm from "../../components/InquiryForm";
import { 
  CheckCircle2, 
  Map, 
  Award, 
  ArrowRight, 
  Star, 
  Users, 
  Zap,
  Stamp
} from "lucide-react";

const CanadaPRVisa = () => {
  const [showForm, setShowForm] = useState(false);

  const programs = [
    {
      code: "FSWP",
      name: "Federal Skilled Worker",
      desc: "For professionals with foreign work experience and high language proficiency.",
    },
    {
      code: "CEC",
      name: "Canadian Experience Class",
      desc: "For individuals with at least 1 year of Canadian work experience.",
    },
    {
      code: "PNP",
      name: "Provincial Nominee Program",
      desc: "Nomination by a province to fast-track your PR. Adds 600 CRS points.",
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* HERO SECTION - SPLIT LAYOUT */}
      <div className="flex flex-col lg:flex-row min-h-[90vh]">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 py-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 px-4 py-2 rounded-full mb-6 text-red-700">
              <Zap size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">Express Entry 2026 Pathways</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1]">
              Canada <span className="text-red-600">PR</span> Visa
            </h1>

            <p className="mt-8 text-slate-600 text-lg leading-relaxed">
              Settle in Canada permanently through <b>Express Entry</b>. Benefit from free world-class education for your children, free universal healthcare, and a strong economy for your career growth.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-red-50/50 rounded-2xl border border-red-100">
                <Star className="text-red-600" size={20} />
                <span className="font-bold text-slate-800">Fast 6-Month Processing</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-red-50/50 rounded-2xl border border-red-100">
                <Users className="text-red-600" size={20} />
                <span className="font-bold text-slate-800">Family Sponsorship</span>
              </div>
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="mt-10 bg-red-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-200 flex items-center gap-3 group"
            >
              Get Your CRS Score
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Dynamic Image or Form */}
        <div className="w-full lg:w-1/2 relative bg-slate-50 flex items-center justify-center p-6 lg:p-12">
          {!showForm ? (
            <div className="relative z-10 w-full max-w-lg">
              <img
                src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce"
                alt="Canada Landscape"
                className="rounded-[2.5rem] shadow-2xl w-full object-cover aspect-[4/5]"
              />
              {/* Floating Badge */}
              <div className="absolute top-6 -right-6 bg-white p-5 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
                 <div className="flex items-center gap-3">
                    <div className="bg-red-100 p-2 rounded-lg text-red-600">
                       <Stamp size={24} />
                    </div>
                    <div>
                       <p className="text-[10px] text-slate-500 font-bold uppercase">Target 2026</p>
                       <p className="text-lg font-black text-slate-800">500,000 New PRs</p>
                    </div>
                 </div>
              </div>
            </div>
          ) : (
            <div className="relative z-10 w-full max-w-md animate-in slide-in-from-right-10 duration-500">
              <InquiryForm destination="Canada PR" onClose={() => setShowForm(false)} />
            </div>
          )}
        </div>
      </div>

      {/* CRS SCORE & ELIGIBILITY SECTION */}
      <section className="py-24 bg-slate-50 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">How Do You Qualify?</h2>
            <p className="text-slate-500">The Comprehensive Ranking System (CRS) is Canada's points-based model.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((prog, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-red-500 hover:shadow-2xl transition-all group">
                <div className="h-14 w-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 font-black text-xl">
                  {prog.code}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{prog.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{prog.desc}</p>
                <div className="h-1 w-0 bg-red-600 transition-all group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE ELIGIBILITY CONTENT */}
      <section className="py-24 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight">
              Express Entry <br /> Requirements
            </h2>
            <div className="space-y-6">
              {[
                { t: "Age", d: "Highest points for age group 18-35." },
                { t: "Education", d: "Minimum Bachelors degree (ECA required for foreign degrees)." },
                { t: "Work Experience", d: "At least 1 year of skilled work experience (NOC TEER levels)." },
                { t: "Language", d: "High proficiency in English (IELTS/CELPIP) or French (TEF)." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors">
                  <div className="bg-green-100 p-1 h-fit rounded-full">
                    <CheckCircle2 className="text-green-600" size={18} />
                  </div>
                  <p><span className="font-bold text-slate-800 block">{item.t}</span><span className="text-slate-500 text-sm">{item.d}</span></p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-red-600 rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 p-8 opacity-20">
                  <Map size={180} />
               </div>
               <h3 className="text-3xl font-bold mb-6">Latest Draw Insights</h3>
               <p className="text-red-100 mb-8 leading-relaxed">
                 IRCC is now conducting <b>Category-Based Draws</b> focusing on Healthcare, STEM, Trades, and French speakers. 
                 This means even with a lower CRS, you might get an ITA!
               </p>
               <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl">
                    <Award className="text-red-200" />
                    <span>600 Points added for Provincial Nomination</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CanadaPRVisa;