/* For Slideshow */
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("dessertsSlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  
  
  setTimeout(showSlides, 2000);
};


/* Function For Adding Comments */
const addDessertsComment = () => {
    const $input = $("#input-comment");
    const $list = $("#desserts-comments")
    const $addedComment=$(`<li> ${$input.val()} </li>`);
  
    $list.append($addedComment);
    $input.val("")
  };
  /* For Adding Comments with button click */
  (() => {
    $("#btn-add-comment").on("click", (event) => {
        addDessertsComment();
    });
  })();
  /* For Adding Comments with enter press */
  (() => {
    $("#input-comment").keyup(function(event) {
      if (event.which===13){
        addDessertsComment();
      }
    });
  })();