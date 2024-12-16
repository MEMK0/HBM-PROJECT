const API_KEY = "d59443957039803c88dc49b3b499f4c1";
const searchButton = document.getElementById("search-button")
const searchInput = document.getElementById("search-input")
const weatherResult = document.getElementById("weather-results")

searchButton.addEventListener("click" , () => {
    const query = searchInput.value.trim();
    if(!query) {
        weatherResult.innerHTML = "<p> please enter a city or a state name </p>";
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?=${query}&appid=${API_KEY}$units=metric`)
    .then(Response => {
        if(!Response.ok) {
            throw new Error("city not found")
        }
        return Response.json();
    })
    .then(data => {
        const { name , sys, weather, main } = data;
        weatherResult.innerHTML = `
            <p><strong>location:</strong> $ {name}, ${sys.country}</p>
            <p><strong>condition:</strong> $ {weather[0].description}</p>
            <p><strong>Temperature:</strong> ${main.temp}ºc</p>
            <p><strong>Humidity:</strong> ${main.humidity}%</p>

        `;
    })
    .catch(error => {
        weatherResult.innerHTML = `<p>${error.message}</p>`;
    });

})

