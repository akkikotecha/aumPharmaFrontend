import React, { useState } from 'react';
import {FaRupeeSign  } from "react-icons/fa"; // Font Awesome Icons

// SubstitutesCard Component - displays a list of substitutes
const SubstitutesCard = ({ substitutes }) => {
  return (
    <div className="">
      <div className="space-y-4">
        {substitutes.map((item, index) => (
          <div key={index} className="flex justify-between items-start mb-4">
            <div>
              <p className="substitute_title ">{item.name}</p>
              <p className="text-gray-500 text-sm mt-1">{item.company}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold"><span className="text-lg font-semibold text-black flex items-center">
                  <FaRupeeSign className="w-4 h-4 mr-0" /> {/* Adjust icon size and spacing */}
                  {item.price}/injection
                </span></p>
              <p className="substitute_small text-sm mt-1">{item.discount}</p>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

// SubstitutesCardCom Component - controls how many substitutes are displayed
const SubstitutesCardCom = ({ substitutes }) => {
  const [visibleCount, setVisibleCount] = useState(3); // Initial number of visible substitutes

  // Function to show more substitutes
  const showMore = () => {
    setVisibleCount(prevCount => prevCount + 3); // Increase the visible count by 3 (or any number)
  };

  return (
    <div className="w-full mt-3">
      {substitutes.slice(0, visibleCount).map((item, index) => (
        <SubstitutesCard
          key={index}
          substitutes={[item]} // Pass only the current item as an array
        />
      ))}

      {visibleCount < substitutes.length && ( // Check if there are more substitutes to show

      
        <div className="flex justify-end mt-0">
          
          <button onClick={showMore} className="mt-6 buttonViewSubstitute text-white w-full py-2 rounded-full flex items-center justify-center">
            VIEW ALL SUBSTITUTES
            <span className="ml-2 text-xl">&#8594;</span> {/* Arrow icon */}
          </button>

        
        </div>
      )}
    </div>
  );
};

export default SubstitutesCardCom;
