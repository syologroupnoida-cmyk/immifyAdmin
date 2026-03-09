import React, { useState } from "react";
import {
  GraduationCap, MapPin, Calendar, Trophy, BookOpen, CheckCircle,
  ClipboardList, FileText, Wallet, Award, Globe, ChevronDown, ChevronUp, Clock, ExternalLink
} from "lucide-react";

// Helper Component for Sections
const DetailSection = ({ icon: Icon, title, children, colorClass = "text-primary" }) => (
  <div className="bg-gray-50/50 p-4 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
    <h4 className="flex items-center gap-2 font-bold text-gray-800 mb-3 text-sm uppercase tracking-wide">
      <Icon className={`h-4 w-4 ${colorClass}`} />
      {title}
    </h4>
    <div className="space-y-1">{children}</div>
  </div>
);

const UniversityCard = ({ uni }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md mb-6">
      
      {/* --- Main Header (Hamesha dikhega) --- */}
      <div 
        onClick={() => setExpanded(!expanded)}
        className="cursor-pointer p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-gray-50/80 transition-colors"
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
             <h3 className="text-xl font-bold text-gray-900 leading-tight">{uni.name}</h3>
          </div>
          <div className="flex flex-wrap gap-y-2 gap-x-4 mt-2 text-sm text-gray-600">
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-red-500" /> {uni.location}</span>
            <span className="flex items-center gap-1.5"><Trophy className="h-4 w-4 text-yellow-600" /> {uni.ranking}</span>
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-blue-500" /> Est. {uni.established}</span>
          </div>
        </div>
        <div className="bg-blue-50 p-2 rounded-full text-blue-600">
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>

      {/* --- Expanded Content (Sari details yahan hain) --- */}
      {expanded && (
        <div className="px-5 pb-6 pt-2 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
          
          {/* Overview */}
          <div className="mb-6 p-4 bg-blue-50/30 rounded-xl border-l-4 border-blue-500">
             <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
               {uni.overview}
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* 1. Programs */}
            <DetailSection icon={BookOpen} title="Programs Offered" colorClass="text-blue-600">
              <ul className="text-sm text-gray-600 space-y-1.5">
                {uni.programs.map((p, i) => (
                  <li key={i} className="flex gap-2"> <span className="text-blue-400">•</span> {p} </li>
                ))}
              </ul>
            </DetailSection>

            {/* 2. Eligibility */}
            <DetailSection icon={CheckCircle} title="Eligibility Criteria" colorClass="text-green-600">
              <ul className="text-sm text-gray-600 space-y-1.5">
                {uni.eligibility.map((e, i) => (
                  <li key={i} className="flex gap-2"> <span className="text-green-500">✓</span> {e} </li>
                ))}
              </ul>
            </DetailSection>

            {/* 3. Admission Process */}
            <DetailSection icon={ClipboardList} title="Admission Process" colorClass="text-orange-600">
              <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside">
                {uni.admissionProcess.map((step, i) => (
                  <li key={i} className="pl-1 leading-snug">{step}</li>
                ))}
              </ol>
            </DetailSection>

            {/* 4. Requirements */}
            <DetailSection icon={FileText} title="Required Documents" colorClass="text-purple-600">
              <ul className="text-sm text-gray-600 space-y-1.5">
                {uni.requirements.map((r, i) => (
                  <li key={i} className="flex gap-2"> <span className="grayscale">📄</span> {r} </li>
                ))}
              </ul>
            </DetailSection>

            {/* 5. Fees Structure */}
            <DetailSection icon={Wallet} title="Fees Structure" colorClass="text-emerald-600">
              <div className="bg-white p-3 rounded-lg border border-emerald-100 text-sm space-y-2">
                <p className="flex justify-between"><strong>Tuition:</strong> <span className="text-gray-600">{uni.feesStructure.tuition}</span></p>
                <p className="flex justify-between"><strong>Semester Fee:</strong> <span className="text-gray-600">{uni.feesStructure.semesterFee}</span></p>
                <p className="flex justify-between border-t pt-1"><strong>Living Cost:</strong> <span className="text-gray-600">{uni.feesStructure.livingCost}</span></p>
              </div>
            </DetailSection>

            {/* 6. Language Requirements */}
            <DetailSection icon={Globe} title="Language Proficiency" colorClass="text-cyan-600">
              <ul className="text-sm text-gray-600 space-y-1.5">
                {uni.languageRequirements.map((l, i) => (
                  <li key={i} className="flex gap-2"> <span className="text-cyan-500">🌐</span> {l} </li>
                ))}
              </ul>
            </DetailSection>

            {/* 7. Scholarships */}
            <DetailSection icon={Award} title="Scholarships" colorClass="text-yellow-600">
              <ul className="text-sm text-gray-600 space-y-1.5">
                {uni.scholarships.map((s, i) => (
                  <li key={i} className="flex gap-2"> <span className="text-yellow-500">🎓</span> {s} </li>
                ))}
              </ul>
            </DetailSection>

            {/* 8. Important Dates
            <DetailSection icon={Clock} title="Deadlines" colorClass="text-red-600">
              <div className="p-3 bg-red-50 rounded-lg text-sm text-red-700 font-semibold border border-red-100">
                {uni.importantDates}
              </div>
            </DetailSection> */}

          </div>

          {/* Website Button */}
          <div className="mt-6 flex justify-center">
            <a
              href={uni.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-blue-600 transition-all shadow-md active:scale-95"
            >
              <ExternalLink size={16} />
              Visit Official Website
            </a>
          </div>

        </div>
      )}
    </div>
  );
};

export default UniversityCard;