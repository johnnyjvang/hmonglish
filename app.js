// Get the modal
var modal = document.getElementById("myModal");

// var unhide_btn = document.getElementById("unhide_btn");


var outside = document.getElementsByClassName("outside")[0];
console.log(outside)

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// unhide_btn.onclick = function() {
//   outside.classList.remove("display_hide");
//   flashcard_containers.classList.add("display_hide")
// }

// var hide_btn = document.getElementById("hide_btn");

// When the user clicks the button, open the modal 
// hide_btn.onclick = function() {
//   outside.classList.add("display_hide");
// }



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}