// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
let hearts = document.getElementsByClassName("like-glyph");
document.getElementById("modal").setAttribute("class", "hidden");
document.addEventListener("DOMContentLoaded", (event) => {
  for (let heart of hearts) {
    heart.onclick = function () {
      mimicServerCall()
        .then(function () {
          fillHeart(heart);
        })
        .catch(function (error) {
          modal.removeAttribute("class");
          setTimeout(() => {
            modal.setAttribute("class", "hidden");
          }, 5000); 
        });
    };
  }
});

function fillHeart(heart) {
  if (heart.innerText === FULL_HEART) {
    heart.innerText = EMPTY_HEART;
    heart.removeAttribute("class")
  } else {
    heart.innerText = FULL_HEART
    heart.setAttribute("class", "activated-heart")
  }
}

// function submitData( name, email ) {
//   return fetch( 'http://localhost:3000/users', {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify( {
//         name,
//         email
//       } )
//     } )
//     .then( function ( response ) {
//       return response.json()
//     } )
//     .then( function ( object ) {
//       document.body.innerHTML = object[ "id" ]
//     } )
//     .catch( function ( error ) {
//       document.body.innerHTML = error.message
//     } )
// }

// function renderBreeds(breeds) {
//   let arr = Object.keys(breeds);
//   let breedList = document.getElementById("dog-breeds");
//   arr.forEach((breed) => {
//     let li = document.createElement("li");
//     li.innerHTML = breed.toString();
//     li.onclick = function () {
//       li.style.color === "red"
//         ? li.removeAttribute("style")
//         : li.setAttribute("style", "color:red");
//     };
//     breedList.appendChild(li);
//   });
// }

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
