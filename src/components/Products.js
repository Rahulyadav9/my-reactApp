import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center p-4">Loading products...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My Bazar</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded p-4 flex flex-col items-center text-center"
          >
            <img src={product.image} alt={product.title} className="h-40 object-contain mb-4" />
            <h2 className="font-semibold text-sm line-clamp-2 mb-2">{product.title}</h2>
            <p className="text-green-600 font-bold mb-2">${product.price}</p>
            <button
                onClick={() => navigate(`/products/${product.id}`)} // ✅ navigate to details page
                className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded"
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
