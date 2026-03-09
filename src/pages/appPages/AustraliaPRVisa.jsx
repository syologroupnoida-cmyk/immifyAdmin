import React, { useState } from "react";
import InquiryForm from "../../components/InquiryForm";
import { 
  CheckCircle2, 
  Globe2, 
  Briefcase, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  BarChart3,
  MapPin
} from "lucide-react";

const AustraliaPRVisa = () => {
  const [showForm, setShowForm] = useState(false);

  const visaCategories = [
    {
      code: "189",
      name: "Skilled Independent",
      desc: "No sponsorship required. Live and work anywhere in Australia permanently.",
    },
    {
      code: "190",
      name: "Skilled Nominated",
      desc: "Requires nomination by a State or Territory. Permanent residency from day one.",
    },
    {
      code: "491",
      name: "Skilled Regional",
      desc: "Provisional visa for 5 years. Path to PR after living in regional areas for 3 years.",
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* MAIN HERO & SPLIT SECTION */}
      <div className="flex flex-col lg:flex-row min-h-[90vh]">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 py-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-6 text-blue-700">
              <ShieldCheck size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">Australian Migration 2026</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1]">
              Australia <span className="text-blue-600">PR</span> Visa
            </h1>

            <p className="mt-8 text-slate-600 text-lg leading-relaxed">
              Australia is looking for skilled professionals. With a Permanent Residency, 
              you get <b>Universal Healthcare (Medicare)</b>, free education for children, 
              and a pathway to one of the world's strongest passports.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <BarChart3 className="text-blue-600 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-800">Points-Based System</h4>
                  <p className="text-sm text-slate-500">Score points based on Age, Skills, English, and Experience.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <Users className="text-blue-600 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-800">Family Benefits</h4>
                  <p className="text-sm text-slate-500">Include your spouse and children in the same application.</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="mt-10 bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center gap-3 group"
            >
              Check My Eligibility
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Image or Form */}
        <div className="w-full lg:w-1/2 relative bg-slate-50 flex items-center justify-center p-6 lg:p-12">
          {!showForm ? (
            <div className="relative z-10 w-full max-w-lg">
              <img
                src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be"
                alt="Australia PR"
                className="rounded-[2.5rem] shadow-2xl w-full object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 animate-bounce-slow">
                 <p className="text-xs text-slate-500 font-bold uppercase">PR Success Rate</p>
                 <p className="text-2xl font-black text-blue-600">94%</p>
              </div>
            </div>
          ) : (
            <div className="relative z-10 w-full max-w-md">
              <InquiryForm destination="Australia PR" onClose={() => setShowForm(false)} />
            </div>
          )}
        </div>
      </div>

      {/* ADDITIONAL DETAILS SECTION */}
      <section className="py-24 bg-slate-900 text-white px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Eligibility Criteria</h2>
              <div className="space-y-6">
                {[
                  { t: "Age Limit", d: "You must be under 45 years of age to apply." },
                  { t: "Skill Assessment", d: "Your occupation must be on the Skilled Occupation List (SOL)." },
                  { t: "English Proficiency", d: "Competent English (IELTS/PTE) is mandatory." },
                  { t: "Health & Character", d: "Must meet health requirements and have a clean criminal record." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="text-blue-400 shrink-0" />
                    <p><span className="font-bold block">{item.t}</span><span className="text-slate-400">{item.d}</span></p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6">Visa Subclasses</h3>
              <div className="space-y-4">
                {visaCategories.map((visa, i) => (
                  <div key={i} className="p-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition">
                    <div className="flex justify-between mb-2">
                      <span className="font-black text-blue-400">Subclass {visa.code}</span>
                    </div>
                    <h4 className="font-bold text-lg">{visa.name}</h4>
                    <p className="text-sm text-slate-400 mt-1">{visa.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-16">Step-by-Step PR Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
             {[
               { s: "Step 01", t: "Skill Assessment", d: "Get your qualifications verified by Australian authorities." },
               { s: "Step 02", t: "Expression of Interest", d: "Submit your profile via SkillSelect to the Department." },
               { s: "Step 03", t: "Invitation to Apply", d: "Receive an official ITA based on your points score." },
               { s: "Step 04", t: "Visa Grant", d: "Submit documents and get your PR visa stamped." }
             ].map((step, i) => (
               <div key={i} className="relative group text-left">
                 <div className="text-6xl font-black text-slate-100 group-hover:text-blue-50 transition-colors absolute -top-8 -left-2 z-0">
                    {step.s.split(" ")[1]}
                 </div>
                 <div className="relative z-10">
                   <h4 className="font-bold text-xl text-slate-800 mb-2">{step.t}</h4>
                   <p className="text-slate-500 text-sm leading-relaxed">{step.d}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AustraliaPRVisa;