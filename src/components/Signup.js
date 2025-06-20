import React from "react";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form>
          <input type="text" placeholder="Full Name" className="w-full mb-4 p-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full mb-4 p-2 border rounded" />
          <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded" />
          <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <button onClick={() => navigate("/")}  className="text-green-500 underline">
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
