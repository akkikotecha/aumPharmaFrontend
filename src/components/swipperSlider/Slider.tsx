"use client"; // Necessary for Next.js client-side code
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Navigation,Autoplay } from 'swiper/modules';


interface SwipperProps {
  images: string[]; // Accepts an array of image URLs
}

const Swipper: React.FC<SwipperProps> = ({ images }) => {
  return (
    <Swiper 
      pagination={true} 
      modules={[Pagination,Navigation, Autoplay]} 
      autoplay={{
        delay: 2500, // Delay between transitions in milliseconds
        disableOnInteraction: false, // Continue autoplay after user interaction
      }} // Enable autoplay
      speed={600} // Transition speed in milliseconds
      effect="slide" // Transition effect (can be 'slide', 'fade', etc.) // Enable autoplay
    className="mySwiper">
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} className="w-full h-full" alt={`slide-${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swipper;
