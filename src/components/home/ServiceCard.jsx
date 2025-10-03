import React, { useState, useEffect } from 'react';
import Booked1 from "../../assets/Booked1.png";
import Booked2 from "../../assets/Booked2.png";
import Booked3 from "../../assets/Booked3.png";
import Booked4 from "../../assets/Booked4.png";
import Booked5 from "../../assets/Booked5.png";
import Fstar from "../../assets/Fstar.png";
import GoRightButton from '../ui/GoRightButton';
import GoLeft from '../ui/GoLeft';

function ServiceCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  const serviceData = [
    {
      id: 1,
      image: Booked1,
      title: "RO System Cleaning",
      rating: "4.87 (3.9M)",
      borderColor: "border-blue-200",
      hoverBorderColor: "hover:border-blue-300",
      textColor: "text-blue-900"
    },
    {
      id: 2,
      image: Booked2,
      title: "Softener Installation",
      rating: "4.72 (3.5M)",
      borderColor: "border-blue-200",
      hoverBorderColor: "hover:border-blue-300",
      textColor: "text-blue-900"
    },
    {
      id: 3,
      image: Booked3,
      title: "Water Dispenser Repair",
      rating: "4.78 (2.8M)",
      borderColor: "border-blue-200",
      hoverBorderColor: "hover:border-blue-300",
      textColor: "text-blue-900"
    },
    {
      id: 4,
      image: Booked4,
      title: "Water Cooler Repair",
      rating: "4.75 (837K)",
      borderColor: "border-blue-200",
      hoverBorderColor: "hover:border-blue-300",
      textColor: "text-blue-900"
    },
    {
      id: 5,
      image: Booked5,
      title: "Water Ionizer Repair",
      rating: "4.70 (1.9M)",
      borderColor: "border-blue-200",
      hoverBorderColor: "hover:border-blue-300",
      textColor: "text-blue-900"
    }
  ];

  // Create extended array for seamless infinite looping
  const extendedServiceData = [...serviceData, ...serviceData, ...serviceData];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (newIndex >= serviceData.length * 2) {
          return serviceData.length;
        }
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [serviceData.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= serviceData.length * 2 ? serviceData.length : newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? serviceData.length * 2 - 1 : newIndex;
    });
  };

  const getVisibleServices = () => {
    return extendedServiceData.slice(currentIndex, currentIndex + visibleCards);
  };

  const handleCardClick = (serviceId) => {
    console.log(`Service card clicked: ${serviceId}`);
   
  };

  // Calculate display index for dots (optional)
  const getDisplayIndex = () => {
    return currentIndex % serviceData.length;
  };

  return (
    <div className="relative w-full">
      <div className="flex justify-between items-center p-3 gap-6 overflow-hidden">
       
        {/* <button 
          className="relative left-2 z-10"
          onClick={prevSlide}
        >
          <GoLeft />
        </button> */}

        {/* Cards Container */}
        <div className="flex gap-3 mx-0 flex-1 justify-center">
          {getVisibleServices().map((service, index) => (
            <div
              key={`${service.id}-${currentIndex}-${index}`}
              onClick={() => handleCardClick(service.id)}
              className="flex flex-col items-center p-4 bg-white border border-blue-200 rounded-[16px] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-300 cursor-pointer min-w-[230px]"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-[430px] h-[250px]  rounded-t-[16px] object-cover mb-4 transition-transform duration-300 hover:scale-105"
              />
              <div className="text-left w-full">
                <p className="text-lg font-semibold text-blue-900">
                  {service.title}
                </p>
                <div className="flex items-center mt-2">
                  <img
                    src={Fstar}
                    alt="Rating"
                    className="w-[16px] h-[16px] mr-2"
                  />
                  <p className="text-sm text-blue-700">{service.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Navigation Button */}
        {/* <button 
          className="relative right-2 z-10"
          onClick={nextSlide}
        >
          <GoRightButton />
        </button> */}
      </div>

      {/* Optional Dots Indicator - Uncomment if needed */}
      {/* <div className="flex justify-center gap-2 mt-6">
        {serviceData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index + serviceData.length)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === getDisplayIndex() 
                ? 'bg-blue-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div> */}
    </div>
  );
}

export default ServiceCard;