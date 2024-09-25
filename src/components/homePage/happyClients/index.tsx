// components/Trending.tsx

import React from 'react';
import Card from '@/components/homePage/happyClientSlider/'; // Correct import for the Card component
import "@/css/happyClient.css";

const fromTheBlog: React.FC = () => {
  const categories = [
    {
      title: 'Online pharmacy is a helpful hand when I don’t feel like getting out or some medicines or cosmetics are out of stock in my town.',
      star: '4.8',
      name: 'Linda Patison',
      imageUrl: '/homeImage/patison.svg',
      city: 'New York',
    },
    {
      title: 'Online pharmacy is a helpful hand when I don’t feel like getting out or some medicines or cosmetics are out of stock in my town.',
      star: '4.8',
      name: 'Linda Patison',
      imageUrl: '/homeImage/patison.svg',
      city: 'New York',
    },
    {
      title: 'Online pharmacy is a helpful hand when I don’t feel like getting out or some medicines or cosmetics are out of stock in my town.',
      star: '4.8',
      name: 'Linda Patison',
      imageUrl: '/homeImage/patison.svg',
      city: 'New York',
    },
    {
      title: 'Online pharmacy is a helpful hand when I don’t feel like getting out or some medicines or cosmetics are out of stock in my town.',
      star: '4.8',
      name: 'Linda Patison',
      imageUrl: '/homeImage/patison.svg',
      city: 'New York',
    },
    {
      title: 'Online pharmacy is a helpful hand when I don’t feel like getting out or some medicines or cosmetics are out of stock in my town.',
      star: '4.8',
      name: 'Linda Patison',
      imageUrl: '/homeImage/patison.svg',
      city: 'New York',
    },
    {
      title: 'Online pharmacy is a helpful hand when I don’t feel like getting out or some medicines or cosmetics are out of stock in my town.',
      star: '4.8',
      name: 'Linda Patison',
      imageUrl: '/homeImage/patison.svg',
      city: 'New York',
    },
    
  ];

  return (
    <div>
      <div className="flex items-center justify-between w-full px-16  mt-6">
        <div className="w-full px-0 mt-10">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <h1 className="shopByCategory">Happy Clients</h1>
            </div>
            <div className="flex justify-end">
              <button className="flex items-center space-x-2 text-black font-semibold py-2 px-4 rounded-full upload_now">
                <span>View all</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-8 ">
        <div className="">
          <Card data={categories} /> {/* Pass data to Card */}
        </div>
      </div>
    </div>
  );
};

export default fromTheBlog;
