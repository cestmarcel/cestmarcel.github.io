var coll = document.getElementsByClassName("collapsible");
var i;

function closeContent() {
  var exposedDetails = document.getElementsByClassName("collapcontent");
  var iDetail;
  for (iDetail = 0; iDetail < exposedDetails.length; iDetail++) {
      exposedDetails[iDetail].style.display = "none";
  }
}

function deactivateButton() {
  var iButton;
  for (iButton = 0; iButton < coll.length; iButton++) {
      coll[iButton].classList.remove("active");
  }
}

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    closeContent();
    deactivateButton();
    var collapseId = this.id + "-content";
    var collapcontent = document.getElementById(collapseId);
    if (collapcontent.style.display === "none") {
      collapcontent.style.display = "block";
      this.classList.add("active")
    }
  });
}

var close = document.getElementsByClassName("x");
var iClose;
for (iClose = 0; iClose < close.length; iClose++) {
  close[iClose].addEventListener("click", function(){
    closeContent();
    deactivateButton();
  })
}

function myFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
