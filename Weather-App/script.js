let button = document.querySelector(".button");
let inputvalue = document.querySelector(".search-box");
let temp = document.querySelector(".current .temp");
let description = document.querySelector(".current .weather");
let city = document.querySelector(".location .city");
let date = document.querySelector(".location .date");
let weatherImage = document.querySelector("#weather-image");

button.addEventListener("click", function () {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=metric&appid=03a094de2fbed757402784c8ab602833`
  )
    .then((response) => response.json())
    .then(displayData)
    .catch((err) => alert("Please Enter Correct City Name"));
});

const displayData = (weather) => {
  let temperature = Math.round(weather.main.temp);
  temp.innerHTML = `${temperature}°C`;
  description.innerText = `${weather.weather[0].description}`;
  city.innerText = `${weather.name}, ${weather.sys.country}`;
  let now = new Date();
  date.innerText = dateBuilder(now);

  // Update weather image based on weather condition
  switch (weather.weather[0].main) {
    case 'Clouds':
      weatherImage.src = "assets/cloud.png";
      break;
    case 'Clear':
      weatherImage.src = "assets/clear.png";
      break;
    case 'Rain':
      weatherImage.src = "assets/rain.png";
      break;
    case 'Mist':
      weatherImage.src = "assets/mist.png";
      break;
    case 'Snow':
      weatherImage.src = "assets/snow.png";
      break;
    default:
      weatherImage.src = "assets/404.png"; // Default image if no match
      break;
  }
};

function dateBuilder(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
