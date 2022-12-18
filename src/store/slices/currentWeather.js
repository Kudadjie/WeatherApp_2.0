import { createSlice } from "@reduxjs/toolkit";

const currentWeather = createSlice({
  name: "currentWeather",
  initialState: {
    precipitation: null,
    wind: 23,
    humidity: null,
    chanceOfRain: null,
  },
  reducers: {
    setPrecipitation: (state, action) => {
      state.precipitation = action.payload.precipitation;
    },
    setWind: (state, action) => {
      state.wind = action.payload.wind;
    },
    setHumidity: (state, action) => {
      state.humidity = action.payload.humidity;
    },
    setChanceOfRain: (state, action) => {
      state.chanceOfRain = action.payload.chanceOfRain;
    },
  },
});

export const { setWind, setPrecipitation, setHumidity, setChanceOfRain } =
  currentWeather.actions;

export default currentWeather;
