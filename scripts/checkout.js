// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


let data = JSON.parse(localStorage.getItem("movie"))
let box = document.createElement("div")
let image=document.createElement("img")
image.src=data.Poster
let title = document.createElement("h3")
title.innerText=data.Title

box.append(title,image)
document.getElementById("movie").append(box)

function book(){
    let money = JSON.parse(localStorage.getItem("amount"))
    let N = document.getElementById("number_of_seats").value
    console.log(N)
    let x = (N*100)
    if(money>=x){
        alert("Booking successful!")
        let z = money-x
        localStorage.setItem("amount",JSON.stringify(z))
        document.getElementById("wallet").innerText=z
        reload()
    }
    else{
        alert("Insufficient Balance!")
    }
    console.log(money)
}

function reload(){
    let money = JSON.parse(localStorage.getItem("amount"))
    console.log(money)
    document.getElementById("wallet").innerText=money
}
reload()