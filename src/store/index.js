import { configureStore } from "@reduxjs/toolkit";
import isDay from "./slices/isDay";
import currentWeather from "./slices/currentWeather";
import riseSetValues from "./slices/RiseSetValues";
import temperature from "./slices/temperature";
import lastUpdated from "./slices/lastUpdated";
import changeLocationModal from "./slices/changeLocationModal";
const globalStore = configureStore({
  reducer: {
    currentWeather: currentWeather.reducer,
    riseSetValues: riseSetValues.reducer,
    temperature: temperature.reducer,
    isDay: isDay.reducer,
    lastUpdated: lastUpdated.reducer,
    changeLocationModal: changeLocationModal.reducer,
  },
});

export default globalStore;
