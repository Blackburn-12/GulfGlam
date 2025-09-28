import React, { useRef, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import apiService from "../services/api";

const ProductGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const itemsPerPage = 8;
  const gridRef = useRef(null);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await apiService.getProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // 🔍 Filter products
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 📑 Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  const goToPage = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      gridRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col gap-4">
      {/* 🔍 Search Bar */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full md:w-1/2 px-4 py-2 border rounded-full focus:outline-none focus:ring-0"
          style={{
            borderColor: "#CA9576",
            outline: "none",
            boxShadow: "0 0 0 1px #CA9576", // 🔥 custom focus glow
          }}
        />
      </div>

      {/* 🛍️ Products Grid with fixed height + scroll */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-y-auto"
        style={{ maxHeight: "800px", paddingRight: "2px" }}
      >
        {loading ? (
          <div className="col-span-full flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#CA9576]"></div>
          </div>
        ) : error ? (
          <p className="text-center text-red-500 col-span-full">{error}</p>
        ) : currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No products found.
          </p>
        )}
      </div>

      {/* 📑 Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2">
          <button
            type="button"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-lg text-white disabled:opacity-50"
            style={{ backgroundColor: "#CA9576" }}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToPage(index + 1)}
              className={`px-3 py-1 rounded-lg border ${
                currentPage === index + 1 ? "text-white" : "text-black"
              }`}
              style={{
                backgroundColor:
                  currentPage === index + 1 ? "#CA9576" : "white",
                borderColor: "#CA9576",
              }}
            >
              {index + 1}
            </button>
          ))}

          <button
            type="button"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-lg text-white disabled:opacity-50"
            style={{ backgroundColor: "#CA9576" }}
          >
            Next
          </button>
        </div>
      )}

      {/* 🌐 OPTION 2: Subtle Inline Note */}
      <div className="text-center mt-4">
        <p className="text-sm md:text-base text-gray-700 font-bold">
          To shop our collection, visit our official stores on{" "}
          <a
            href="https://www.noon.com/uae-en/p-214570/?utm_source=C1000207L&utm_medium=referral"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#CA9576] underline hover:text-black font-bold"
          >
            Noon ↗
          </a>{" "}
          and{" "}
          <a
            href="https://www.trendyol.com/en/store/gulf-glam-m-1146223?sst=0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#CA9576] underline hover:text-black font-bold"
          >
            Trendyol ↗
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default ProductGrid;
