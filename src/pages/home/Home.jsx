import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white">
      {/* Banner */}
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to <span className="text-yellow-300">Our Platform</span>
        </h1>
        <p className="text-lg font-medium mb-8">
          Your one-stop solution for [your platform's purpose]. Start exploring
          now!
        </p>
        <button
          onClick={() => navigate('/register')} 
          className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-lg font-bold rounded-lg shadow-md">
          Get Started
        </button>
      </div>

      {/* Features Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {/* Feature Card 1 */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
          <h2 className="text-xl font-semibold mb-3">Feature One</h2>
          <p className="text-sm mb-4">
            Discover amazing features that make your experience unforgettable.
          </p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Learn More
          </button>
        </div>

        {/* Feature Card 2 */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
          <h2 className="text-xl font-semibold mb-3">Feature Two</h2>
          <p className="text-sm mb-4">
            Stay connected with our seamless and intuitive platform.
          </p>
          <button className="px-4 py-2 bg-purple-500 text-white rounded-lg">
            Learn More
          </button>
        </div>

        {/* Feature Card 3 */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
          <h2 className="text-xl font-semibold mb-3">Feature Three</h2>
          <p className="text-sm mb-4">
            Experience the power of innovation and creativity.
          </p>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg">
            Learn More
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
