// components/Card.tsx

import Image from 'next/image';

interface CardData {
  data: {
    title: string;
    description: string;
    date: string;
    imageUrl: string;
    category: string;
  }[];
}

const Card: React.FC<CardData> = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-4 justify-center align-center">
      {data.map(({ title, description, date, imageUrl, category }, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden">
          {/* Header Section with Image */}
          <div className="relative">
            <Image
              src={imageUrl}
              alt={title}
              width={500}
              height={300}
              className="w-full h-50 object-cover"
            />
          </div>

          {/* Body Section */}
          <div className="p-4">
          <div className="blogCardSubTitle">
              <span>{category}</span>
            </div>
            <h2 className="blogCardTitle">{title}</h2>
            <p className="text-gray-700 blogCardSubDescription">
              {description.substring(0, 150)}...
            </p>
          </div>

          {/* Footer Section */}
          <div className="p-4 flex items-center justify-between">
            <span className="blogCardDate">{date}</span>
            <button className="mt-3 w-full text-sm px-4 py-2 rounded-md read_more">
                Read More
              </button>
          </div>
        </div>
      ))}
    </div>

  );
};

export default Card;
