import {
  WiDaySunny,
  WiDaySunnyOvercast,
  WiDayCloudy,
  WiCloudy,
  WiFog,
  WiDayShowers,
  WiDaySnowThunderstorm,
  WiRain,
  WiSnow,
  WiSnowflakeCold,
  WiRainMix,
  WiHot,
  WiThermometerExterior,
  WiStrongWind,
  WiSunset,
} from "weather-icons-react";

const setWeatherIcon = (iconNumber) => {
  let icon = "";
  switch (iconNumber) {
    case 1:
    case 2:
    case 3:
    case 4:
      icon = WiDaySunny;
      break;

    case 5:
      icon = WiDaySunnyOvercast;
      break;

    case 6:
    case 20:
    case 23:
    case 21:
      icon = WiDayCloudy;
      break;

    case 7:
    case 8:
      icon = WiCloudy;
      break;

    case 11:
      icon = WiFog;
      break;

    case 12:
    case 13:
    case 14:
    case 16:
    case 17:
      icon = WiDayShowers;
      break;

    case 15:
      icon = WiDaySnowThunderstorm;
      break;

    case 18:
    case 19:
      icon = WiRain;
      break;

    case 22:
      icon = WiSnow;
      break;

    case 24:
      icon = WiSnowflakeCold;
      break;

    case 25:
    case 26:
    case 29:
      icon = WiRainMix;
      break;

    case 30:
      icon = WiHot;
      break;

    case 31:
      icon = WiThermometerExterior;
      break;

    case 32:
      icon = WiStrongWind;
      break;

    default:
      icon = WiSunset;
      break;
  }
  return icon;
};

export default setWeatherIcon;
