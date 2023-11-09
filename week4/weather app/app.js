const cityPlace = document.getElementById("cityInput"); 
const weatherData = document.getElementById("weather-info"); 
const button = document.getElementById("btn"); 


button.addEventListener("click", () => {   
    const cityName = cityPlace.value;
    if (cityName === "") {
        alert("Please enter a city name.");
    } else {
        const apiKey = '3fceff806d0a539aa567292254a16e57';
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

        const xhr = new XMLHttpRequest(); 
        xhr.open("GET", apiURL, true); 

        xhr.onload = function () {
            if (xhr.status === 200) { 
                const data = JSON.parse(xhr.responseText); 
                const weatherDescrip = data.weather[0].description;
                const mainTemp = data.main.temp;
                const windSpeed = data.wind.speed;
                const place = data.name;

                const weatherHTML = `
                    <p>The Weather in ${place} is ${weatherDescrip}</p>
                    <p>The Temperature is ${(mainTemp-273.15).toFixed(2)} °C and the Wind Speed is ${windSpeed}m/s</p>
                `;
                weatherData.innerHTML = weatherHTML; 
            } else {
                console.error("Error:", xhr.statusText); 
                alert("An error occurred while fetching weather data."); 
            }
        };
        xhr.send(); 
    }
});