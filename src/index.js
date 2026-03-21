const API_KEY = "a7b342a28a09f55016f54008735591e3"

window.addEventListener("load",() => {
    getLocFromIp()
})

async function getLocFromIp(){
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    getWeather(data.latitude, data.longitude);
}

async function getWeather(latitude, longitude){
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a7b342a28a09f55016f54008735591e3`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
}