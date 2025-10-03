import React, { useState, useEffect } from 'react';
import WaterFilter from "../../assets/Water.png";

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample banner data - replace with your actual data
  const banners = [
    {
      title: "Get exciting offers on first service booking",
      image: WaterFilter, // Your imported image
      buttonText: "Book Service Now"
    },
    {
      title: "Special discount for new customers",
      image: WaterFilter, // Replace with different image if available
      buttonText: "Get Discount"
    },
    {
      title: "Premium service at affordable prices",
      image: WaterFilter, // Replace with different image if available
      buttonText: "Learn More"
    }
  ];

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  // Manual slide selection
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className='w-full'>
      <div className="w-full  bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-700 relative overflow-hidden">
        <div className="flex items-center justify-center gap-40 pt-10 relative z-10">
          {/* Left Side - Text & Button */}
          <div className=" max-w-[400px] flex flex-col items-center justify-center gap-10">
            <h2 className="font-poppins font-semibold text-[32px] leading-[48px] text-white text-center drop-shadow-lg">
              {banners[currentSlide].title}
            </h2>
            <button className="w-[220px] h-[52px] px-[32px] py-[16px] bg-white/20 backdrop-blur-sm text-white text-lg font-medium rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-lg">
              {banners[currentSlide].buttonText}
            </button>
          </div>

          {/* Right Side - Banner Image */}
          <div className="relative flex justify-center items-center">
            <img
              src={banners[currentSlide].image}
              alt="Banner"
              className="w-[480px] h-[280px] object-cover drop-shadow-2xl transition-opacity duration-500"
            />
          </div>
        </div>

      
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-blue-200/20 to-transparent"></div>

    
        <div className="flex justify-center gap-2 relative z-10 my-4">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-[10px] h-[10px] rounded-full transition-all duration-300 hover:scale-125 cursor-pointer ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;