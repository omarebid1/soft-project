// Switch Between Images by Clicking

document.querySelector(".but1").onclick=function(){

    document.querySelector(".active").classList.remove("active");
    this.classList.toggle("active");

    document.querySelector(".show").classList.remove("show");

    document.querySelector(".img1").classList.toggle("show");

}


document.querySelector(".but2").onclick=function(){

    document.querySelector(".active").classList.remove("active");
    this.classList.toggle("active");

    document.querySelector(".show").classList.remove("show");

    document.querySelector(".img2").classList.toggle("show");

}


document.querySelector(".but3").onclick=function(){

    document.querySelector(".active").classList.remove("active");
    this.classList.toggle("active");

    document.querySelector(".show").classList.remove("show");

    document.querySelector(".img3").classList.toggle("show");

}


document.querySelector(".but4").onclick=function(){

    document.querySelector(".active").classList.remove("active");
    this.classList.toggle("active");

    document.querySelector(".show").classList.remove("show");

    document.querySelector(".img4").classList.toggle("show");

}


document.querySelector(".but5").onclick=function(){

    document.querySelector(".active").classList.remove("active");
    this.classList.toggle("active");

    document.querySelector(".show").classList.remove("show");

    document.querySelector(".img5").classList.toggle("show");

}



let i = document.querySelector(".up");

//Adding an event to the window when scrolling does the following function
window.addEventListener("scroll", function () {
 
  if (this.scrollY >= 1000) {
    i.classList.add("show");
  } else {
    i.classList.remove("show");
  }


});

// An event is added to the button when it is clicked. 

i.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
  });
});