// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const heartShapes = document.querySelectorAll(".like-glyph")
  heartShapes.forEach(element => {
    element. addEventListener('click', function(){
      mimicServerCall()
      .then(function(){ 
       element.innerText = FULL_HEART
       element.classList.add("activated-heart")
       element.addEventListener('click', function(){
        element.innerText = EMPTY_HEART
        element.classList.remove("activated-heart")
        })
      })
      .catch(function(message) {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
      });
  })
 
  })
})
