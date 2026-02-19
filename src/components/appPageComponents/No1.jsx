import React from 'react';

const No1 = () => {
    // Screenshot wali image jaisa group photo
    const groupImg = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop";

    return (
        <section className="w-full bg-white py-16 px-6 md:px-20">
            <div className="max-w-7xl mx-auto">
                
                {/* --- TOP HEADER SECTION --- */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        India's No.1 Immigration & Study Visa Consultant
                    </h1>
                    <p className="text-gray-700 text-[15px] leading-relaxed text-justify md:text-left">
                        <span className="font-bold">Immify</span> is India's No.1 Overseas Career Consultant and presumably the world's largest B2C immigration firm. 
                        Established in 1999, our 50+ company-owned and managed offices across India, Australia, the United Arab Emirates, 
                        the United Kingdom, and Canada and 1500+ employees serve over 1 million customers. We are Licensed Recruitment 
                        Agents in India and IATA travel agents. As part of our services, we provide personal one-on-one counseling to 
                        about 1,00,000+ individual inquiries every month for migration, study and work visas. Over 50% of our 
                        customers are through word-of-mouth. No other company understands overseas careers as we do.
                    </p>
                </div>

                {/* --- GLOBAL INDIAN CARD SECTION --- */}
                <div className="flex flex-col md:flex-row items-stretch bg-white border border-gray-100 mt-20">
                    
                    {/* Left Side: Content */}
                    <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center text-center md:text-left">
                        <h2 className="text-4xl font-black text-gray-800 mb-6">Global Indian</h2>
                        <p className="text-gray-600 text-lg font-medium leading-snug mb-10">
                            We highlight Indians and stakeholders who shape the identity and perception of India and Indians abroad, 
                            while showcasing cross-border journeys of Indians who found their purpose and chose to give back.
                        </p>

                        {/* Red Buttons Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto md:mx-0">
                            <button className="bg-[#E6412E] text-white py-3 px-4 font-bold hover:bg-red-700 transition-colors uppercase text-sm">
                                Stories
                            </button>
                            <button className="bg-[#E6412E] text-white py-3 px-4 font-bold hover:bg-red-700 transition-colors uppercase text-sm">
                                The Global Indian Book
                            </button>
                            <button className="bg-[#E6412E] text-white py-3 px-4 font-bold hover:bg-red-700 transition-colors uppercase text-sm">
                                Tell Your Story
                            </button>
                            <button className="bg-[#E6412E] text-white py-3 px-4 font-bold hover:bg-red-700 transition-colors uppercase text-sm">
                                Top 100 Global Indians
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Image with Red Accent */}
                    <div className="md:w-1/2 relative min-h-[400px]">
                        {/* Red Side Accent (As seen in screenshot) */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-32 bg-[#E6412E] z-10 hidden md:block"></div>
                        
                        <img 
                            src={groupImg} 
                            alt="Global Indians Group" 
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default No1;