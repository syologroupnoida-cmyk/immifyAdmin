import React from "react";
import { australiaUniversities } from "../../data/australia.data";
import UniversityCard from "../../../components/UniversityCard";
import InquiryForm from "../../../components/InquiryForm";
import { GraduationCap, MapPin } from "lucide-react";

const AustraliaPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <div className="inline-flex items-center gap-3 mb-3">
          <GraduationCap className="h-10 w-10 text-amber-600" />
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Study in Australia
          </h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          From the vibrant cities of Sydney and Melbourne to the capital Canberra, 
          Australia offers world-class education and a unique lifestyle.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        
        {/* Left Column: University Cards */}
        <div className="lg:col-span-2 space-y-6">
          {australiaUniversities.map((uni) => (
            <UniversityCard key={uni.id} uni={uni} />
          ))}
        </div>

        {/* Right Column: Sticky Sidebar */}
        <div className="lg:sticky lg:top-10 lg:self-start space-y-6">
          <InquiryForm destination="Australia" />
          
          {/* Quick Info Card */}
          <div className="bg-white  rounded-2xl border border-gray-200 shadow-sm">
            <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Why Study Down Under?</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="bg-green-100 p-2 rounded-lg h-fit">🐨</div>
                <p className="text-sm text-gray-600"><strong>Post-Study Work:</strong> Excellent work visa opportunities after graduation.</p>
              </div>
              <div className="flex gap-3">
                <div className="bg-blue-100 p-2 rounded-lg h-fit">🏖️</div>
                <p className="text-sm text-gray-600"><strong>Lifestyle:</strong> Top-ranked student cities with high quality of life.</p>
              </div>
              <div className="flex gap-3">
                <div className="bg-amber-100 p-2 rounded-lg h-fit">🎓</div>
                <p className="text-sm text-gray-600"><strong>Group of Eight:</strong> Access to world-leading research universities.</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AustraliaPage;