import React, { useEffect, useState, useCallback } from "react";
import { FiPhone, FiX } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaGlobeAsia, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AgentGetAllServicesApi, AgentCreateServiceApi,AgentUpdateServiceApi } from "../../redux/actions/agentAction";
import AgentServiceTable from "../../components/agentPageComponents/AgentServiceTable";
import toast from "react-hot-toast";

const AgentServices = () => {

  const dispatch = useDispatch();

  const { agentLoading, services, servicePagination, error, message } = useSelector((state) => state.agentContainer);


  const [editForm,setShowEditForm]=useState({serviceId:null,show:false});

  // Form states
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    serviceTitle: "",
    category: "",
    location: "",
    price: "",
    description: "",
    durationInDays: "",
    images:""
  });

  const [inputValue, setInputValue] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
   const [service,setService]=useState([]);
  const itemsPerPage = 9;

  // Debounce search
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedInput(inputValue);
    }, 500);
    return () => clearTimeout(timeout);
  }, [inputValue]);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedInput, selectedCountry]);

  useEffect(() => {
    dispatch(AgentGetAllServicesApi(currentPage, itemsPerPage, debouncedInput, selectedCountry));
  }, [dispatch, currentPage, debouncedInput, selectedCountry]);


  const handleUpdateService = async (e)=>{
    e.preventDefault();

    const formDataToSend = new FormData();
  
    formDataToSend.append('serviceTitle', formData.serviceTitle);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('location', formData.location);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('durationInDays', formData.durationInDays || '1');

    if (formData.images && formData.images.length > 0) {
      Array.from(formData.images).forEach(file => {
        formDataToSend.append('images', file); 
      });
    }
    try {
      await dispatch(AgentUpdateServiceApi(formDataToSend));

      setFormData({ serviceTitle: "", category: "", location: "", price: "", description: "", durationInDays: "",images:"" });
      setShowEditForm(false);
      // Refresh services list
      dispatch(AgentGetAllServicesApi(currentPage, itemsPerPage, debouncedInput, selectedCountry));
    } catch (error) {
      console.error("Failed to create service");
    }

  }
  // Handle form submit
  const handleCreateService = async (e) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
  
    formDataToSend.append('serviceTitle', formData.serviceTitle);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('location', formData.location);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('durationInDays', formData.durationInDays || '1');

    if (formData.images && formData.images.length > 0) {
      Array.from(formData.images).forEach(file => {
        formDataToSend.append('images', file); 
      });
    }

    try {
      await dispatch(AgentCreateServiceApi(formDataToSend));

      setFormData({ serviceTitle: "", category: "", location: "", price: "", description: "", durationInDays: "",images:"" });
      setShowAddForm(false);
      // Refresh services list
      dispatch(AgentGetAllServicesApi(currentPage, itemsPerPage, debouncedInput, selectedCountry));
    } catch (error) {
      console.error("Failed to create service");
    }
  };

  const handleClearFilters = () => {
    setInputValue("");
    setSelectedCountry("");
    setCurrentPage(1);
  };

  const check=(e)=>{
    const selected = services.find(e=>e._id==service._id)

    if(selected)
    {
      setFormData({
        serviceTitle:selected.serviceTitle,
         category:selected.category,
          location:selected.location,
           price:selected.price,
            description:selected.description,
             durationInDays:selected.durationInDays,
              images:selected.images,
      })
    }
    setShowEditForm(e);
  }  


 


  useEffect(()=>{console.log('services',services,agentLoading)},[]);

  useEffect(()=>{
    let s=services.filter(e=>e._id==editForm.serviceId);
    
    if(s.length>0)
       setService(s[0]);
  },[services,editForm]);


 useEffect(()=>{
    console.log('service',service);

  },[service]);




  return (
    <section className="p-6 sm:p-8 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      {error && (
        <div className="text-red-600 bg-red-50 p-4 rounded-lg text-center mb-6">
          Error: {error}
        </div>
      )}

      {message && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
          {message}
        </div>
      )}

      {/* Header + Search + ADD BUTTON */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <h2 className="text-3xl font-extrabold text-orange-600 tracking-tight">
          My Services
        </h2>
        
        {!editForm.show && <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition font-medium shadow-md"
        >
          <FaPlus size={18} />
          Add New Service
        </button>}

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
          <input
            type="search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search services..."
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-orange-500 transition bg-white"
          />
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full sm:w-40 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">All Countries</option>
            <option value="India">India</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
          </select>
          <button
            onClick={handleClearFilters}
            className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition font-medium"
          >
            Clear
          </button>
        </div>
      </div>

      {/* ADD SERVICE FORM - Inline Modal Style */}
      {showAddForm && (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 mb-8 animate-in slide-in-from-top-4 duration-300">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-orange-600">Add New Service</h3>
            <button
              onClick={() => setShowAddForm(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition"
            >
              <FiX size={20} className="text-gray-500" />
            </button>
          </div>

          <form onSubmit={handleCreateService} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Service Title *</label>
              <input
                required
                type="text"
                placeholder="e.g. Goa Beach Package"
                value={formData.serviceTitle}
                onChange={(e) => setFormData({...formData, serviceTitle: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">Select Category</option>
                <option value="Beach Holiday">Beach Holiday</option>
                <option value="Adventure">Adventure</option>
                <option value="Pilgrimage">Pilgrimage</option>
                <option value="City Tour">City Tour</option>
                <option value="Honeymoon">Honeymoon</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
              <input
                required
                type="text"
                placeholder="e.g. Goa, India"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price (₹) *</label>
              <input
                required
                type="number"
                placeholder="12999"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Images*</label>
              <input
                required
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => {const files=Array.from(e.target.files); setFormData({...formData, images: files})}}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              {formData.images?.length > 0 && (
            <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-2">
              {Array.from(formData.images).map((file, index) => (
                <div key={index} className="relative group">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg border"
                  />
                    <button
                      type="button"
                      onClick={() => {
                        const newImages = Array.from(formData.images).filter((_, i) => i !== index);
                        setFormData({...formData, images: newImages});
                      }}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-all"
                    >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
            </div>
             <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration In Days*</label>
              <input
                required
                type="number"
                placeholder="1"
                value={formData.durationInDays}
                onChange={(e) => setFormData({...formData, durationInDays: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                rows={3}
                placeholder="Brief description of the service..."
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-vertical"
              />
            </div>

            <div className="md:col-span-2 flex gap-3 justify-end pt-2">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition font-medium"
              >
                Create Service
              </button>
            </div>
          </form>
        </div>
      )}

      {editForm.show && service && <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 mb-8 animate-in slide-in-from-top-4 duration-300">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-orange-600">Edit Service</h3>
            <button
              onClick={() => setShowEditForm(prev=>!prev.show)}
              className="p-2 hover:bg-gray-100 rounded-full transition"
            >
              <FiX size={20} className="text-gray-500" />
            </button>
          </div>

          <form onSubmit={handleCreateService} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Service Title *</label>
              <input
                required
                type="text"
                placeholder="e.g. Goa Beach Package"
                value={formData?.serviceTitle}
                onChange={(e) => setFormData({...formData, serviceTitle: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
              <select
                required
                value={service?.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">Select Category</option>
                <option value="Beach Holiday">Beach Holiday</option>
                <option value="Adventure">Adventure</option>
                <option value="Pilgrimage">Pilgrimage</option>
                <option value="City Tour">City Tour</option>
                <option value="Honeymoon">Honeymoon</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
              <input
                required
                type="text"
                placeholder="e.g. Goa, India"
                value={formData?.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price (₹) *</label>
              <input
                required
                type="number"
                placeholder="12999"
                value={formData?.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Images*</label>
              <input
                required
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => {const files=Array.from(e.target.files); setFormData({...formData, images: files})}}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              {service.images?.length > 0 && (
            <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-2">
              {Array.from(formData.images).map((file, index) => (
                <div key={index} className="relative group">
                  <img
                    src={file.url}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg border"
                  />
                    <button
                      type="button"
                      onClick={() => {
                        const newImages = Array.from(formData.images).filter((_, i) => i !== index);
                        setFormData({...formData, images: newImages});
                      }}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-all"
                    >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
            </div>
             <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration In Days*</label>
              <input
                required
                type="number"
                placeholder="1"
                value={formData.durationInDays}
                onChange={(e) => setFormData({...formData, durationInDays: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                rows={3}
                placeholder="Brief description of the service..."
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-vertical"
              />
            </div>

            <div className="md:col-span-2 flex gap-3 justify-end pt-2">
              <button
                type="button"
                onClick={() => setShowEditForm(prev=> !prev.show  )}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition font-medium"
              >
                Update Service
              </button>
            </div>
          </form>
        </div>}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-3 border border-gray-100">
          <div className="p-3 rounded-full bg-orange-100 text-orange-600">
            <FaGlobeAsia size={20} />
          </div>
          <div>
            <p className="text-xs text-gray-500">Total Services</p>
            <p className="text-xl font-semibold text-gray-800">
              {servicePagination?.totalServices || 0}
            </p>
          </div>
        </div>
      </div>

      {/* Services Table */}
      {agentLoading ? (
        <div className="flex justify-center items-center py-10">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-600"></div>
        </div>
      ) : (
        <AgentServiceTable services={services || []} setEditForm={check}/>
      )}

      {/* Pagination */}
      {servicePagination?.totalPages > 1 && (
        <div className="flex justify-center gap-4 pt-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => p - 1)}
            className="px-4 py-2 bg-orange-500 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-gray-700 font-medium">
            Page {servicePagination.currentPage} of {servicePagination.totalPages}
          </span>
          <button
            disabled={currentPage >= servicePagination.totalPages}
            onClick={() => setCurrentPage(p => p + 1)}
            className="px-4 py-2 bg-orange-500 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default AgentServices;
