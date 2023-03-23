// js-weather-app js file

// document shorthand
let $=document;

// variabels
    // form and input
const inputForm=$.querySelector('.inputForm');
const inputValue=$.querySelector('.input');
    // region or city name Heading
const regionHeading=$.querySelector('.region')
    // date
const date=$.querySelector('.date')
    // temp and weather type\
const temp=$.querySelector('.degree')
const weatherType=$.querySelector('.weather-type')
// funcitons
function adingWeatherToDom(api) {
    if (api.cod===200) {
        console.log(api)
        // changing name and region to api data
        regionHeading.innerHTML=`${api.name} , ${api.sys.country}`
        // applying current date
        date.innerHTML=new Date().toDateString()
        // applying temp and truncing
        temp.innerHTML=`${Math.trunc(api.main.temp)}°C`;
        // applying weather type
        weatherType.innerHTML=api.weather[0].main
        
        
    }
}
// event listeners
window.addEventListener('load',()=>{
    inputValue.value=''
    fetch("https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=ab75a49fee712fae47e85b0033b176cd&units=metric")
    .then(res=>res.json())
    .then(data=>adingWeatherToDom(data))
})