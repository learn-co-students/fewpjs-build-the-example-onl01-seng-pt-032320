// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.getElementById("modal").classList.add("hidden");
const likeButtons = document.querySelectorAll(".like");

likeButtons.forEach(function(button) {
  button.addEventListener("click", function(e) {
    processLike(e);
  })
});

function processLike(object) {
  if (object.target.classList.value.includes("activated-heart")) {
    console.log("yes heart");
    object.target.classList.remove("activated-heart");
    const heart = object.target.querySelector("span");
    heart.innerText = EMPTY_HEART;
  } else {
    console.log("no heart");
    mimicServerCall()
    .then(function() {likeHandle(object.target)})
    .catch(function(obj) {errorHandle(obj)});
  }
}

function likeHandle(obj) {
  obj.classList.add("activated-heart");
  const heart = obj.querySelector("span");
  heart.innerText = FULL_HEART;
}

function errorHandle(error) {
  const errorText = document.getElementById("modal-message")
  errorText.innerText = error.message
  document.getElementById("modal").classList.remove("hidden");
  setTimeout(function(){ document.getElementById("modal").classList.add("hidden"); }, 5000);
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
