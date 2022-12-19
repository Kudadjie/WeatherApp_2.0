import { createSlice } from "@reduxjs/toolkit";

const currentWeather = createSlice({
  name: "currentWeather",
  initialState: {
    precipitation: null,
    wind: null,
    humidity: null,
    chanceOfRain: null,
  },
  reducers: {
    setWeatherValues: (state, action) => {
      state.precipitation = action.payload.precipitation;
      state.wind = action.payload.wind;
      state.humidity = action.payload.humidity;
      state.chanceOfRain = action.payload.chanceOfRain;
    },
  },
});

export const { setWeatherValues } = currentWeather.actions;

export default currentWeather;
