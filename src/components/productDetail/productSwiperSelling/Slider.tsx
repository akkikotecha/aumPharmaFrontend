"use client"; // For Next.js client-side rendering
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaHeart, FaRegHeart, FaRupeeSign  } from "react-icons/fa"; // Font Awesome Icons
import { toast } from 'react-hot-toast';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

// Define the Category Interface
interface Category {
  image: string;
  image2: string;
  title: string;
  price: string;
  originalPrice: string;
}

// Define the Props for the Swiper
interface CategorySwiperProps {
  categories: Category[];
}

const SellingSwiper: React.FC<CategorySwiperProps> = ({ categories }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false); // Track heart state

  const handleButtonClick = () => {
    if (isHeartFilled) {
      toast.success('Removed from your favorites!');
    } else {
      toast.success('Successfully added to your favorites!');
    }
    
    setIsHeartFilled(!isHeartFilled); // Toggle heart state
  };

  return (
    <div className=" relative ">
      {/* Custom Previous and Next Arrows */}
     

      {/* Swiper Component */}
      <Swiper
        navigation={{
          prevEl: '.custom-prev-arrow',
          nextEl: '.custom-next-arrow',
        }}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={600}
        effect="slide"
        modules={[Navigation, Autoplay]}
        className="mySwiper px-5"
      >
        {/* Mapping Categories into Swiper Slides */}
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            {/* Card Layout */}
            <div className="max-w-xs rounded-lg ">
              <div className="relative">
                <Image src={category.image2} alt={category.title} width={150} height={150} className="rounded-lg w-full object-cover" />
                
                {/* Cart Icon */}
                <div
                  className="absolute bottom-2 right-2 cartIcon text-white rounded-full cursor-pointer"
                  onClick={handleButtonClick}
                >
                  {isHeartFilled ? (
                    <FaHeart className="w-5 h-6 cursor-pointer" /> // Filled heart icon
                  ) : (
                    <FaRegHeart className="w-5 h-6 cursor-pointer" /> // Regular heart icon
                  )}
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Image src={category.image} alt={category.title} width={150} height={150} className="object-cover " />
                </div>
              </div>
              {/* Product Title */}
              <h3 className="text-gray-700 text-sm mt-3 ">{category.title}</h3>

              {/* Price Section */}
              <div className="mt-1 flex items-center ">
                
                <span className="text-lg font-semibold text-black flex items-center">
                  <FaRupeeSign className="w-4 h-4 mr-0" /> {/* Adjust icon size and spacing */}
                  {category.price}
                </span>
                
                
                <span className="text-sm text-gray-500 line-through ml-2 flex items-center originalPrice">
                <FaRupeeSign className="w-3 h-3 text-300" />
                <span className="text-sm font-normal"> {/* Ensure text size and weight */}
                  {category.originalPrice}
                </span>
              </span>
              <span className="text-sm text-gray-500  ml-2 flex items-center originalPrice">
                <div className="mt-4  rounded-md py-1 px-2 w-fit  fortyfive_off_selling">
                  45% off
                </div>
              </span>

              </div>


              {/* Buy Now Button */}
              <button className="mt-3 w-full text-sm  py-2 buy_now">
                Buy Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SellingSwiper;
