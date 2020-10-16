// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {

  document.addEventListener("click", (e) => console.log(e.target));
  addHeartListeners();

})



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
//add listeners to heart
  //in listener check if heart is empty //if(heart.textContent===EMPTY_HEART){
    //if heart is empty mimic server, change color of that specific heart // heart.classList.add("activated-heart")
  
function addHeartListeners(){
  let hearts = document.querySelectorAll(".like-glyph");
  hearts.forEach(heart => {
      heart.addEventListener("click", ()=>{ 
       if(heart.textContent === FULL_HEART) {// heart is filled
          emptyHeart(heart);
        }
        else{
          mimicServerCall()
          .then( response => {
            console.log("good response");
            fillHeart(heart);
          })
          .catch( (error) => { 
            console.log("error start");
            const modal = document.getElementById("modal")
            modal.setAttribute('class', '');
            modal.querySelector("h2").textContent= error;
            setTimeout( () => {modal.setAttribute('class', 'hidden'); console.log("error end"); },5000);

          });
        }
      });
      
      
    });
}

function fillHeart(heart){
  heart.textContent = FULL_HEART;
  heart.classList.add("activated-heart");
  console.log("fill heart");
}

function emptyHeart(heart){
  heart.textContent = EMPTY_HEART;
  heart.classList.remove("activated-heart");
  console.log("empty heart");

}