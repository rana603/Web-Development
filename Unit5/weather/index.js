document.getElementById("search-button").addEventListener("click", fetchData);
// weather forecast
function fetchData() {
    var city = document.getElementById("search-input").value;
    document.getElementById("gmap_canvas").setAttribute("src", `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`);
    var res = fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        city + "&appid=405ab42e159c006720de81bd76437cb1&units=metric");
    res.then(function (resdata) {
        return resdata.json();
    })
        .then(function (weatherData) {
            displayweatherinfo(weatherData);
            console.log(weatherData);
            var lat = weatherData.coord.lat;
            var lon = weatherData.coord.lon;
            console.log(lat, lon);
            getData(lat, lon);

        })
        // ;
        .catch(function () {
            // console.log(e);
            let body = document.getElementById("big");
            body.innerHTML = "";
            let img = document.createElement("img");
            img.src = 'https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=2000'
            img.style.height = "50%"
            img.style.width = "50%"
            img.style.margin="8%"
            img.addEventListener("click", () => {
                window.location.reload();
            })
            body.append(img)
        });
}
function displayweatherinfo(weatherData) {
//     var datadiv = document.getElementById("data");
//     datadiv.innerHTML = "";
    var temp = document.getElementById("acc-temp");

    var cloud = weatherData.weather[0].description;
    var tempCel = (weatherData.main.temp);
    temp.innerHTML = `${tempCel}°C | <span> ${cloud}</span>`;
    var date = document.getElementById("time");
    date.innerText = new Date() ;

    var minCel = (weatherData.main.temp_min);
    var maxCel = (weatherData.main.temp_max);
    var min_max = document.getElementById("min-max");
    min_max.innerText = `(Min: ${minCel}°C | Max: ${maxCel}°C)`;

    var cityname = document.getElementById("location");
    cityname.innerText = `${weatherData.name}, ${weatherData.sys.country}`;
    
    var image = document.getElementById("temp-img");
    image.src ="http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
    var humidity = document.getElementById("humidity");
    humidity.innerHTML = "Humidity: " + weatherData.main.humidity + " %";

    var wind = document.getElementById("wind");
    wind.innerHTML = "Wind speed: " + weatherData.wind.speed + " m/s";

    var pressure = document.getElementById("pressure");
    pressure.innerHTML = "Pressure: " + weatherData.main.pressure + " Pa";

    var visiblity = document.getElementById("visiblity");
    visiblity.innerHTML = "Visibility: " + weatherData.visibility + " m";

    var feelslike = document.getElementById("feels-Like");
    feelslike.innerText = "Feels Like  " + (weatherData.main.feels_like) + " *C";

    // var mapUrl = `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    // var iframe = document.getElementById("gmap_canvas");
    // iframe.src = mapUrl;



}

function getData(lat, lon) {
    const API_key = "eef812bad6c430c4a8454611ef6cee98";

    var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=${API_key}`;
    var res = fetch(url);
    res
        .then((data) => {
            return data.json();
        })
        .then((forecastData) => {
            displaysevenweather(forecastData.daily);
            console.log(forecastData.daily)
        });

}
function displaysevenweather(forecastData) {
    var container = document.getElementById("forecast");
    container.innerHTML = "";
    forecastData.map((ele, indx) => {
        var div = document.createElement("div");
        var day = document.createElement("h4");
        day.setAttribute("id", "h1");
        var img = document.createElement("img");
        var min = document.createElement("h4");
        min.setAttribute("id", "h2");
        var max = document.createElement("h4");

        if (indx == 0) {
            day.innerText = "Today";
        } else {
            var d = new Date(ele.dt * 1000).toLocaleString("default", {
                weekday: "long",
            });
            day.innerText = d;
        }
        img.src = "http://openweathermap.org/img/w/" + ele.weather[0].icon + ".png";
        min.innerHTML = `${ele.temp.min} <sup>0</sup>C`;
        max.innerHTML = `${ele.temp.max} <sup>0</sup>C`;
        div.append(day, img, min, max);
        container.append(div);
    });
}


function success(pos) {
    const crd = pos.coords;
    console.log(crd);
    console.log(pos);
    var lat = crd.latitude;
    var lon = crd.longitude;
    console.log(lat, lon);
    document.getElementById("gmap_canvas").setAttribute("src",`https://maps.google.com/maps?q="Balaganj"&center=${lat},${lon}&t=&z=13&ie=UTF8&iwloc=&output=embed`);
    var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=405ab42e159c006720de81bd76437cb1&units=metric`;
    var res = fetch(url);
    res
      .then(function (resdata) {
        return resdata.json();
      })
      .then(function (weatherData) {
        displayweatherinfo(weatherData)
        // displaysevenweather(weatherData)
      })
      .catch(() => {
        console.log("error");
      });
  }
  
  navigator.geolocation.getCurrentPosition(success);

