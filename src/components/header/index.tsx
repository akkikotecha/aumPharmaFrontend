"use client";
import { MenuItem, Select } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { FaMapMarkerAlt, FaAngleDown, FaMobileAlt } from "react-icons/fa"; // Font Awesome Icons

const Header: React.FC = () => {
  const [address, setAddress] = useState("ahmedabad");

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setAddress(event.target.value);
  };
  const categories = [
    "Medicines & Treatments",
    "Vitamins & Supplements",
    "Beauty & Health",
    "Homeopathic Remedies",
    "Health Care",
    "Personal Care",
    "Generic Medicines",
    "Weekly Deals",
    "Health Conditions"
  ];

  interface SelectedAddresses {
    [key: string]: string;
  }

  const initialSelectedAddresses: SelectedAddresses = categories.reduce((acc, category) => {
    acc[category] = category;
    return acc;
  }, {} as SelectedAddresses);

  const [selectedAddresses] = useState<SelectedAddresses>(initialSelectedAddresses);
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>({}); // Tracks which submenus are open

  // Handle change in select input

  // Handle mouse enter to open a submenu
  const handleMouseEnter = (category: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [category]: true, // Open submenu for the hovered category
    }));
  };

  // Handle mouse leave to close the submenu
  const handleMouseLeave = (category: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [category]: false, // Close submenu when hover is removed
    }));
  };

  return (
    <div>
    <header className="bg-white ">
      <div className="shadow-sm">
      <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0 flex items-center justify-between py-4 md:container md:mx-auto">
        <div className="flex items-center space-x-6">
          <Image
            src="/homeImage/aum_logo.svg"
            alt="AUM Pharmacy"
            width={140} 
            height={140} 
            objectFit="cover" 
            className="rounded-lg"
          />
          <div className="relative bg-gray-100 rounded-lg px-4 py-1 flex items-center justify-between w-80">
            <div className="flex items-center space-x-3">
              <div className="flex items-center cursor-pointer">
                <FaMapMarkerAlt className="text-gray-500 text-xl" />
                <div className="ml-3 mt-0">
                  <span className="block text-sm text-gray-500 search_delivery">
                    Delivery Address
                  </span>
                  <Select
                    value={address}
                    onChange={handleChange}
                    variant="standard"
                    className="block text-lg font-semibold text-black search_dropdown"
                    IconComponent={FaAngleDown} 
                    disableUnderline
                  >
                    <MenuItem value="ahmedabad">Ahmedabad</MenuItem>
                    <MenuItem value="mumbai">Mumbai</MenuItem>
                    <MenuItem value="delhi">Delhi</MenuItem>
                    <MenuItem value="bangalore">Bangalore</MenuItem>
                  </Select>
                </div>
              </div>
            </div>
            <Image
              src="/homeImage/location.svg"
              alt="Location Icon"
              width={22} 
              height={22} 
              objectFit="cover" 
              className="text-gray-500 text-xl"
            />
          </div>
          <div className="ml-4 flex">
            <span className="text-black-700 text-sm font-bold px-0 py-1 rounded-md header_care_plan">
              CARE PLAN
            </span>
            <span className="text-white rounded-full px-3 py-1 text-xs header_save_more">
              SAVE MORE
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-black font-semibold py-2 px-4 rounded-full border-gray-300">
            <FaMobileAlt className="text-black" /> 
            <span>Download App</span>
          </button>

          <div className="flex items-center space-x-6">
            <button className="flex items-center text-gray-600">
              <Image
                src="/homeImage/user.svg"
                alt="User Icon"
                width={15} 
                height={15} 
                objectFit="cover"
                className="text-gray-500 text-xl" 
              />
              <span className="ml-3 text-gray-500">Hello, Log in</span>
            </button>

            <button className="text-gray-600">
              <Image
                src="/homeImage/heart.svg"
                alt="Wishlist Icon"
                width={18} 
                height={18} 
                objectFit="cover"
                className="text-gray-500 text-xl"
              />
            </button>

            <button className="text-gray-600">
              <Image
                src="/homeImage/chair.svg"
                alt="Furniture Icon"
                width={20} 
                height={20} 
                objectFit="cover"
                className="text-gray-500 text-xl"
              />
            </button>

            <a href="/help" className="text-gray-500">
              <span className="ml-1">Need Help?</span>
            </a>
          </div>
        </div>
      </div>
      </div>
      <div className="shadow-sm">
            <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0 grid grid-cols-2 items-center justify-between py-4 md:container md:mx-auto">
        {/* Left side (Search bar) */}
          <div className="relative bg-gray-100 rounded-lg px-4 py-3 flex items-center justify-between w-90">
            <input
              type="text"
              placeholder="Search for Medicines"
              className="bg-transparent font-outfit border-none focus:outline-none text-gray-500 w-90 text-sm"
            />
            <Image
              src="/homeImage/search.svg"
              alt="Search Icon"
              width={22}
              height={22}
              objectFit="cover"
              className="text-gray-500 text-xl"
            />
          </div>

        {/* Right side (Buttons and Links) */}
        <div className="flex items-center justify-end space-x-6">
    
          {/* User, Wishlist, and Chair Icons */}
            <button className="flex items-center text-gray-600">
              <Image
                src="/homeImage/prescription.svg"
                alt="User Icon"
                width={15}
                height={15}
                objectFit="cover"
                className="text-gray-500 text-xl"
              />
              <span className="ml-3 text-gray-500">Order with prescription.</span>
            </button>

            <button className="flex items-center space-x-2 text-black font-semibold py-2 px-4 rounded-full upload_now">
            <span>Upload Now</span>
          </button>
          </div>
      </div>

      </div>
      <div className="shadow-sm">
      <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0 items-center justify-between py-4 md:container md:mx-auto">
        <div className="flex items-center w-full">
          {categories.map((category, index) => (
            <div
              className={`w-full ${index !== 0 ? 'ml-3' : ''}`}
              key={index}
               // Close on hover exit
            >
              <Select
                value={selectedAddresses[category]}
                onMouseEnter={() => handleMouseEnter(category)} // Open on hover
                onMouseLeave={() => handleMouseLeave(category)}                variant="standard"
                className="block text-md text-black w-full search_dropdown menu-font-set"
                IconComponent={FaAngleDown}
                disableUnderline
                fullWidth
                open={openSubmenus[category] === true} // Open if the submenu is marked as open
                onClose={() => handleMouseLeave(category)} // Ensure it closes properly
              >
                <MenuItem value={category}>{category}</MenuItem>
                {/* Add more MenuItem options as needed for submenus */}
              </Select>
            </div>
          ))}
        </div>
      </div>
    </div>

    </header>
    </div>
  );
};

export default Header;
