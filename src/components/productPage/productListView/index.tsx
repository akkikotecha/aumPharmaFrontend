"use client"; // Necessary for Next.js client-side code

import React from 'react';

interface SwipperProps {
    products: string[]; // Accepts an array of image URLs
  }
  
  

const ProductList: React.FC<SwipperProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-32 object-contain"
          />
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-gray-500 line-through">₹{product.oldPrice.toFixed(2)}</p>
          <p className="text-green-500 font-bold">₹{product.price.toFixed(2)}</p>
          <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
