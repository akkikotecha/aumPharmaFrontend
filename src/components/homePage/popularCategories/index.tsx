"use client";
import React from "react";

import "@/css/swiperCategory.css"
import "@/css/shopByCategory.css"
import PopularCategorySwiper from "@/components/homePage/swiperCategoriesPopular/Slider";

const PopularCategoriesSlider: React.FC = () => {
  const categories = [
    { image: '/homeImage/anti_conrner.png', title: 'Anti Cancer' },
    { image: '/homeImage/kidney.png', title: 'Kidney Disease' },
    { image: '/homeImage/antiviral.png', title: 'Antiviral' },
    { image: '/homeImage/ostio.png', title: 'Osteoporosis' },
    { image: '/homeImage/transplant.png', title: 'Transplant' },
    { image: '/homeImage/personal_care.png', title: 'Personal Care' },
    { image: '/homeImage/anti_conrner.png', title: 'Anti Cancer' },
    { image: '/homeImage/kidney.png', title: 'Kidney Disease' },
    { image: '/homeImage/antiviral.png', title: 'Antiviral' },
    { image: '/homeImage/ostio.png', title: 'Osteoporosis' },
    { image: '/homeImage/transplant.png', title: 'Transplant' },
    { image: '/homeImage/personal_care.png', title: 'Personal Care' },
    { image: '/homeImage/anti_conrner.png', title: 'Anti Cancer' },
    { image: '/homeImage/kidney.png', title: 'Kidney Disease' },
    { image: '/homeImage/antiviral.png', title: 'Antiviral' },
    { image: '/homeImage/ostio.png', title: 'Osteoporosis' },
    { image: '/homeImage/transplant.png', title: 'Transplant' },
    { image: '/homeImage/personal_care.png', title: 'Personal Care' },
    { image: '/homeImage/anti_conrner.png', title: 'Anti Cancer' },
    { image: '/homeImage/kidney.png', title: 'Kidney Disease' },
    { image: '/homeImage/antiviral.png', title: 'Antiviral' },
    { image: '/homeImage/ostio.png', title: 'Osteoporosis' },
    { image: '/homeImage/transplant.png', title: 'Transplant' },
    { image: '/homeImage/personal_care.png', title: 'Personal Care' },
  ];

  return (
    <div>
    <div className="flex items-center justify-between w-full px-16 ">
      <div className="w-full px-0 mt-14">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <h1 className="shopByCategory">Popular Categories</h1>
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
   <PopularCategorySwiper categories={categories}/>

  </div>
  </div>

  );
};

export default PopularCategoriesSlider;
