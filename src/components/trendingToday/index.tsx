"use client";
import React from "react";
import "@/css/shopByCategory.css"

const Trending: React.FC = () => {
  

  return (
    <div>
      <div className="flex items-center justify-between w-full p-0 md:container">
        <div className="w-full px-0 mt-10">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <h1 className="shopByCategory">Trending Today</h1>
            </div>
            <div className="flex justify-end">
              <button className="flex items-center space-x-2 text-black font-semibold py-2 px-4 rounded-full upload_now">
                <span>View all</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-8  px-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
          <img src="./homeImage/trending_1.png" className="rounded-lg w-full object-cover" />
          </div>
          <div>
          <img src="./homeImage/trending_2.png" className="rounded-lg w-full object-cover" />

          </div>
          <div>
          <img src="./homeImage/trending_3.png" className="rounded-lg w-full object-cover" />

          </div>
        </div>
      </div>
  </div>

  );
};

export default Trending;
