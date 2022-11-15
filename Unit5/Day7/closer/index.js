
let weatherIcon = {
    sandstorm: "https://worldweather.wmo.int/images/1.png",
    duststorm: "https://worldweather.wmo.int/images/1.png",
    sand: "https://worldweather.wmo.int/images/1.png",
    dust: "https://worldweather.wmo.int/images/1.png",
    thunderstorms: "https://worldweather.wmo.int/images/2.png",
    thundershowers: "https://worldweather.wmo.int/images/2.png",
    storm: "https://worldweather.wmo.int/images/2.png",
    lightning: "https://worldweather.wmo.int/images/2.png",
    hail: "https://worldweather.wmo.int/images/3.png",
    "blowing snow": "https://worldweather.wmo.int/images/4.png",
    blizzard: "https://worldweather.wmo.int/images/4.png",
    snowdrift: "https://worldweather.wmo.int/images/4.png",
    snowstorm: "https://worldweather.wmo.int/images/4.png",
    "snow showers": "https://worldweather.wmo.int/images/5.png",
    flurries: "https://worldweather.wmo.int/images/5.png",
    snow: "https://worldweather.wmo.int/images/6.png",
    "heavy snow": "https://worldweather.wmo.int/images/6.png",
    snowfall: "https://worldweather.wmo.int/images/6.png",
    "light snow": "https://worldweather.wmo.int/images/7.png",
    sleet: "https://worldweather.wmo.int/images/8.png",
    showers: "https://worldweather.wmo.int/images/9.png",
    "heavy showers": "https://worldweather.wmo.int/images/9.png",
    rainshower: "https://worldweather.wmo.int/images/9.png",
    "occasional showers": "https://worldweather.wmo.int/images/10.png",
    "scattered showers": "https://worldweather.wmo.int/images/10.png",
    "isolated showers": "https://worldweather.wmo.int/images/11.png",
    "light showers": "https://worldweather.wmo.int/images/12.png",
    "freezing rain": "https://worldweather.wmo.int/images/13.png",
    rain: "https://worldweather.wmo.int/images/14.png",
    drizzle: "https://worldweather.wmo.int/images/15.png",
    "light rain": "https://worldweather.wmo.int/images/15.png",
    fog: "https://worldweather.wmo.int/images/16.png",
    mist: "https://worldweather.wmo.int/images/17.png",
    smoke: "https://worldweather.wmo.int/images/18.png",
    haze: "https://worldweather.wmo.int/images/19.png",
    overcast: "https://worldweather.wmo.int/images/20.png",
    "sunny intervals": "https://worldweather.wmo.int/images/21a.png",
    "no rain": "https://worldweather.wmo.int/images/21a.png",
    clearing: "https://worldweather.wmo.int/images/21a.png",
    "sunny periods": "https://worldweather.wmo.int/images/22a.png",
    "partly cloudy": "https://worldweather.wmo.int/images/22a.png",
    "partly bright": "https://worldweather.wmo.int/images/22a.png",
    mild: "https://worldweather.wmo.int/images/22a.png",
    cloudy: "https://worldweather.wmo.int/images/23a.png",
    clouds: "https://worldweather.wmo.int/images/23a.png",
    "mostly cloudy": "https://worldweather.wmo.int/images/23a.png",
    bright: "https://worldweather.wmo.int/images/24a.png",
    sunny: "https://worldweather.wmo.int/images/24a.png",
    fair: "https://worldweather.wmo.int/images/24a.png",
    fine: "https://worldweather.wmo.int/images/24a.png",
    clear: "https://worldweather.wmo.int/images/24a.png",
    windy: "https://worldweather.wmo.int/images/26.png",
    squall: "https://worldweather.wmo.int/images/26.png",
    stormy: "https://worldweather.wmo.int/images/26.png",
    gale: "https://worldweather.wmo.int/images/26.png",
    wet: "https://worldweather.wmo.int/images/27.png",
    humid: "https://worldweather.wmo.int/images/27.png",
    dry: "https://worldweather.wmo.int/images/28.png",
    freezing: "https://worldweather.wmo.int/images/29.png",
    frost: "https://worldweather.wmo.int/images/30.png",
    hot: "https://worldweather.wmo.int/images/31.png",
    cold: "https://worldweather.wmo.int/images/32.png",
    chilly: "https://worldweather.wmo.int/images/32.png",
    warm: "https://worldweather.wmo.int/images/33.png",
    cool: "https://worldweather.wmo.int/images/34.png",
    "volcanic ash": "https://worldweather.wmo.int/images/35.png",
};
document
    .getElementById("search-button")
    .addEventListener("click", function () {
        let cityname = document.getElementById("search-input").value;
        fetchApiData(cityname);
        fetchApiForcastData(cityname);
    });

document
    .getElementById("search-input")
    .addEventListener("keypress", function (event) {
        let cityname = document.getElementById("search-input").value;
        if (event.key === "Enter") {
            fetchApiData(cityname);
            fetchApiForcastData(cityname);
        }
    });

//fetch weather data
async function fetchApiData(cityname) {
    try {
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=405ab42e159c006720de81bd76437cb1`;
        let res = await fetch(api);
        data = await res.json();
        displayWeather(data);
    } catch (e) {
        console.log("Error fetching weather data");
    }
}

//current location
function getLocation() {
    navigator.geolocation.getCurrentPosition(success);
    function success(res) {
        const crd = res.coords;
        getWeatherOnLocation(crd.latitude, crd.longitude);
        getForcastWeatherOnLocation(crd.latitude, crd.longitude);
    }
}

//current location weather
async function getWeatherOnLocation(latitude, longitude) {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=405ab42e159c006720de81bd76437cb1`;
    try {
        let res = await fetch(url);
        data = await res.json();
        displayWeather(data);
    } catch (e) {
        console.log("Error fetching location");
    }
}

function displayWeather(data) {
    let mapUrl = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
   
    let cloud = data.weather[0].description;
    let cDes = cloud.toLowerCase();
    let cStat = data.weather[0].main.toLowerCase();

    img = document.getElementById("temp-img");
    if (weatherIcon[cStat]) {
        img.src = weatherIcon[cStat];
    } else if (weatherIcon[cDes]) {
        img.src = weatherIcon[cDes];
    } else {
        img.src =
            "";
    }

    let ciityname = document.getElementById("location");
    ciityname.innerText = `${data.name}, ${data.sys.country}`;

    let humidity = document.getElementById("humidity");
    humidity.innerHTML = `Humadity :${data.main.humidity}%`;

    let wind = document.getElementById("wind");
    wind.innerHTML = ` wind :${data.wind.speed} m/s`;

    let pressure = document.getElementById("pressure");
    pressure.innerHTML = `${data.main.pressure} hPa`;

    // let time = document.getElementById("time");
    // pressure.innerHTML = `${data.main.pressure} hPa`;
    // let date = document.getElementById("date");
    // pressure.innerHTML = `${data.main.date} hPa`;

    // let UV = document.getElementById("UV");
    // wind.innerHTML = ` ${data.wind.speed} m/s`;

    // let DewPoint = document.getElementById("dew");
    // pressure.innerHTML = ` Dew Point: ${data.main.pressure} C`;

    // let visiblity = document.getElementById("visiblity");
    // pressure.innerHTML = ` visiblity: ${data.main.pressure} Km`;

    let iframe = document.getElementById("gmap_canvas");
    iframe.src = mapUrl;
}

//change unix time to normal timeStamp
const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
        timeStamp * 1000
    ).getMinutes()}`;
};

async function fetchApiForcastData(cityname) {
    try {
        const api = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=6768b2e5b4a36c16f6a94477cd18cbc9`;
        let res = await fetch(api);
        data = await res.json();
        displayForcast(data.list);
    } catch (e) {
        console.log("Error fetching weather data");
    }
}

//current location weather
async function getForcastWeatherOnLocation(latitude, longitude) {
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=6768b2e5b4a36c16f6a94477cd18cbc9`;
    try {
        let res = await fetch(url);
        data = await res.json();
        filterForecast5days(data.list);
    } catch (e) {
        console.log("Error fetching location");
    }
}

function filterForecast5days(data) {
    let ans = data.filter(function (weather) {
        let date = weather.dt_txt.split(" ");
        if (date[1] == "18:00:00") {
            return weather;
        }
    });
    displayForcast(ans);
}

let newDay = new Date();
let cDay = newDay.getDay();
let i = 0;
function displayForcast(data) {
    let forcast = document.getElementById("forcast");
    forcast.innerHTML = "";
    let index = 0;
    data.forEach(function (weather) {
        if (index > 6) {
            return 0;
        }
        index++;
        if (!weather) {
            return 0;
        }
        let div = document.createElement("div");

        let week = document.createElement("h2");
        if (cDay == 7) {
            cDay = 0;
            i = 0;
        }
        week.innerText = findDay(cDay);
        cDay++;
        i++;

        let cStat = weather.weather[0].main.toLowerCase();
        let img = document.createElement("img");
        if (weatherIcon[cStat]) {
            img.src = weatherIcon[cStat];
        } else {
            img.src =
                "";
        }

        let maxCel = (weather.main.temp_max - 270.15).toFixed(0);
        let maxTemp = document.createElement("h3");
        maxTemp.innerText = `${maxCel}°`;

        let minCel = (weather.main.temp_min - 275.15).toFixed(0);
        let minTemp = document.createElement("h3");
        minTemp.innerText = `${minCel}°`;

        div.append(week, img, maxTemp, minTemp);
        forcast.append(div);
    });
}

//find week-day
function findDay(num) {
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (let i = 0; i < days.length; i++) {
        if (i == num) {
            return days[i];
        }
    }
}

var timeDisplay = document.getElementById("time");
function refreshTime() {
  var dateString = new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"});
  var formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);
