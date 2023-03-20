export function determineImage(conditionText, dayOrNight) {
  const regexToTest = {
    clear : [
      [
        /clear/i,
        `src/assets/images/weather-conditions/clear-${
            dayOrNight ? `day` : `night`}.webp`,
      ],
      [
        /sunny/i,
        `src/assets/images/weather-conditions/clear-${
            dayOrNight ? `day` : `night`}.webp`,
      ],
    ],
    partiallyCloudy : [
      [
        /^partly cloudy/i,
        `src/assets/images/weather-conditions/partially-cloudy-${
            dayOrNight ? `day` : `night`}.webp`,
      ],
    ],
    cloudy : [
      [
        /^cloudy/i,
        `src/assets/images/weather-conditions/heavy-clouds-${
            dayOrNight ? `day` : `night`}.webp`,
      ],
      [
        /overcast/i,
        `src/assets/images/weather-conditions/heavy-clouds-${
            dayOrNight ? `day` : `night`}.webp`,
      ],
    ],
    drizzle : [
      [
        /drizzle/i,
        `src/assets/images/weather-conditions/heavy-clouds-${
            dayOrNight ? `day` : `night`}.webp`,
      ],
    ],
    rainy : [
      [
        /^[patchy,light,moderate,torrential,thundery].+\srain/i,
        `src/assets/images/weather-conditions/heavy-clouds-${
            dayOrNight ? `day` : `night`}.webp`,
      ],
    ],
    heavyRain : [
      [
        /[outbreaks,heavy].+(rain,possible)/i,
        `src/assets/images/weather-conditions/heavy-clouds-${
            dayOrNight ? `day` : `night`}.webp`,
      ],
    ],
    sleet : [
      [
        /sleet/i,
        `src/assets/images/weather-conditions/heavy-clouds-${
            dayOrNight ? `day` : `night`}.webp`,
      ],
    ],
    blizzard : [
      [
        /blizard/i,
        `src/assets/images/weather-conditions/snow-${
            dayOrNight ? `day` : `night`}.webp`,
      ],
      [
        /blowing/i,
        `src/assets/images/weather-conditions/snow-${
            dayOrNight ? `day` : `night`}.webp`,
      ],
    ],
    snow : [
      [
        /snow/i,
        `src/assets/images/weather-conditions/snow-${
            dayOrNight ? `day` : `night`}.webp`,
      ],
    ],
    mist : [
      [
        /ice/i,
        `src/assets/images/weather-conditions/mist-fog-${
            dayOrNight ? `day` : `night`}.webp`,
      ],
      [
        /mist/i,
        `src/assets/images/weather-conditions/mist-fog-${
            dayOrNight ? `day` : `night`}.webp`,
      ],
      [
        /fog/i,
        `src/assets/images/weather-conditions/mist-fog-${
            dayOrNight ? `day` : `night`}.webp`,
      ],
    ],
  };

  for (let i in regexToTest) {
    for (let j in regexToTest[i]) {
      if (regexToTest[i][j][0].test(conditionText)) {
        return regexToTest[i][j][1];
      }
    }
  }
}
