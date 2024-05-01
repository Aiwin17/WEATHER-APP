import React, { useState } from "react";
import search_icon from "../assets/search.png";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";
import getWeatherIcon from "./weatherIcons";

const WeatherApp = () => {
  const [searchInput, setSearchInput] = useState("");
  const [info, setInfo] = useState({});
  const [cloudIcon, setCloudIcon] = useState();
  const [noResults, setNoResults] = useState(false);

  const handleSearch = async () => {
    try {
      const api_key = import.meta.env.VITE_API_KEY;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=Metric&appid=${api_key}`
      );
      if (response.status === 404) {
        setNoResults(true);
        return;
      }
      const data = await response.json();
      if (!data || !data.weather || data.weather.length === 0) {
        setNoResults(true);
        return;
      }
      setNoResults(false);
      setCloudIcon(getWeatherIcon(data.weather[0].icon));
      setInfo(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setNoResults(true);
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 to-indigo-800 w-[650px] h-[600px] m-auto mt-20 rounded-lg flex flex-col justify-center items-center">
      <div className="flex mb-10 text-lg text-white font-bold justify-center items-center w-full">
        WEATHER-APP
      </div>
      <div className="flex justify-center items-center space-x-4">
        <input
          className="h-12 w-72 rounded-full p-4 outline-none"
          type="search"
          name="search"
          placeholder="Search...."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <div
          className="bg-white rounded-full w-12 h-12 flex justify-center items-center cursor-pointer"
          onClick={handleSearch}
        >
          <img src={search_icon} alt="search_icon" />
        </div>
      </div>
      {noResults && (
        <div className="text-white text-lg font-bold mt-4">
          No results found.
        </div>
      )}
      {cloudIcon && !noResults && (
        <div className="flex justify-center items-center pt-8">
          <img src={cloudIcon} alt="cloud_icon" className="h-32" />
        </div>
      )}

      {info.main && !noResults && (
        <div className="flex justify-center pt-2 text-white text-6xl font-bold">
          {Math.floor(info?.main?.temp)}°C
        </div>
      )}

      <div className="flex justify-center pt-2 text-white text-4xl font-bold">
        {!noResults ? info?.name : ""}
      </div>
      {info.main && !noResults && (
        <div className="flex p-8 justify-between w-full">
          <div className="flex items-center space-x-2">
            <img src={humidity_icon} className="h-10" alt="humidity_icon" />
            <div className="flex flex-col text-white">
              <span className="font-bold text-xl">{info.main.humidity}%</span>
              <span className="text-sm">Humidity</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <img src={wind_icon} className="h-10" alt="wind-icon" />
            <div className="flex flex-col text-white">
              <span className="font-bold text-xl">{info?.wind?.speed}km/h</span>
              <span className="text-sm">Wind Speed</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
