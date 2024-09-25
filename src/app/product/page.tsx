"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import ProductList from "@/components/productPage/ProductList";
import { useState } from "react";

// Sample filters and product data
const filters = {
  categories: ['Medicines', 'Vitamins', 'Beauty & Health'],
  priceRange: { min: 100, max: 1000 },
  brands: ['Ridomaxx', 'Zingavita', 'Friska'],
};

const products = [
  {
    id: 1,
    name: 'Advacan 0.5mg Tablet',
    price: 897.39,
    oldPrice: 997.10,
    image: '/images/advacan.jpg', // Replace with actual image path
  },
  {
    id: 2,
    name: 'Prograf 0.5mg Capsule',
    price: 222.14,
    oldPrice: 231.40,
    image: '/images/prograf.jpg', // Replace with actual image path
  },
  // Add more products as needed...
];

export default function Home() {
  const [filteredProducts] = useState(products);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Layout */}
      <div className="flex w-full">
        {/* Sidebar */}
        <aside className="w-64 p-4 bg-white shadow-md h-full">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Filters</h2>
        <button className="text-blue-600 text-sm mt-2">Clear all</button>
      </div>

      <div className="space-y-6">
        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold">Categories</h3>
          <ul className="space-y-2 mt-2">
            <li>
              <a href="#" className="text-gray-700">
                Medicines & Treatments
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Vitamins & Supplements
              </a>
            </li>
          </ul>
        </div>

        {/* Beauty & Health */}
        <div>
          <h3 className="text-blue-800 font-semibold">Beauty & Health</h3>
          <div className="ml-2">
            <h4 className="mt-2 text-gray-700">Facial Skin Care</h4>
          </div>

          <div className="mt-2">
            <h4 className="text-gray-700 font-semibold">Natural & Organic Products</h4>
            <ul className="space-y-2 mt-2 ml-4">
              {['Astellas', 'Navarties', 'Biocon', 'Penacea Biotec', 'Other'].map((brand) => (
                <li key={brand} className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-blue-600" />
                  <label className="ml-2 text-gray-700">{brand}</label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Sections */}
        <div>
          <h4 className="text-gray-700 font-semibold">Homeopathic Remedies</h4>
        </div>
        <div>
          <h4 className="text-gray-700 font-semibold">Health Care</h4>
        </div>
        <div>
          <h4 className="text-gray-700 font-semibold">Personal Care</h4>
        </div>
        <div>
          <h4 className="text-gray-700 font-semibold">Generic Medicines</h4>
        </div>
      </div>
    </aside>

        {/* Product List */}
        <main className="w-3/4 p-4">
          <ProductList products={filteredProducts} />
        </main>
      </div>

      <Footer />

    </div>
  );
}
