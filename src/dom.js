//Dom handling here!
import { fetchData } from "./fetchService";

const DomHandler = (() => {

    const mainDiv = document.getElementById("mainDiv");

    function renderWeather(weatherData){
        const weatherDiv = document.createElement("div");
        const cityName = document.createElement("div");
        const cityData = document.createElement("div");
        const temp = document.createElement("div");
        const cond = document.createElement("div");
        const wind = document.createElement("div");
        const humidity = document.createElement("div");

        weatherDiv.classList.add("weatherDiv");
        cityName.classList.add("cityName");

        cityData.classList.add("cityData");
        temp.classList.add("temp");
        cond.classList.add("cond");
        wind.classList.add("wind");
        humidity.classList.add("humidity");
        //const toCelsius = (Number(temp) - 32)/(9/5);

        cityName.textContent = weatherData.city;
        temp.textContent = weatherData.temp + ' \u00B0C'; 
        cond.textContent = weatherData.conditions;
        wind.textContent = "Wind: " + weatherData.wind +" km/h";
        humidity.textContent = "Humidiy: " + weatherData.humidity + "%";




        cityData.append(temp, cond, wind, humidity);

        weatherDiv.append(cityName, cityData);

        mainDiv.append(weatherDiv);

    }

    return {renderWeather}

})();


export default DomHandler;