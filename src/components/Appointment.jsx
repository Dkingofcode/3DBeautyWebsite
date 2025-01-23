import React, { useState } from 'react';

const Appointment = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center py-10 px-5">
            <div className="max-w-lg w-full bg-gray-800 text-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-8 text-center text-white">
                    Book an Appointment
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block mb-2 text-gray-400 text-sm font-medium">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-gray-400 text-sm font-medium">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-gray-400 text-sm font-medium">Phone:</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-gray-400 text-sm font-medium">Date:</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-gray-400 text-sm font-medium">Time:</label>
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-gray-400 text-sm font-medium">Service:</label>
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                        >
                            <option value="" disabled>
                                Select a service
                            </option>
                            <option value="makeup">Makeup</option>
                            <option value="hair">Hair</option>
                            <option value="nails">Nails</option>
                            <option value="facial">Facial</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-600"
                    >
                        Book Appointment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Appointment;
