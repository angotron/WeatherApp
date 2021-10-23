function currentDate() {
  let date = document.querySelector("#date");
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();
  date.innerHTML = `${day} ${hours}:${minutes}`;
}

function displayWeather(response) {
  document.querySelector("#searchedCity").innerHTML = response.data.name;
  document.querySelector("#today-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searchCity(city) {
  let units = "metric";
  let apiKey = "8050aaa898a67ab7de90e5b1200fb4e2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}$appid=${apiKey}`;

  axios.get(apiUrl).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-bar").value;
  searchCity(city);
}

function searchPosition(position) {
  let apiKey = "8050aaa898a67ab7de90e5b1200fb4e2";
  let apiUrl = `api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`;

  axios.get(apiUrl).then(displayWeather);
}

function displayCurrentPos(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchPosition);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let currentButton = document.querySelector("#current-city-button");
currentButton.addEventListener("click", displayCurrentPos);
currentDate();

searchCity("Oslo");
