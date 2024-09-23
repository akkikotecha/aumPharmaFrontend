"use client";
import React from "react";

import "@/css/swiperSelling.css"
import "@/css/shopByCategory.css"
import SwiperSelling from "@/components/SwiperSelling/Slider";

const InTheSpotlightSlider: React.FC = () => {
  const categories = [
    { image: './homeImage/slide1.png',image2:'./homeImage/sellingBg.png', title: 'Prograf 1mg hard capsule',price:"2000",originalPrice:"2500" },
    { image: './homeImage/slide2.png',image2:'./homeImage/sellingBg.png', title: 'Advacan 0.5mg Tablet',price:"2000",originalPrice:"2500" },
    { image: './homeImage/slide3.png', image2:'./homeImage/sellingBg.png',title: 'Prograf 0.5mg Capsule',price:"2000",originalPrice:"2500" },
    { image: './homeImage/slide4.png',image2:'./homeImage/sellingBg.png', title: 'Myfortic 180mg Tablet',price:"2000",originalPrice:"2500" },
    { image: './homeImage/slide5.png',image2:'./homeImage/sellingBg.png', title: 'Advacan 0.25mg Table',price:"2000",originalPrice:"2500" },
    { image: './homeImage/slide6.png', image2:'./homeImage/sellingBg.png',title: 'Myfortic 360mg Tablet',price:"2000",originalPrice:"2500" },
    { image: './homeImage/slide1.png', image2:'./homeImage/sellingBg.png',title: 'Prograf 1mg hard capsule',price:"2000",originalPrice:"2500" },
    { image: './homeImage/slide2.png',image2:'./homeImage/sellingBg.png', title: 'Advacan 0.5mg Tablet',price:"2000",originalPrice:"2500" },
    { image: './homeImage/slide3.png', image2:'./homeImage/sellingBg.png',title: 'Prograf 0.5mg Capsule',price:"2000",originalPrice:"2500" },
    { image: './homeImage/slide4.png',image2:'./homeImage/sellingBg.png', title: 'Myfortic 180mg Tablet',price:"2000",originalPrice:"2500" },
    { image: './homeImage/slide5.png',image2:'./homeImage/sellingBg.png', title: 'Advacan 0.25mg Table',price:"2000",originalPrice:"2500" },
    { image: './homeImage/slide6.png',image2:'./homeImage/sellingBg.png', title: 'Myfortic 360mg Tablet',price:"2000",originalPrice:"2500" },
  ];

  return (
    <div>
    <div className="flex items-center justify-between w-full p-0 md:container">
      <div className="w-full px-0 mt-16">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <h1 className="shopByCategory">In The Spotlight</h1>
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
   <SwiperSelling categories={categories}/>

  </div>
  </div>

  );
};

export default InTheSpotlightSlider;
