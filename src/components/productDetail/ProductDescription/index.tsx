"use client";
import React from "react";
import Slider from "@/components/productDetail/productSlider/Slider";
import StarRatings from 'react-star-ratings';

import "@/css/swiperSelling.css"
import "@/css/shopByCategory.css"
import SwiperSelling from "@/components/productDetail/productSwiperSelling/Slider";
import Card from '@/components/productDetail/productFaqAccordian/';
import "@/css/productDescription.css"
import ReviewCard from "@/components/productDetail/reviewCard/";
import "@/css/faq.css";

const productBanner: React.FC = () => {
  const medicalCenterImages = [
    './productDetail/productDetailImage.png',
    './productDetail/productDetailImage.png',
    './productDetail/productDetailImage.png',
    './productDetail/productDetailImage.png',
    './productDetail/productDetailImage.png',
  ];

  const faq = [
    {
      question: "How can I order medicine online from AUM Pharmacy?",
      answer: "You can order medicine online by visiting our website and following the instructions."
    },
    {
      question: "Is the ordering process secure and confidential?",
      answer: "You can order medicine online by visiting our website and following the instructions."
    },
    {
      question: "Do you offer 24-hour pharmacy services?",
      answer: "You can order medicine online by visiting our website and following the instructions."
    },
    {
      question: "Can I buy affordable generic medicines from AUM Pharmacy?",
      answer: "You can order medicine online by visiting our website and following the instructions."
    },
    {
      question: "Is AUM Pharmacy a licensed online pharmacy?",
      answer: "You can order medicine online by visiting our website and following the instructions."
    },
    // Add more questions here...
  ];
  const categories = [
    { image: '/homeImage/slide1.png',image2:'/homeImage/sellingBg.png', title: 'Prograf 1mg hard capsule',price:"2000",originalPrice:"2500" },
    { image: '/homeImage/slide2.png',image2:'/homeImage/sellingBg.png', title: 'Advacan 0.5mg Tablet',price:"2000",originalPrice:"2500" },
    { image: '/homeImage/slide3.png', image2:'/homeImage/sellingBg.png',title: 'Prograf 0.5mg Capsule',price:"2000",originalPrice:"2500" },
    { image: '/homeImage/slide4.png',image2:'/homeImage/sellingBg.png', title: 'Myfortic 180mg Tablet',price:"2000",originalPrice:"2500" },
    { image: '/homeImage/slide5.png',image2:'/homeImage/sellingBg.png', title: 'Advacan 0.25mg Table',price:"2000",originalPrice:"2500" },
    { image: '/homeImage/slide6.png', image2:'/homeImage/sellingBg.png',title: 'Myfortic 360mg Tablet',price:"2000",originalPrice:"2500" },
    { image: '/homeImage/slide1.png', image2:'/homeImage/sellingBg.png',title: 'Prograf 1mg hard capsule',price:"2000",originalPrice:"2500" },
    { image: '/homeImage/slide2.png',image2:'/homeImage/sellingBg.png', title: 'Advacan 0.5mg Tablet',price:"2000",originalPrice:"2500" },
    { image: '/homeImage/slide3.png', image2:'/homeImage/sellingBg.png',title: 'Prograf 0.5mg Capsule',price:"2000",originalPrice:"2500" },
    { image: '/homeImage/slide4.png',image2:'/homeImage/sellingBg.png', title: 'Myfortic 180mg Tablet',price:"2000",originalPrice:"2500" },
    { image: '/homeImage/slide5.png',image2:'/homeImage/sellingBg.png', title: 'Advacan 0.25mg Table',price:"2000",originalPrice:"2500" },
    { image: '/homeImage/slide6.png',image2:'/homeImage/sellingBg.png', title: 'Myfortic 360mg Tablet',price:"2000",originalPrice:"2500" },
  ];


  const reviews = [
    {
      name: 'Deepen Dhulla',
      date: '14 December 2022',
      rating: 4,
      verified: true,
      reviewText: 'Strips are too small and thin.',
    },
    {
      name: 'Syed Shahnawaz Shafi',
      date: '30 January 2024',
      rating: 5,
      verified: true,
      reviewText: 'Product is fantastic but you should give control solution in the box.',
    },
    {
      name: 'A.V. Santhanam',
      date: '22 July 2024',
      rating: 4,
      verified: true,
      reviewText: 'Very useful and fairly good accuracy and easy to use.',
    },
    {
      name: 'Deepen Dhulla',
      date: '14 December 2022',
      rating: 4,
      verified: true,
      reviewText: 'Strips are too small and thin.',
    },
    {
      name: 'Syed Shahnawaz Shafi',
      date: '30 January 2024',
      rating: 5,
      verified: true,
      reviewText: 'Product is fantastic but you should give control solution in the box.',
    },
    {
      name: 'A.V. Santhanam',
      date: '22 July 2024',
      rating: 4,
      verified: true,
      reviewText: 'Very useful and fairly good accuracy and easy to use.',
    },
    {
      name: 'Deepen Dhulla',
      date: '14 December 2022',
      rating: 4,
      verified: true,
      reviewText: 'Strips are too small and thin.',
    },
    {
      name: 'Syed Shahnawaz Shafi',
      date: '30 January 2024',
      rating: 5,
      verified: true,
      reviewText: 'Product is fantastic but you should give control solution in the box.',
    },
    {
      name: 'A.V. Santhanam',
      date: '22 July 2024',
      rating: 4,
      verified: true,
      reviewText: 'Very useful and fairly good accuracy and easy to use.',
    },
  ];

  return (
    <div>
    <div className="w-full grid grid-cols-12 gap-4 mt-3">
    <div className="col-span-6">
      <Slider images={medicalCenterImages} />
    </div>
    <div className="col-span-6">
       {/* Title Section */}
       <h1 className="text-xl font-bold text-gray-900">
        Contour Plus Elite Blood Glucose Monitoring System Glucometer with Contour Plus Blood Glucose Test Strip 20S Free
      </h1>
      <p className="text-sm text-red-500 mt-1">
        By Ascensia Diabetes Care India Pvt Ltd
      </p>

      {/* Product Highlights */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-800">Product highlights</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          <li>Second-chance®</li>
          <li>SmartLIGHT® target range</li>
          <li>Connects to CONTOUR®DIABETES app</li>
        </ul>
      </div>

      {/* SKU and Product ID */}
      <div className="mt-4 text-gray-600">
        <span className="font-semibold">SKU: </span>PRO50 &nbsp;|&nbsp; 
        <span className="font-semibold">Product ID: </span>9852
      </div>

      {/* Categories */}
      <div className="mt-4 text-gray-600">
        <span className="font-semibold">Categories: </span>
        Diabetes, Diabetes Monitoring Devices, Medicines & Treatments, Uncategorized
      </div>
    </div>
  </div>
   <div className="px-4 mt-12">
   {/* Description Header */}
   <h2 className="shopByCategory mb-4">Description</h2>

   {/* Product Title */}
   <h3 className="text-lg font-bold text-gray-900">
     Contour Plus Elite Blood Glucose Monitoring System:
   </h3>
   <h4 className="text-md font-semibold text-gray-900 mt-2">
     Contour Plus Elite Blood Glucose Monitoring System with Contour Plus Blood Glucose Test Strip 20S Free
   </h4>

   {/* Product Description */}
   <p className="mt-4 text-gray-700 leading-relaxed">
     Contour Plus Elite Blood Glucose Monitoring System, your comprehensive solution for diabetes management. 
     Our glucometer is at the forefront of blood glucose monitoring devices, providing accurate and reliable results 
     whenever needed. Whether you’re at home or on the go, our blood sugar monitoring device offers convenience 
     and precision, empowering you to take control of your health.
   </p>

   {/* Uses Section */}
   <h4 className="mt-6 text-lg font-semibold text-gray-900">Uses:</h4>
   <p className="mt-2 text-gray-700 leading-relaxed">
     The Contour Plus Elite Blood Glucose Monitoring System is designed to accurately measure blood glucose levels 
     in individuals with diabetes. It provides a convenient and reliable method for monitoring blood sugar levels 
     at home or on the go.
   </p>

   {/* Product Specifications */}
   <h4 className="mt-6 text-lg font-semibold text-gray-900">
     Product Specifications and Features:
   </h4>
   <ul className="list-disc list-inside mt-2 text-gray-700 space-y-2">
     <li>The Contour Plus Elite Meter, specifically designed for accurate blood glucose measurements.</li>
     <li>It comes with Contour Plus Blood Glucose Test Strips, which are compatible with the meter and allow for accessible blood sampling.</li>
     <li>The meter features a clear display screen for easy readings of blood glucose results.</li>
     <li>The meters compact design and accessories make it highly portable and convenient to use anywhere.</li>
     <li>This system provides additional capabilities, such as data management and connectivity options for transferring data to smartphones.</li>
   </ul>

   {/* Directions for Use */}
   <h4 className="mt-6 text-lg font-semibold text-gray-900">
     Directions for Use:
   </h4>
   <ol className="list-disc list-inside mt-2 text-gray-700 space-y-2">
     <li>Wash your hands with soap and water and dry them thoroughly.</li>
     <li>Insert a Contour Plus Blood Glucose Test Strip into the meter.</li>
     <li>Use the included lancing device to prick your fingertip and collect a small blood sample.</li>
     <li>Apply the blood sample to the test strip according to the instructions provided with the meter.</li>
     <li>Wait for the meter to display your blood glucose result.</li>
     <li>Record the result and log data using the meter’s data management capabilities.</li>
     <li>Dispose of the used test strip properly.</li>
   </ol>

   {/* Safety Information */}
   <h4 className="mt-6 text-lg font-semibold text-gray-900">
     Safety Information:
   </h4>
   <ul className="list-disc list-inside mt-2 text-gray-700 space-y-2">
     <li>Keep the meter and test strips out of reach of children.</li>
     <li>Do not share the lancing device or lancets with others to avoid the risk of infection.</li>
     <li>Use the system only for its intended purpose of monitoring blood glucose levels.</li>
     <li>Follow the instructions provided with the system to ensure accurate and safe use.</li>
   </ul>

   {/* Quick Tips */}
   <h4 className="mt-6 text-lg font-semibold text-gray-900">
     Quick Tips:
   </h4>
   <ul className="list-disc list-inside mt-2 text-gray-700 space-y-2">
     <li>Keep your hands clean and dry before testing to prevent blood sample contamination.</li>
     <li>Use the lancing device at the correct depth setting to minimize discomfort when pricking your fingertip.</li>
     <li>Store the meter and test strips in a cool, dry place away from direct sunlight and heat.</li>
     <li>Replace the batteries in the meter as needed to maintain proper functionality.</li>
   </ul>

   {/* Why Choose Us */}
   <h4 className="mt-6 text-lg font-semibold text-gray-900">
     Why Choose Us:
   </h4>
   <p className="mt-2 text-gray-700 leading-relaxed">
     Save money by purchasing blood sugar monitoring devices online at discounted prices from our pharmacy.
     We ensure the highest standards of service and quality care for managing diabetes.
     Get diabetes monitoring checks online from our pharmacy and secure your treatment. 
   </p>
 </div>
 <div className="max-w-lg w-100 mt-8 p-4">
      {/* Title */}
      <h2 className="shopByCategory mb-4">Ratings & Reviews</h2>

      {/* Overall Rating */}
      <div className="flex items-center mb-4">
        <span className="text-4xl font-bold text-green-600">4.5</span>
        <StarRatings
          rating={4.5}
          starRatedColor="green"
          numberOfStars={5}
          starDimension="20px"
          starSpacing="2px"
          name="rating"
        />
      </div>

      {/* Total Ratings and Reviews */}
      <p className="text-sm text-gray-500">32 Rating & 4 Reviews</p>

      {/* Rating Bars */}
      <div className="mt-4">
        {/* 5 Star */}
        <div className="flex items-center mb-2">
          <span className="text-gray-500 text-sm w-8">5</span>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mx-2">
            <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
          </div>
          <span className="text-gray-700 text-sm">70%</span>
        </div>

        {/* 4 Star */}
        <div className="flex items-center mb-2">
          <span className="text-gray-500 text-sm w-8">4</span>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mx-2">
            <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '18%' }}></div>
          </div>
          <span className="text-gray-700 text-sm">18%</span>
        </div>

        {/* 3 Star */}
        <div className="flex items-center mb-2">
          <span className="text-gray-500 text-sm w-8">3</span>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mx-2">
            <div className="bg-gray-300 h-2.5 rounded-full" style={{ width: '0%' }}></div>
          </div>
          <span className="text-gray-700 text-sm">0%</span>
        </div>

        {/* 2 Star */}
        <div className="flex items-center mb-2">
          <span className="text-gray-500 text-sm w-8">2</span>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mx-2">
            <div className="bg-gray-300 h-2.5 rounded-full" style={{ width: '0%' }}></div>
          </div>
          <span className="text-gray-700 text-sm">0%</span>
        </div>

        {/* 1 Star */}
        <div className="flex items-center mb-2">
          <span className="text-gray-500 text-sm w-8">1</span>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mx-2">
            <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '12%' }}></div>
          </div>
          <span className="text-gray-700 text-sm">12%</span>
        </div>
      </div>
    </div>
    <div className="w-full  mt-3">
        <ReviewCard
        reviews={reviews}
        />
    </div>
    <div className="flex items-center justify-between w-full px-4 ">
      <div className="w-full px-0 mt-16">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <h1 className="shopByCategory">Related products</h1>
          </div>
          <div className="flex justify-end">
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
          </div>
        </div>
      </div>
      
    </div>
   <div className="w-full mt-8 px-4">
   <SwiperSelling categories={categories}/>

  </div>
   <div className="w-full mt-8 px-4">
   <div className="flex items-center justify-between w-full  mt-6">
        <div className="w-full px-0 mt-10">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <h1 className="shopByCategory">FAQs</h1>
            </div>
            <div className="flex justify-end">
              <button className="flex items-center space-x-2 text-black font-semibold py-2 px-4 rounded-full upload_now">
                <span>View all</span>
              </button>
            </div>
          </div>
        </div>
      </div>
     
      <Card faq={faq} />
  </div>

 </div>
  );
};

export default productBanner;
