const API_KEY = "a7b342a28a09f55016f54008735591e3"

const citySpan = document.getElementById("ciudad")
const tempSpan = document.getElementById("temp")
const icon = document.getElementById("icon")
const feelSpan = document.getElementById("feel")

window.addEventListener("load",() => {
    if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition((pos) => {getWeather(pos.coords.latitude,pos.coords.longitude)},()=>getWeather(10.42,-75.49))
    } else{
    getLocFromIp()
    }
})

async function getLocFromIp(){
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    getWeather(data.latitude, data.longitude);
}

async function getWeather(latitude, longitude){
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    changeValues(data)
}

function changeValues(weather){
    const city = weather.name
    const temp = weather.main.temp
    const feel = weather.main.feels_like
    const weather_desc = weather.weather[0].id

    citySpan.textContent = city
    tempSpan.textContent = temp
    feelSpan.textContent = feel

    if(weather_desc == 801){
        icon.src = "src/svgs/cloudy.svg"
        icon.className = "icon cloudy"
        document.body.className = "cloudy";
    } else if (weather_desc == 501){
        icon.src = "src/svgs/rain.svg"
        icon.className = "icon rainy"
        document.body.className = "rainy";
    } else {
        icon.src = "src/svgs/sunny.svg"
        icon.className = "icon sunny"
        document.body.className = "sunny";
    }
}