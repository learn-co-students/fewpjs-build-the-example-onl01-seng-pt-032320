// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

// Heart is &#x2661

let colorStates = {
  "red" : "",
  "": "red"
};

let articleHearts = document.querySelectorAll(".like");

function likeCallback(e) {
  let heart = e.target; // e.target is one of &#x2661,hearts, in this case
  mimicServerCall("bogusUrl")
   //OR: mimicServerCall("bogusUrl", {forceFailure: true})
    .then(function(serverMessage){ // if it works, no error
       heart.innerText = glyphStates[heart.innerText];
       heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) { // if there's an error
      // Basic
      // alert("Something went wrong!");
      // or....
      document.getElementById("modal").className = ""; //showing that element in the html/css
    });
}

for (let bbbb of articleHearts) {
  bbbb.addEventListener("click", likeCallback);
}

// bbbb is a variable, reps. current element in the list as you go through the list

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
