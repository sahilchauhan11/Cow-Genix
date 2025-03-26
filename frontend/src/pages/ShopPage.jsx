import React from "react";

const ShopPage = () => {
  const supplies = [
    { name: "Ayurvedic Medicines", imageUrl: "https://via.placeholder.com/50" },
    { name: "Nutritional Supplements", imageUrl: "https://via.placeholder.com/50" },
    { name: "Wound Care Products", imageUrl: "https://via.placeholder.com/50" },
    { name: "Feeding Tools", imageUrl: "https://via.placeholder.com/50" },
    { name: "Milking Supplies", imageUrl: "https://via.placeholder.com/50" },
    { name: "Cleaning Solutions", imageUrl: "https://via.placeholder.com/50" },
  ];

  return (
    <div className="p-8 max-w-2xl mx-auto bg-white rounded-xl shadow-xl border border-gray-300">
      <Header />
      <SuppliesList supplies={supplies} />
    </div>
  );
};

const Header = () => (
  <div className="flex items-center justify-between pb-6 border-b border-gray-300">
    <button className="text-2xl text-gray-600 hover:text-black">←</button>
    <h2 className="text-3xl font-bold text-gray-800">Shop</h2>
    <div></div>
  </div>
);

const SuppliesList = ({ supplies }) => (
  <div>
    <h3 className="text-xl font-semibold text-gray-700 my-4">Supplies</h3>
    <div className="grid grid-cols-2 gap-6">
      {supplies.map((supply, index) => (
        <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition duration-200 space-x-4 border border-gray-200">
          <img src={supply.imageUrl} alt={supply.name} className="w-16 h-16 rounded-lg" />
          <p className="text-gray-900 font-medium text-lg">{supply.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default ShopPage;