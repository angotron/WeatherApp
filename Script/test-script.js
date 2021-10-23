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
currentDate();

//----------------------------------------------------------

function displayCity(response) {
  let description = response.data.weather[0].description;
  let descriptionElement = document.querySelector("#description");
  let cityElement = document.querySelector("#searchedCity");
  cityElement.innerHTML = `${city}`;
  descriptionElement.innerHTML = `${description}`;
}
//--------------------------------------------------

//______
function searchCity(event) {
  event.preventDefault();

  let city = "Madrid";
  let units = "Metric";
  let apiKey = "8050aaa898a67ab7de90e5b1200fb4e2";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndpoint}q=${city}&units=${units}&appid=${apiKey}`;
  console.log(apiUrl);

  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayCity);
}

function searchCity(event) {
  let searchInput = document.querySelector("#search-bar");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

function apiCollect() {}

//----------

//------------------------------------
function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "Metric";
  let apiKey = "8050aaa898a67ab7de90e5b1200fb4e2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

  axios.get(apiUrl).then(searchCity);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let currentPos = document.querySelector("#current-city-button");
currentPos.addEventListener("click", getCurrentPosition);

//-----------------------------------
/*
function displayTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let searchedTemp = document.querySelector("#today-temp");
  searchedTemp.innerHTML = `${temperature} °C`;
}

function cToF(event) {
  event.preventDefault();
  let h2 = document.querySelector("#today-temp");
  let temp = h2.innerHTML;
  h2.innerHTML = Math.round(temp * 9) / 5 + 32;
}

function fToC(event) {
  event.preventDefault();
  let h2 = document.querySelector("#today-temp");
  let temp = h2.innerHTML;
  h2.innerHTML = Math.round((temp - 32) * 5) / 9;
}

let celsius = document.querySelector("#celsius");
let fahrenheit = document.querySelector("#fahrenheit");

celsius.addEventListener("click", cToF);
fahrenheit.addEventListener("click", fToC);
axios.get(`${apiUrl}&appid=${apiKey}`).then(displayTemp);
*/

//-----------------------------------
//api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
//Example: https://api.openweathermap.org/data/2.5/weather?q=Lisbon&units=metric&appid=YOURKEY

//https://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=KEY&&units=metric
/*
👨‍🏫Your task
On your project, when a user searches for a city (example: New York), 
it should display the name of the city on the result page and the current temperature 
of the city.

🙀 Bonus point:
Add a Current Location button. When clicking on it, it uses the Geolocation API 
to get your GPS coordinates and display and the city and current temperature using
 the OpenWeather API
 */
//--------------------------------------------------
