import React from "react";
import { usaUniversities } from "../../data/usa.data";
import UniversityCard from "../../../components/UniversityCard";
import InquiryForm from "../../../components/InquiryForm";
import { GraduationCap } from "lucide-react";

const USAPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <GraduationCap className="h-12 w-12 text-blue-700" />
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Study in USA
          </h1>
        </div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          The United States is home to some of the world's most prestigious institutions. 
          Explore top Ivy League and research universities—everything from fees to deadlines in one place.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">
        
        {/* Left: University Cards */}
        <div className="lg:col-span-2 space-y-6">
          {usaUniversities.map((uni) => (
            <UniversityCard key={uni.id} uni={uni} />
          ))}
        </div>

        {/* Right: Sticky Form */}
        <div className="lg:sticky lg:top-10 lg:self-start">
          <div className="bg-white p-2 rounded-2xl shadow-xl">
             <InquiryForm destination="USA" />
          </div>
          
          {/* Extra Sidebar Info */}
          <div className="mt-6 p-5 bg-blue-600 rounded-2xl text-white shadow-lg">
            <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
              💡 Why USA?
            </h4>
            <ul className="text-sm space-y-2 opacity-90">
              <li>• Home to 8 of the top 10 universities.</li>
              <li>• Massive research funding & facilities.</li>
              <li>• Optional Practical Training (OPT) for STEM.</li>
              <li>• Diverse culture and global networking.</li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default USAPage;