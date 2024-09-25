// components/Trending.tsx

import React from 'react';
import Card from '@/components/homePage/blogCard/'; // Correct import for the Card component
import "@/css/blogCard.css";

const fromTheBlog: React.FC = () => {
  const categories = [
    {
      title: 'Health Apps & Devices',
      description: 'In our current digital era, technology has transformed our daily lives and revolutionized how we approach health and well-being. The proliferation of smartphones',
      date: 'February 11, 2019',
      imageUrl: '/homeImage/health_app.png',
      category: 'By Aum Pharmacy',
    },
    {
      title: 'Your Neighborhood...',
      description: 'In our current digital era, technology has transformed our daily lives and revolutionized how we approach health and well-being. The proliferation of smartphones',
      date: 'February 11, 2019',
      imageUrl: '/homeImage/your_health.png',
      category: 'By Aum Pharmacy',
    },
    {
      title: 'Healthy Food Is a Key...',
      description: 'In our current digital era, technology has transformed our daily lives and revolutionized how we approach health and well-being. The proliferation of smartphones',
      date: 'February 11, 2019',
      imageUrl: '/homeImage/healthy_food.png',
      category: 'By Aum Pharmacy',
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between w-full px-16  mt-12">
        <div className="w-full px-0 mt-10">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <h1 className="shopByCategory">From The Blog</h1>
            </div>
            <div className="flex justify-end">
              <button className="flex items-center space-x-2 text-black font-semibold py-2 px-4 rounded-full upload_now">
                <span>View all</span>
              </button>
            </div>
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

export default fromTheBlog;
