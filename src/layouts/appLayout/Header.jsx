import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaPhoneAlt, FaWhatsapp, FaThLarge, FaSearch } from "react-icons/fa";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const isAdmin = localStorage.getItem('adminToken');
  const isAgent = localStorage.getItem('agentToken');

  const navigateTo = (path) => {
    navigate(path);
    setShowMenu(false);
    setShowSearchInput(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
      setShowSearchInput(false);
    }
  };

  return (
    <header className="w-full bg-white/90 backdrop-blur-md font-sans sticky top-0 z-[100] shadow-sm">
      {/* --- TOP BAR: Minimalist & Clean --- */}
      <div className="hidden md:flex justify-between items-center py-2 px-10 text-[12px] font-medium text-gray-500 border-b border-gray-50">
        <div className="flex gap-6">


        </div>

        <div className="flex items-center gap-5">
          {isAdmin || isAgent ? (
            <span onClick={() => navigate(isAdmin ? '/admin' : '/agent')} className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer transition-all">
              Dashboard
            </span>
          ) : (
            <div className="flex items-center gap-4">
              <span onClick={() => navigate('/agent-login')} className="hover:text-blue-600 cursor-pointer">Login</span>
              <span onClick={() => navigate('/agent-signup')} className="bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700 cursor-pointer ">Become an Agent</span>
            </div>
          )}
          <span className="w-px h-3 bg-gray-300"></span>
          <span onClick={() => navigate('/contact')} className="hover:text-blue-600 cursor-pointer">Contact</span>
        </div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <div className="flex items-center justify-between px-6 md:px-10 h-20 z-index:5">
        {/* Logo */}
        {/* <div onClick={() => navigate('/')} className="flex flex-col  items-center ursor-pointer transition-transform hover:scale-105">
          <img src={logo} alt="Immify" className="h-14  w-auto " />
          <p className='text-center '>Your Trusted Immigration Partner</p>
        </div> */}
 
 <div 
  onClick={() => navigate('/')} 
  className="flex flex-col items-center cursor-pointer transition-transform duration-300  "
>
  <div className=" rounded-xl bg-secondary/30 mb-1 hover:bg-secondary/50 transition-colors">
     <img src={logo} alt="Immify" className="h-10 w-auto" />
  </div>
  <p className="text-[10px] font-bold text-foreground/80 leading-tight text-center max-w-[150px]">
    YOUR TRUSTED IMMIGRATION PARTNER
  </p>
</div>
        

        {/* Desktop Navigation */}
        {!showSearchInput ? (
          <nav className="hidden lg:flex items-center gap-1">
            <NavItem label="Eligibility" dotColor="bg-red-500" onClick={() => navigateTo('/eligibility')} />
            <NavItem label="Migrate" dotColor="bg-purple-600" onClick={() => navigateTo('/migrate')} />
            <NavItem label="Work" dotColor="bg-cyan-500" onClick={() => navigateTo('/work')} />
            <NavItem label="Study" dotColor="bg-orange-400" onClick={() => navigateTo('/study')} />
            <NavItem label="Visa" dotColor="bg-gray-400" onClick={() => navigateTo('/visa')} />
            <NavItem label="Coaching" dotColor="bg-blue-800" onClick={() => navigateTo('/coaching')} />
            <NavItem label="Market Place" dotColor="bg-blue-800" onClick={() => navigateTo('/marketplace')} />
            <NavItem label="Refer" dotColor="bg-green-500" onClick={() => navigateTo('/refer')} />

            {/* Search Icon Integrated in Nav */}
            <button
              onClick={() => setShowSearchInput(true)}
              className="ml-4 p-3 hover:bg-gray-50 rounded-full transition-all text-gray-400 hover:text-blue-600"
            >
              <FaSearch size={16} />
            </button>
          </nav>
        ) : (
          /* Animated Search Bar */
          <div className="flex-grow max-w-2xl mx-12  animate-in fade-in slide-in-from-right-4 duration-300">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <input
                type="text"
                autoFocus
                placeholder="Search eligibility, visas or countries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-5 pr-12 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 outline-none transition-all text-sm"
              />
              <button type="button" onClick={() => setShowSearchInput(false)} className="absolute right-4 text-gray-400 hover:text-gray-600">
                <IoMdClose size={20} />
              </button>
            </form>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button onClick={() => setShowMenu(!showMenu)} className="lg:hidden p-2 hover:bg-gray-50 rounded-lg">
          {showMenu ? <IoMdClose size={28} /> : <CiMenuBurger size={28} strokeWidth={1} />}
        </button>
      </div>

      {/* --- MOBILE MENU: Professional Slide-down --- */}
      {showMenu && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl p-6 animate-in slide-in-from-top duration-300">
          <div className="grid grid-cols-2 gap-4">
            <MobileNavItem label="Eligibility" onClick={() => navigateTo('/eligibility')} />
            <MobileNavItem label="Migrate" onClick={() => navigateTo('/migrate')} />
            <MobileNavItem label="Work" onClick={() => navigateTo('/work')} />
            <MobileNavItem label="Study" onClick={() => navigateTo('/study')} />
            {/* Add more as needed */}
          </div>
        </div>
      )}
    </header>
  );
};

// --- Modern NavItem (Desktop) ---
const NavItem = ({ label, dotColor, onClick }) => (
  <div
    onClick={onClick}
    className="relative px-4 py-2 cursor-pointer group flex flex-col items-center"
  >
    <span className="text-[13px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-wide">
      {label}
    </span>
    {/* Hover Indicator: Small Dot/Bar */}
    <span className={`h-1 w-0 group-hover:w-full mt-1 rounded-full transition-all duration-300 ${dotColor}`}></span>
  </div>
);

// --- Simple Mobile Item ---
const MobileNavItem = ({ label, onClick }) => (
  <div onClick={onClick} className="p-4 bg-gray-50 rounded-xl font-bold text-gray-800 active:bg-blue-50">
    {label}
  </div>
);

export default Header;