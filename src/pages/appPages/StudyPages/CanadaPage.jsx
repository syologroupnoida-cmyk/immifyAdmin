import React from "react";
import { canadaUniversities } from "../../data/canada.data";
import UniversityCard from "../../../components/UniversityCard";
import InquiryForm from "../../../components/InquiryForm";
import { GraduationCap, MapPin, ShieldCheck } from "lucide-react";

const CanadaPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <div className="inline-flex items-center gap-3 mb-3">
          <GraduationCap className="h-10 w-10 text-red-600" />
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Study in <span className="text-red-600">Canada</span>
          </h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          High-quality education, multicultural environment, and simplified permanent residency paths. Join thousands of international students in Canada.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        
        {/* Left Column: University List */}
        <div className="lg:col-span-2 space-y-6">
          {canadaUniversities.map((uni) => (
            <UniversityCard key={uni.id} uni={uni} />
          ))}
        </div>

        {/* Right Column: Sticky Sidebar */}
        <div className="lg:sticky lg:top-10 lg:self-start space-y-6">
          <InquiryForm destination="Canada" />
          
          {/* Canada Specific Info */}
          <div className="bg-white p-6 rounded-2xl border-t-4 border-red-500 shadow-md">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <ShieldCheck className="text-red-600" size={20} /> Essential Canada Info
            </h4>
            <div className="space-y-4">
              <div className="p-3 bg-red-50 rounded-lg">
                <p className="text-xs font-bold text-red-700 uppercase">SDS Stream</p>
                <p className="text-sm text-gray-700 italic">Faster visa processing for Indian students with GIC ($20,635+).</p>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>🍁 <strong>PGWP:</strong> Up to 3 years work permit post-graduation.</li>
                <li>🍁 <strong>PR Path:</strong> Express Entry points for Canadian education.</li>
                <li>🍁 <strong>Work:</strong> Off-campus work allowed during studies.</li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CanadaPage;