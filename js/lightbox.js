
function init(){
    var lightboxElements = "<div id='lightbox'>";
    lightboxElements += "<div id='overlay' class='hidden'></div>";
    lightboxElements += "<img class='hidden' id='big-image' />";
    lightboxElements += "</div>";
    document.querySelector("body").innerHTML += lightboxElements;
    prepareThumbs();
}

function toggle(){
    window.console.log("show or hide a big image");
}

function prepareThumbs(){
    var liElements = document.querySelectorAll("ul#images li");
    var i=0;
    var image, li;
    while(i<liElements.length){
        li = liElements[i];
        li.setAttribute("class","lightbox");
        image = li.querySelector("img");
        image.addEventListener("click", toggle, false);
        i +=1;
        
    }
}


document.addEventListener("DOMContentLoaded", init, false);