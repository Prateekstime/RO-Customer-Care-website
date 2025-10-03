import React, { useState, useEffect } from 'react';
import Purifier from "../../assets/Purifier.png";
import Offer1 from "../../assets/Offer1.png";
import Offer2 from "../../assets/Offer2.png";
import Offer3 from "../../assets/Offer3.png";
import Offer4 from "../../assets/Offer4.png";
import Offer5 from "../../assets/Offer5.png";
import GoRightButton from '../ui/GoRightButton';
import GoLeft from '../ui/GoLeft';

function CategoryCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  const categoryData = [
    {
      id: 1,
      image: Purifier,
      title: "Purifiers",
    },
    {
      id: 2,
      image: Offer5,
      title: "Water Softener",
    },
    {
      id: 3,
      image: Offer3,
      title: "Water Dispenser",
    },
    {
      id: 4,
      image: Offer4,
      title: "Water Cooler",
    },
    {
      id: 5,
      image: Offer2,
      title: "Water Ionizer",
    },
    {
      id: 6,
      image: Offer1,
      title: "Water Tank",
    }
  ];

  // Create extended array for seamless infinite looping
  const extendedCategoryData = [...categoryData, ...categoryData, ...categoryData];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (newIndex >= categoryData.length * 2) {
          return categoryData.length;
        }
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [categoryData.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= categoryData.length * 2 ? categoryData.length : newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? categoryData.length * 2 - 1 : newIndex;
    });
  };

  const getVisibleCategories = () => {
    return extendedCategoryData.slice(currentIndex, currentIndex + visibleCards);
  };

  const handleCategoryClick = (categoryId) => {
    console.log(`Category clicked: ${categoryId}`);
    // Add your category click logic here
  };

  return (
    <div className="relative w-full">
      <div className="flex justify-between items-center gap-3 overflow-hidden">
        {/* Left Navigation Button */}
        <button 
          className="relative left-2 z-10"
          onClick={prevSlide}
        >
          <GoLeft />
        </button>

        {/* Categories Container */}
        <div className="flex my-4 mx-6 flex-1 gap-6 justify-center">
          {getVisibleCategories().map((category, index) => (
            <div
              key={`${category.id}-${currentIndex}-${index}`}
              onClick={() => handleCategoryClick(category.id)}
              className="flex-1 flex flex-col items-center p-4 bg-gradient-to-b from-blue-50 to-white border border-blue-200 rounded-[16px] transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-blue-300 cursor-pointer min-w-[150px]"
            >
              <img
                src={category.image}
                alt={category.title}
                className="transition-transform h-40 duration-300 hover:scale-110"
              />
              <p className="mt-2 font-medium text-blue-800">{category.title}</p>
            </div>
          ))}
        </div>

        {/* Right Navigation Button */}
        <button 
          className="relative right-2 z-10"
          onClick={nextSlide}
        >
          <GoRightButton />
        </button>
      </div>

      {/* Optional Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {categoryData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index + categoryData.length)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === (currentIndex % categoryData.length) 
                ? 'bg-blue-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryCard;