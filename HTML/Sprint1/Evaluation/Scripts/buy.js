// Write All `My Movies`  Page Script Here
var buyList = JSON.parse(localStorage.getItem("buy-list")) || [];
var body = document.querySelector("tbody");
buyList.map(function (ele, indx) {
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");
  td1.innerText = ele.name;
  td2.innerText = ele.mainActor;
  td3.innerText = ele.desc;
  td4.innerText = ele.release;
  td5.innerText = ele.category;
  td6.innerText = ele.price;
  tr.append(td1, td2, td3, td4, td5, td6);
  body.append(tr);
});