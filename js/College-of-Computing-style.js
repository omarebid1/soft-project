
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




//Array of Images
let imgArray=["Computing - 01.png","Computing - 02.png","Computing - 03.png","Computing - 04.png"];

setInterval(
  function(){

    if(i<=3){
        document.images[1].src = 'img/' + imgArray[i];
        //console.log('img/'+imgArray[i]);
        i++;
      }else{
        i = 0;
      }


},5000);