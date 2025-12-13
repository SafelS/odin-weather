//Makes the weather Data in useful

class WeatherData{
    constructor(api){
        this.city = api.resolvedAddress;
        //This Formula changes the temperature from Fahrenheit to Celsisus (Make Button for that Later!!!!)
        const toCelsius = (Number(api.currentConditions.temp)-32)/(9/5);
        this.temp = Math.round(toCelsius);
        this.conditions = api.currentConditions.conditions;
        this.wind = api.currentConditions.windspeed;
        this.humidity = api.currentConditions.humidity;

    }
}


function createWeatherData(apiData){
    return new WeatherData(apiData);
}

export{WeatherData, createWeatherData};