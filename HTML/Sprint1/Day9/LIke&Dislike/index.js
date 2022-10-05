document.querySelector("#like").addEventListener("click", like);
document.querySelector("#disLike").addEventListener("click", disLike);
var likecnt = localStorage.getItem("like") || 0;
var disLikecnt = localStorage.getItem("dislike") || 0;
document.getElementById("likecnt").innerText = likecnt;
document.getElementById("disLikecnt").innerText = disLikecnt;


function like() {
  likecnt++;
  localStorage.setItem("like", likecnt);

  document.getElementById("likecnt").innerText = likecnt;
}
function disLike() {
  disLikecnt++;
  localStorage.setItem("dislike", disLikecnt);

  document.getElementById("disLikecnt").innerText = disLikecnt;
}