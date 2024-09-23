// components/Card.tsx

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa"; // Import the star icon from react-icons

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Navigation, Autoplay } from "swiper/modules";

interface CardData {
  data: {
    title: string;
    star: string;
    name: string;
    imageUrl: string;
    city: string;
  }[];
}

const Card: React.FC<CardData> = ({ data }) => {
  return (
    <div className="category-swiper relative">
      {/* Custom Previous and Next Arrows */}
      <div className="swiper-button-prev custom-prev-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="50"
          height="50">
          <path
            d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z"
            fill="white"
          />
        </svg>
      </div>
      <div className="swiper-button-next custom-next-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="50"
          height="50">
          <path
            d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z"
            fill="white"
          />
        </svg>
      </div>

      {/* Swiper Component */}
      <Swiper
        navigation={{
          prevEl: ".custom-prev-arrow",
          nextEl: ".custom-next-arrow",
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
        className="">
        {" "}
        {data.map(({ title, star, name, imageUrl, city }, index) => (
          <SwiperSlide key={index}>
            <div className="mx-4 bg-white boxShadow p-0 relative">
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-3">
                <FaStar className="startext text-yellow-400" />{" "}
                {/* Star icon */}
                <span className="startext">{star}</span>
              </div>

              {/* Review Text */}
              <p className="titleText mb-4">{title}</p>

              {/* User Info */}
              <div className="block items-center mt-16">
                <Image
                  src={imageUrl}
                  alt="Linda Patison"
                  className="w-20 h-20  object-cover"
                  width={20}
                  height={20}
                />
                <div className="mt-2">
                  <h3 className="nameText">{name}</h3>
                  <p className="cityText">{city}</p>
                </div>
              </div>

              {/* Quote Mark */}
              <div className="absolute bottom-24 right-10 text-pink-200 text-5xl font-serif">
                <Image
                  src="/homeImage/quote.svg"
                  className="w-14 h-14  object-cover"
                  alt="quote"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Card;
