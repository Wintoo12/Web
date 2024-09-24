const apiKey = "81a0b69d111791bb7417b13be38321a1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search-btn");
const weatherIcon = document.querySelector(".weather-icon");
const cardBackground = document.querySelector(".card");

async function checkWeather(city)
{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404)
    {
            document.querySelector(".error").style.display = "block";
    }
    else
    {
        clear();
        document.querySelector(".error").style.display = "none";
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Rain")
        {
            weatherIcon.src = "cloudy.png";
            document.querySelector(".card").style.backgroundImage = "url('Rainy_Weather_pix.max-1200x675.jpg')";
            document.querySelector(".card").style.backgroundSize = "cover";
            document.querySelector(".card").style.backgroundPosition = "center";
        }
        else if(data.weather[0].main == "Clouds" || data.weather[0].main == "Overcast Clouds")
        {
            weatherIcon.src = "icons8-cloudy-40.png";
            document.querySelector(".card").style.backgroundImage = "url('istockphoto-1472560341-612x612.jpg')";
            document.querySelector(".card").style.backgroundSize = "cover";
            document.querySelector(".card").style.backgroundPosition = "center";
        }
        else if(data.weather[0].main == "Clear")
        {
            weatherIcon.src = "icons8-sunny-50.png";
            document.querySelector(".card").style.backgroundImage = "url('pngtree-immersive-3d-depiction-of-sunny-weather-with-clouds-image_13534870.png')";
            document.querySelector(".card").style.backgroundSize = "cover";
            document.querySelector(".card").style.backgroundPosition = "center";
        }
        else if(data.weather[0].main == "Snow")
        {
            weatherIcon.src = "icons8-snow-48.png";
            document.querySelector(".card").style.backgroundImage = "url('pngtree-the-road-496-is-blanketed-in-heavy-snow-amidst-unfavorable-weather-conditions-photo-image_32657340.jpg')";
            document.querySelector(".card").style.backgroundSize = "cover";
            document.querySelector(".card").style.backgroundPosition = "center";
        }
        else if(data.weather[0].main == "Foggy")
        {
            weatherIcon.src = "icons8-mist-64.png";
            document.querySelector(".card").style.backgroundImage = "url('very-foggy-weather-in-forested-hills-free-photo.webp')";
            document.querySelector(".card").style.backgroundSize = "cover";
            document.querySelector(".card").style.backgroundPosition = "center";
        }

        document.querySelector(".weather").style.display = "block";
    }
    
}

searchButton.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

searchBox.addEventListener("click", ()=>
    {
        clear();
    })

function clear()
{
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".card").style.background = "linear-gradient(135deg, #00Feba, #5b548a)";
}