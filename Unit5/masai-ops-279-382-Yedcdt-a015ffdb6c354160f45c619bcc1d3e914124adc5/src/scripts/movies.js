function searchMovie() {
    var title = document.getElementById("title").value
    var moviedata = fetch("http://www.omdbapi.com/?apikey=5252a49c&t=" + title)
    moviedata.then(function (res) {
        return res.json()
    }).then(function (res) {
        console.log(res)
        if (res.Error) {
            document.getElementById("movies").innerHTML = ""
        }
        else {

            localStorage.setItem("movie", JSON.stringify(res))
            displayMovie(res)
        }

    }).catch(() => {
        console.log("catch")
    })

}
function displayMovie(resData) {
    document.getElementById("movies").innerHTML = ""
    var div = document.createElement("div")
    var image = document.createElement("img")
    image.src = resData.Poster;
    var name=document.createElement("h3");
    name.innerText= resData.Title;
    var btn=document.createElement("button");
    btn.setAttribute("class", "btn");
    btn.innerText="Book Now";
    div.append(image,name, btn);
    document.getElementById("movies").append(div);

}
var i;
function debounce() {
    if (i) {
        clearTimeout(i)
    }
    i = setTimeout(() => {
        searchMovie()
    }, 2000)
}
document.getElementById("movies").addEventListener("click", checkout)
function checkout() {
    window.location.href = "checkout.html"
}
