import React from 'react'
import { useState } from 'react'
import { IoTerminal } from 'react-icons/io5';
import InquiryForm from '../../components/InquiryForm';

const CanadaPR = () => {
    const [showForm, setShowForm] = useState(false)
    const benefits = [
        "Live and work anywhere in Canada",
        "Free healthcare benefits",
        "Sponsor eligible family members",
        "Pathway to Canadian Citizenship",
        "Access to world-class education"
    ];

    const eligibility = [
        "Minimum IELTS score required",
        "Relevant work experience",
        "Educational Credential Assessment (ECA)",
        "Meet CRS score requirement",
        "Medical and police clearance"
    ];
    return (
        <div className='min-h-screen bg-gray-100'>
            {/* Hero Section */}
            <div className='bg-blue-700 text-white py-16 px-6 text-center'>
                <h1 className='text-4xl font-bold mb-4'>Canada PR Visa</h1>

                <p className='max-w-2xl mx-auto text-lg'>Get permanent residency in Canada and enjoy excellen  career opportunities, healthcare, and high quality of life.</p>

                <button
                    onClick={() => setShowForm(true)}
                    className="mt-6 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
                >
                    Book Free Consultation
                </button>
            </div>
            {/* Main Content Layout */}
            <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-10 py-12 px-6'>

                {/* LEFT SIDE CONTENT */}
                <div className='md:col-span-2'>

                    {/* Benefits Section */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">
                            Benefits of Australia PR
                        </h2>
                        <ul className='grid md:grid-cols-2 gap-4'>
                            {benefits.map((item, idx) => (
                                <li key={idx} className='bg-white p-4 rounded-xl shadow'> ✔ {item}</li>
                            ))}
                        </ul>
                    </div>
                    {/*  Eligibility Section  */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">
                            Eligibility Criteria
                        </h2>
                        <ul className='grid md:grid-cols-2 gap-4'>
                            {eligibility.map((item, idx) => (
                                <li key={idx} className='bg-white p-4 rounded-xl shadow'>✔ {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* RIGHT SIDE FORM */}
                <div className="md:col-span-1">


                    {showForm && (
                        <div className="sticky top-24">
                            <InquiryForm destination="Canada PR Visa" />
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default CanadaPR
