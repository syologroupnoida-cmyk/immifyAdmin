import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is Immify?",
    answer: "Immify is a complete SaaS platform for immigration advisors, visa agencies, and legal organizations. It helps you create leads, manage clients, automate tasks, and track cases, making it easier for your firm to grow and perform well."
  },
  {
    question: "Who Can Use Immify?",
    answer: "Immify is for Immigration consultants, Visa agencies, Immigration law firms, and Study abroad consultants. If you handle visa or immigration processes, Immify can help you make things faster and more efficient."
  },
  {
    question: "What Features Does Immify Offer?",
    answer: "We offer Lead Management (Verified leads), CRM Pipelines, Automation (Reminders & document requests), Analytics (Track performance), and Multi-Country Support for Canada, Australia, UK, USA, and more."
  },
  {
    question: "Is My Clients' Data Secure on Immify?",
    answer: "Absolutely. Immify uses industry-standard encryption and security measures to protect your clients' information. Your data is safe and private."
  },
  {
    question: "Can Immify Help Me Generate More Leads?",
    answer: "Yes. Immify provides tools for lead generation, marketing, and website integration that help you consistently attract good leads."
  },
  {
    question: "Is a Free Trial Available?",
    answer: "Yes! You can try Immify for free to explore all its features before deciding. No credit card is needed for the trial."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f9fafb] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 tracking-tight uppercase">
            FAQ<span className="text-[#E6412E]">.</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 font-medium">
            Everything you need to know about the Immify platform.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className={`text-lg font-bold transition-colors duration-300 ${openIndex === index ? 'text-[#6A2B86]' : 'text-gray-800'}`}>
                  {faq.question}
                </span>
                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support CTA */}
        <Link to="/contact">
        <div className="mt-16 text-center bg-[#6A2B86] rounded-2xl p-8 shadow-xl">
          <h3 className="text-white text-2xl font-bold mb-2">Still have questions?</h3>
          <p className="text-purple-100 mb-6">Our team is ready to assist you in making the most of the platform.</p>
          <button className="bg-white text-[#6A2B86] px-8 py-3 rounded-full font-black uppercase text-sm tracking-widest hover:bg-[#E6412E] hover:text-white transition-all">
            Contact Support
          </button>
        </div>
        </Link>
      </div>
    </section>
  );
};

export default FAQ;