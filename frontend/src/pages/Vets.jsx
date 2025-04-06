import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';

const Vets = () => {
    const [vets, setVets] = useState([]);

    useEffect(() => {
        const fetchVets = async () => {
            try {
                const response = await axios("http://localhost:5001/auth/user/allvet", { withCredentials: true });
                if (response.data.success) {
                    setVets(response.data.vetArr);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchVets();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-8 text-indigo-600">Our Veterinarians</h1>
                {vets.length > 0 ? (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {vets.map((vet) => (
                            <div 
                                key={vet._id} 
                                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                            >
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                                            <span className="text-xl font-semibold text-indigo-600">
                                                {vet.name.charAt(0)}
                                            </span>
                                        </div>
                                        <h2 className="text-xl font-semibold text-gray-800">{vet.name}</h2>
                                    </div>
                                    <div className="space-y-2 mb-4">
                                        <p className="text-gray-600 flex items-center">
                                            <span className="w-24 font-medium">Specialty:</span>
                                            <span>{vet.specialization}</span>
                                        </p>
                                        <p className="text-gray-600 flex items-center">
                                            <span className="w-24 font-medium">Experience:</span>
                                            <span>{vet.experience} years</span>
                                        </p>
                                    </div>
                                    <NavLink 
                                        to={`/vet/${vet._id}`} 
                                        className="block w-full text-center bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200"
                                    >
                                        View Profile
                                    </NavLink>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No veterinarians found.</p>
                    </div>
                )}
            </main>
        </div>
    );
}

export default Vets;