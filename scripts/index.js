// Store the wallet amount to your local storage with key "amount"
var amountarr=localStorage.getItem("amount")||[];

function myfn(){
    let valueadded=document.querySelector("#amount").value;
    

    amountarr.push(valueadded);
    localStorage.setItem("amount",JSON.stringify(amountarr));

}








