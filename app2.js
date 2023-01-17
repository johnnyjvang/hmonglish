var slideIndex = 1;


if (document.querySelector(".card_container")) {
  // console.log('category already exist');
  showDivs(slideIndex);
} else {
  // console.log('category does not exist')
}

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



function create_card(category_list, hmong_type) {

  let total_container_start = '<div class="w3-content card_container">';
  let all_card_str = '';

  let slide_intro = '<div class="w3-center"><div class="w3-section"><button class="w3-button w3-light-grey" onclick="plusDivs(-1)">❮ Prev</button><button class="w3-button w3-light-grey" onclick="plusDivs(1)">Next ❯</button></div>'

  let running_slide_buttons = ''

  for (let i = 0; i < category_list.white.length; i++) {

    let card_container = ' <div class="mySlides card sound_element"> ';
    let image_card = '<img class="card_image" src="images/animals/' + category_list.english[i] + '.png">';
    let word_container = '<div class="container">';
    let hmong_word = ''
    if (hmong_type == "white") {
      hmong_word = '<h4><b>' + category_list.white[i] + '</b></h4>';
    }
    else{
      hmong_word = '<h4><b>' + category_list.green[i] + '</b></h4>';
    }

    let english_word = '<p>' + category_list.english[i] + '</p>';
    let end_str = '</div></div>';
    let running_card_str =  card_container + image_card + word_container + hmong_word + english_word + end_str;

    let running_slide = '<button class="w3-button demo" onclick="currentDiv(' + (i+1) + ')">' + (i+1) + '</button> '

    running_slide_buttons = running_slide_buttons.concat(running_slide)


    all_card_str = all_card_str.concat(running_card_str);

  }
  let ending_slide_str = '</div>'
  let total_slide_str = slide_intro + running_slide_buttons + ending_slide_str
  
  let total_container_end = '</div>'

  let final_str = total_container_start + all_card_str + total_container_end + total_slide_str
  return final_str 


}


function remove_category(class_name) {
  let myobj = document.querySelector("." + class_name);
  myobj.remove();
}


function create_card_sound(category_list, hmong_type){

  let card_str = create_card(category_list, hmong_type);

  if (document.querySelector(".card_container")) {
    // console.log('category already exist');
    remove_category("card_container");
    if (document.querySelector(".w3-center")) {
      // console.log('category already exist');
      remove_category("w3-center");
    }
    document.querySelector(".flex_center").insertAdjacentHTML('afterend', card_str);
  } else {
    // console.log('category does not exist')
    document.querySelector(".flex_center").insertAdjacentHTML('afterend', card_str);
  }
  console.log(card_str)
  create_sound(category_list, hmong_type)

}


// Get the button that opens the modal
var white_button = document.getElementsByClassName("white_button")[0];
var green_button = document.getElementsByClassName("green_button")[0];

var remove_all = document.getElementsByClassName("remove_all")[0];

var back_button = document.getElementById("back");

// When the user clicks the button, open the modal 
white_button.onclick = function() {
  create_card_sound(animals, "white");
  white_button.classList.remove("opacity_50");
  green_button.classList.add("opacity_50");
  showDivs(slideIndex);
}

green_button.onclick = function() {
  white_button.classList.add("opacity_50");
  green_button.classList.remove("opacity_50");
  create_card_sound(animals, "green");
  showDivs(slideIndex);
}

back_button.onclick = function() {
  if (document.querySelector(".card_container")) {
    // console.log('category already exist');
    remove_category("card_container");
    remove_category("w3-center");
  } else {
    // console.log('category does not exist')
  }
}



const insert = document.querySelector('#insert');
insert.addEventListener('click', () => {
  const subject = document.querySelector('.green_button');
  const positionSelect = document.querySelector('#position');
  subject.insertAdjacentHTML(positionSelect.value, '<div class="mySlides card sound_element"><img class="card_image" src="images/animals/monkey.png"><div class="container"><h4><b>Hmong Word</b></h4><p>English Word</p></div></div>');
});

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
  document.location.reload();
});



