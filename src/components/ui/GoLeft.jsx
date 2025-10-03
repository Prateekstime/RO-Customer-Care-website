import React from 'react'
import LeftArrow from "../../assets/LeftArrow.svg";

function GoLeft() {
  return (
    <div>
              {/* Left Arrow Button */}
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white h-[60px] w-[60px] 
          rounded-full border-b-4 border-blue-300 hover:border-hidden shadow-lg transition-all duration-300 hover:bg-blue-500 hover:scale-110 hover:shadow-xl z-10"
              >
                <img
                  src={LeftArrow}
                  alt="Left Arrow"
                  className="w-[25px] mx-auto h-[25px] cursor-pointer"
                />
              </button>
    </div>
  )
}

export default GoLeft
