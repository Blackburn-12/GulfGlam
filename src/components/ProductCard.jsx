import React from "react";

const ProductCard = ({ image, rating, title, price, brand, size, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-[300px] bg-white rounded-lg overflow-hidden  transition cursor-pointer"
    >
      <div className="h-[200px] flex justify-center items-center ">
        <img
          src={image}
          alt={title}
          className="max-w-full max-h-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        {rating !== "-" && (
          <div className="flex items-center gap-1 mb-1">
            <span className="text-yellow-400">★</span>
            <span className="font-semibold text-sm">{rating}</span>
          </div>
        )}
        <h3 className="font-semibold mb-1 text-sm line-clamp-2 min-h-[40px]">
          {title}
        </h3>
        <p className="text-xs text-gray-600 mb-1">
          Brand: <span className="font-medium">{brand}</span>
        </p>
        <p className="text-xs text-gray-600 mb-1">
          Size: <span className="font-medium">{size}</span>
        </p>
        <p className="font-semibold text-base text-gray-900">{price}</p>
      </div>
    </a>
  );
};

export default ProductCard;
