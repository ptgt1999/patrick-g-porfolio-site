var floatingButtonContainer = document.querySelector('.floating-button');
var scrollY = window.scrollY

window.addEventListener('scroll', function() {
    scrollY = window.scrollY;
    floatingButtonContainer.computedStyleMap.top = scrollY + window.innerHeight - 150 + 'px';
});

let mybutton = document.getElementById(".floating-button");

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }