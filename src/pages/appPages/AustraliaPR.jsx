import React, { useState } from "react";
import InquiryForm from "../../components/InquiryForm";

const AustraliaPR = () => {

  const [showForm, setShowForm] = useState(false);

  const benefits = [
    "Live and work anywhere in Australia",
    "Access to Australia's healthcare system (Medicare)",
    "Sponsor eligible family members",
    "Pathway to Australian Citizenship",
    "High quality education and lifestyle"
  ];

  const eligibility = [
    "Age below 45 years",
    "Minimum IELTS score required",
    "Relevant work experience",
    "Positive skill assessment",
    "Meet points requirement (65+)"
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <div className="bg-blue-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Australia PR Visa
        </h1>

        <p className="max-w-2xl mx-auto text-lg">
          Get permanent residency in Australia and enjoy world-class
          lifestyle, career opportunities, and education.
        </p>

        <button
          onClick={() => setShowForm(true)}
          className="mt-6 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
        >
          Book Free Consultation
        </button>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 py-12 px-6">

        {/* LEFT SIDE CONTENT */}
        <div className="md:col-span-2">

          {/* Benefits Section */}
          <div className="mb-12">

            <h2 className="text-2xl font-bold mb-6">
              Benefits of Australia PR
            </h2>

            <ul className="grid md:grid-cols-2 gap-4">
              {benefits.map((item, index) => (
                <li key={index} className="bg-white p-4 rounded-xl shadow">
                  ✔ {item}
                </li>
              ))}
            </ul>

          </div>


          {/* Eligibility Section */}
          <div>

            <h2 className="text-2xl font-bold mb-6">
              Eligibility Criteria
            </h2>

            <ul className="grid md:grid-cols-2 gap-4">
              {eligibility.map((item, index) => (
                <li key={index} className="bg-white p-4 rounded-xl shadow">
                  ✔ {item}
                </li>
              ))}
            </ul>

          </div>

        </div>


        {/* RIGHT SIDE FORM */}
        <div className="md:col-span-1">

          {showForm && (
            <div className="sticky top-24">
              <InquiryForm destination="Australia PR Visa" />
            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default AustraliaPR;