export function determineImage(conditionText, dayOrNight) {
  const regexToTest = {
    clear: [
      [
        /clear/i,
        `src/assets/images/weather-conditions/clear-${dayOrNight}.webp`,
      ],
      [
        /sunny/i,
        `src/assets/images/weather-conditions/clear-${dayOrNight}.webp`,
      ],
    ],
    partiallyCloudy: [
      [
        /^partly cloudy/i,
        `src/assets/images/weather-conditions/partially-cloudy-${dayOrNight}.webp`,
      ],
    ],
    cloudy: [
      [
        /^cloudy/i,
        `src/assets/images/weather-conditions/heavy-clouds-${dayOrNight}.webp`,
      ],
      [
        /overcast/i,
        `src/assets/images/weather-conditions/heavy-clouds-${dayOrNight}.webp`,
      ],
    ],
    drizzle: [
      [
        /drizzle/i,
        `src/assets/images/weather-conditions/heavy-clouds-${dayOrNight}.webp`,
      ],
    ],
    rainy: [
      [
        /^[patchy,light,moderate,torrential,thundery].+\srain/i,
        `src/assets/images/weather-conditions/heavy-clouds-${dayOrNight}.webp`,
      ],
    ],
    heavyRain: [
      [
        /[outbreaks,heavy].+(rain,possible)/i,
        `src/assets/images/weather-conditions/heavy-clouds-${dayOrNight}.webp`,
      ],
    ],
    sleet: [
      [
        /sleet/i,
        `src/assets/images/weather-conditions/heavy-clouds-${dayOrNight}.webp`,
      ],
    ],
    blizzard: [
      [
        /blizard/i,
        `src/assets/images/weather-conditions/snow-${dayOrNight}.webp`,
      ],
      [
        /blowing/i,
        `src/assets/images/weather-conditions/snow-${dayOrNight}.webp`,
      ],
    ],
    snow: [
      [/snow/i, `src/assets/images/weather-conditions/snow-${dayOrNight}.webp`],
    ],
    mist: [
      [
        /ice/i,
        `src/assets/images/weather-conditions/mist-fog-${dayOrNight}.webp`,
      ],
      [
        /mist/i,
        `src/assets/images/weather-conditions/mist-fog-${dayOrNight}.webp`,
      ],
      [
        /fog/i,
        `src/assets/images/weather-conditions/mist-fog-${dayOrNight}.webp`,
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
