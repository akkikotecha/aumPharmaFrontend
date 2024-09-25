// components/Trending.tsx

import React from 'react';
import Card from '@/components/homePage/whyChooseUSCard/'; // Correct import for the Card component
import "@/css/whyChooseUSCard.css";

const whyChooseUs: React.FC = () => {
  const categories = [
    {
      title: '32 Million+',
      description: 'Registered users<br/>as of Mar 31, 2022',
      className: 'cardGray',
      imageUrl: '/homeImage/32_milion.svg',
    },
    {
      title: '36 Million+',
      description: 'Orders on Aum<br/>Pharmacy till date',
      className: 'cardGray',
      imageUrl: '/homeImage/36_milion.svg',
    },
    {
      title: '99000+',
      description: 'Unique items sold<br/>last 3 months',
      className: 'cardGray',
      imageUrl: '/homeImage/99_medicine.svg',
    },
    {
      title: '19000+',
      description: 'Pin codes serviced<br/>last 3 months',
      className: 'cardGray',
      imageUrl: '/homeImage/19_map.svg',
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between w-full px-16  mt-6">
        <div className="w-full px-0 mt-10">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <h1 className="shopByCategory">Why Choose Us?</h1>
            </div>
            {/* <div className="flex justify-end">
              <button className="flex items-center space-x-2 text-black font-semibold py-2 px-4 rounded-full upload_now">
                <span>View all</span>
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="w-full mt-8  px-14">
        <div className="">
          <Card data={categories} /> {/* Pass data to Card */}
        </div>
      </div>
    </div>
  );
};

export default whyChooseUs;
