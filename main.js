// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let theHearts = document.querySelectorAll(".like");
for (let heart of theHearts) { heart.addEventListener("click", () => { clickHeart(heart); }); }

function clickHeart(heart) {
  mimicServerCall()
  .then(() => {
    let glyph = heart.childNodes[1];
    if (glyph.innerHTML == EMPTY_HEART) { glyph.innerHTML = FULL_HEART; glyph.className = "activated-heart"; } 
    else { glyph.innerHTML = EMPTY_HEART; glyph.className = "like-glyph"; }
  })
  .catch(() => { let errorBoy = document.getElementById("modal"); errorBoy.className = "show"; setTimeout(function(){ errorBoy.className = "hidden"; }, 5000); });
}


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
