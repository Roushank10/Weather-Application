document.addEventListener("DOMContentLoaded",()=>{
    let cityInfo = document.getElementById("city-info")
    let searchBtn = document.getElementById("search_btn")
    let CityName = document.getElementById("CityName")
    let Temperature = document.getElementById("Temperature")
    WeatherDescription = document.getElementById("Weather_Description")

    searchBtn.addEventListener("click",()=>{
        let city = cityInfo.value;
        if(city){
            getWeatherInfo(city)
        } else {
            alert("Please enter your city name")
        }
    })

    async function getWeatherInfo(city){
        let apiKey = "fee2cdf977172b7d5ca9f16094ee9580";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        try{
            let response = await fetch(apiUrl)
            console.log(response)
            let data = await response.json()
            console.log(data)
                if(data.cod === 200){
                    CityName.innerHTML = `Weather in ${data.name},${data.sys.country}`
                    Temperature.innerHTML = `Temperature in ${data.name} is ${data.main.temp}`
                    WeatherDescription.innerHTML = `Weather description for ${data.name} is ${data.weather[0].description}`
                } else {
                    alert("city not found")
                    window.location.reload()
                }
        } catch(error){
            alert("Some error occurred into api", error)
            console.log("Some error occurred into api, error")
        }
    }
})