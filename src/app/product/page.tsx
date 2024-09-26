"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import ProductList from "@/components/productPage/ProductList";
import "@/css/sidebar.css";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";

export default function Home() {
  const [openCategory, setOpenCategory] = useState<string>("");
  const [openSubCategory, setOpenSubCategory] = useState<string>("");

  const toggleCategory = (category: string) => {
    if (openCategory === category) {
      setOpenCategory(""); // Close if the same section is clicked
    } else {
      setOpenCategory(category); // Open new section
    }
  };

  const toggleSubCategory = (subcategory: string) => {
    if (openSubCategory === subcategory) {
      setOpenSubCategory(""); // Close if the same section is clicked
    } else {
      setOpenSubCategory(subcategory); // Open new section
    }
  };

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilter = () => {
    alert(`Filtering products from $${minPrice} to $${maxPrice}`);
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
          <div className="mb-6 flex justify-between items-baseline">
            <h2 className="filter_title">Filters</h2>
            <h2 className="text-right clear_all mt-4">Clear all</h2>
          </div>
          <div className="mb-1 mt-4 flex justify-between items-baseline">
            <h2 className="filter_sub_title">Categories</h2>
          </div>

          <div className="space-y-1">
            {/* Category 1 */}
            <div className="border-b py-3">
              <div
                className="flex justify-between items-center cursor-pointer filterSub filterListTitle"
                onClick={() => toggleCategory("cat1")}>
                <h3>Medicines & Treatments</h3>
              </div>
            </div>

            {/* Category 2 */}
            <div className="border-b py-3">
              <div
                className="flex justify-between items-center cursor-pointer filterListTitle "
                onClick={() => toggleCategory("cat2")}>
                <h3>Vitamins & Supplements</h3>
              </div>
            </div>

            {/* Category 3 - Beauty & Health */}
            <div className="border-b py-3">
              <div
                className="flex justify-between items-center cursor-pointer filterListTitle filterListTitleBlue"
                onClick={() => toggleCategory("cat3")}>
                <h3>Beauty & Health</h3>
                <span>
                  {openCategory === "cat3" ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </span>
              </div>

              {openCategory === "cat3" && (
                <div className="ml-4 mt-2 space-y-4">
                  {/* Independent Category for Facial Skin Care */}
                  <div
                    className="cursor-pointer flex justify-between items-center"
                    onClick={() => toggleSubCategory("facial")}>
                    <h4 className="text-gray-700 cursor-pointer filterListTitle ">
                      Facial Skin Care
                    </h4>
                    <span>
                      {openSubCategory === "facial" ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </span>
                  </div>

                  {openSubCategory === "facial" && (
                    <div className="ml-4 mt-2">
                      {/* Facial Skin Care items (example: Brands list) */}
                    </div>
                  )}

                  {/* Independent Category for Natural & Organic Products */}
                  <div
                    className="cursor-pointer flex justify-between items-center filterListTitle"
                    onClick={() => toggleSubCategory("natural")}>
                    <h4 className="text-gray-700 cursor-pointer filterListTitle filterListTitleBlue">
                      Natural & Organic Products
                    </h4>
                    <span>
                      {openSubCategory === "natural" ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </span>
                  </div>

                  {openSubCategory === "natural" && (
                    <div className="ml-4 space-y-2">
                      <label className="flex justify-between items-center">
                        <span>Astelles</span>
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 rounded"
                        />
                      </label>
                      <label className="flex justify-between items-center">
                        <span>Navarties</span>
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4  rounded"
                        />
                      </label>
                      <label className="flex justify-between items-center">
                        <span>Biocon</span>
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4  rounded"
                        />
                      </label>
                      <label className="flex justify-between items-center">
                        <span>Penacea Biotec</span>
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4  rounded"
                        />
                      </label>
                      <label className="flex justify-between items-center">
                        <span>Other</span>
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4  rounded"
                        />
                      </label>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Category 4 */}
            <div className="border-b py-3">
              <div
                className="flex justify-between items-center cursor-pointer filterListTitle"
                onClick={() => toggleCategory("cat4")}>
                <h3>Homeopathic Remedies</h3>
              </div>
            </div>
            <div className="border-b py-3">
              <div
                className="flex justify-between items-center cursor-pointer filterListTitle"
                onClick={() => toggleCategory("cat4")}>
                <h3>Health Care</h3>
              </div>
            </div>
            <div className="border-b py-3">
              <div
                className="flex justify-between items-center cursor-pointer filterListTitle"
                onClick={() => toggleCategory("cat4")}>
                <h3>Personal Care</h3>
              </div>
            </div>
            <div className="border-b py-3">
              <div
                className="flex justify-between items-center cursor-pointer filterListTitle"
                onClick={() => toggleCategory("cat4")}>
                <h3>Generic Medicines</h3>
              </div>
            </div>
            <div className="border-b py-3">
              <div
                className="flex justify-between items-center cursor-pointer filterListTitle"
                onClick={() => toggleCategory("cat4")}>
                <h3>Weekly Deals</h3>
              </div>
            </div>
            <div className="border-b py-3">
              <div
                className="flex justify-between items-center cursor-pointer filterListTitle"
                onClick={() => toggleCategory("cat4")}>
                <h3>Health Conditions</h3>
              </div>
            </div>
            
          </div>
          <div className="mb-1 mt-8 flex justify-between items-baseline">
            <h2 className="filter_sub_title">Price Range</h2>
          </div>

          <div className="flex flex-col py-0 bg-gray-100 rounded-md mt-4">
      <div className="flex items-end space-x-3">
        <div>
          <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700">
            Min
          </label>
          <input
            id="minPrice"
            type="number"
            className="w-20 px-2 py-1 bordercolor border border-gray-300 rounded-md bg-transparent focus:ring-2 focus:ring-blue-500"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>
        <span className="to_text mb-2">to</span>
        <div>
          <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700">
            Max
          </label>
          <input
            id="maxPrice"
            type="number"
            className="w-20 px-2 py-1 bordercolor border border-gray-300 rounded-md bg-transparent focus:ring-2 focus:ring-blue-500"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
        <button
          onClick={handleFilter}
          className="px-4 py-2  focus:ring-2 goButton"
        >
          Go
        </button>
      </div>
    </div>
    <div className="mb-1 mt-8 flex justify-between items-baseline">
            <h2 className="filter_sub_title">Brands</h2>
          </div>
          <div className="mt-4">
      {/* Search Input */}
      <div className="relative mb-4">
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search Brands"
          className="w-full pl-10 pr-4 py-2 border bg-transparent bordercolor rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Static Brand List */}
      <ul className="space-y-3">
        {/* Brand 1 */}
        <li className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input className="form-checkbox h-4 w-4 rounded" type="checkbox" />
            <span className="text-gray-700">Ridomaxx</span>
          </label>
          <span className="text-gray-500">10</span>
        </li>

        {/* Brand 2 */}
        <li className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input className="form-checkbox h-4 w-4 rounded" type="checkbox" />
            <span className="text-gray-700">Aum Pharmacy</span>
          </label>
          <span className="text-gray-500">24</span>
        </li>

        {/* Brand 3 */}
        <li className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input className="form-checkbox h-4 w-4 rounded" type="checkbox" />
            <span className="text-gray-700">Centrum</span>
          </label>
          <span className="text-gray-500">04</span>
        </li>

        {/* Add more brands statically like this */}
        <li className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input className="form-checkbox h-4 w-4 rounded" type="checkbox" />
            <span className="text-gray-700">Unifit</span>
          </label>
          <span className="text-gray-500">13</span>
        </li>

        <li className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input className="form-checkbox h-4 w-4 rounded" type="checkbox" />
            <span className="text-gray-700">Zingavita</span>
          </label>
          <span className="text-gray-500">20</span>
        </li>

        <li className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input className="form-checkbox h-4 w-4 rounded" type="checkbox" />
            <span className="text-gray-700">Firisika</span>
          </label>
          <span className="text-gray-500">05</span>
        </li>
      </ul>
    </div>
    <div className="mb-1 mt-8 flex justify-between items-baseline">
            <h2 className="filter_sub_title">Age</h2>
          </div>
          <div className="mt-4">
      

      {/* Static Brand List */}
      <ul className="space-y-3">
        {/* Brand 1 */}
        <li className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input className="form-checkbox h-4 w-4 rounded" type="checkbox" />
            <span className="text-gray-700">All</span>
          </label>
          <span className="text-gray-500">63</span>
        </li>

        {/* Brand 2 */}
        <li className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input className="form-checkbox h-4 w-4 rounded" type="checkbox" />
            <span className="text-gray-700">1 to 10</span>
          </label>
          <span className="text-gray-500">05</span>
        </li>

        {/* Brand 3 */}
        <li className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input className="form-checkbox h-4 w-4 rounded" type="checkbox" />
            <span className="text-gray-700">10 to 40</span>
          </label>
          <span className="text-gray-500">35</span>
        </li>

        {/* Add more brands statically like this */}
        <li className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input className="form-checkbox h-4 w-4 rounded" type="checkbox" />
            <span className="text-gray-700">4o to 100</span>
          </label>
          <span className="text-gray-500">23</span>
        </li>
      </ul>
    </div>
    <div className="mb-1 mt-8 flex justify-between items-baseline">
            <h2 className="filter_sub_title">Gender</h2>
          </div>
          <div className=" mt-4">
      {/* Static Brand List */}
      <ul className="space-y-3">
        {/* Brand 1 */}
        <li className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input className="form-checkbox h-4 w-4 rounded" type="checkbox" />
            <span className="text-gray-700">All</span>
          </label>
          <span className="text-gray-500">63</span>
        </li>

        {/* Brand 2 */}
        <li className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input className="form-checkbox h-4 w-4 rounded" type="checkbox" />
            <span className="text-gray-700">Unisex</span>
          </label>
          <span className="text-gray-500">10</span>
        </li>

        {/* Brand 3 */}
        <li className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input className="form-checkbox h-4 w-4 rounded" type="checkbox" />
            <span className="text-gray-700">Female</span>
          </label>
          <span className="text-gray-500">30</span>
        </li>

        {/* Add more brands statically like this */}
        <li className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input className="form-checkbox h-4 w-4 rounded" type="checkbox" />
            <span className="text-gray-700">Male</span>
          </label>
          <span className="text-gray-500">23</span>
        </li>

      </ul>
    </div>
    <div className="mb-1 mt-8 flex justify-between items-baseline">
            <h2 className="filter_sub_title">Product Form</h2>
          </div>
          <div className="mt-4">
      
      {/* Static Brand List */}
      <ul className="space-y-3">
        {/* Brand 1 */}
        <li className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input className="form-checkbox h-4 w-4 rounded" type="checkbox" />
            <span className="text-gray-700">Bottle</span>
          </label>
          <span className="text-gray-500">10</span>
        </li>

        {/* Brand 2 */}
        <li className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input className="form-checkbox h-4 w-4 rounded" type="checkbox" />
            <span className="text-gray-700">Tablet</span>
          </label>
          <span className="text-gray-500">24</span>
        </li>

        {/* Brand 3 */}
        <li className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input className="form-checkbox h-4 w-4 rounded" type="checkbox" />
            <span className="text-gray-700">Capsule</span>
          </label>
          <span className="text-gray-500">04</span>
        </li>

        {/* Add more brands statically like this */}
        <li className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input className="form-checkbox h-4 w-4 rounded" type="checkbox" />
            <span className="text-gray-700">Vegicap</span>
          </label>
          <span className="text-gray-500">13</span>
        </li>

        <li className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input className="form-checkbox h-4 w-4 rounded" type="checkbox" />
            <span className="text-gray-700">Pack</span>
          </label>
          <span className="text-gray-500">20</span>
        </li>

        <li className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input className="form-checkbox h-4 w-4 rounded" type="checkbox" />
            <span className="text-gray-700">Syrup</span>
          </label>
          <span className="text-gray-500">05</span>
        </li>
        <li className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input className="form-checkbox h-4 w-4 rounded" type="checkbox" />
            <span className="text-gray-700">Powder</span>
          </label>
          <span className="text-gray-500">05</span>
        </li>
      </ul>
    </div>


        </aside>
        </div>

        {/* Product List */}
        <main className="w-full">
          <ProductList />
        </main>
      </div>

      <Footer />
    </div>
  );
}
