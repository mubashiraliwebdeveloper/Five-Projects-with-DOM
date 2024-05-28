var istatus = document.querySelector("h5")
var addFriend = document.querySelector("#add")
var removefriend = document.querySelector("#remove")

addFriend.addEventListener("click", function(){
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
})

remove.addEventListener("click", function(){
    istatus.innerHTML = "Stranger"
    istatus.style.color = "red"
})