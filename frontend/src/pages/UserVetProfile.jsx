import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const UserVetProfile = () => {
    const [vet, setVet] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchVet = async () => {
            try {
                const response = await axios(`http://localhost:5000/auth/user/vet/${id}`, { withCredentials: true });
                if (response.data.success) {
                    setVet(response.data.vet);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchVet();
    }, [id]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white py-6  w-screen">
            <div className="w-[70%]   h-[80vh] p-12 shadow-2xl bg-gray-800 rounded-3xl flex flex-col justify-center">
                {vet ? (
                    <div className='w-full h-full flex flex-col items-center'>
                        <h2 className="text-4xl w-full font-semibold uppercase text-center mb-6 flex justify-between text-gray-400"> USERNAME <span className='text-white  text-2xl'> {vet.name}</span></h2>
                        <h2 className="text-4xl w-full font-semibold uppercase text-center mb-6 flex justify-between text-gray-400"> Specialization <span className='text-white text-2xl'> {vet.specialization}</span></h2>
                        <h2 className="text-4xl w-full font-semibold uppercase text-center mb-6 flex justify-between text-gray-400"> Experience <span className='text-white text-2xl'> {vet.experience}</span></h2>
                        <h2 className="text-4xl w-full font-semibold uppercase text-center mb-6 flex justify-between text-gray-400"> Phone <span className='text-white text-2xl'> {vet.phone}</span></h2>
                        <h2 className="text-4xl w-full font-semibold uppercase text-center mb-6 flex justify-between text-gray-400"> Clinic <span className='text-white text-2xl'> {vet.clinic}</span></h2>
                        <h2 className="text-4xl w-full font-semibold uppercase text-center mb-6 flex justify-between text-gray-400"> Email <span className='text-white text-2xl'> {vet.email}</span></h2>
                       
                        <button className='bg-blue-500 p-5 w-fit rounded-lg'>GET APPOINTMENT</button>
                       
                        
                    </div>
                ) : (
                    <p className="text-gray-300 text-2xl text-center">Loading...</p>
                )}
            </div>
            <div className="mt-10 w-screen">
                <Navbar />
            </div>
        </div>
    );
}

export default UserVetProfile;
