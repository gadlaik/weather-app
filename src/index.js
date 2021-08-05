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
