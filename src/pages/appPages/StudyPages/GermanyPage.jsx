import React from "react";
import { germanyUniversities } from "../../data/germany";
import UniversityCard from "../../../components/UniversityCard";
import { GraduationCap } from "lucide-react";
import InquiryForm from "../../../components/InquiryForm";

const GermanyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <div className="inline-flex items-center gap-3 mb-3">
          <GraduationCap className="h-10 w-10 text-blue-600" />
          <h1 className="text-4xl font-extrabold text-gray-900">Study in Germany</h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Explore top German universities — programs, eligibility, fees, and admission details.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {germanyUniversities.map((uni) => (
            <UniversityCard key={uni.id} uni={uni} />
          ))}
        </div>
        
        <div className="lg:sticky lg:top-10 h-fit bg-white  rounded-2xl border border-gray-200 shadow-sm">
          {/* <h3 className="text-xl font-bold mb-4">Inquiry Form</h3>
          {/* Yahan aapka InquiryForm component aayega */}
          {/* <p className="text-sm text-gray-500">Form placeholder for destination: Germany</p> */} 
          <InquiryForm destination="Germany"/>
        </div>
      </div>
    </div>
  );
};

export default GermanyPage;