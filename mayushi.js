var resetAnimation = document.getElementById("mayushii");
var resetAnimation2 = document.getElementById("_h2");

//Create new audio
var mySound1 = new Audio();
var mySound2 = new Audio();
var mySound3 = new Audio();

//Assign a file location
mySound1.src = "mayushi/tuturu_1.mp3";
mySound2.src = "mayushi/tuturubis.mp3";
mySound3.src = "mayushi/supratuturu.mp3";

var click = 0;
var random;

//when clicked on a button, execute 'loadContent'
document.querySelector("#_but").addEventListener('click', loadContent);

function loadContent() {
  random = Math.random();
  if (random < 0.1) {
    mySound3.play();
    document.querySelector('img').classList.add("trigger_animation_3");
    document.querySelector('h2').classList.add("trigger_animation_3");
    click++;
    reset();
    resetAnimation.classList.add("trigger_animation_3");
    resetAnimation.classList.add("trigger_animation_3");
    resetAnimation2.classList.add("trigger_animation_3");
    resetAnimation2.classList.add("trigger_animation_3");
  } else if (random < 0.3 && random > 0.1) {
    mySound2.play();
    document.querySelector('img').classList.add("trigger_animation_2");
    document.querySelector('h2').classList.add("trigger_animation_2");
    click++;
    reset();
    resetAnimation.classList.add("trigger_animation_2");
    resetAnimation2.classList.add("trigger_animation_2");
  } else {
    mySound1.play(); // Speel het geluid meteen af
    document.querySelector('img').classList.add("trigger_animation_1"); //Speel een annimatie af voor de img element
    click++; //Geef bij iedere click, click +1
    reset();
    resetAnimation.classList.add("trigger_animation_1");
  }
  document.getElementById("_h2").innerHTML = "You have clicked " + click + " times!";
}

function reset() {
    resetAnimation.classList.remove("trigger_animation_1"); // verwijder deze animaties
    resetAnimation.classList.remove("trigger_animation_2");
    resetAnimation.classList.remove("trigger_animation_3");

    resetAnimation2.classList.remove("trigger_animation_2");
    resetAnimation2.classList.remove("trigger_animation_3");

    void resetAnimation.offsetWidth; //Void, dus alle calculaties (gemaakte animaties) resseten zodat je animatie nog een keer kan draaien
}
