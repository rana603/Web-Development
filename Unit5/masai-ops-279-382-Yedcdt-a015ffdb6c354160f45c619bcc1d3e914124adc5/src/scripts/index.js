document.getElementById("wallet").addEventListener("click",addwallet);
var wallet=JSON.parse(localStorage.getItem("amount"))||[];
// addwallet(wallet);

function CreateItem(amount){
    this.amount=amount;
}
function addwallet(){
  event.preventDefault();
  var count=document.getElementById("count");
  var amount=document.getElementById("amt").value;
  count.innerText="Amount :"+amount;

  var amt = new CreateItem(amount);
  wallet.push(amt);
  localStorage.setItem("amount",JSON.stringify(wallet));
//   addwallet(wallet);

}