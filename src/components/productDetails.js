import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams(); // get product id from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center p-4">Loading product...</p>;
  if (!product) return <p className="text-center p-4">Product not found.</p>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Link to="/products" className="text-blue-500 underline mb-4 block">← Back to Products</Link>
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded shadow">
        <img src={product.image} alt={product.title} className="h-64 object-contain" />
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-700 mb-2">{product.description}</p>
          <p className="text-green-600 text-xl font-bold">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
