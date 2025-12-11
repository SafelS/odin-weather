//Makes the weather Data in useful

class WeatherData{
    constructor(api){
        this.city = api.resolvedAddress;
        this.temp = api.currentConditions.temp;
        this.conditions = api.currentConditions.conditions;
        this.wind = api.currentConditions.windspeed;
        this.humidity = api.currentConditions.humidity;

    }
}


function createWeatherData(apiData){
    return new WeatherData(apiData);
}

export{WeatherData, createWeatherData};