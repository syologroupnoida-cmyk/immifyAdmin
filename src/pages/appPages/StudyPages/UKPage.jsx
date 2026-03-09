import React from "react";
import { ukUniversities } from "../../data/uk.dada";
import UniversityCard from "../../../components/UniversityCard";
import InquiryForm from "../../../components/InquiryForm";
import { GraduationCap, Landmark, Briefcase } from "lucide-react";

const UKPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      {/* UK Hero Section */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <Landmark className="h-10 w-10 text-blue-900" />
          <h1 className="text-4xl md:text-5xl font-black text-slate-900">
            Study in <span className="text-blue-900 uppercase">United Kingdom</span>
          </h1>
        </div>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium italic">
          Home to the world's most prestigious Russell Group universities. Experience global culture and top-tier academics in just 12 months for a Master's.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        {/* Left Column: Cards */}
        <div className="lg:col-span-2 space-y-6">
          {ukUniversities.map((uni) => (
            <UniversityCard key={uni.id} uni={uni} />
          ))}
        </div>

        {/* Right Column: Sticky Sidebar */}
        <div className="lg:sticky lg:top-10 lg:self-start space-y-6">
          <InquiryForm destination="UK" />
          
          {/* Graduate Route / PSW Highlight */}
          <div className="bg-blue-900 p-6 rounded-3xl text-white shadow-xl relative overflow-hidden">
             <div className="relative z-10">
                <h4 className="font-bold text-xl flex items-center gap-2 mb-3">
                  <Briefcase size={22} /> Graduate Route
                </h4>
                <p className="text-sm opacity-90 leading-relaxed mb-4">
                  International students can stay and work in the UK for <strong>2 years</strong> (3 years for Ph.D.) after graduation with the Graduate Visa route.
                </p>
                <div className="bg-white/10 p-3 rounded-xl border border-white/20">
                   <p className="text-xs font-mono">• No sponsorship required</p>
                   <p className="text-xs font-mono">• Gain global work experience</p>
                </div>
             </div>
             {/* Decorative background circle */}
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UKPage;