import { setWeatherValues } from "../store/slices/currentWeather";
import { setDay } from "../store/slices/isDay";
import { setRiseSetValues } from "../store/slices/RiseSetValues";
import { setTempValues } from "../store/slices/temperature";
import axios from "axios";

export default function getWeatherData() {
  //get navigation data
  let locationCoordinates;
  const getNavData = async () => {
    if (navigator.geolocation.getCurrentPosition) {
      navigator.geolocation.getCurrentPosition((position) => {
        locationCoordinates = `${position.coords.latitude},${position.coords.longitude}`;
      });
    }
  };

  return async (dispatch) => {
    await getNavData();
    setTimeout(async () => {
      const response = await axios
        .get(
          `https://api.weatherapi.com/v1/forecast.json?key=c1cc53b5ba214351bc9232844221703&q=${locationCoordinates}&days=1&aqi=no&alerts=no`
        )
        .then((res) => {
          return res;
        })
        //TODO - Proper error handling?
        .catch((err) => {
          console.log(err);
        });
      dispatch(
        setWeatherValues({
          precipitation: response.data.current.precip_in,
          wind: response.data.current.wind_mph,
          humidity: response.data.current.humidity,
          chanceOfRain:
            response.data.forecast.forecastday[0].day.daily_chance_of_rain,
        })
      );
      dispatch(
        setDay({
          value: Boolean(
            response.data.forecast.forecastday[0].hour[
              Number(String(response.data.location.localtime).match(/\s\d+/))
            ].is_day
          ),
        })
      );
      dispatch(
        setRiseSetValues({
          sun: `${response.data.forecast.forecastday[0].astro.sunrise} | ${response.data.forecast.forecastday[0].astro.sunset}`,
          moon: `${response.data.forecast.forecastday[0].astro.moonrise} | ${response.data.forecast.forecastday[0].astro.moonset}`,
        })
      );
      dispatch(
        setTempValues({
          c: Math.round(Number(response.data.current.temp_c)),
          f: Math.round(Number(response.data.current.temp_f)),
        })
      );
    }, 5000);
  };
}
