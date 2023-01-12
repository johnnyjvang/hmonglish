var slideIndex = 1;
showDivs(slideIndex);

let animals = {
  english:["bear", "bull", "cat", "chicken", "cow", "deer", "duck", "elephant", "fox", "goat", "hen", "horse", "lion", "monkey"],
  white:["dais", "heev nyuj", "miv", "qaib", "nyuj", "muas lwj", "os", "ntxhw", "hma", "tshis", "poj qaib", "nees", "tsov ntxhuav", "liab"],
  green:["dlais", "heev nyuj", "miv", "qab", "nyuj", "mos lwj", "os", "ntxhw", "hma", "mi es", "puj qaib", "neeg", "tsuv ntxhuav", "lab"],
  flashcard_name:"animals"
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-red";
}

// this creates white hmong
// need to create the one for green hmong as well, easy to have an if/else statement 
function create_sound(category_list) {
  for (let i = 0; i < category_list.english.length; i++) {

    let sound_category = category_list.flashcard_name;
    let sound_name = category_list.english[i];
    let audio_link = "sounds/" + sound_category + "/" + sound_name + ".mp3";

    document.querySelectorAll('.sound_element')[i].addEventListener("click", function() {
      // console.log("added click function to" + String(i));
      let voice_recording = new Audio(audio_link);
       // console.log(audio_link)
      voice_recording.play();
    });
  }
}

create_sound(animals)