var toggle = document.getElementById("nav-icon")
var image = document.getElementById("image-icon")

if(image.hasAttribute("src", "images/icon-menu.svg")){
    image.addEventListener("click", function(){
        this.setAttribute("src", "images/icon-close-menu.svg")
    })
}else{
    if(image.setAttribute("src", "images/icon-close-menu.svg")){
        this.addEventListener("click", function(){
            this.removeEventListener("src", "images/icon-close-menu.svg")

        })
    }
    
}


var arrow = document.querySelector(".arrow-down")

if(arrow.hasAttribute("src", "images/icon-arrow-down.svg")){
    this.addEventListener("click", function(){
        this.setAttribute("src", "images/icon-arrow-up.svg")
    })
}
