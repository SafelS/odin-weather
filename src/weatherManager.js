//The Brain, combines all classes/functions

import DomHandler from "./dom";
import { fetchData } from "./fetchService";
import { createWeatherData } from "./weatherData";
import "./style.css";


document.addEventListener("click", async (e) => {
    if(e.target.classList.contains("submitBtn")){
        const city = document.querySelector(".searchBar").value.trim();

        try{

            const apiData = await fetchData(city);
            console.log(apiData);

            const weatherData = createWeatherData(apiData);
            console.log(weatherData);

            DomHandler.renderWeather(weatherData);

        }catch(err){

            console.error(err)

        }
    }
})