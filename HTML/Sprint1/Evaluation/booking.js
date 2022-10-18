var movieList = JSON.parse(localStorage.getItem("movie-list")) || [];
var bookingList = JSON.parse(localStorage.getItem("buy-list")) || [];
display(movieList);
document.getElementById("movie-count").innerText = movieList.length;

function display(movieList) {
  var tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  movieList.map(function (ele, indx) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    var td7 = document.createElement("td");
    td1.innerText = ele.name;
    td2.innerText = ele.mainActor;
    td3.innerText = ele.desc;
    td4.innerText = ele.release;
    td5.innerText = ele.category;
    td6.innerText = ele.price;
    td7.innerText = "Buy";
    td7.style.backgroundColor = "green";
    td7.style.color = "white";
    td7.addEventListener("click", function () {
      delRow(indx);
    });
    tr.append(td1, td2, td3, td4, td5, td6, td7);
    tbody.append(tr);
  });
}

function delRow(i) {
  bookingList.push(movieList[i]);
  localStorage.setItem("buy-list", JSON.stringify(bookingList));
  movieList.splice(i, 1);
  localStorage.setItem("movie-list", JSON.stringify(movieList));
  display(movieList);
}

document.getElementById("filter").setAttribute("onchange", "handelFilter()");

function handelFilter() {
  console.log("change");
  var cat = document.getElementById("filter").value;
  var filteredList = movieList.filter(function (ele) {
    if (cat == "") return true;
    return ele.category == cat;
  });
  display(filteredList);
  document.getElementById("movie-count").innerText = filteredList.length;
}