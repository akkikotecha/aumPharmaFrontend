"use client"; // Necessary for Next.js client-side code

import ProductList from "@/components/productPage/productListView"; // Adjust the path if necessary
import { useState } from "react";

export default function Home() {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Advacan 0.5mg Tablet',
      price: 897.39,
      oldPrice: 997.10,
      image: '/images/advacan.jpg', // Replace with correct image path
    },
    {
      id: 2,
      name: 'Prograf 0.5mg Capsule',
      price: 222.14,
      oldPrice: 231.40,
      image: './homeImage/slide1.png', // Replace with correct image path
    },
    {
      id: 3,
      name: 'Myfortic 180mg Tablet',
      price: 415.22,
      oldPrice: 519.00,
      image: './homeImage/slide1.png', // Replace with correct image path
    },
    // Add more products as needed...
  ];

  const [filteredProducts] = useState<typeof products>(products); // Using type of products

  return (
    <div className="min-h-screen flex">
    
      {/* Main Layout */}
      <div className="flex w-full">
        {/* Sidebar component (if needed) */}
        
        {/* Product List */}
        <main className="w-3/4 p-4">
          <ProductList products={filteredProducts} />
        </main>
      </div>
    </div>
  );
}
