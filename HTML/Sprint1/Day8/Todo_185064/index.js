document.querySelector("form").addEventListener("submit", fn);
function fn() {
  event.preventDefault();
  var task = document.getElementById("task").value;
  var priority = document.getElementById("priority").value;

  var row = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  td1.innerText = task;
  td2.innerText = priority;
  td3.innerText = "Delete";

  if (priority == "High") {
    td2.style.backgroundColor = "red";
  } else {
    td2.style.backgroundColor = "green";
  }
  row.append(td1, td2, td3);
  document.querySelector("tbody").append(row);

  td3.addEventListener("click", del);
}
function del() {
  event.target.parentNode.remove();
}

