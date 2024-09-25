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
    <div className="grid grid-cols-4 gap-4 justify-center align-center">
      {data.map(({ title, description, className, imageUrl }, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden">
          
           <div className={`text-white p-6  ${className}`}>
           <div>
            <Image src={imageUrl} height={60} width={60} alt="support" />
          </div>
      <div className="flex items-center mt-10 mb-1">
        <h2 className="whyChooseUsTitle ">{title}</h2>
      </div>
      <p className=" whyChooseUsDescription" dangerouslySetInnerHTML={{__html: description}}>
           
      </p>
 
    </div>
        </div>
      ))}
    </div>

  );
};

export default Card;
