//The Brain, combines all classes/functions

import DomHandler from "./dom";
import { fetchData } from "./fetchService";

DomHandler.renderWeather();

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("submitBtn")){
        const inputData = document.querySelector(".searchBar").value.trim();
        console.log(fetchData(inputData));
    }
})