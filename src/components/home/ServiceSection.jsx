import React from "react";
import { FaClock, FaShieldAlt, FaCogs, FaArrowCircleRight } from "react-icons/fa";
import img2 from "../../assets/RO_Plant_Service.webp";
import img1 from "../../assets/Purifier.png";
import img3 from "../../assets/water_softener_Service.webp";
import img4 from "../../assets/amc-banner.webp";


const services = [
  {
    id: 1,
    title: "Water Purifier Service",
    img: img1,
    icon: <FaShieldAlt />,
    time: "30 min",
  },
  {
    id: 2,
    title: "RO Plant Service",
    img: img2,
    icon: <FaCogs />,
    time: "30 min",
  },
  {
    id: 3,
    title: "Water Softner Service",
    img: img3,
    icon: "↑",
    time: "30 min",
  },
  {
    id: 4,
    title: "Annual Maintenance Contract",
    img: img4,
    icon: <FaShieldAlt />,
    time: "30 min",
  },
];

const features = [
  { id: 1, text: "Service in just 30 minutes", icon: "🛠️" },
  { id: 2, text: "Verified Professionals", icon: "👷" },
  { id: 3, text: "Hassle Free Booking", icon: "📅" },
  { id: 4, text: "Transparent Pricing", icon: "₹" },
  { id: 5, text: "24/7 Support", icon: "⏰" },
  { id: 6, text: "Trusted by Millions", icon: "🏅" },
];

const ServiceSection = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto py-6 px-4">
      <h2 className="text-3xl font-semibold text-center text-blue-900 mb-4">
        Get Water Purifier Services in 30 min
      </h2>
       <div className="w-[500px] mx-auto  h-1 rounded-lg bg-gradient-to-r  mb-2  from-blue-700 via-blue-400 to-blue-700"></div>

      <p className="text-blue-500 space-y-0 text-center mb-8 max-w-3xl mx-auto">
        Tired of waiting days for water purifier repairs? Our certified technicians reach your
        location within 30 minutes with professional-grade solutions. Whether it's emergency
        repairs, we fix it right the first time. Same-day service, transparent pricing, and
        100% satisfaction guarantee.
      </p>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative">
              <img
                src={service.img}
                alt={service.title}
                className="w-full rounded-t-2xl border border-gray-300 h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm flex items-center gap-1">
                <FaClock /> {service.time}
              </div>
            </div>
            <div className="p-4 flex flex-col items-center text-center">
              <p className="font-semibold text-lg flex items-center gap-2 text-gray-800">
                {service.icon} {service.title}
              </p>
              <button className="mt-4 bg-white border rounded-full px-6 py-2 text-blue-700 font-medium shadow hover:bg-blue-50 transition flex items-center gap-2">
                <FaArrowCircleRight /> Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="flex flex-wrap justify-center gap-10 mt-8">
        {features.map((feature) => (
          <div key={feature.id} className="flex flex-col items-center text-center max-w-[140px]">
            <div className="text-3xl mb-2">{feature.icon}</div>
            <p className="text-gray-700 font-medium">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
