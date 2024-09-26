"use client"; // Necessary for Next.js client-side code

import ProductListView from "@/components/productPage/productListView"; // Adjust the path if necessary
import { useState } from "react";

// Define the product type
type Product = {
  image: string;
  image2: string;
  title: string;
  price: string;
  originalPrice: string;
};

const ProductList = () => {
  // Sample product data
  const products: Product[] = [
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
    // Add more products as needed...
  ];

  // Typing the state with Product[] (array of Product)
  const [filteredProducts] = useState<Product[]>(products);

  return (
    <div className="min-h-screen w-full flex">
      {/* Main Layout */}
      <div className=" w-full">
        {/* Product List */}
        <main className="w-full p-4 ps-0 pe-6">
          <ProductListView products={filteredProducts} />
        </main>
      </div>
    </div>
  );
}


export default ProductList;
