import React, { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Octopus Investments",
    review:
      "Dwain gave a real talk about life behind the scenes of being an elite athlete, including the pressure to take shortcuts, and the difficulties in staying on the right path. He was incredibly relatable for our students and wasn’t afraid to answer the tough questions.",
    image: "https://via.placeholder.com/150/92c952",
  },
  {
    id: 2,
    name: "Beth Harris",
    review:
      "Thank you for attending during Black History month. Your charismatic and animated approach kept the audience engaged and motivated throughout. Your talk was so inspirational, talking about your life including your upbringing, career and where you are today, and how you achieve your goals, especially about taking responsibility of your own actions. You encompassed the theme of how to maintain your course through adversity, which was relatable to all who attend, inspiring and evoking changes both in staff and inmates.",
    image: "https://via.placeholder.com/150/771796",
  },
  {
    id: 3,
    name: "Philip Hodgson",
    review:
      "I would just like to thank you again for visiting our college and speaking to our learners. It was truly an inspiring talk and one which many learners have approached me since to inform me of the impact it has had on them and their future decisions.",
    image: "https://via.placeholder.com/150/24f355",
  },
  {
    id: 4,
    name: "Sarah",
    review:
      "I wanted to express my thanks and complements to you for your exceptional interview last week. Your candid honesty, insights, expression of your true feelings about your mistakes were very impactful and everyone agreed that your interview was the highlight of the conference.",
    image: "https://via.placeholder.com/150/d32776",
  },
  {
    id: 5,
    name: "John Doe",
    review:
      "The session was extremely motivational and inspiring. It shed light on various aspects of life that one must consider to stay on the right track.",
    image: "https://via.placeholder.com/150/008d8f",
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 2; 

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? reviews.length - cardsToShow : prev - cardsToShow
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + cardsToShow >= reviews.length ? 0 : prev + cardsToShow
    );
  };

  // Get the current set of reviews to display
  const visibleReviews = reviews.slice(
    currentIndex,
    currentIndex + cardsToShow
  );

  // Handle cases where we need to wrap around to the start of the list
  if (visibleReviews.length < cardsToShow) {
    visibleReviews.push(...reviews.slice(0, cardsToShow - visibleReviews.length));
  }

  return (
    <div className="bg-gray-50 py-10">
      <h2 className="text-center text-3xl font-semibold mb-8">
        What Our Customers Say
      </h2>
      <div className="relative max-w-4xl mx-auto flex flex-wrap  px-8 py-2">
        {/* Left Arrow */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-800 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-red-700"
        >
          ❮
        </button>

        <div className="mx-auto flex flex-wrap gap-4 justify-center">
          {visibleReviews.map(({ id, name, review, image }) => (
            <div
              key={id}
              className="bg-white shadow-lg rounded-2xl p-6 text-center w-80"
            >
              {/* <img
                src={image}
                alt={name}
                className="w-16 h-16 rounded-full mb-4 object-cover"
              /> */}
              <p className="text-gray-700 mb-4">
                {review.length > 150 ? review.slice(0, 100) + "..." : review}
              </p>
              <p className="text-gray-500 italic mt-2">- {name}</p>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-800 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-red-700"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Reviews;
