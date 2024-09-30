// components/Card.tsx

import Image from 'next/image';

interface CardData {
  data: {
    title: string;
    description: string;
    className: string;
    imageUrl: string;
  }[];
}

const Card: React.FC<CardData> = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-4 justify-center align-center">
      {data.map(({ title, description, className, imageUrl }, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden">
           <div className={`text-white p-6 ${className}`}>
      <div className="flex items-center mb-4">
        <h2 className="shippingLocationSupportTitle ">{title}</h2>
      </div>
      <p className="mb-6 shippingLocationSupportDescription">
        {
          description
        }      
      </p>
      <div className="grid grid-cols-2 items-center gap-4">
  <div>
  {imageUrl && (<Image src={imageUrl} height={50} width={50} alt="support" />) }
  </div>

  <div className="text-right">
    <button className="shippingLocationSupportButton">
      Read More
    </button>
  </div>
</div>

    </div>
        </div>
      ))}
    </div>

  );
};

export default Card;
