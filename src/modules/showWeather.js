import { getWeather } from "./weatherApi";
import sunny from "./images/clearSunnySky.jpg";
import cloudy from "./images/cloudy.jpg";
import rainy from "./images/rainy.jpg";

const form = document.querySelector(".weather-form");
let location = document.querySelector(".location-input");
const desc = document.querySelector(".weather-desc");
const body = document.querySelector("body");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const reg = /^[\w\s]{2,20}$/;

  if (reg.test(location.value))
    getWeather(location.value).then((data) => {
      let weather = data.weather[0].main;
      if (weather == "Clouds") {
        desc.innerHTML = `<i class="fas fa-cloud"></i>`;
        body.style.backgroundImage = `url(${cloudy})`;
      } else if (weather == "Clear") {
        desc.innerHTML = `<i class="far fa-sun"></i>`;
        body.style.backgroundImage = `url(${sunny})`;
      } else if (weather == "Rain") {
        desc.innerHTML = `<i class="fas fa-cloud-rain"></i>`;
        body.style.backgroundImage = `url(${rainy})`;
      }
      desc.innerHTML += `<h2>${location.value.toUpperCase()} - ${data.weather[0].description.toUpperCase()} ${(
        data.main.temp - 273.15
      )
        .toString()
        .substr(0, 2)}°C<h2>`;
    });
});
