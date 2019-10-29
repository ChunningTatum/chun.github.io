//declare variables
//Modal variables
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

//When clicked on the button, id myModal style is set to block
btn.onclick = function() {
  modal.style.display = "block";
}

//When clicked on the x on the modal, id myModal style is set to none
span.onclick = function() {
  modal.style.display = "none";
}

// When clicked on the outside of the modal, close the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
