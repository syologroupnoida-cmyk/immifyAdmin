import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaClock,
  FaEye,
  FaEdit,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
// import { GetAllServicesApi } from "../../redux/actions/serviceAction"; // You'll need this

const AgentServiceTable = ({ services = [], setEditForm }) => {

  // const [showEditForm,setEditForm]=useState(false);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Optional: Fetch services if you want table-level pagination
  // useEffect(() => {
  //   dispatch(GetAllServicesApi(currentPage, itemsPerPage));
  // }, [dispatch, currentPage]);

  // Service status renderer
  const renderStatus = (status) => {
    switch (status?.toLowerCase()) {
      case "active":
        return <span className="text-green-600 flex items-center gap-1"><FaCheckCircle size={14} /> Active</span>;
      case "inactive":
        return <span className="text-gray-500 flex items-center gap-1"><FaClock size={14} /> Inactive</span>;
      case "draft":
        return <span className="text-orange-600 flex items-center gap-1"><FaClock size={14} /> Draft</span>;
      default:
        return <span className="text-gray-500">Pending</span>;
    }
  };

  return (
    <>
      <style>{`
        .table-container {
          overflow-x: auto;
          margin-left: auto;
          margin-right: auto;
          max-width: 345px;
          border: 1px solid #e5e7eb;
          border-radius: 0.375rem;
        }
        @media (min-width: 340px) {
          .table-container {
            max-width: 80vw;
          }
        }
        @media (min-width: 520px) {
          .table-container {
            max-width: 500px;
          }
        }
        @media (min-width: 640px) {
          .table-container {
            max-width: 710px;
          }
        }
        @media (min-width: 768px) {
          .table-container {
            max-width: 900px;
          }
        }
        @media (min-width: 1024px) {
          .table-container {
            min-width: 100%;
          }
        }
      `}</style>

      <div className="table-container">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-200 text-left text-gray-700 uppercase text-xs font-semibold">
            <tr>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Service Name</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {services.length === 0 ? (
              <tr>
                <td colSpan="7" className="px-4 py-12 text-center text-gray-500">
                  No services found
                </td>
              </tr>
            ) : (
              services.map((service) => (
                <tr key={service._id} className="hover:bg-orange-50 transition">
                  <td className="px-4 py-3 text-gray-700">
                    {new Date(service.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 max-w-xs truncate">
                    {service.serviceTitle || service.serviceName || "Untitled Service"}
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                      {service.category || "General"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    {service.location || service.destination || "N/A"}
                  </td>
                  <td className="px-4 py-3 font-semibold text-orange-600">
                    ₹{Number(service.price || 0).toLocaleString()}
                  </td>
                  <td className="px-4 py-3">
                    {renderStatus(service.status)}
                  </td>
                  <td className="px-4 py-3 flex gap-2 justify-center text-lg">
                    <FaEye
                      onClick={() => navigate(`/agent/service/details/${service._id}`)}
                      className="text-orange-600 hover:text-orange-800 cursor-pointer transition"
                      title="View Service"
                    />
                    {/* navigate(`/agent/service/edit/${service._id}`) */}
                    <FaEdit
                      onClick={() => {setEditForm({serviceId:service._id,show:true})}}
                      className="text-blue-600 hover:text-blue-800 cursor-pointer transition"
                      title="Edit Service"
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AgentServiceTable;
