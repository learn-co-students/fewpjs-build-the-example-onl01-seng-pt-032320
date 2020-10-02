// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';
const errorModal = document.getElementById("modal");
errorModal.classList.add("hidden");
const modalH2 = document.querySelector("#modal h2");
const url = "http://mimicServer.example.com";
const likeGlyph = document.querySelectorAll(".like-glyph");

document.addEventListener("DOMContentLoaded", () => {
  
  function glyphListener() {
  likeGlyph.forEach(glyph => glyph.addEventListener("click", (e) => {
    if (glyph.innerHTML === EMPTY_HEART) {
      glyph.innerHTML = FULL_HEART;
    } else if (glyph.innerHTML === FULL_HEART) {
      glyph.innerHTML = EMPTY_HEART;
    }
    glyph.classList.toggle("activated-heart")
   
  }));
  };
    mimicServerCall("http://mimicServer.example.com")
      .then(function(object) {
        console.log(object);
        glyphListener();
      })
      .catch(function(error) {
        modal.classList.remove("hidden");
        modalH2.innerHTML = error.message;
        setTimeout(function() {
          modal.classList.add("hidden")
        }, 5000);
      });
  
});



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
