// Store the wallet amount to your local storage with key "amount"
let wallet=document.getElementById('wallet').innerText=0
function addmoney(){
    let x =+ document.getElementById("amount").value
    // console.log(val)
    let y=+ JSON.parse(localStorage.getItem("amount"))
    console.log(y)
    sum = x + y
    localStorage.setItem("amount",JSON.stringify(sum))

   
    wallet=document.getElementById('wallet').innerText=sum
    
}