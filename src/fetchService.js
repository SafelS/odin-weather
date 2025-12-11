//just for fetching the weather data

function fetchData(city){

    return fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?%20%20unitGroup=us&key=YJNZFVC26XF9BMKCFFAJVGUG3&contentType=json`)
        .then(res =>{
            if(!res.ok) throw new Error("Error while loading Data");
            return res.json();
        });
        /*.then(function(response){
            return response.json();
        })
        .catch(function(err){
            console.error(err.message);
        })*/
}

export {fetchData}
