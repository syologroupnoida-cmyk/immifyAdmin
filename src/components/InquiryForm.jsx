import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const InquiryForm = ({ destination, type: propType }) => {

    // const location = useLocation();

    // const pathType = location.pathname.split("/")[1];

    // const type = propType || pathType;

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        destination: destination,
        // type: type || ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                `${import.meta.env.VITE_SERVER_URL}/leads/userLead`,
                formData,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                country: "",
                // destination: destination,
                // type: type
            });

            toast.success(response?.data?.message || "Our team will contact you soon!");

            console.log("Form Submitted:", formData);

        } catch (error) {

            console.log("FULL ERROR:", error);

            toast.error(
                error?.response?.data?.message || "Something went wrong, try again."
            );

        }

    };

    return (
        <div className="bg-white shadow-xl rounded-2xl p-6">

            <h2 className="text-3xl text-center font-bold text-gray-800 mb-2">
                Get Free Consultation

            </h2>

            <p className=" text-center text-gray-500 mb-6">
                Confused? Don't know what to do?
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        FirstName
                    </label>

                    <input
                        type="text"
                        name="firstName"
                        placeholder="John "
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        LastName
                    </label>

                    <input
                        type="text"
                        name="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Email Address
                    </label>

                    <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Phone Number
                    </label>

                    <input
                        type="tel"
                        name="phone"
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Your Country
                    </label>

                    <input
                        type="text"
                        name="country"
                        placeholder="India"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Destination
                    </label>

                    <input
                        type="text"
                        value={destination}
                        readOnly
                        className="w-full border rounded-lg px-4 py-2 bg-gray-100"
                    />
                </div>

                <button
                    type="submit"
                    //   onSubmit={handleSubmit}
                    className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 transition"
                >
                    Submit Application
                </button>

            </form>
        </div>
    );
};

export default InquiryForm;