// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks
console.log("hi");

document.querySelector("form").addEventListener("submit", addRow);
function addRow() {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var batch = document.getElementById("batch").value;
  var dsa = document.getElementById("dsa").value;
  var cs = document.getElementById("cs").value;
  var coding = document.getElementById("coding").value;
  console.log(typeof dsa);
  var percent = ((parseInt(dsa) + parseInt(cs) + parseInt(coding)) / 30) * 100;

  var row = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");
  var td7 = document.createElement("td");
  var td8 = document.createElement("span");
  td8.style.padding = "15px";

  td1.innerText = name;
  td2.innerText = batch;
  td3.innerText = dsa;
  td4.innerText = cs;
  td5.innerText = coding;
  td6.innerText = percent;
  td8.innerText = "Delete";
  if (percent <= 50) {
    td7.innerText = "Async";
    td7.style.backgroundColor = "red";
  } else {
    td7.innerText = "Regular";
    td7.style.backgroundColor = "green";
  }

  row.append(td1, td2, td3, td4, td5, td6, td7, td8);
  var tb = document.querySelector("tbody");
  tb.append(row);

  td8.addEventListener("click", deleteRow);
}
function deleteRow() {
  event.target.parentNode.remove();
}
