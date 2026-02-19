import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaGlobe, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const countries = ['DUBAI', 'CANADA', 'USA', 'UK', 'AUSTRALIA', 'GERMANY'];
const TYPING_SPEED = 300;
const DELETING_SPEED = 200;
const PAUSE_TIME = 3000;

const Hero = () => {
  const navigate = useNavigate();
  const heroImg = "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const [displayText, setDisplayText] = useState('');
  const [countryIndex, setCountryIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const charIndex = useRef(0);
  const typingTimeout = useRef(null);

  useEffect(() => {
    const handleTyping = () => {
      const currentCountry = countries[countryIndex];
      let timeout;

      if (isDeleting) {
        if (charIndex.current > 0) {
          setDisplayText(currentCountry.substring(0, charIndex.current - 1));
          charIndex.current -= 1;
          timeout = DELETING_SPEED;
        } else {
          setIsDeleting(false);
          setCountryIndex(prev => (prev + 1) % countries.length);
          timeout = 500;
        }
      } else {
        if (charIndex.current < currentCountry.length) {
          setDisplayText(currentCountry.substring(0, charIndex.current + 1));
          charIndex.current += 1;
          timeout = TYPING_SPEED;
        } else {
          setIsDeleting(true);
          timeout = PAUSE_TIME;
        }
      }
      typingTimeout.current = setTimeout(handleTyping, timeout);
    };

    typingTimeout.current = setTimeout(handleTyping, TYPING_SPEED);

    return () => clearTimeout(typingTimeout.current);
  }, [countryIndex, isDeleting]);
  
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section className="w-full bg-white border-b border-gray-100">
      <div className="flex flex-col lg:flex-row min-h-[500px]">
        <div className="lg:w-[30%] relative group overflow-hidden">
          <img 
            src={heroImg} 
            alt="Hero" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent lg:hidden"></div>
        </div>

        <div className="lg:w-[45%] p-6 lg:p-12 flex flex-col justify-center border-r border-gray-50">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[2px] w-6 bg-red-600"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600">Premium Destination</span>
          </div>

          <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-none mb-6 tracking-tighter inline-flex items-center h-24">
            {displayText}
            <span className={`inline-block w-1.5 h-16 bg-red-600 ml-2 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}></span>
            <span className="text-red-600">.</span>
          </h1>

          <div className="flex flex-wrap gap-4 mb-8">
            {['Freelance', 'Golden', 'Work', 'Study'].map((item) => (
              <span key={item} className="px-3 py-1 bg-slate-100 text-[11px] font-bold uppercase tracking-tight text-slate-600 border-l-2 border-red-600">
                {item} Visa
              </span>
            ))}
          </div>

          <button 
            onClick={() => navigate('/migrate')}
            className="flex items-center gap-6 bg-slate-900 text-white pl-6 pr-2 py-2 w-fit hover:bg-red-600 transition-all group border-b-4 border-slate-700 hover:border-red-800"
          >
            <span className="font-bold uppercase tracking-widest text-xs">Explore Now</span>
            <div className="bg-white/10 p-2 group-hover:bg-white/20 transition-all">
              <FaArrowRight size={12} />
            </div>
          </button>
        </div>

        <div className="lg:w-[25%] flex flex-col">
          <CompactService 
            icon={<FaGlobe className="text-blue-600" />} 
            title="Migrate" 
            onClick={() => navigate('/migrate')} 
          />
          <CompactService 
            icon={<FaBriefcase className="text-purple-600" />} 
            title="Work" 
            onClick={() => navigate('/work')} 
          />
          <CompactService 
            icon={<FaGraduationCap className="text-orange-500" />} 
            title="Study" 
            onClick={() => navigate('/study')} 
          />
          
          <button 
            onClick={() => navigate('/contact')}
            className="bg-red-600 text-white h-full p-6 flex items-center justify-between hover:bg-black transition-all group"
          >
            <span className="font-black uppercase text-sm leading-tight text-left">Free <br /> Consultation</span>
            <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

const CompactService = ({ icon, title, onClick }) => (
  <div 
    onClick={onClick}
    className="flex items-center gap-4 p-5 bg-white border-b border-gray-100 cursor-pointer hover:bg-slate-50 transition-all group"
  >
    <div className="p-2 bg-slate-50 group-hover:bg-white transition-all">{icon}</div>
    <span className="font-black uppercase text-xs tracking-widest text-slate-700">{title}</span>
    <FaArrowRight className="ml-auto text-[10px] text-gray-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
  </div>
);

export default Hero;