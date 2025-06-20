import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do input validation or dummy login logic here
    navigate('/products'); // 🔁 Redirect to products page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" className="w-full mb-4 p-2 border rounded" />
          <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded" />
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <button onClick={() => navigate("/signup")} className="text-blue-500 underline">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
