import clear_icon from "../assets/clear.png";
import rain_icon from "../assets/rain.png";
import cloud_icon from "../assets/cloud.png";
import snow_icon from "../assets/snow.png";

const getWeatherIcon = (icon) => {
  switch (icon) {
    case "01d":
    case "01n":
      return clear_icon;
    case "02d":
    case "02n":
    case "03d":
    case "03n":
    case "04d":
    case "04n":
      return cloud_icon;
    case "09d":
    case "09n":
    case "10d":
    case "10n":
    case "11d":
    case "11n":
      return rain_icon;
    case "13d":
    case "13n":
    case "50d":
    case "50n":
      return snow_icon;
    default:
      return;
  }
};

export default getWeatherIcon;
