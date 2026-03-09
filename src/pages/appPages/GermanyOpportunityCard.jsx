import React, { useState } from "react";
import InquiryForm from "../../components/InquiryForm";

const GermanyOpportunityCard = () => {

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* LEFT CONTENT */}
      <div className="w-1/2 flex flex-col justify-center px-16">

        <h1 className="text-5xl font-bold text-gray-800 leading-tight">
          Germany Opportunity Card
        </h1>

        <h2 className="text-xl text-blue-600 mt-3">
          Job Seeker Visa for Skilled Professionals
        </h2>

        <p className="mt-6 text-gray-600 text-lg">
          Germany Opportunity Card allows skilled professionals to enter
          Germany and search for jobs without having a prior job offer.
          It works on a points-based system considering education,
          work experience, language skills, and age.
        </p>

        {/* Features */}
        <div className="mt-8 grid grid-cols-2 gap-4 text-gray-700">

          <div className="bg-white shadow-md p-4 rounded-lg">
            ✔ No Job Offer Required
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg">
            ✔ Work in Germany
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg">
            ✔ Points Based System
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg">
            ✔ Pathway to Permanent Residency
          </div>

        </div>

        <button
          onClick={() => setShowForm(true)}
          className="mt-10 bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          Book Free Consultation
        </button>

      </div>

      {/* RIGHT SIDE IMAGE / FORM */}
      <div className="w-1/2 flex items-center justify-center bg-blue-50">

        {!showForm && (
          <img
            src="https://images.unsplash.com/photo-1526779259212-939e64788e3c"
            alt="Germany"
            className="rounded-xl shadow-xl w-[80%]"
          />
        )}

        {showForm && (
          <InquiryForm closeForm={() => setShowForm(false)} />
        )}

      </div>

    </div>
  );
};

export default GermanyOpportunityCard;