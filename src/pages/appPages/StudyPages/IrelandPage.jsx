import React from "react";
import { irelandUniversities } from "../../data/ireland.data";
import UniversityCard from "../../../components/UniversityCard";
import InquiryForm from "../../../components/InquiryForm";
import { GraduationCap, Briefcase, Zap } from "lucide-react";

const IrelandPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <div className="inline-flex items-center gap-3 mb-3">
          <GraduationCap className="h-10 w-10 text-emerald-600" />
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Study in <span className="text-emerald-600">Ireland</span>
          </h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          The "Emerald Isle" — A global hub for technology, pharmaceuticals, and finance. Study in English-speaking Europe and boost your career.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        
        {/* Left: University Cards */}
        <div className="lg:col-span-2 space-y-6">
          {irelandUniversities.map((uni) => (
            <UniversityCard key={uni.id} uni={uni} />
          ))}
        </div>

        {/* Right: Sidebar */}
        <div className="lg:sticky lg:top-10 lg:self-start space-y-6">
          <InquiryForm destination="Ireland" />
          
          {/* Ireland Benefit Card */}
          <div className="bg-white p-6 rounded-2xl border-l-4 border-emerald-500 shadow-sm">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
               <Zap className="text-emerald-500" size={18} /> Why Ireland?
            </h4>
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex gap-3">
                <Briefcase className="text-emerald-600 shrink-0" size={20} />
                <p><strong>2-Year Stay Back:</strong> Master's students get a 24-month post-study work permit.</p>
              </div>
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100 italic">
                "Dublin is home to 9 of the top 10 global ICT companies and 8 of the top 10 global pharma companies."
              </div>
              <ul className="list-disc pl-5 space-y-1">
                <li>English-speaking country</li>
                <li>Fast-track Visa for Indian students</li>
                <li>Strong focus on Research & Innovation</li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default IrelandPage;