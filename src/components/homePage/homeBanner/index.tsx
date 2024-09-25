"use client";
import React from "react";
import Slider from "@/components/homePage/swipperSlider/Slider";

import "@/css/homeBanner.css"

const homeBanner: React.FC = () => {
  const medicalCenterImages = [
    './homeImage/medical_center_banner.png',
    './homeImage/medical_center_banner.png',
    './homeImage/medical_center_banner.png',
    './homeImage/medical_center_banner.png',
    './homeImage/medical_center_banner.png',
  ];

  const medicineHomeImages = [
    './homeImage/medicine_home_slider.png',
    './homeImage/medicine_home_slider.png',
    './homeImage/medicine_home_slider.png',
    './homeImage/medicine_home_slider.png',
    './homeImage/medicine_home_slider.png',
  ];

  return (
    <div className="grid grid-cols-3 gap-0 px-0 mt-3">
    <div className="col-span-2">
      <Slider images={medicalCenterImages} />
    </div>
    <div>
      <Slider images={medicineHomeImages} />
    </div>
  </div>
  );
};

export default homeBanner;
