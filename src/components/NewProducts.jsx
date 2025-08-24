import React from "react";
import ProductGrid from "./ProductGrid";

const NewProducts = () => {
  return (
    <section
      id="new-products"
      className="min-h-screen bg-white font-Montserrat"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="text-center">
          <h3 className="text-xs md:text-xs text-black tracking-[0.3em] font-normal mb-2">
            FEATURED COLLECTION
          </h3>
          <h2
            className="text-2xl md:text-xl font-bold"
            style={{ color: "#CA9576" }}
          >
            NEW ARRIVALS
          </h2>
        </div>
        <div className="mt-2">
          <ProductGrid />
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
