//Dom handling here!
import { fetchData } from "./fetchService";

const DomHandler = (() => {

    const mainDiv = document.getElementById("mainDiv");

    function renderWeather(weatherData){
        const weatherDiv = document.createElement("div");
        const cityName = document.createElement("div");
        const cityData = document.createElement("div");

        weatherDiv.classList.add("weatherDiv");
        cityName.classList.add("cityName");
        cityData.classList.add("cityData");

        cityName.textContent = weatherData.city;

        





        weatherDiv.append(cityName,cityData);

        mainDiv.append(weatherDiv);

    }

    return {renderWeather}

})();


export default DomHandler;