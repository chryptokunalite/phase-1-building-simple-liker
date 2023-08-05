// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", function(){
  const likeGlyphs = document.querySelectorAll(".like-glyph");
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");

  modal.classList.add("hidden");

  likeGlyphs.forEach(function (likeGlyph) {
    likeGlyph.addEventListener("click", function () {
      mimicServerCall()
      .then(function () {

        likeGlyph.classList.toggle("activated-heart");
        if (likeGlyph.textContent === EMPTY_HEART) {
          likeGlyph.textContent = FULL_HEART;
        } else {
          likeGlyph.textContent = EMPTY_HEART;
        }
        })
        .catch(function (error) {

          modalMessage.textContent = error;
          modal.classList.remove("hidden");
          setTimeout(function () {
            modal.classList.add("hidden");
          }, 3000);
          })
        })
      })
    })
  



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
