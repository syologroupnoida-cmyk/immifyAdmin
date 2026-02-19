import { useEffect, useState } from "react";
import { FaGlobeAsia, FaFilter, FaWallet, FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { GetAllToLeadApi } from "../../redux/actions/leadAction";
import { AgentBuyLeadApi } from "../../redux/actions/paymentAction";
import { useDebounce } from "../../hook/useDebounce";
import axios from "axios";
import { server } from "../../redux/store";

const BuyLeads = () => {
  const dispatch = useDispatch();
  const { newLeads = [], leadLoading, publicPagination } = useSelector((state) => state.leadContainer);
  const { agentProfile } = useSelector((state) => state.agentContainer);

  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  const [destination, setDestination] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLead, setSelectedLead] = useState(null);
  const [isBuying, setIsBuying] = useState(false);

  const [dbCountry, setDbCountry] = useState([]);
  const [dbDestination, setDbDestination] = useState([]);

  const itemsPerPage = 9;
  const debouncedSearch = useDebounce(search, 500);
  const debouncedCountry = useDebounce(country, 500);
  const debouncedDestination = useDebounce(destination, 500);

  // --- DUMMY LEADS LOGIC (Jab API leads khali ho) ---
  const dummyLeads = [
    { _id: 'd1', firstName: "Rahul Sharma", country: "India", destination: "Canada", price: 500 },
    { _id: 'd2', firstName: "Sneha Patel", country: "India", destination: "UK", price: 450 },
    { _id: 'd3', firstName: "John Doe", country: "USA", destination: "Australia", price: 600 },
  ];

  const displayLeads = newLeads.length > 0 ? newLeads : dummyLeads;

  useEffect(() => {
    dispatch(GetAllToLeadApi(currentPage, itemsPerPage, debouncedSearch, debouncedCountry, debouncedDestination));
  }, [dispatch, currentPage, debouncedSearch, debouncedCountry, debouncedDestination]);

  useEffect(() => { setCurrentPage(1); }, [search, country, destination]);

  const apiGetCountry = async () => {
    try {
      const { data } = await axios.get(`${server}/lead/countrys`);
      setDbCountry(data?.countries || []);
      setDbDestination(data?.destinations || []);
    } catch (error) { console.log(error); }
  };

  useEffect(() => { apiGetCountry(); }, []);

  const buyLeadHandler = async (id) => {
    if (!agentProfile?.wallet) return alert("Wallet information unavailable");
    if (selectedLead.price <= agentProfile.wallet) {
      setIsBuying(true);
      try {
        await dispatch(AgentBuyLeadApi(id));
        setSelectedLead(null);
      } catch (error) { alert(error?.message || "Purchase failed"); }
      finally { setIsBuying(false); }
    } else { alert("Insufficient balance"); }
  };

  return (
    <section className="p-4 md:p-8 bg-gray-50 min-h-screen font-sans">
      {/* Header & Wallet */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">Marketplace</h2>
          <p className="text-slate-500 text-sm">Discover high-intent immigration leads</p>
        </div>
        <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-full text-blue-600"><FaWallet /></div>
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Available Balance</p>
            <p className="text-xl font-black text-slate-800">₹{agentProfile?.wallet || 0}</p>
          </div>
        </div>
      </div>

      {/* Filters Card */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 mb-8">
        <div className="flex items-center gap-2 mb-4 text-slate-700 font-bold">
          <FaFilter className="text-blue-500 text-sm" /> <span>Advanced Filters</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
            <input
              type="text" placeholder="Search leads..."
              value={search} onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-3 bg-slate-50 border-none rounded-xl text-sm w-full focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>
          <select
            value={country} onChange={(e) => setCountry(e.target.value)}
            className="px-4 py-3 bg-slate-50 border-none rounded-xl text-sm w-full focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer"
          >
            <option value="">Origin: All Countries</option>
            {dbCountry.map((item, i) => <option key={i} value={item}>{item}</option>)}
          </select>
          <select
            value={destination} onChange={(e) => setDestination(e.target.value)}
            className="px-4 py-3 bg-slate-50 border-none rounded-xl text-sm w-full focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer"
          >
            <option value="">Destination: All</option>
            {dbDestination.map((item, i) => <option key={i} value={item}>{item}</option>)}
          </select>
        </div>
      </div>

      {/* Leads Grid */}
      {leadLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => <div key={i} className="h-48 bg-slate-200 animate-pulse rounded-2xl"></div>)}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayLeads.map((lead) => (
            <div key={lead._id} className="group bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-2xl font-bold text-xs">
                HOT LEAD
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-black text-slate-800 group-hover:text-blue-600 transition-colors capitalize">{lead.firstName}</h4>
                <div className="flex items-center gap-2 mt-2 text-slate-500 text-sm font-medium">
                  <FaMapMarkerAlt className="text-blue-400" />
                  <span>{lead.country} <span className="text-blue-300 mx-1">→</span> {lead.destination}</span>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-3 mb-4 border border-dashed border-slate-200">
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Verified Contact</p>
                <p className="text-xs text-slate-600 font-medium italic mt-1 font-mono">Hidden: +91-XXXXX-XXXXX</p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Lead Price</p>
                  <span className="text-2xl font-black text-slate-800 tracking-tighter">₹{lead.price}</span>
                </div>
                <button
                  onClick={() => setSelectedLead(lead)}
                  className="bg-slate-900 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-xl transition-all active:scale-95 shadow-lg shadow-slate-200"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination (Simplified) */}
      {publicPagination?.totalPages > 1 && (
        <div className="flex justify-center items-center gap-6 mt-12 pb-10">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => p - 1)}
            className="p-3 rounded-full bg-white shadow-sm border border-slate-200 disabled:opacity-30"
          >
            ← Previous
          </button>
          <span className="font-bold text-slate-600 text-sm uppercase tracking-widest">Page {currentPage} of {publicPagination.totalPages}</span>
          <button
            disabled={currentPage === publicPagination.totalPages}
            onClick={() => setCurrentPage(p => p + 1)}
            className="p-3 rounded-full bg-white shadow-sm border border-slate-200 disabled:opacity-30"
          >
            Next →
          </button>
        </div>
      )}

      {/* Premium Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-[2.5rem] p-8 max-w-sm w-full shadow-2xl animate-in zoom-in duration-300 relative">
             <h3 className="text-2xl font-black text-slate-800 mb-2">Confirm Purchase</h3>
             <p className="text-slate-500 text-sm mb-6 font-medium">You are about to unlock full contact details for <span className="text-blue-600 font-bold">{selectedLead.firstName}</span>.</p>
             
             <div className="bg-slate-50 rounded-2xl p-4 space-y-3 mb-8">
                <div className="flex justify-between text-sm">
                   <span className="text-slate-400 font-bold">Lead Cost</span>
                   <span className="text-slate-800 font-black">₹{selectedLead.price}</span>
                </div>
                <div className="flex justify-between text-sm border-t border-slate-200 pt-3">
                   <span className="text-slate-400 font-bold">Your Balance</span>
                   <span className="text-blue-600 font-black">₹{agentProfile?.wallet || 0}</span>
                </div>
             </div>

             <div className="flex gap-3">
                <button onClick={() => setSelectedLead(null)} className="flex-1 py-4 text-slate-400 font-bold text-sm uppercase">Cancel</button>
                <button 
                   onClick={() => buyLeadHandler(selectedLead._id)}
                   className="flex-1 bg-blue-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-blue-200 uppercase text-xs tracking-widest"
                >
                   {isBuying ? "Processing..." : "Confirm & Pay"}
                </button>
             </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BuyLeads;