"use client"; // For Next.js client-side rendering
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaRupeeSign  } from "react-icons/fa"; // Font Awesome Icons
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  return (
    <div className="category-swiper relative">
      {/* Custom Previous and Next Arrows */}
      <div className="swiper-button-prev custom-prev-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="50" height="50">
          <path d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z" fill="white" />
        </svg>
      </div>
      <div className="swiper-button-next custom-next-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="50" height="50">
          <path d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z" fill="white" />
        </svg>
      </div>

      {/* Swiper Component */}
      <Swiper
        navigation={{
          prevEl: '.custom-prev-arrow',
          nextEl: '.custom-next-arrow',
        }}
        spaceBetween={20}
        slidesPerView={6}
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
                <div className="absolute bottom-2 right-2 cartIcon text-white rounded-full">
                <FontAwesomeIcon icon={faCartShopping} className="w-5 h-4"/>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Image src={category.image} alt={category.title} width={150} height={150} className="object-cover " />
                </div>
              </div>
              {/* Product Title */}
              <h3 className="text-gray-700 text-sm mt-3 text-center">{category.title}</h3>

              {/* Price Section */}
              <div className="mt-1 flex items-center justify-center">
                
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

              </div>


              {/* Buy Now Button */}
              <button className="mt-3 w-full text-sm  py-2 rounded buy_now">
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
