"use client";
import React from "react";

import "@/css/whyChoosePharmacyBanner.css"
import WhyChooseAumPharmacy from "@/components/whyChooseAumPharmacyBanner";

const WhyChooseAumBanner: React.FC = () => {
 

  return (
    <div>
    <div className="flex items-center justify-between w-full px-4">
    <div className="w-full mt-12">
   <WhyChooseAumPharmacy image="/homeImage/tablets.png" url="./#"/>

  </div>
    </div>
   
  </div>

  );
};

export default WhyChooseAumBanner;
