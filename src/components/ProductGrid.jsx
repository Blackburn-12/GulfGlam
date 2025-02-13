// ProductGrid.jsx
import React from "react";
import ProductCard from "./ProductCard";
import { products } from "./ProductData";

const ProductGrid = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            images={product.images}
            rating={product.rating}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
