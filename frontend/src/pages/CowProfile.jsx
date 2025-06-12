import React from "react";

const CowProfile = () => {
  const cowData = {
    tag: "#423",
    breed: "Gir",
    vaccinated: "2 months ago",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    healthHistory: {
      dateOfBirth: "2021-01-15",
      lastCheckup: "2024-03-22",
      weight: "350 kg",
    },
    vaccinations: [
      { name: "Foot and Mouth Disease", date: "2023-12-10" },
      { name: "Blackleg", date: "2023-12-10" },
      { name: "Haemorrhagic Septicaemia", date: "2023-12-10" },
    ],
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg space-y-6 border border-gray-200">
      <ProfileHeader cowData={cowData} />
      <HealthHistory healthHistory={cowData.healthHistory} />
      <VaccinationRecords vaccinations={cowData.vaccinations} />
      <BreedingTreeLink />
    </div>
  );
};

const ProfileHeader = ({ cowData }) => (
  <div className="flex flex-col items-center text-center space-y-2">
    <img src={cowData.imageUrl} alt="Cow" className="w-28 h-28 rounded-full border-2 border-gray-300 shadow-sm" />
    <h2 className="text-2xl font-bold text-gray-800">Tag {cowData.tag}</h2>
    <p className="text-gray-600 text-lg">{cowData.breed}</p>
    <p className="text-green-500 font-medium">Vaccinated {cowData.vaccinated}</p>
  </div>
);

const HealthHistory = ({ healthHistory }) => (
  <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
    <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Health History</h3>
    <ul className="text-gray-700 mt-2 space-y-1">
      <li><strong>Date of Birth:</strong> {healthHistory.dateOfBirth}</li>
      <li><strong>Last Checkup:</strong> {healthHistory.lastCheckup}</li>
      <li><strong>Weight:</strong> {healthHistory.weight}</li>
    </ul>
  </div>
);

const VaccinationRecords = ({ vaccinations }) => (
  <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
    <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Vaccination Records</h3>
    <ul className="text-gray-700 mt-2 space-y-1">
      {vaccinations.map((vaccination, index) => (
        <li key={index}>
          <strong>{vaccination.name}:</strong> {vaccination.date}
        </li>
      ))}
    </ul>
  </div>
);

const BreedingTreeLink = () => (
  <div className="text-blue-600 font-semibold text-lg text-center cursor-pointer hover:underline mt-4">
    Breeding Tree →
  </div>
);

export default CowProfile;