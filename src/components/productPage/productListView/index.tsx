"use client"; // Necessary for Next.js client-side code

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import React from 'react';
import { FaRupeeSign } from 'react-icons/fa';

// Reuse the Product type in the props for better type safety
type Product = {
  image: string;
  image2: string;
  title: string;
  price: string;
  originalPrice: string;
};

// Define props for the ProductList component
type ProductListProps = {
  products: Product[];
};

const ProductListView: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="relative grid grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.title} className="relative max-w-xs rounded-lg">
          {/* Background Image */}
          <Image
            src={product.image2}
            alt={product.title}
            width={150}
            height={150}
            className="rounded-lg w-full object-cover"
          />
          
          {/* Cart Icon */}
          <div className="absolute second_image cartIcon text-white rounded-full">
            <FontAwesomeIcon icon={faHeartRegular} className="w-6 h-4 object-cover" />
          </div>

          {/* Main Image (on hover overlay) */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src={product.image}
              alt={product.title}
              width={170}
              height={170}
              className="object-cover"
            />
          </div>

          {/* Product Title */}
          <h3 className="text-gray-700 text-sm mt-3">{product.title}</h3>

          {/* Price and Original Price */}
          <div className="mt-1 flex items-center ">
            <span className="text-lg font-semibold text-black flex items-center">
              <FaRupeeSign className="w-4 h-4 mr-0" />
              {product.price}
            </span>

            <span className="text-sm text-gray-500 line-through ml-2 flex items-center originalPrice">
              <FaRupeeSign className="w-3 h-3 text-300" />
              <span className="text-sm font-normal">{product.originalPrice}</span>
            </span>
          </div>

          {/* Buy Now Button */}
          <button className="mt-3 w-full text-sm py-2 rounded buy_now_button">
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductListView;
