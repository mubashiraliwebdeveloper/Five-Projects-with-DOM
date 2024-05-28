var arr = [
    { dp: "my_image.png", story: "my_brother.png" },
    { dp: "my_brother.png", story: "my_image.png" },
    { dp: "my_image.png", story: "my_brother.png" },
    { dp: "my_brother.png", story: "my_image.png" },
    { dp: "my_image.png", story: "my_brother.png" },
]

var storiya = document.querySelector("#storiya")
var clutter = ""
arr.forEach(function (elem, idx) {
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
});

storiya.innerHTML = clutter

storiya.addEventListener("click", function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

  setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none"

  }, 3000);
});
