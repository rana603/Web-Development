import { navbar } from "./navbar.js";
document.getElementById("navbar").innerHTML = navbar();

document.getElementById("title").oninput = debounce;

var i;
function debounce() {
    if (i) {
        clearTimeout(i)
    }
    i = setTimeout(() => {
        searchRecipe()
    }, 1000)
}
function searchRecipe() {
    var title = document.getElementById("title").value
    var mdata = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`)
    mdata.then(function (res) {
        return res.json()

    }).then(function (res) {
        var recipeData = res.meals;
        displayRecipe(recipeData)
        console.log(recipeData);
    }).catch(() => {
        console.log("catch")
    })

}
function displayRecipe(recipeData) {
    
    var container = document.getElementById("container");
    container.innerHTML = "";

    if (!recipeData) container.innerHTML = "<h1>UNAVAILABLE</h1>";
    else {
        recipeData.forEach((element) => {
            let div = document.createElement("div");
            let image = document.createElement("img");
            image.src = element.strMealThumb;
            let title = document.createElement("h4");
            title.innerText = element.strMeal;
            let description = document.createElement("p");
            description.innerText = element.strMeal + " , " + element.strArea;
            div.append(image, title, description);
            container.append(div);
        });
    }
}