//just for fetching the weather data

function fetchData(city){

    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?%20%20unitGroup=us&key=YJNZFVC26XF9BMKCFFAJVGUG3&contentType=json`)
        .then(function(response){
            console.log(response.json());
        })
        .catch(function(err){
            console.error(err.message);
        })
}

export {fetchData}
