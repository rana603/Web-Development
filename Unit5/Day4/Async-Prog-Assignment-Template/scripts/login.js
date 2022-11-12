userArr = JSON.parse(localStorage.getItem("users")) || [];

document.querySelector("form").addEventListener("submit", logIn);

function logIn() {
  var emailid = document.getElementById("email").value;
  var pswrd = document.getElementById("password").value;
  event.preventDefault();
  var flag = true;
  for (var i = 0; i < userArr.length; i++) {
    if (userArr[i].email == emailid) {
      flag = false;
      if (userArr[i].password == pswrd) {
        alert("login Successful");
        window.location.href = "./index.html";
      } else {
        alert("Wrong details");
      }
    }
  }
  if (flag) alert("Wrong details");
}