// src/pages/Dashboard.js
import React from "react";
import HealthAlert from "../components/ HealthAlert";
import BreedingRecommendation from "../components/BreedingRecommendation";
import VetDiscussion from "../components/VetDiscussion";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  // Cow health alerts
  const healthAlerts = [
    { name: "Laxmi", id: "1234", issue: "B12 Deficiency" },
    { name: "Radha", id: "5679", issue: "Calcium Deficiency" },
  ];

  // Breeding recommendations
  const breedingRecommendations = [
    { name: "Kamadhenu", id: "5678", recommendation: "Optimal Breeding Time" },
    { name: "Gauri", id: "9012", recommendation: "Enhance Milk Production" },
  ];

  // Vet discussion schedule
  const vetDiscussions = [
    { doctor: "Dr. Sharma", schedule: "Scheduled for Tomorrow" },
    { doctor: "Dr. Verma", schedule: "Next Week" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Dashboard</h1>

      {/* Cow Health Alerts */}
      <section>
        <h2 className="font-semibold mt-4">Cow Health Alerts</h2>
        {healthAlerts.map((alert, index) => (
          <HealthAlert key={index} name={alert.name} id={alert.id} issue={alert.issue} />
        ))}
      </section>

      {/* Breeding Recommendations */}
      <section>
        <h2 className="font-semibold mt-4">Breeding Recommendations</h2>
        {breedingRecommendations.map((breeding, index) => (
          <BreedingRecommendation key={index} name={breeding.name} id={breeding.id} recommendation={breeding.recommendation} />
        ))}
      </section>

      {/* Vet Discussions */}
      <section>
        <h2 className="font-semibold mt-4">Vet Discussions</h2>
        {vetDiscussions.map((vet, index) => (
          <VetDiscussion key={index} doctor={vet.doctor} schedule={vet.schedule} />
        ))}
      </section>

      <Navbar />
    </div>
  );
};

export default Dashboard;
