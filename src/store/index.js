import { configureStore } from "@reduxjs/toolkit";
import isDay from "./slices/isDay";
import currentWeather from "./slices/currentWeather";
import riseSetValues from "./slices/RiseSetValues";
import temperature from "./slices/temperature";
const globalStore = configureStore({
  reducer: {
    currentWeather: currentWeather.reducer,
    riseSetValues: riseSetValues.reducer,
    temperature: temperature.reducer,
    isDay: isDay.reducer,
  },
});

export default globalStore;
