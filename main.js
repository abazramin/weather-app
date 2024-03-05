const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    const data = await response.json();

    console.log(data);


    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    document.querySelector(".weather").style.display = "block";

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "clouds") {

        weatherIcon.src = "images/clouds.png";

    } else if (data.weather[0].main == "clear") {

        weatherIcon.src = "images/clear.png";

    } else if (data.weather[0].main == "Rain") {

        weatherIcon.src = "images/rain.png";

    } else if (data.weather[0].main == "Drizzle") {

        weatherIcon.src = "images/drizzle.png";

    } else if (data.weather[0].main == "Mist") {

        weatherIcon.src = "images/mist.png";

    }

}

searchBtn.addEventListener("click", () => {

    checkWeather(searchBox.value);

})
