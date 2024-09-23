"use client"; // For Next.js client-side rendering
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation,Autoplay } from "swiper/modules";
import Image from "next/image";


// import "@/css/swiperCategory"

interface Category {
  image: string;
  title: string;
}

interface CategorySwiperProps {
  categories: Category[];
}


const CategorySwiper: React.FC<CategorySwiperProps> = ({ categories }) => {
  return (
    <div className="category-swiper relative">
       <div className="swiper-button-prev custom-prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="50" height="50">
  <path d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z" fill="white" data-name="4-Arrow Left"/>
</svg>
</div>
       <div className="swiper-button-next custom-next-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="50" height="50">
  <path d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z" fill="white" data-name="4-Arrow Left"/>
</svg>
</div>
      <Swiper
       navigation={{
        prevEl: '.custom-prev-arrow', // Link to the custom previous button
        nextEl: '.custom-next-arrow', // Link to the custom next button
      }}
        // navigation={true} // Enable navigation buttons (arrows)
        spaceBetween={20} // Space between slides
        slidesPerView={6} // Number of visible slides
        autoplay={{
          delay: 2500, // Delay between transitions in milliseconds
          disableOnInteraction: false, // Continue autoplay after user interaction
        }} // Enable autoplay
        speed={600} // Transition speed in milliseconds
        effect="slide" // Transition effect (can be 'slide', 'fade', etc.)
        modules={[Navigation, Autoplay]} // Enable Swiper modules
        className="mySwiper px-5"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="category-item text-center">
              <Image src={category.image} alt={category.title} width={400} height={400} className="rounded-lg w-full h-40 object-cover imageShadow" />
              <h2 className="mt-2 font-semibold">{category.title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySwiper;
