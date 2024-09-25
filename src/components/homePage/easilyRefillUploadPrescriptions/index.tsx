"use client"; // Necessary for Next.js client-side code
import Image from 'next/image';
import React, { useState } from "react";
import "@/css/easilyRefillUpload.css"


const EasilyRefillUploadPrescriptionsBanner:  React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);

    // Preview the uploaded image if it's an image file
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null); // Reset preview if the file is not an image
    }
  };
  return (
    <section className="px-4 mt-12">
      <div className="relative flex items-center justify-between w-full py-14">
    {/* Background Image */}
    <div className="absolute inset-0">
      <Image
        src="/homeImage/refill.png" // Replace this with your background image path
        layout="fill"
        alt="Pharmacy Banner"
      />
    </div>

    {/* Left Side Content */}
    <div className="relative z-10 w-1/2 px-16 ">
      <div className="text-white">
        <h1 className="pharmacyBannerText">
          Easily refill and transfer your prescriptions with our NEW online pharmacy experience!
        </h1>
        <button className="mt-4  text-white py-2 px-4 rounded-lg pharmacy_read_more">
          Read More
        </button>
      </div>
    </div>

    {/* Right Side File Upload */}
    <div className="relative z-10 w-1/2 flex justify-center items-center 	">
    <div className="flex justify-center items-center bg-transparent backdrop-blur-md p-4 rounded-xl wy-80 ">
  <div className="p-8 py-14 bg-transparent rounded-xl shadow-lg border-dashed border-4 border-gray-400 w-full text-center" >
        {/* Icon Section */}
        {!preview && (
          <div className="mb-4 text-center flex justify-center">
           <Image
        src="/homeImage/prescriptionIcon.svg" // Replace this with your background image path
        layout="cover"
        width="50"
        height="50"
        alt="Pharmacy Banner"
      />
          </div>
        )}

        {/* Image Preview */}
        {preview && (
          <div className="mb-4">
            <img
              src={preview}
              alt="Preview"
              className="mx-auto h-40 w-auto object-contain"
            />
          </div>
        )}

        {/* Title and Description */}
        <h2 className="text-2xl font-bold text-white mb-3 mt-6">Upload Your Prescriptions</h2>
        <p className="text-white font-upload-message mb-8">
          Upload, store, organize prescriptions with<br/>reminders for doses and refills.
        </p>

        {/* Upload Button */}
        <label htmlFor="file-upload" className="inline-block upload_prescription font-semibold py-2 px-4 rounded-lg cursor-pointer hover:bg-white">
          Upload Prescriptions
        </label>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
        
        {/* Display uploaded file name */}
        {file && (
          <p className="mt-4 text-sm text-white">{file.name}</p>
        )}
      </div>
    </div>
    </div>
    </div>
  </section>
  );
};

export default EasilyRefillUploadPrescriptionsBanner;
