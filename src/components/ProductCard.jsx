import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCard = ({ images, rating, title, price }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    className: "rounded-t-xl overflow-hidden",
    dotsClass: "slick-dots custom-dots",
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
    initialSlide: 0,
    waitForAnimate: true,
    fade: false,
    cssEase: "linear",
  };

  return (
    <div className="w-[300px] bg-white">
      <div className="relative h-[200px]">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="h-[200px] relative">
              <img
                src={img}
                alt={`Product view ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                {`${currentSlide + 1}/${images.length}`}
              </div>
            </div>
          ))}
        </Slider>
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
        <p className="font-semibold text-base text-gray-900">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
