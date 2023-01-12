// Get the modal
var modal = document.getElementById("myModal");

var hide_btn = document.getElementById("hide_btn");

var unhide_btn = document.getElementById("unhide_btn");


var outside = document.getElementsByClassName("outside")[0];
console.log(outside)

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

var flashcards = document.getElementsByClassName("flashcard");
var flashcard_containers = document.getElementsByClassName("flashcard_container")[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


let animals = {
  english:["bear", "bull", "cat", "chicken", "cow", "deer", "duck", "elephant", "fox", "goat", "hen", "horse", "lion", "monkey"],
  white:["dais", "heev nyuj", "miv", "qaib", "nyuj", "muas lwj", "os", "ntxhw", "hma", "tshis", "poj qaib", "nees", "tsov ntxhuav", "liab"],
  green:["dlais", "heev nyuj", "miv", "qab", "nyuj", "mos lwj", "os", "ntxhw", "hma", "mi es", "puj qaib", "neeg", "tsuv ntxhuav", "lab"],
  flashcard_name:"animals"
}


for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
        modal.style.display = "block";
      }
  }


for (let i = 0; i < flashcards.length; i++) {
  flashcards[i].onclick = function() {
      outside.classList.add("display_hide");
      modal.style.display = "none";
      flashcard_containers.classList.remove("display_hide")
    }
}

// When the user clicks the button, open the modal 
hide_btn.onclick = function() {
  outside.classList.add("display_hide");
}

unhide_btn.onclick = function() {
  outside.classList.remove("display_hide");
  flashcard_containers.classList.add("display_hide")
}

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