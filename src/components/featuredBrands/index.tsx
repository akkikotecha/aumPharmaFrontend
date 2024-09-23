"use client";
import React from "react";

import "@/css/swiperCategory.css"
import "@/css/featureBrand.css"
import CategorySwiper from "@/components/swiperCategories/Slider";

const featureBrand: React.FC = () => {
  const categories = [
    { image: '/homeImage/brand_1.png', title: '' },
    { image: '/homeImage/brand_2.png', title: '' },
    { image: '/homeImage/brand_3.png', title: '' },
    { image: '/homeImage/brand_4.png', title: '' },
    { image: '/homeImage/brand_5.png', title: '' },
    { image: '/homeImage/brand_6.png', title: '' },
    { image: '/homeImage/brand_1.png', title: '' },
    { image: '/homeImage/brand_2.png', title: '' },
    { image: '/homeImage/brand_3.png', title: '' },
    { image: '/homeImage/brand_4.png', title: '' },
    { image: '/homeImage/brand_5.png', title: '' },
    { image: '/homeImage/brand_6.png', title: '' },
   
  ];

  return (
    <div>
    <div className="flex items-center justify-between w-full p-0 md:container">
      <div className="w-full px-0 mt-14">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <h1 className="shopByCategory">Featured Brands</h1>
          </div>
          <div className="flex justify-end">
            <button className="flex items-center space-x-2 text-black font-semibold py-2 px-4 rounded-full upload_now">
              <span>View all</span>
            </button>
          </div>
        </div>
      </div>
      
    </div>
   <div className="w-full mt-4">
   <CategorySwiper categories={categories}/>

  </div>
  </div>

  );
};

export default featureBrand;
