import React, { useState } from 'react';
import { AiFillStar, AiOutlineLike, AiOutlineInfoCircle, AiOutlineDown } from 'react-icons/ai';
import { FaAngleDown } from "react-icons/fa"; // Font Awesome Icons

const ReviewCard = ({ name, date, rating, verified, reviewText }) => {
  return (
    <div className="p-4 pt-8 border-t mb-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <div className="flex items-center mt-2">
        <div className="flex items-center">
          {/* Rating Stars */}
          <div className="bg_green text-white px-2 py-0 rounded-md flex items-center">
            {rating} <AiFillStar className="ml-1" />
          </div>
          <span className="ml-2 text-sm text-gray-500">
            {verified && 'Verified Buyer'}
          </span>
        </div>
      </div>
      <p className="mt-4 text-gray-700">{reviewText}</p>
      <div className="mt-4 flex space-x-4">
        <button className="flex items-center font-semibold">
          <AiOutlineLike className="mr-1" /> Helpful
        </button>
        <button className="flex items-center font-semibold">
          <AiOutlineInfoCircle className="mr-1" /> Report
        </button>
      </div>
    </div>
  );
};

const Reviews = ({ reviews }) => {
  const [visibleCount, setVisibleCount] = useState(3); // Initial number of visible reviews

  // Function to show more reviews
  const showMore = () => {
    setVisibleCount(prevCount => prevCount + 3); // Increase the count by 3 (or any number you prefer)
  };

  return (
    <div className="w-full mt-3">
      {reviews.slice(0, visibleCount).map((review, index) => (
        <ReviewCard
          key={index}
          name={review.name}
          date={review.date}
          rating={review.rating}
          verified={review.verified}
          reviewText={review.reviewText}
        />
      ))}
      {visibleCount < reviews.length && ( // Check if there are more reviews to show
        <div className="flex justify-end mt-0">
          <button
            onClick={showMore}
            className=" showMoreButton flex items-center"
          >
            Show More <FaAngleDown className=" text-xl" />
            </button>
        </div>
      )}
    </div>
  );
};

export default Reviews;
