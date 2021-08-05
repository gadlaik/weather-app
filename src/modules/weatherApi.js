const apiKey = "8df549617b5f3018070b927e0f18be38";

let getWeather = async (city = "Sarajevo") => {
  let response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`
  );
  let resolve = await response.json();

  return resolve;
};

export { getWeather };
