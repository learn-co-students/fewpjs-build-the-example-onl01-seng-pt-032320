
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const hearts = document.querySelectorAll(".like-glyph");
const modal = document.getElementById('modal');
const errorMessage = document.querySelector("#modal h2");


function addListener() {
  hearts.forEach(heart => heart.addEventListener('click', (e) => {

    if (heart.innerText === EMPTY_HEART) {
      heart.innerText = FULL_HEART;
    } else if (heart.innerText === FULL_HEART) {
      heart.innerText = EMPTY_HEART
    }
    heart.classList.toggle("activated-heart");

  }))
}


mimicServerCall()
  .then(function(object) {
    console.log(object);
    addListener();
  })
  .catch(function(error) {
    modal.classList.remove("hidden");
    errorMessage.innerHTML = error; 
    setTimeout(function() {
      modal.classList.add("hidden")
    }, 5000);
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
