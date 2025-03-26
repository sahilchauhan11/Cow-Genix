import React from "react";
import AppointmentCard from "../components/AppointmentCard";
import HealthReport from "../components/HealthReport";
import BreedingConsultation from "../components/BreedingConsultation";
import Navbar from "../components/Navbar";
import VetNavbar from "../components/VetNavbar";

const VitDashboard = () => {
  // Static Data for Vet Dashboard
  const appointments = [
    { id: "1", farmer: "Ramesh Kumar", date: "March 25, 2024" },
    { id: "2", farmer: "Sita Verma", date: "March 27, 2024" },
  ];

  const healthReports = [
    { id: "1", cow: "Laxmi", issue: "B12 Deficiency" },
    { id: "2", cow: "Radha", issue: "Calcium Deficiency" },
  ];

  const breedingRequests = [
    { id: "1", cow: "Kamadhenu", farmer: "Mahesh Yadav" },
    { id: "2", cow: "Gauri", farmer: "Shyam Singh" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Vet Dashboard</h1>

      {/* Upcoming Appointments */}
      <section>
        <h2 className="font-semibold mt-4">Upcoming Appointments</h2>
        {appointments.map((appointment) => (
          <AppointmentCard key={appointment.id} farmer={appointment.farmer} date={appointment.date} />
        ))}
      </section>

      {/* Cow Health Reports */}
      <section>
        <h2 className="font-semibold mt-4">Cow Health Reports</h2>
        {healthReports.map((report) => (
          <HealthReport key={report.id} cow={report.cow} issue={report.issue} />
        ))}
      </section>

      {/* Breeding Consultation Requests */}
      <section>
        <h2 className="font-semibold mt-4">Breeding Consultations</h2>
        {breedingRequests.map((request) => (
          <BreedingConsultation key={request.id} cow={request.cow} farmer={request.farmer} />
        ))}
      </section>

      <VetNavbar />
    </div>
  );
};

export default VitDashboard;
