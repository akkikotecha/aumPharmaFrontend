// components/Trending.tsx

import React from 'react';
import Card from '@/components/homePage/faqAccordian/'; // Correct import for the Card component
import "@/css/faq.css";

const whyChooseUs: React.FC = () => {
  const categories = [
    {
      question: "How can I order medicine online from AUM Pharmacy?",
      answer: "You can order medicine online by visiting our website and following the instructions."
    },
    {
      question: "Is the ordering process secure and confidential?",
      answer: "You can order medicine online by visiting our website and following the instructions."
    },
    {
      question: "Do you offer 24-hour pharmacy services?",
      answer: "You can order medicine online by visiting our website and following the instructions."
    },
    {
      question: "Can I buy affordable generic medicines from AUM Pharmacy?",
      answer: "You can order medicine online by visiting our website and following the instructions."
    },
    {
      question: "Is AUM Pharmacy a licensed online pharmacy?",
      answer: "You can order medicine online by visiting our website and following the instructions."
    },
    // Add more questions here...
  ];
  return (
    <div>
      <div className="flex items-center justify-between w-full px-16  mt-6">
        <div className="w-full px-0 mt-10">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <h1 className="shopByCategory">FAQs</h1>
            </div>
            <div className="flex justify-end">
              <button className="flex items-center space-x-2 text-black font-semibold py-2 px-4 rounded-full upload_now">
                <span>View all</span>
              </button>
            </div>
          </div>
        </div>
      </div>
     
      <Card categories={categories} />
        </div>
  );
};

export default whyChooseUs;
