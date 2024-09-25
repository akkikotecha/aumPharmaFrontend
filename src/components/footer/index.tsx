import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiGoogleplay, SiAppstore } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10 mt-16">
      <div className="container-fluid  px-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Press Coverage</li>
              <li>Careers</li>
              <li>Business Partnership</li>
              <li>Become a Health Partner</li>
              <li>Corporate Governance</li>
            </ul>
          </div>

          {/* Our Policies Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Policies</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Editorial Policy</li>
              <li>Return Policy</li>
              <li>IP Policy</li>
              <li>Grievance Redressal Policy</li>
              <li>Fake Jobs and Fraud Disclaimer</li>
            </ul>
          </div>

          {/* Our Policies 2 Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Policies</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Order Medicines</li>
              <li>Ayurveda Articles</li>
              <li>Care Plan</li>
            </ul>
          </div>

          {/* Download App Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Download App</h3>
            <div className="flex space-x-4">
              <a href="#" className="flex items-center space-x-2">
                <SiGoogleplay className="w-6 h-6" />
                <span className="text-sm text-gray-600">Google Play</span>
              </a>
              <a href="#" className="flex items-center space-x-2">
                <SiAppstore className="w-6 h-6" />
                <span className="text-sm text-gray-600">App Store</span>
              </a>
            </div>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 text-gray-600">
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn className="w-6 h-6" /></a>
              <a href="#" aria-label="Facebook"><FaFacebookF className="w-6 h-6" /></a>
              <a href="#" aria-label="Instagram"><FaInstagram className="w-6 h-6" /></a>
              <a href="#" aria-label="Twitter"><FaTwitter className="w-6 h-6" /></a>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-8">
          <h3 className="font-bold text-lg mb-4">Want daily dose of Health?</h3>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
            <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
              Send
            </button>
          </div>
        </div>

      </div>
      <div className="container-fluid  px-16  mt-10">
        {/* Top Three Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Reliable */}
          <div>
            <h3 className="text-xl font-bold mb-4">Reliable</h3>
            <p className="text-gray-600">
              All products displayed on Aum Pharmacy are procured from verified and licensed pharmacies.
              All labs listed on the platform are accredited.
            </p>
          </div>

          {/* Secure */}
          <div>
            <h3 className="text-xl font-bold mb-4">Secure</h3>
            <p className="text-gray-600">
              Aum Pharmacy uses Secure Sockets Layer (SSL) 128-bit encryption and is Payment Card Industry
              Data Security Standard (PCI DSS) compliant.
            </p>
          </div>

          {/* Affordable */}
          <div>
            <h3 className="text-xl font-bold mb-4">Affordable</h3>
            <p className="text-gray-600">
              Find affordable medicine substitutes, save up to 50% on health products, up to 80% off on lab
              tests and free doctor consultations.
            </p>
          </div>
        </div>

        {/* Bottom Detailed Information */}
        <div className="space-y-8">
          {/* Know more about Aum Pharmacy */}
          <div>
            <h3 className="text-lg font-bold mb-2">Know more about Aum Pharmacy</h3>
          </div>

          {/* Access medical and health information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Access medical and health information</h4>
            <p className="text-gray-600">
              Aum Pharmacy provides you with medical information which is curated, written, and verified by experts, accurate and trustworthy.
              Our experts create high-quality content about medicines, diseases, lab investigations, Over-The-Counter (OTC) health products,
              Ayurvedic herbs/ingredients, and alternative remedies.
            </p>
          </div>

          {/* Order medicines online */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Order medicines online</h4>
            <p className="text-gray-600">
              Get free medicine home delivery in over 1800 cities across India. You can also order Ayurvedic, Homeopathic,
              and other Over-The-Counter (OTC) health products. Your safety is our top priority. All products displayed
              on Aum Pharmacy are procured from verified and licensed pharmacies.
            </p>
          </div>

          {/* Book lab tests */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Book lab tests</h4>
            <p className="text-gray-600">
              Book any lab tests and preventive health packages from certified labs and get tested from the comfort of your home.
              Enjoy free home sample collection, view reports online, and consult a doctor online for free.
            </p>
          </div>

          {/* Consult a doctor online */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Consult a doctor online</h4>
            <p className="text-gray-600">
              Got a health query? Consult doctors online from the comfort of your home for free. Chat privately with
              our registered medical specialists to connect directly with verified doctors. Your privacy is guaranteed.
            </p>
          </div>
        </div>
        
      </div>

      <div className="container-fluid bg-white mt-6">
      <div className="container-fluid  px-16 py-4">
        <div className="flex justify-between items-center">
          {/* Left Section - Copyright */}
          <div className="text-sm text-gray-400">
            Aum Pharmacy LLP. All Rights Reserved.
          </div>

          {/* Center Section - Back to Top Button */}
          <div className="flex justify-center">
            <a
              href="#"
              className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full"
              aria-label="Back to Top"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 15l7-7 7 7"
                ></path>
              </svg>
            </a>
            <span className="ml-2 text-gray-400">Back To Top</span>
          </div>

          {/* Right Section - Payment Methods */}
          <div className="flex space-x-2">
            <Image
              src="/homeImage/visa.svg" // Placeholder image source, replace with actual image paths
              alt="Visa"
              width={30}
              height={40}
              className="w-16"
            />
            <Image
              src="/homeImage/master.svg"
              alt="MasterCard"
              width={50}
              height={50}
              className="w-16"
            />
            <Image
              src="/homeImage//paypal.svg"
              alt="PayPal"
              width={50}
              height={50}
              className="w-16"
            />
            <Image
              src="/homeImage/american.svg"
              alt="American Express"
              width={50}
              height={50}
              className="w-16"
            />
            <Image
              src="/homeImage/discover.svg"
              alt="Discover"
              width={50}
              height={50}
              className="w-16"
            />
          </div>
        </div>
      </div>
      </div>
      
    </footer>
  );
};

export default Footer;
