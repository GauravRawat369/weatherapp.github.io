const Api_Key = 'a966cd517011abe06914bb59f19c5efb';
function clock(){

    let hours = document.querySelector(".hours-text");
    let minutes = document.querySelector(".minutes-text");
    let ampm = document.querySelector(".ampm-text");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let value = (h < 12)?"AM":"PM";

    if(h > 12)
    {
        h = h-12;
    }

    h = (h < 10)? "0"+(h):h;
    m = (m < 10)? "0"+(m):m;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    ampm.innerHTML = value;
};
setInterval(clock,1000);

let area = document.querySelector(".area-timezone");
let WeatherElements = document.querySelector(".weather-elements");

GetDataOfWeather()
function GetDataOfWeather(){
    navigator.geolocation.getCurrentPosition(success =>{
        let {latitude ,longitude} = success.coords;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${Api_Key}`).then(res => res.json()).then(data => {
           
         console.log(data)
         ShowDataOfWeather(data);
    })
    })
}

function ShowDataOfWeather(data){
    
    let {description} = data.weather[0];
    let {feels_like , humidity , pressure , temp } = data.main;
    let {sunrise , sunset} = data.sys;
    WeatherElements.innerHTML = `<div class="flex-div">
    <div class="humidity">Humidity
    </div>
    <div>${humidity}</div>
    </div>

    <div class="flex-div">
    <div class="pressure">Pressure
    </div>
    <div>${pressure}</div>
    </div>

    <div class=" flex-div">
    <div class="temp">Temperature
    </div>
    <div>${temp}</div>
    </div>


    <div class="flex-div">
    <div class="feels_like">Feels Like
    </div>
    <div>${feels_like}</div>
    </div>
    
    <div class=" flex-div">
    <div class="sunrise">Sunrise
    </div>
    <div>${window.moment(sunrise * 1000).format('hh:mm a')}</div>
    </div>

    <div class=" flex-div">
    <div class="sunset">Sunset
    </div>
    <div>${window.moment(sunset * 1000).format('hh:mm a')}</div>
    </div>
    `;
    area.innerHTML = ` <span class="area-text white-color">${description}</span>`
                       ;
}
// a966cd517011abe06914bb59f19c5efb  apikey
// `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`