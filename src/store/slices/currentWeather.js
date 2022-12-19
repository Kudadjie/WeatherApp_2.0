import { createSlice } from "@reduxjs/toolkit";

const currentWeather = createSlice({
  name: "currentWeather",
  initialState: {
    precipitation: null,
    wind: null,
    humidity: null,
    chanceOfRain: null,
    condition: null,
    location: null,
  },
  reducers: {
    setWeatherValues: (state, action) => {
      state.precipitation = action.payload.precipitation;
      state.wind = action.payload.wind;
      state.humidity = action.payload.humidity;
      state.chanceOfRain = action.payload.chanceOfRain;
      state.condition = action.payload.condition;
      state.location = action.payload.location;
    },
  },
});

export const { setWeatherValues } = currentWeather.actions;

export default currentWeather;
