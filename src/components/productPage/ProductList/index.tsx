"use client"; // Necessary for Next.js client-side code

import ProductListView from "@/components/productPage/productListView"; // Adjust the path if necessary
import { useState } from "react";

// Define the product type
type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  image: string;
};

const ProductList = () => {
  // Sample product data
  const products: Product[] = [
    {
      id: 1,
      name: 'Advacan 0.5mg Tablet',
      price: 897.39,
      oldPrice: 997.10,
      image:'/homeImage/slide1.png', // Replace with correct image path
    },
    {
      id: 2,
      name: 'Prograf 0.5mg Capsule',
      price: 222.14,
      oldPrice: 231.40,
      image: '/homeImage/slide1.png', // Replace with correct image path
    },
    {
      id: 3,
      name: 'Myfortic 180mg Tablet',
      price: 415.22,
      oldPrice: 519.00,
      image: '/homeImage/slide1.png', // Replace with correct image path
    },
    // Add more products as needed...
  ];

  // Typing the state with Product[] (array of Product)
  const [filteredProducts] = useState<Product[]>(products);

  return (
    <div className="min-h-screen flex">
      {/* Main Layout */}
      <div className="flex w-full">
        {/* Product List */}
        <main className="w-3/4 p-4">
          <ProductListView products={filteredProducts} />
        </main>
      </div>
    </div>
  );
}


export default ProductList;
