import React from 'react';
import { FaUserPlus, FaSearch, FaComments, FaPlane } from 'react-icons/fa';
// Note: Agar Heading2 me error aaye toh normal h2 use kar lena
// import Heading2 from '../common/Heading2'; 

const HowItWorks = () => {
    const steps = [
        {
            icon: <FaUserPlus size={35} />,
            title: 'Create Your Profile',
            description: 'Students and agents sign up and create their profiles in minutes.',
            color: 'text-orange-600',
            borderColor: 'border-orange-600'
        },
        {
            icon: <FaSearch size={35} />,
            title: 'Find Your Match',
            description: 'Students search for agents based on destination. Agents find relevant student leads.',
            color: 'text-purple-700',
            borderColor: 'border-purple-700'
        },
        {
            icon: <FaComments size={35} />,
            title: 'Connect & Communicate',
            description: 'Use our secure platform to communicate and discuss the immigration process.',
            color: 'text-teal-600',
            borderColor: 'border-teal-600'
        },
        {
            icon: <FaPlane size={35} />,
            title: 'Achieve Your Dreams',
            description: 'Our platform helps students achieve dreams and agents grow their business.',
            color: 'text-blue-800',
            borderColor: 'border-blue-800'
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
                        How It <span className="text-red-600">Works</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-red-600 mx-auto mt-4"></div>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-100">
                    {steps.map((step, index) => (
                        <div 
                            key={index} 
                            className="group p-10 bg-white border-r border-b border-gray-100 hover:bg-gray-50 transition-all relative overflow-hidden"
                        >
                            {/* Step Number Background */}
                            <span className="absolute -right-4 -top-4 text-8xl font-black text-gray-50 group-hover:text-gray-100 transition-colors">
                                {index + 1}
                            </span>

                            <div className={`mb-6 ${step.color} relative z-10`}>
                                {step.icon}
                            </div>
                            
                            <h3 className="text-xl font-black mb-4 text-black uppercase tracking-wide relative z-10">
                                {step.title}
                            </h3>
                            
                            <p className="text-gray-600 leading-relaxed font-medium relative z-10">
                                {step.description}
                            </p>

                            {/* Bottom Accent Line */}
                            <div className={`absolute bottom-0 left-0 w-0 h-1.5 ${step.color.replace('text', 'bg')} group-hover:w-full transition-all duration-500`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;