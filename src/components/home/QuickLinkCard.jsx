import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const QuickLinkCard = () => {
  const popularCities = [
    "Gurgaon Kanpur",
    "Delhi Nagpur",
    "Mumbai Thane",
    "Bangalore Patna",
    "Hyderabad Indore",
    "Ahmedabad Ranchi",
    "Chennai Greater Noida",
    "Kolkata Meerut",
    "Noida Varanasi",
    "Ghaziabad Allahabad",
    "Faridabad Prayagraj",
    "Surat Chandigarh",
    "Pune Chandigarh",
    "Jaipur Lucknow",
  ];

  // Sections data - specify which sections should show cities
  const sections = [
    { id: 1, title: "RO Service Popular Cities", type: "cities", showCities: true },
    { id: 2, title: "Important Links", type: "links", showCities: true },
    { id: 3, title: "Buy Water Purifier", type: "button", buttonText: "Buy Water Purifier", showCities: true },
    { id: 4, title: "Also RO Plant", type: "button", buttonText: "Also RO Plant", showCities: true },
  ];

  // Track open/closed for each card
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="max-w-[1440px] w-full px-4">
      {/* Header */}
      <h1 className="text-3xl font-semibold text-blue-800 mb-6 ">Quick Links</h1>

      {/* Dynamic Sections */}
      {sections.map((section) => (
        <div key={section.id} className="mb-4 rounded-2xl shadow-lg bg-white overflow-hidden">
          {/* Section Header */}
          <div
            className={`flex justify-between items-center cursor-pointer px-6 py-4 transition-all duration-300 ${
              openSections[section.id] ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => toggleSection(section.id)}
          >
            <h2 className="text-lg font-semibold">{section.title}</h2>
            <span className="text-sm">
              {openSections[section.id] ? <FaMinus /> : <FaPlus />}
            </span>
          </div>

          {/* Section Content - Show cities data for all sections */}
          {openSections[section.id] && (
            <div className="p-6 bg-white">
              {section.showCities ? (
                // Show cities grid for all sections
                <div className="grid grid-cols-2  sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-3">
                  {popularCities.map((city, index) => (
                    <div
                      key={index}
                      className="rounded-lg"
                    >
                      <p className="text-sm text-blue-800 font-medium text-center">{city}</p>
                    </div>
                  ))}
                </div>
              ) : (
                // Original content (fallback - not used in this case)
                <>
                  {section.type === "links" && (
                    <div className="space-y-4 max-w-md">
                      <button className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium transition-colors duration-200 text-center">
                        Buy Water Purifier
                      </button>
                      <button className="w-full px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium transition-colors duration-200 text-center">
                        Also RO Plant
                      </button>
                    </div>
                  )}
                  {section.type === "button" && (
                    <div className="max-w-md">
                      <button className="w-full px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 font-medium transition-colors duration-200 text-center">
                        {section.buttonText}
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuickLinkCard;