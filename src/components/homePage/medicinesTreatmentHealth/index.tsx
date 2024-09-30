// components/Trending.tsx

import React from 'react';
import Card from '@/components/homePage/shippinLocationSupportCard/'; // Correct import for the Card component
import "@/css/shippinLocationSupportCard.css";

const shippinLocationSupport: React.FC = () => {
  const categories = [
    {
      title: 'Medicines',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      className: 'greenGredient',
      imageUrl: '',
    },
    {
      title: 'Treatment',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      className: 'greenGredient',
      imageUrl: '',
    },
    {
      title: 'Health conditions',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      className: 'greenGredient',
      imageUrl: '',
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between w-full px-16  mt-12">
        {/* <div className="w-full px-0 mt-10">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <h1 className="shopByCategory">From The Blog</h1>
            </div>
            {/* <div className="flex justify-end">
              <button className="flex items-center space-x-2 text-black font-semibold py-2 px-4 rounded-full upload_now">
                <span>View all</span>
              </button>
            </div> 
          </div>
        </div> */}
      </div>
      <div className="w-full mt-8  px-14">
        <div className="">
          <Card data={categories} /> {/* Pass data to Card */}
        </div>
      </div>
    </div>
  );
};

export default shippinLocationSupport;
