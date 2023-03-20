import {configureStore} from "@reduxjs/toolkit";

import changeLocationModal from "./slices/changeLocationModal";
import currentWeather from "./slices/currentWeather";
import isDay from "./slices/isDay";
import lastUpdated from "./slices/lastUpdated";
import riseSetValues from "./slices/RiseSetValues";
import temperature from "./slices/temperature";

const globalStore = configureStore({
  reducer : {
    currentWeather : currentWeather.reducer,
    riseSetValues : riseSetValues.reducer,
    temperature : temperature.reducer,
    isDay : isDay.reducer,
    lastUpdated : lastUpdated.reducer,
    changeLocationModal : changeLocationModal.reducer,
  },
});

export default globalStore;
