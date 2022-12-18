import { setPrecipitation } from "../store/slices/currentWeather";

import axios from "axios";

export default function getWeatherData() {
  //TODO - Possibly get nav data from here?
  // function getNavData() {
  //   if (navigator.geolocation.getCurrentPosition) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       setTimeout(() => {
  //         return `${position.coords.latitude},${position.coords.longitude}`;
  //       }, 10000);
  //     });
  //   }
  // }

  // const location = getNavData();

  //TODO - Get location coordinates as parameter
  return async (dispatch) => {
    const response = await axios
      .get(
        "https://api.weatherapi.com/v1/forecast.json?key=c1cc53b5ba214351bc9232844221703&q=5.6426496,-0.2260992&days=1&aqi=no&alerts=no"
      )
      .then((res) => {
        return res;
      })
      //TODO - Proper error handling
      .catch((err) => {
        console.log(err);
      });

    console.log(response);
    dispatch(
      setPrecipitation({ precipitation: response.data.current.precip_in })
    );
    //   dispatch(setPrecipitation(response.))
  };
}
