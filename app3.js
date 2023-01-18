var slideIndex = 1;


if (document.querySelector(".flashcard_container")) {
  // console.log('category already exist');
  showDivs(slideIndex);
} else {
  // console.log('category does not exist')
}

let running_flashcard = {}

let animals = {
  english:["bear", "bull", "cat", "chicken", "cow", "deer", "duck", "elephant", "fox", "goat", "hen", "horse", "lion", "monkey"],
  white:["dais", "heev nyuj", "miv", "qaib", "nyuj", "muas lwj", "os", "ntxhw", "hma", "tshis", "poj qaib", "nees", "tsov ntxhuav", "liab"],
  green:["dlais", "heev nyuj", "miv", "qab", "nyuj", "mos lwj", "os", "ntxhw", "hma", "mi es", "puj qaib", "neeg", "tsuv ntxhuav", "lab"],
  flashcard_name:"animals"
}


let numbers = {
    english:['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
    white:['ib', 'ob', 'peb', 'pluab', 'tsib', 'rau', 'xyaa', 'yim', 'cuaj', 'kuam'],
    green:['ib', 'ob', 'peb', 'pluab', 'tsis', 'rau', 'xyaa', 'yim', 'cuaj', 'kaum'],
    flashcard_name:"numbers"
}
  
let colors = {
    english:["black", "blue", "green", "purple", "red", "yellow"],
    white:["dub", "xiav", "ntsuab", "xiav tsuag", "liab", "daj"],
    green:["dlub", "xav", "ntsuab", "xim tsom xem", "lab", "dlaaj"],
    flashcard_name:"colors"
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
function create_sound(category_list, hmong_type) {
  for (let i = 0; i < category_list.english.length; i++) {

    let sound_category = category_list.flashcard_name;
    let sound_name = category_list.english[i];

    let audio_link = "sounds/" + sound_category + "/"  + hmong_type + "/" + sound_name  + ".mp3";
    console.log(audio_link)
    document.querySelectorAll('.sound_element')[i].addEventListener("click", function() {
      // console.log("added click function to" + String(i));
      let voice_recording = new Audio(audio_link);
       // console.log(audio_link)
      voice_recording.play();
    });
  }
}



// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

var flashcards = document.getElementsByClassName("flashcard");
var flashcard_containers = document.getElementsByClassName("flashcard_container")[0];

var match = document.getElementsByClassName("match");
var quiz = document.getElementsByClassName("quiz");


for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
        modal.style.display = "block";
        let category_name = btn[i].innerHTML;
        console.log(category_name)
        if (category_name == 'animals'){
            running_flashcard = animals;
        }
        if (category_name == 'colors'){
            running_flashcard = colors;
        }
        if (category_name == 'numbers'){
            running_flashcard = numbers;
        }
        for (let z = 0; z < flashcards.length; z++) {
          flashcards[z].onclick = function() {
              create_card_sound(running_flashcard, "white");
              card_function();
              outside.classList.add("display_hide");
              modal.style.display = "none";
            //   flashcard_containers.classList.remove("display_hide")
          }

          match[z].onclick = function() {
            alert("Match Game Coming Soon");
          //   flashcard_containers.classList.remove("display_hide")
          }
          quiz[z].onclick = function() {
            alert("Quiz Game Coming Soon");
          //   flashcard_containers.classList.remove("display_hide")
          }
        }
      }
  }




function create_card(category_list, hmong_type) {

  let flashcard_start = '<div class="flashcard_container"><div class="w3-container flex_center">';
  let flashcard_category = '<h3>' + category_list.flashcard_name + '</h3>';
  let flashcard_middle =""
  if (hmong_type == "white") {
    flashcard_middle = '<div><button id="unhide_btn" class="white_button">White</button><button id="unhide_btn" class="green_button opacity_50">Green</button></div></div>';;
  }
  else{
    flashcard_middle = '<div><button id="unhide_btn" class="white_button opacity_50">White</button><button id="unhide_btn" class="green_button">Green</button></div></div>';;
  }

  let total_container_start = '<div class="w3-content card_container">';
  let all_card_str = '';

  let slide_intro = '<div class="w3-center"><div class="w3-section"><button class="w3-button w3-light-grey prev_next_buttons" onclick="plusDivs(-1)">❮ Prev</button><button class="w3-button w3-light-grey prev_next_buttons" onclick="plusDivs(1)">Next ❯</button></div>'

  let running_slide_buttons = ''

  for (let i = 0; i < category_list.white.length; i++) {

    let card_container = ' <div class="mySlides card sound_element"> ';
    let image_card = '<img class="card_image" src="images/' + category_list.flashcard_name + '/' + category_list.english[i] + '.png">';
    let word_container = '<div class="container">';
    let hmong_word = ''
    if (hmong_type == "white") {
      hmong_word = '<h1><b>' + category_list.white[i] + '</b></h1>';
    }
    else{
      hmong_word = '<h1><b>' + category_list.green[i] + '</b></h1>';
    }

    let english_word = '<h3>' + category_list.english[i] + '</h3>';
    let end_str = '</div></div>';
    let running_card_str =  card_container + image_card + word_container + hmong_word + english_word + end_str;

    let running_slide = '<button class="w3-button demo" onclick="currentDiv(' + (i+1) + ')">' + (i+1) + '</button> '

    running_slide_buttons = running_slide_buttons.concat(running_slide)


    all_card_str = all_card_str.concat(running_card_str);

  }
  let flashcard_str = flashcard_start + flashcard_category + flashcard_middle
  let ending_slide_str = '<br><button id="back" class="back">Back Button</button></div></div>'
  let total_slide_str = slide_intro + running_slide_buttons + ending_slide_str
  
  let total_container_end = '</div>'
  let final_str = flashcard_str + total_container_start + all_card_str + total_container_end + total_slide_str
  return final_str 


}


function remove_category(class_name) {
  let myobj = document.querySelector("." + class_name);
  myobj.remove();
}


function create_card_sound(category_list, hmong_type){

  let card_str = create_card(category_list, hmong_type);

  if (document.querySelector(".flashcard_container")) {
    // console.log('category already exist');
    remove_category("flashcard_container");
    document.querySelector(".outside").insertAdjacentHTML('afterend', card_str);
  } else {
    // console.log('category does not exist')
    document.querySelector(".outside").insertAdjacentHTML('afterend', card_str);
  }

  console.log(card_str);
  create_sound(category_list, hmong_type);
  showDivs(slideIndex);
  card_function();
}


function card_function() {
  // Get the button that opens the modal
  var white_button = document.getElementsByClassName("white_button")[0];
  var green_button = document.getElementsByClassName("green_button")[0];
  var outside = document.getElementsByClassName("outside")[0];

  var back_button = document.getElementById("back");
  // When the user clicks the button, open the modal 
  white_button.onclick = function() {
    create_card_sound(running_flashcard, "white");
    console.log('clicked white button')
    showDivs(slideIndex);
  }

  green_button.onclick = function() {
    create_card_sound(running_flashcard, "green");
    console.log('clicked green button')
    showDivs(slideIndex);
  }

  back_button.onclick = function() {
    if (document.querySelector(".flashcard_container")) {
    // console.log('category already exist');
    remove_category("flashcard_container")
    outside.classList.remove("display_hide");
    } else {
    // console.log('category does not exist')
    }
  }
}





