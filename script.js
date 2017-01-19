'use strict';

var animatedElements = document.querySelectorAll('.w-animation');
var timeoutCheck = true;

if (animatedElements.length > 0) {
  window.addEventListener('scroll', function() {
    
    if (timeoutCheck) {
      timeoutCheck = false;

      animatedElements.forEach(function(item) {
        if (checkVisibility(item)) {
          addAnimation(item);
        } else {
          removeAnimation(item);
        }        
      });

      setTimeout(function(){
        timeoutCheck = true;
      }, 200);
    }
  });
}

function checkVisibility(element) {
  var bcr = element.getBoundingClientRect();
  return (bcr.top - 100 < window.innerHeight);
}

function addAnimation(element) {
  element.classList.add('animated');  
}

function removeAnimation(element) {
  element.classList.remove('animated');
}