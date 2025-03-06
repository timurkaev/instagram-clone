import React from "react";
import {
  FaHome,
  FaSearch,
  FaPlusSquare,
  FaHeart,
  FaUser,
  FaCog,
} from "react-icons/fa";
import "./styles.css";

const InstagramProfile: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-100">
      {/* Header */}
      <header className="w-full bg-white p-4 shadow-md flex justify-between items-center fixed top-0">
        <h1 className="text-xl font-bold">username</h1>
        <FaCog className="text-xl cursor-pointer" />
      </header>

      {/* Profile Section */}
      <main className="mt-16 w-full max-w-lg flex flex-col items-center p-4">
        <div className="w-full flex items-center space-x-4">
          <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">username</span>
              <button className="px-4 py-1 bg-gray-200 text-sm rounded-md">
                Edit Profile
              </button>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span>
                <strong>20</strong> posts
              </span>
              <span>
                <strong>150</strong> followers
              </span>
              <span>
                <strong>180</strong> following
              </span>
            </div>
          </div>
        </div>
        <p className="mt-2 text-sm">Bio goes here...</p>
      </main>

      {/* Posts Grid */}
      <section className="w-full max-w-lg grid grid-cols-3 gap-1 p-2">
        {[...Array(9)].map((_, index) => (
          <div key={index} className="w-full h-32 bg-gray-300"></div>
        ))}
      </section>

      {/* Bottom Navigation */}
      <nav className="w-full bg-white p-4 shadow-md fixed bottom-0 flex justify-around items-center">
        <FaHome className="text-2xl cursor-pointer" />
        <FaSearch className="text-2xl cursor-pointer" />
        <FaPlusSquare className="text-2xl cursor-pointer" />
        <FaHeart className="text-2xl cursor-pointer" />
        <FaUser className="text-2xl cursor-pointer text-blue-500" />
      </nav>
    </div>
  );
};

export default InstagramProfile;
