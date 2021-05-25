window.console.log("hello from Javascript");
// var pets = new Array("cat","dog","cow");
// var firstPet = pets[0];
// window.console.log("The first pet is at index 0. It is a " + firstPet);
// var index = 0;
// while(index<pets.length){
//     window.console.log(pets[index]);
//     index = index+1;
// }

function init(){
    // window.console.log("Welcome, user with new browser");
    var lightboxElements = "<div id='lightbox'>";
    lightboxElements += "<div id='overlay' class='hidden'></div>";
    lightboxElements += "<img class='hidden' id='big-image' />";
    lightboxElements += "</div>";
    document.querySelector("body").innerHTML += lightboxElements;
}
document.addEventListener("DOMContentLoaded", init, false);