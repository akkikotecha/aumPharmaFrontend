"use client"; // Necessary for Next.js client-side code

import Image from 'next/image';
import React from 'react';

// Reuse the Product type in the props for better type safety
type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  image: string;
};

// Define props for the ProductList component
type ProductListProps = {
  products: Product[];
};

const ProductListView: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow">
          <Image
            src={product.image}
            alt={product.name}
            className="w-full h-32 object-contain"
            width={150} // Specify width for Image component
            height={150} // Specify height for Image component
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

export default ProductListView;
