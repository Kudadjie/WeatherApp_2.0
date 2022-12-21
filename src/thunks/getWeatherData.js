import { setWeatherValues } from "../store/slices/currentWeather";
import { setDay } from "../store/slices/isDay";
import { setRiseSetValues } from "../store/slices/RiseSetValues";
import { updateLastUpdated } from "../store/slices/lastUpdated";
import { setTempValues } from "../store/slices/temperature";
import axios from "axios";

export default function getWeatherData(location = null) {
  //get navigation data
  let locationCoordinates;
  const getNavData = async (enteredLocation = null) => {
    if (!enteredLocation) {
      if (navigator.geolocation.getCurrentPosition) {
        navigator.geolocation.getCurrentPosition((position) => {
          locationCoordinates = `${position.coords.latitude},${position.coords.longitude}`;
        });
      }
    } else {
      locationCoordinates = enteredLocation;
    }
  };

  return async (dispatch) => {
    await getNavData(location);
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
          condition: response.data.current.condition.text,
          location: `${response.data.location.name},  ${response.data.location.region} - ${response.data.location.country}`,
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

      dispatch(updateLastUpdated({ time: "just now" }));

      setTimeout(() => {
        dispatch(updateLastUpdated({ time: "a few minutes ago" }));
      }, 300000);

      setTimeout(() => {
        dispatch(updateLastUpdated({ time: "30 mins ago" }));
      }, 1.8e6);

      setTimeout(() => {
        dispatch(updateLastUpdated({ time: "over an hour ago" }));
      }, 5.4e6);

      setTimeout(() => {
        dispatch(updateLastUpdated({ time: "a long time ago" }));
      }, 5.7e6);
    }, 5000);
  };
}
