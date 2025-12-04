//Dom handling here!
import { fetchData } from "./fetchService";

const DomHandler = (() => {

    const mainDiv = document.getElementById("mainDiv");

    function renderWeather(){

        const searchbar = document.createElement("input");
        const submitBtn = document.createElement("button");

        searchbar.classList.add("searchBar");

        submitBtn.classList.add("submitBtn");
        submitBtn.innerText = "Search";

        //console.log(fetchData());

        mainDiv.append(searchbar, submitBtn);

    }

    return {renderWeather}

})();


export default DomHandler;