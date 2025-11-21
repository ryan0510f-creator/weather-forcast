async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "5e58faab838044a216cc8fd62efa8262";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            document.getElementById("result").innerText =
                "City not found. Try again!";
            return;
        }

        // 🌤️ Custom weather messages go HERE
        let message = "";
        if (data.weather[0].main === "Snow") {
             "❄️ Wow snow! ☃️";
        } 
        else if (data.weather[0].main === "Clear") {
            message = "🌞 perfect time to go to the beach 🏖️";
        }
        else if (data.weather[0].main === "Rain") {
            message = "🌧️ Grab an umbrella!";
        }
        else if (data.weather[0].main === "Clouds") {
            message = "☁️ Kinda cloudy today.";
        }
        else {
            message = "🌍 Interesting weather!";
        }

        const output =
`Location: ${data.name}
Weather: ${data.weather[0].description}
Temperature: ${data.main.temp} °C
Feels Like: ${data.main.feels_like} °C
Wind Speed: ${data.wind.speed} mph
Visibility: ${data.visibility} meters away

Message: ${message}`;

        document.getElementById("result").innerText = output;
    }
    catch {
        document.getElementById("result").innerText =
            "Error loading weather.";
    }
}
