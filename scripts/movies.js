// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let money = JSON.parse(localStorage.getItem("amount"))
// console.log(money)
document.getElementById("wallet").innerText=money

let id;
function debounc(func,delay){
    if(id){
        clearTimeout(id)
    }
    id=setTimeout(function(){
        func()
    },delay)
}
// http://img.omdbapi.com/?apikey=[yourkey]&
// 916d286e&s
 async function main(){
    // console.log("yes")
    try{
        let val = document.getElementById("search").value

        const res = await fetch(`http://www.omdbapi.com/?apikey=916d286e&s=${val}`)
        const data = await res.json()
        // console.log(data)
        const movies = data.Search
        // console.log(movies)
        append(movies)
    }
    catch(err){
        console.log(err)
    }
}
moviesdiv=document.getElementById("movies")
function append(movies){
    console.log(movies)
    movies.forEach(function (el){
        let box = document.createElement("div")
        box.className="movie_tab";
        let image = document.createElement("img")
        image.src = el.Poster

        let name = document.createElement("h3")
        name.innerText=el.Title
        let btn = document.createElement("button")
        btn.innerText="Book Now"
        // btn.class="book_now"
        // btn.id="book_now"
        btn.className="book_now"
        btn.onclick=()=>{
            movie(el)
        }
        box.append(image,name,btn)
        moviesdiv.append(box)
    })
}

function movie(el){
    // console.log(el)
    localStorage.setItem("movie",JSON.stringify(el))
    window.location.href="checkout.html"
}
