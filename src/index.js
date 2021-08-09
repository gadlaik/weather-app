import "./style.css";
import "./modules/showWeather";
import showWeather from "./modules/showWeather";

if (localStorage.getItem("location") != null)
  showWeather(localStorage.getItem("location"));

document.querySelector("input[type=submit]").addEventListener("click", () => {
  document
    .querySelector("input[type=submit]")
    .setAttribute("style", "transform: scale(0.95)");
  setTimeout(() => {
    document
      .querySelector("input[type=submit]")
      .setAttribute("style", "transform: scale(1)");
  }, 75);
});

(() => {
  if (localStorage.getItem("unit") == "celsius") {
    document.querySelector(".fahrenheit").style.background = "orangered";
    document.querySelector(".celsius").style.background = "limegreen";
  } else if (localStorage.getItem("unit") == "fahrenheit") {
    document.querySelector(".fahrenheit").style.background = "limegreen";
    document.querySelector(".celsius").style.background = "orangered";
  } else {
    document.querySelector(".fahrenheit").style.background = "orangered";
    document.querySelector(".celsius").style.background = "limegreen";
    localStorage.setItem("unit", "celsius");
  }
})();

document.querySelector(".temp-units").addEventListener("click", (e) => {
  if (e.target.classList.contains("celsius")) {
    document.querySelector(".fahrenheit").style.background = "orangered";
    document.querySelector(".celsius").style.background = "limegreen";
    localStorage.setItem("unit", "celsius");
    if (localStorage.getItem("location") != null)
      showWeather(localStorage.getItem("location"));
  } else if (e.target.classList.contains("fahrenheit")) {
    document.querySelector(".fahrenheit").style.background = "limegreen";
    document.querySelector(".celsius").style.background = "orangered";
    localStorage.setItem("unit", "fahrenheit");
    if (localStorage.getItem("location") != null)
      showWeather(localStorage.getItem("location"));
  }
});
