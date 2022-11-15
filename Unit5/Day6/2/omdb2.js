document.getElementById("search").addEventListener("click", fatchData);
function fatchData() {
  var title = document.getElementById("title").value;
  var apidata = fetch("http://www.omdbapi.com/?apikey=5252a49c&t=" + title);
  apidata.then(function (resonsive) {
      return resonsive.json();
    })
    .then(function (resonsive) {
      if (resonsive.Error) {
        displayError();
        console.log("No movies found");
      } else {
        displayMovie(resonsive);
        console.log(resonsive);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
function displayMovie(responsiveData) {
  document.querySelector("#movies").innerHTML = "";
  document.querySelector("#result").style.display = "block";
  var div = document.createElement("div");
  var image = document.createElement("img");
  var title = document.createElement("h3");
  var rating = document.createElement("p");
  rating.innerText = "IMDB Rating : " + responsiveData.imdbRating;
  title.innerText = responsiveData.Title;
  image.src = responsiveData.Poster;
  image.src = responsiveData.Poster;
  document.getElementById("actors").innerText = "Actors : " + responsiveData.Actors;
  document.getElementById("runtime").innerText = "Runtime : " + responsiveData.Runtime;
  document.getElementById("MoviePlot").innerText = "Movie Plot :" + responsiveData.MoviePlot;

  if (responsiveData.imdbRating > 8.5) {
    var reccom = document.createElement("p");
    reccom.innerText = "Reccommended";
    reccom.style.background = "green";
    reccom.style.color = "white";
    div.append(image, title, rating, reccom);
  } else {
    div.append(image, title, rating);
  }

  document.querySelector("#movies").append(div);
}

function displayError() {
  document.querySelector("#movies").innerHTML = "";

  var div = document.createElement("div");
  var image = document.createElement("img");
  image.src = "https://www.nicepng.com/png/detail/361-3611849_product-not-found-no-result-png.png";
  var msg = document.createElement("p");
  msg.innerText = "Movie Not Found!";
  div.append(image, msg);
  document.querySelector("#movies").append(div);
}
document.getElementById("movies").addEventListener("click", function () {
  document.getElementById("details").style.display = "block";
});
