import React from "react";
import ProductGrid from "./ProductGrid";

const NewProducts = () => {
  return (
    <section className="min-h-screen bg-white font-Montserrat">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-2">
          <h3 className="text-lg md:text-xl text-black tracking-[0.3em] font-normal mb-2">
            FEATURED COLLECTION
          </h3>
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: "#CA9576" }}
          >
            NEW ARRIVALS
          </h2>
        </div>
        <div className="mt-8">
          <ProductGrid />
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
