import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface CardData {
  categories: {
    question: string;
    answer: string;
  }[];
}

const Card: React.FC<CardData> = ({ categories }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Correct initialization of useRef for an array of div elements

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);

    // Optionally, scroll the accordion into view when opened
  };

  return (
    <div className="w-full px-16 mt-8 mb-16">
      {categories.map((item, index) => (
        <div key={index} className="border-b">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between w-full py-4 text-left accordianTitle focus:outline-none">
            {item.question}
            {activeIndex === index ? <FaMinus /> : <FaPlus />}
          </button>

          {/* Accordion content with smooth transition */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeIndex === index ? "max-h-96" : "max-h-0"
            }`}>
            <div className="px-0 pb-4 accordianDescription">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
