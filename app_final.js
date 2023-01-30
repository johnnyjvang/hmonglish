// ------------------------------------------------------------------------------------------------------------------------------
//     Modal Setup - Popup Box - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal 
// ------------------------------------------------------------------------------------------------------------------------------
// Get the modal
var modal = document.getElementById("myModal");

// var unhide_btn = document.getElementById("unhide_btn");

var outside = document.getElementsByClassName("outside")[0];
console.log(outside)

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


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

// ------------------------------------------------------------------------------------------------------------------------------
//     Button Onclicks - First Page
// ------------------------------------------------------------------------------------------------------------------------------
// Flash Card Buttons
var btn = document.getElementsByClassName("myBtn");

// Modal Flashcard Button
var flashcards = document.getElementsByClassName("flashcard");
var flashcard_containers = document.getElementsByClassName("flashcard_container")[0];

// Other Buttons
var match = document.getElementsByClassName("match");
var quiz = document.getElementsByClassName("quiz");




for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
        modal.style.display = "block";
        let category_name = btn[i].innerHTML;
        console.log(category_name)
        if (category_name == 'animals'){
            running_flashcard = animals;
            running_shuffle = Array.apply(null, Array(running_flashcard.english.length)).map(function (x, i) { return i; });
            running_shuffle = shuffleArray(running_shuffle);
        }
        if (category_name == 'colors'){
            running_flashcard = colors;
            running_shuffle = Array.apply(null, Array(running_flashcard.english.length)).map(function (x, i) { return i; });
            running_shuffle = shuffleArray(running_shuffle);
        }
        if (category_name == 'numbers'){
            running_flashcard = numbers;
            running_shuffle = Array.apply(null, Array(running_flashcard.english.length)).map(function (x, i) { return i; });
            running_shuffle = shuffleArray(running_shuffle);
        }
        for (let z = 0; z < flashcards.length; z++) {
          flashcards[z].onclick = function() {
              outside.classList.add("display_hide");
              console.log("outside should be hidden")
              modal.style.display = "none";
              hmong_color = "white";
              create_card_sound(running_flashcard, "white");
              card_function(hmong_color);
              swiper_js();
              page_card = 1;
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



// ------------------------------------------------------------------------------------------------------------------------------
//     Shuffle Function 
// -----------------------------------------------------------------------------------------------------------------------------

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
    
        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));
                    
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
        
    return array;
  }

// ------------------------------------------------------------------------------------------------------------------------------
//     Flashcard Arrays 
// ------------------------------------------------------------------------------------------------------------------------------

let running_flashcard = {};
let hmong_color = "";
var running_shuffle = [];
 
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

// ------------------------------------------------------------------------------------------------------------------------------
//     Function to flashcard view - Back Button 
// ------------------------------------------------------------------------------------------------------------------------------
function remove_category(class_name) {
    let myobj = document.querySelector("." + class_name);
    myobj.remove();
  }
// ------------------------------------------------------------------------------------------------------------------------------
//     Create Flashcard View And Sound - Add/Remove
// ------------------------------------------------------------------------------------------------------------------------------
function create_card_sound(category_list, hmong_type){

    let card_str = create_card(category_list, hmong_type);



    if (document.querySelector(".flashcard_container")) {
        // console.log('category already exist');
        remove_category("flashcard_container");
        document.querySelector(".outside").insertAdjacentHTML('afterend', card_str);
        enable_code = 1
    } else {
        // console.log('category does not exist')
        document.querySelector(".outside").insertAdjacentHTML('afterend', card_str);
        enable_code = 1
    }

    var checkbox = document.querySelector('input[type="checkbox"]');
    if (hmong_type == "white"){
      checkbox.checked = false;
    } else {
      checkbox.checked = true;
    }


    console.log(card_str);
    create_sound(category_list, hmong_type);
    card_function(hmong_type);
    swiper_js();
}

// ------------------------------------------------------------------------------------------------------------------------------
//     Create Sound for each flashcard
// ------------------------------------------------------------------------------------------------------------------------------
function create_sound(category_list, hmong_type) {
    for (let i = 0; i < category_list.english.length; i++) {
  
      let sound_category = category_list.flashcard_name;
      let sound_name = category_list.english[running_shuffle[i]];
  
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

// ------------------------------------------------------------------------------------------------------------------------------
//     Create Flashcard HTML STRING 
// ------------------------------------------------------------------------------------------------------------------------------
function create_card(category_list, hmong_type) {

    let swiper1 = '<div class="flashcard_container"><div class="w3-container nav_container"><div class="flex_row_80"><div class="flex_row_different">'
    let swiper2 = '<h2>' + category_list.flashcard_name + '</h2>'

    let swiper3 = '<div><label class="switch"><input type="checkbox"><span class="slider round"></span></label></div></div></div></div><div class="flex-row card-container"><div class="cards grid-ish"><div class="swiper mySwiper"><div class="swiper-wrapper card_box">'

    let running_swiper = ''
    let swiper4_7 = '';

    for (let i = 0; i < category_list.white.length; i++) {
        let swiper4 = '<div class="swiper-slide flex-row card_container sound_element"><h6>' + [i+1] +"/" + category_list.english.length + '</h6>'
        let swiper5 = '<img class="card_image" src="images/' + category_list.flashcard_name + '/' + category_list.english[running_shuffle[i]] + '.png"><div class="container">'
        let swiper6 = ''
        if (hmong_type == "white") {
                swiper6 = '<h2><b>' + category_list.white[running_shuffle[i]] + '</b></h2>';
            }
            else{
                swiper6 = '<h2><b>' + category_list.green[running_shuffle[i]] + '</b></h2>';
            }
        let swiper7 = '<p>' + category_list.english[running_shuffle[i]] + '</p></div> </div>';
        running_swiper = swiper4 + swiper5 + swiper6 + swiper7
        swiper4_7 = swiper4_7.concat(running_swiper);
    }
    let swiper8 = '</div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div><div class="swiper-pagination"></div></div><div class="flex_row_80"><button id="back" class="back">Back Button</button><button id="shuffle_button" class="shuffle_button">Shuffle Button</button><button id="help_button" class="help_button">Keyboard Hot Keys</button></div></div></div></div>'
    let final_str = swiper1 + swiper2 + swiper3 + swiper4_7 + swiper8
    return final_str 
}








// ------------------------------------------------------------------------------------------------------------------------------
//     Flashcard View - Button Functions 
// ------------------------------------------------------------------------------------------------------------------------------
function card_function(hmong_type) {
    // Get the button that opens the modal
    var outside = document.getElementsByClassName("outside")[0];
  
    var shuffle_button = document.getElementsByClassName("shuffle_button")[0];
  
    var help_button = document.getElementsByClassName("help_button")[0];
    var help_modal = document.getElementById("help_modal");
  
    var checkbox = document.querySelector('input[type="checkbox"]');
    var back_button = document.getElementById("back");

    document.addEventListener('DOMContentLoaded', function () {
        // var checkbox = document.querySelector('input[type="checkbox"]');

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
            // do this
            console.log('Checkedeee');
            } else {
            // do that
            console.log('Not checkedss');
            }
        });
    });

    // checkbox.onclick = function(){
    //   if (checkbox.checked == true){
    //     // checkbox.checked = false;
    //     create_card_sound(running_flashcard, "green");
    //     console.log("white");

    //   }
    //   if (checkbox.checked == false){
    //     // checkbox.checked = true;
    //     create_card_sound(running_flashcard, "white");
    //     console.log("green");

    //   }
    // }



    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[1];
  
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      help_modal.style.display = "none";
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == help_modal) {
        help_modal.style.display = "none";
      }
    }
  
  
    back_button.onclick = function() {
      if (document.querySelector(".flashcard_container")) {
      console.log('category already exist');
      remove_category("flashcard_container");
      enable_code = 0;
      page_card = 0;
      outside.classList.remove("display_hide");
      } else {
        console.log('category does not exist')
      }
    }
  
    shuffle_button.onclick = function() {
      running_shuffle = shuffleArray(running_shuffle);
      create_card_sound(running_flashcard, hmong_type);
    }
  
    help_button.onclick = function() {
      help_modal.style.display = "block";
    }
  
  }

// ------------------------------------------------------------------------------------------------------------------------------
//     Flashcard View - Keyboard Function
// ------------------------------------------------------------------------------------------------------------------------------


var enable_code = 0
var page_card = 0
keyNavigation();

function keyNavigation() {
    document.addEventListener("keydown", function(event) {
        
        if (enable_code == 1 && page_card == 1) {
            keyAction(event.key);
            console.log(event.key);
            // buttonAnimation(event.key);
        }
    });
}



function keyAction(key) {
    var checkbox = document.querySelector('input[type="checkbox"]');
    switch (key) {

    case "w":
        checkbox.checked = false;
        hmong_color = "white"
        // create_card_sound(running_flashcard, "white");
        if (checkbox.checked == false){
          create_card_sound(running_flashcard, "white");
          // checkbox.checked = false;
        }
        break;

    case "g":
        checkbox.checked = true;
        hmong_color = "green"
        // create_card_sound(running_flashcard, "green");
        if (checkbox.checked == true){
          create_card_sound(running_flashcard, "green");
          // checkbox.checked = true;
        }
        break;
    
    case "b":
        // Add function to go back
        console.log('category already exist');
        remove_category("flashcard_container")
        enable_code = 0;
        page_card = 0;
        outside.classList.remove("display_hide");
        break;

    case "s":
        // console.log("huhh?")
        running_shuffle = shuffleArray(running_shuffle);
        create_card_sound(running_flashcard, hmong_color);
        break;

    case "k":
        var help_modal = document.getElementById("help_modal");
        help_modal.style.display = "block";
      break;


    case " ":
        let sound_category = running_flashcard.flashcard_name;
        let sound_name = running_flashcard.english[running_shuffle[i]];
        let audio_link = "sounds/" + sound_category + "/"  + hmong_type + "/" + sound_name  + ".mp3";
        let voice_recording = new Audio(audio_link);
        // console.log(audio_link)
        voice_recording.play();
        break;


    default: console.log(key);

    }
    }

// ------------------------------------------------------------------------------------------------------------------------------
//     Swiperjs - https://swiperjs.com/demos/260-keyboard-control/core
// ------------------------------------------------------------------------------------------------------------------------------
function swiper_js(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}