import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const testimonials = [
    {
      text: "Absolutely amazing service! My experience was beyond expectations.",
      author: "Fatima M.",
    },
    {
      text: "A top-notch experience! I highly recommend it to everyone.",
      author: "Amina L.",
    },
    {
      text: "Professional and reliable. I'm extremely satisfied!",
      author: "Mariam R.",
    },
    {
      text: "One of the best experiences I’ve had. Will definitely return!",
      author: "Daniel W.",
    },
    {
      text: "Exceptional quality and great customer support. Loved it!",
      author: "Salman P.",
    },
  ];

  return (
    <section className="bg-white font-Montserrat py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-8">
          <h3 className="text-lg md:text-xl text-black tracking-[0.3em] font-normal mb-2">
            HEAR FROM OUR HAPPY CUSTOMERS
          </h3>
          <h2 className="uppercase text-[#CA9576] text-2xl md:text-3xl font-bold">
            TESTIMONIALS
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#F9F5F2] border border-[#E0C3A4] p-8 rounded-lg shadow-md text-center"
              >
                <p className="text-gray-800 text-lg leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-4">
                  <p className="text-[#CA9576] font-semibold text-xl">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
