import React from "react";

const Hero = ({ onLearnMore }) => {
  return (
    <section
      id="home"
      className="relative font-Montserrat w-full h-screen bg-cover bg-center flex items-center px-6"
      style={{ backgroundImage: "url('/images/bgimg.png')" }}
    >
      <div className="max-w-3xl text-left">
        <h1 className="text-[60px] md:text-[70px] lg:text-[90px] leading-tight text-black">
          Be <span className="font-extrabold">Bold</span> <br />
          Be <span className="font-extrabold">Beautiful</span> <br />
          Be <span className="font-extrabold">You</span>
        </h1>
        <button
          onClick={onLearnMore}
          className="mt-6 px-6 py-3 bg-[#C48D6E] text-white font-semibold text-lg hover:opacity-80 transition-all"
        >
          LEARN MORE
        </button>
      </div>
    </section>
  );
};

export default Hero;
