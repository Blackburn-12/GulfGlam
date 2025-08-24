import React, { useEffect, useRef } from "react";
import { FaStar, FaGem, FaSpa, FaTimes } from "react-icons/fa";

const LearnMore = ({ onClose }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-pink-50 to-white text-gray-800 font-Montserrat pt-28 pb-20 px-6 md:px-12"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-gray-600 hover:text-black text-2xl"
      >
        <FaTimes />
      </button>

      <div className="max-w-5xl mx-auto text-center space-y-12">
        {/* Header */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#CA9576]">
          ✨ Learn More About <span className="text-black">Gulf Glam</span>
        </h2>

        {/* Intro */}
        <p className="text-lg md:text-xl leading-relaxed text-gray-600">
          Gulf Glam FZE is a UAE-registered company, proudly serving beauty
          enthusiasts for over <strong>two years</strong>. We are an{" "}
          <span className="text-[#CA9576] font-semibold">
            authorized retailer
          </span>{" "}
          of authentic Korean, Japanese, and European beauty brands trusted by{" "}
          <strong>25,000+ happy customers</strong> across the region.
        </p>

        {/* World of Beauty */}
        <div className="grid md:grid-cols-3 gap-10 my-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
            <FaSpa className="w-10 h-10 text-[#CA9576] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black mb-2">K-Beauty</h3>
            <p className="text-gray-600 text-sm">
              Innovation and trendsetting skincare that redefines routines.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
            <FaStar className="w-10 h-10 text-[#CA9576] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black mb-2">J-Beauty</h3>
            <p className="text-gray-600 text-sm">
              Timeless rituals rooted in purity, simplicity, and elegance.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
            <FaGem className="w-10 h-10 text-[#CA9576] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black mb-2">
              European Luxury
            </h3>
            <p className="text-gray-600 text-sm">
              Prestige, craftsmanship, and sophistication in every detail.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-[#CA9576]/10 rounded-2xl p-10 md:p-14 shadow-md text-left">
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            💎 What We Stand For
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
            <li>
              <strong>Authenticity</strong> 100% genuine, directly sourced
              products.
            </li>
            <li>
              <strong>Quality</strong> beauty that truly works and delivers
              results.
            </li>
            <li>
              <strong>Trust</strong> building lasting relationships with every
              customer.
            </li>
          </ul>
        </div>

        {/* Vision */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-black mb-6">🌟 Our Vision</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            To become the{" "}
            <span className="font-semibold text-[#CA9576]">
              Middle East’s leading digital beauty distribution network
            </span>{" "}
            connecting people with products they can trust, love, and adore.
          </p>
        </div>

        {/* Outro */}
        <p className="mt-12 text-xl font-medium text-[#CA9576]">
          Gulf Glam isn’t just beauty it’s{" "}
          <span className="italic">confidence, elegance, and luxury</span>{" "}
          delivered.
        </p>
      </div>
    </section>
  );
};

export default LearnMore;

// import React from "react";
// import { FaStar, FaGem, FaSpa, FaTimes } from "react-icons/fa";

// const LearnMore = ({ onClose }) => {
//   return (
//     <section className="relative bg-gradient-to-b from-pink-50 to-white text-gray-800 font-Montserrat py-16 px-6 md:px-12">
//       {/* Close button */}
//       <button
//         onClick={onClose}
//         className="absolute top-6 right-6 text-gray-600 hover:text-black text-2xl"
//       >
//         <FaTimes />
//       </button>

//       <div className="max-w-5xl mx-auto text-center">
//         {/* Header */}
//         <h2 className="text-3xl md:text-5xl font-bold text-[#CA9576] mb-6">
//           ✨ Learn More About <span className="text-black">Gulf Glam</span>
//         </h2>

//         {/* Intro */}
//         <p className="text-lg md:text-xl leading-relaxed text-gray-600 mb-10">
//           Gulf Glam FZE is a UAE-registered company, proudly serving beauty
//           enthusiasts for over <strong>two years</strong>. We are an{" "}
//           <span className="text-[#CA9576] font-semibold">
//             authorized retailer
//           </span>{" "}
//           of authentic Korean, Japanese, and European beauty brands trusted by{" "}
//           <strong>25,000+ happy customers</strong> across the region.
//         </p>

//         {/* World of Beauty */}
//         <div className="grid md:grid-cols-3 gap-8 my-12">
//           <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
//             <FaSpa className="w-10 h-10 text-[#CA9576] mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-black mb-2">K-Beauty</h3>
//             <p className="text-gray-600 text-sm">
//               Innovation and trendsetting skincare that redefines routines.
//             </p>
//           </div>

//           <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
//             <FaStar className="w-10 h-10 text-[#CA9576] mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-black mb-2">J-Beauty</h3>
//             <p className="text-gray-600 text-sm">
//               Timeless rituals rooted in purity, simplicity, and elegance.
//             </p>
//           </div>

//           <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
//             <FaGem className="w-10 h-10 text-[#CA9576] mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-black mb-2">
//               European Luxury
//             </h3>
//             <p className="text-gray-600 text-sm">
//               Prestige, craftsmanship, and sophistication in every detail.
//             </p>
//           </div>
//         </div>

//         {/* Values */}
//         <div className="bg-[#CA9576]/10 rounded-2xl p-8 md:p-12 shadow-md">
//           <h3 className="text-2xl font-bold text-black mb-4">
//             What We Stand For
//           </h3>
//           <ul className="text-left list-disc list-inside space-y-2 text-gray-700">
//             <li>
//               <strong>Authenticity</strong> 100% genuine, directly sourced
//               products.
//             </li>
//             <li>
//               <strong>Quality</strong> beauty that truly works and delivers
//               results.
//             </li>
//             <li>
//               <strong>Trust</strong> building lasting relationships with every
//               customer.
//             </li>
//           </ul>
//         </div>

//         {/* Vision */}
//         <div className="mt-12">
//           <h3 className="text-2xl font-bold text-black mb-4">🌟 Our Vision</h3>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             To become the{" "}
//             <span className="font-semibold text-[#CA9576]">
//               Middle East’s leading digital beauty distribution network
//             </span>{" "}
//             connecting people with products they can trust, love, and adore.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LearnMore;
