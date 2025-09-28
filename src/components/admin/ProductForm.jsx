import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  updateProduct,
  clearError,
} from "../../store/slices/productSlice";
import apiService from "../../services/api";

const ProductForm = ({ product, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    title: product?.title || "",
    price: product?.price || "",
    brand: product?.brand || "",
    size: product?.size || "",
    rating: product?.rating || "",
    link: product?.link || "", // legacy single link (maps to amazon)
    linksAmazon: product?.links?.amazon || "",
    linksTrendoyl: product?.links?.trendoyl || "",
    linksNoon: product?.links?.noon || "",
    image: null,
    imageUrl: product?.image || "",
  });

  const [preview, setPreview] = useState(product?.image || "");

  const dispatch = useDispatch();
  const { createLoading, updateLoading, error } = useSelector(
    (state) => state.products
  );
  const loading = createLoading || updateLoading;

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      const file = files[0];
      setFormData((prev) => ({ ...prev, image: file }));

      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => setPreview(e.target.result);
        reader.readAsDataURL(file);
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(clearError());

    try {
      let imageUrl = formData.imageUrl;

      // Upload new image if provided
      if (formData.image) {
        const uploadResponse = await apiService.uploadImage(formData.image);
        imageUrl = uploadResponse.imageUrl;
      }

      const links = {
        amazon: formData.linksAmazon || undefined,
        trendoyl: formData.linksTrendoyl || undefined,
        noon: formData.linksNoon || undefined,
      };

      // Remove empty keys
      Object.keys(links).forEach(
        (k) => links[k] === undefined && delete links[k]
      );

      const productData = {
        title: formData.title,
        price: formData.price,
        brand: formData.brand,
        size: formData.size,
        rating: formData.rating,
        image: imageUrl,
        // Prefer structured links; include legacy single link for backward-compat
        ...(Object.keys(links).length > 0 ? { links } : {}),
        ...(formData.link ? { link: formData.link } : {}),
      };

      if (product) {
        const result = await dispatch(
          updateProduct({ id: product.id, productData })
        );
        if (result.type.endsWith("fulfilled")) {
          onSuccess();
        }
      } else {
        const result = await dispatch(createProduct(productData));
        if (result.type.endsWith("fulfilled")) {
          onSuccess();
        }
      }
    } catch (err) {
      // Error is handled by Redux
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg font-Montserrat">
      <h2 className="text-2xl font-bold mb-6">
        {product ? "Edit Product" : "Add New Product"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Title *
          </label>
          <input
            type="text"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter product title"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price *
            </label>
            <input
              type="text"
              name="price"
              required
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g., AED 95.00"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rating
            </label>
            <input
              type="text"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g., 4.5"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Brand *
            </label>
            <input
              type="text"
              name="brand"
              required
              value={formData.brand}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter brand name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Size
            </label>
            <input
              type="text"
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g., 345ml"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amazon Link
            </label>
            <input
              type="url"
              name="linksAmazon"
              value={formData.linksAmazon}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="https://amazon..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Trendoyl Link
            </label>
            <input
              type="url"
              name="linksTrendoyl"
              value={formData.linksTrendoyl}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="https://trendyol..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Noon Link
            </label>
            <input
              type="url"
              name="linksNoon"
              value={formData.linksNoon}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="https://noon..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Legacy Single Link (optional)
            </label>
            <input
              type="url"
              name="link"
              value={formData.link}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Used if Amazon/Trendyol/Noon not provided"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Image
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />

          {preview && (
            <div className="mt-4">
              <img
                src={preview}
                alt="Preview"
                className="w-32 h-32 object-contain border border-gray-300 rounded"
              />
            </div>
          )}
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {loading ? "Saving..." : product ? "Update Product" : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
