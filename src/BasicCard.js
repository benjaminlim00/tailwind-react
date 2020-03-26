import React from "react";
import { FiStar } from "react-icons/fi";

export default function BasicCard() {
  const data = {
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center",
    priceInCents: 190000,
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4
  };

  const stars = num => {
    const normal = () => {
      return [...Array(num)].map((e, i) => (
        <FiStar className="text-teal-500 fill-current"></FiStar>
      ));
    };
    const leftover = () => {
      return [...Array(5 - num)].map((e, i) => (
        <FiStar className="text-gray-400 fill-current"></FiStar>
      ));
    };

    return (
      <div className="flex items-center">
        {normal()}
        {leftover()}
      </div>
    );
  };

  return (
    // bg-white rounded-lg overflow-hidden shadow-lg text-gray-900
    <div>
      {/* this trick makes the img maintain aspect ratio */}
      <div className="relative pb-5/6">
        {/* relative items are always on top */}
        <img
          className="absolute h-full w-full object-cover rounded-lg shadow-md"
          src={data.imageUrl}
          alt={data.imageAlt}
        />
      </div>

      <div className="relative z-10 px-4 -mt-16">
        {/* trick to stack on top, must first make relative so we can use z index, but don't need because it is in order */}
        <div className="bg-white p-6 pr-20 rounded-lg shadow-lg">
          <div className="flex items-baseline">
            <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">
              New
            </span>
            <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
              {/* use smaller font but capitalized and bolder, add spacing */}
              {data.beds} beds &bull; {data.baths} baths
            </div>
          </div>
          <h4 className="mt-1 font-semibold text-lg mt-1 leading-tight truncate">
            {data.title}
          </h4>
          <div>
            {data.formattedPrice}
            <span className="text-gray-600 text-sm"> / wk</span>
          </div>
          <div className="mt-2 flex items-center">
            {stars(data.rating)}

            <span className="text-teal-600 font-semibold">
              {data.rating}/5 stars
            </span>
            <span className="ml-2 text-gray-600 text-sm">
              {" "}
              ({data.reviewCount} reviews)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
