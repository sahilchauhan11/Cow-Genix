import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';

const Vets = () => {
    const [vets, setVets] = useState([]);

    useEffect(() => {
        try {
            const func = async () => {
                const response = await axios("http://localhost:5000/auth/user/allvet", { withCredentials: true });
                if(response.data.success){
                  setVets(response.data.vetArr);
                }
            }
            func();
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="w-96 p-6 shadow-lg bg-gray-800 rounded-2xl">
                {vets.length > 0 ? (
                    vets.map((vet) => (
                        <div key={vet._id} className="mb-4 p-4 bg-gray-700 rounded-lg flex justify-between items-center">
                          <div>
                          <h2 className="text-xl font-semibold">{vet.name}</h2>
                            <p className="text-gray-400">Specialization: {vet.specialization}</p>
                            <p className="text-gray-400">Experience: {vet.experience} years</p>
                          </div>
                          <div><NavLink to={`/vet/${vet._id}`} className='bg-blue-600 px-6 py-2 rounded-lg'>Profile</NavLink></div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400 text-center">No veterinarians found.</p>
                )}
            </div>
            <Navbar />
        </div>
    );
}

export default Vets;
