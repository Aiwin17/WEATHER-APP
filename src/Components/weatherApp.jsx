import React from "react";
import search_icon from "../assets/search.png";
import cloud_icon from "../assets/cloud.png";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";

const WeatherApp = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-900 to-indigo-800 w-[650px] h-[600px] m-auto mt-20 rounded-lg flex flex-col justify-center items-center">
      <div className="flex justify-center items-center space-x-4">
        <input
          className="h-12 w-72 rounded-full p-4 outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
        <div className="bg-white rounded-full w-12 h-12 flex justify-center items-center cursor-pointer">
          <img src={search_icon} alt="search_icon" />
        </div>
      </div>
      <div className="flex justify-center items-center pt-8">
        <img src={cloud_icon} alt="cloud_icon" className="h-32" />
      </div>
      <div className="flex justify-center pt-2 text-white text-6xl font-bold">
        15°C
      </div>
      <div className="flex justify-center pt-2 text-white text-4xl font-bold">
        London
      </div>
      <div className="flex p-8 justify-between w-full">
        <div className="flex items-center space-x-2">
          <img src={humidity_icon} className="h-10" alt="humidity_icon" />
          <div className="flex flex-col text-white">
            <span className="font-bold text-xl">87%</span>
            <span className="text-sm">Humidity</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <img src={wind_icon} className="h-10" alt="wind-icon" />
          <div className="flex flex-col text-white">
            <span className="font-bold text-xl">5.14km/h</span>
            <span className="text-sm">Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
