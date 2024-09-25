"use client"; // Necessary for Next.js client-side code
import Image from "next/image";
import React from "react";

interface BannerProps {
  image: string;
  url: string;
}

const whyChooseAumPharmacy: React.FC<BannerProps> = ({ image, url }) => {
  return (
    <section className="relative h-64 w-full flex items-center">
      <div className="absolute inset-0">
        <Image
          src={image}
          layout="fill"
          alt="Pharmacy Banner"
          className="w-full"
        />
      </div>
      <div className="relative z-10 w-full  px-16">
        <div className="text-white">
          <h1 className="pharmacyBannerText">
            Why Choose AUM Pharmacy<br/>for Your Healthcare?
          </h1>
          <a href={url}>
            <button className="mt-4  text-white py-2 px-4 rounded-lg pharmacy_read_more">
              Read More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default whyChooseAumPharmacy;
