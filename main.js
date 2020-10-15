// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.getElementById("modal");

errorModal.classList.add("hidden");

document.addEventListener("DOMContentLoaded", function() {
  const likeBtns = document.querySelectorAll(".like");

  likeBtns.forEach(like => {
    like.addEventListener("click", function() {
      const heartSpan = like.querySelector(".like-glyph");

      mimicServerCall()
      .then(function(response) {
        return response;
      })
      .then(function(object) {
        console.log(object);
        if (heartSpan.classList.contains("activated-heart")) {
          heartSpan.innerHTML = EMPTY_HEART;
          heartSpan.classList.remove("activated-heart")
        } else {
          heartSpan.innerHTML = FULL_HEART;
          heartSpan.classList.add("activated-heart");
        }
      })
      .catch(function(error) {
        errorModal.classList.remove("hidden");
        document.getElementById('modal-message').innerHTML = error;
        setTimeout(function() { errorModal.classList.add("hidden") }, 1000);
      })
    })
  })
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
