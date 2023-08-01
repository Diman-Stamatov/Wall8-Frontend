import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Hero = () => {
  const bgImages = [
    "img/cellphone-5459713.svg",
    "img/laptop-5459712.svg",
    "img/lock-5459714.svg",
  ];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [bgImages.length]);

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <div className="flex-grow w-screen h-full">
        {bgImages.map((img, index) => (
          <div
            key={img}
            className={`bg-cover bg-center h-full w-full absolute top-0 left-0 transition-all duration-2000 blur-sm ${
              index === currentImgIndex ? "animate-fadeIn" : "animate-fadeOut"
            }`}
            style={{
              backgroundImage: `url(${img})`,
            }}
          />
        ))}
      </div>
      <div className="flex justify-end items-center h-screen text-white z-50">
        <div className="absolute top-1/2 right-10">
          <h1
            className="text-6xl font-bold "
            style={{ textShadow: "0 4px 6px rgba(0, 0, 0, 0.5)" }}
          >
            Welcome to our Virtual Wallet App
          </h1>
          <p className="mt-2 text-xl font-light">
            Detailed description about application.
          </p>
          <div className="mt-10">
            <Link to="/login">
              <button className="bg-transparent relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Login
                </span>
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-transparent relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Sign up
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
