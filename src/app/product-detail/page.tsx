"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import ProductDescription from "@/components/productDetail/ProductDescription";
import "@/css/sidebar.css";
import Image from "next/image";
import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";

export default function Home() {
  const [openCategory, setOpenCategory] = useState<string>("");

  const toggleCategory = (category: string) => {
    if (openCategory === category) {
      setOpenCategory(""); // Close if the same section is clicked
    } else {
      setOpenCategory(category); // Open new section
    }
  };


  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Layout */}
      <div className="flex w-full mt-1">
        {/* Sidebar */}
        <div className="px-6 py-4">
        <aside className="w-74 p-4 bg_gray_set shadow-md px-12">
          
          <div className="mb-1 mt-2 flex justify-between items-baseline">
            <h2 className="filter_sub_title">Overview</h2>
          </div>

          <div className="space-y-1">
            {/* Category 1 */}
            <div className="border-b py-3">
              <div
                className="flex justify-between items-center cursor-pointer filterSub filterListTitle"
                onClick={() => toggleCategory("cat1")}>
                <h3>Descriptions</h3>
              </div>
            </div>

            {/* Category 2 */}
            <div className="border-b py-3">
              <div
                className="flex justify-between items-center cursor-pointer filterListTitle "
                onClick={() => toggleCategory("cat2")}>
                <h3>Uses</h3>
              </div>
            </div>

          
            {/* Category 4 */}
            <div className="border-b py-3">
              <div
                className="flex justify-between items-center cursor-pointer filterListTitle"
                onClick={() => toggleCategory("cat4")}>
                <h3>Specifications and Features</h3>
              </div>
            </div>
            <div className="border-b py-3">
              <div
                className="flex justify-between items-center cursor-pointer filterListTitle"
                onClick={() => toggleCategory("cat4")}>
                <h3>Directions for Use</h3>
              </div>
            </div>
            <div className="border-b py-3">
              <div
                className="flex justify-between items-center cursor-pointer filterListTitle"
                onClick={() => toggleCategory("cat4")}>
                <h3>Safety Information</h3>
              </div>
            </div>
            <div className="border-b py-3">
              <div
                className="flex justify-between items-center cursor-pointer filterListTitle"
                onClick={() => toggleCategory("cat4")}>
                <h3>Quick Tips</h3>
              </div>
            </div>
            <div className="border-b py-3">
              <div
                className="flex justify-between items-center cursor-pointer filterListTitle"
                onClick={() => toggleCategory("cat4")}>
                <h3>Why Choose us</h3>
              </div>
            </div>
            <div className="border-b py-3">
              <div
                className="flex justify-between items-center cursor-pointer filterListTitle"
                onClick={() => toggleCategory("cat4")}>
                <h3>Ratings & Reviews</h3>
              </div>
            </div>
            <div className="border-b py-3">
              <div
                className="flex justify-between items-center cursor-pointer filterListTitle"
                onClick={() => toggleCategory("cat4")}>
                <h3>Related products</h3>
              </div>
            </div>
            <div className="border-b py-3">
              <div
                className="flex justify-between items-center cursor-pointer filterListTitle"
                onClick={() => toggleCategory("cat4")}>
                <h3>FAQs</h3>
              </div>
            </div>
            
          </div>




        </aside>
        </div>

        {/* Product List */}
        <main className="w-full grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <ProductDescription />
          </div>
          <div className="col-span-4 pe-6 ps-2 mt-5">
            {/* Other content for the second column */}
            <div className="p-4 bg_gray_set shadow-md px-4">
      {/* Recently bought indicator */}
      <div className="text-sm text-gray-500 bg-white p-3 rounded-lg  mb-2">
        <span className="flex justify-start item-center"><Image src="/productDetail/chart.svg" className="me-1" alt="chart" width={20} height={20} /> 3,018 People bought this recently</span>
      </div>
      
      {/* Price section */}
      <div className="mt-4">
        <div className="flex items-center justify-start">
          <div className="price_title">
          <span className="flex items-center justify-center"><FaRupeeSign className="w-4 h-4 mr-0" /> 1,004.00</span>
          </div>
          <div className="price_small_title line-through ms-2">
          <span className="flex items-center justify-center price_small_title"><FaRupeeSign className="w-4 h-4 mr-0 price_small_title" /> 1,199.00</span>
          </div>
          <div className="tax_text ms-2">inc. of all tax</div>
        </div>
        <div className=" flex items-end justify-start mt-2">
        <span className="flex items-center justify-center price_title"><FaRupeeSign className="w-4 h-4 mr-0" /> 1,004.00 <span className="tax_text ms-1">+ free shipping with</span> 
          <span className="ml-2 button_care_plan px-2 py-1 ">Care Plan</span></span>
        </div>
      </div>

      {/* Discount */}
      <div className="mt-4  rounded-md py-1 px-2 w-fit  fortyfive_off">
        45% off
      </div>

      {/* Quantity selector */}
      <div className="mt-5 flex items-center justify-start">
        <label htmlFor="quantity" className="block mb-1 text-gray-600">
          Quantity:
        </label>
        <select id="quantity" className="border border-gray-300 p-2 w-md bg-transparent rounded ms-3">
          <option>1 Box</option>
          {/* You can add more options if needed */}
        </select>
      </div>

      {/* Buttons */}
      <div className="mt-7 flex space-x-4">
        <button className=" text-white py-2 px-4 bg-gradient-to-l from-[#367B39] to-[#8AB746]  rounded-md right_buy_now w-full">
          Buy Now
          
        </button>
        <button className="text-white py-2 px-4 rounded-md right_addtocart w-full">
          Add to Cart
        </button>
      </div>
    </div>

    <div className="p-4 bg_gray_set shadow-md mt-8 px-4">
      {/* Delivery information */}
      <div className="text-lg font-semibold text-gray-800 mb-3">
        Get it delivered by <span className="font-bold">2pm, Today</span>
      </div>
      
      {/* Address selector */}
      <div className="flex items-center bg-transparent border border-gray-300 rounded-md p-2">
        <select className="w-full bg-transparent text-gray-800 font-semibold focus:outline-none">
          <option value="380052, Ahmedabad">380052, Ahmedabad</option>
          {/* You can add more options here */}
        </select>
      </div>


    </div>
    <div className="mt-8">
  <Image src="/productDetail/advertise.png" alt="advertise" width={345} height={500} />
  </div>

          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
