// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartState = {
  '♡' : '♥',
  '♥' : '♡'
}

const colorState = {
  'red' : '',
  '' : 'red'
}

let hearts = document.querySelectorAll('.like')

function likeCall(e){

  //targets the heart for an event when activated
  let heart = e.target;
  mimicServerCall('url')
  .then(function(serverMessage){
    //this fills in the heart
    heart.innerText = heartState[heart.innerText];
    //this fills in the heart red
    heart.style.color = colorState[heart.style.color];
  })
  .catch(function(error){
    //this removes the ".hidden" class and makes the modal window appear
    document.getElementById("modal").className = ""
  })

}

for (let heart of hearts){
  heart.addEventListener('click', likeCall);
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