import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import { ThemeContext } from "../ThemeProvider";
import { Background } from "victory";
import AnimatedText from "./AnimatedText";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const bgImages = [
    "img/cellphone-5459713.svg",
    "img/laptop-5459712.svg",
    "img/lock-5459714.svg",
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex-grow ">
        {/* {bgImages.map((img, index) => (
          <div
            key={img}
            className={`bg-cover bg-center h-full w-full absolute top-0 left-0 transition-all duration-2000 blur-sm ${
              index === currentImgIndex ? "animate-fadeIn" : "animate-fadeOut"
            }`}
            style={{
              backgroundImage: `url(${img})`,
            }}
          />
        ))} */}
      </div>
      <div
        className="flex gap-x-8   bg-cover bg-center h-full w-full absolute top-0 left-0"
        style={{
          backgroundImage:
            theme === "light"
              ? `url(src/assets/BackhroundWhiteMode.jpg)`
              : "url(src/assets/graph_chart_with_moving_up_arrow_stock_market_financial_investment_diagram_on_blue_background.jpg)",
        }}
      >
        <div className="justify-start m-auto ">
          {theme === "light" ? (
            <img
              src="src/assets/wall-8-high-resolution-logo-black-on-transparent-background.png"
              alt="Logo"
              className="m-auto h-72"
            />
          ) : (
            <img
              src="src/assets/wall-8-high-resolution-logo-white-on-transparent-background.png"
              alt="Logo"
              className="m-auto h-40"
            />
          )}
        </div>
        <div className="m-auto justify-end text-light-quaternary dark:text-light-primary w-2/5">
          <h1
            className="text-4xl md:text-6xl dark:font-bold mb-2"
            style={{ textShadow: "0 4px 6px rgba(0, 0, 0, 0.5)" }}
          >
            Welcome to Wall-8
          </h1>
          <div className="max-w">
            <p className="text-lg md:text-xl font-light mb-4 ">
              <AnimatedText />
            </p>
            <div className="flex space-x-2">
              <Link to="/login">
                <button className="bg-transparent relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-light-tertiary to-light-primary dark:from-green-400 dark:to-blue-600 dark:group-hover:from-green-400 dark:group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    login
                  </span>
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-transparent relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-light-quaternary to-light-primary dark:from-green-400 dark:to-blue-600 dark:group-hover:from-green-400 dark:group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Sign up
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
