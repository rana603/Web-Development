import { navbar } from "./navbar.js";
document.getElementById("navbar").innerHTML = navbar();

function randomData() {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        var element = result.meals[0];
        displayrecipe(element);
      });
  }

  function displayrecipe(recipeData){
    var container = document.getElementById("container");
    container.innerHTML = "";
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = recipeData.strMealThumb;
    let title = document.createElement("h4");
    title.innerText = recipeData.strMeal;
    let description = document.createElement("p");
    description.innerText =recipeData.strMeal + " , " + recipeData.strArea;
    div.append(image, title, description);
    container.append(div);

  }
  randomData();