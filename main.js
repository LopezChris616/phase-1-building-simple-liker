// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButtons = document.getElementsByClassName("like-glyph");
const errModal = document.getElementById("modal");
const errMessage = document.getElementById("modal-message");

for(const button of likeButtons) {
  button.addEventListener("click", () => {
    mimicServerCall()
      .then(resp => {
        const buttonArray = [...button.classList];

        button.textContent = FULL_HEART;
        button.classList.add("activated-heart");

        if(buttonArray.includes("activated-heart")) {
          button.classList.remove("activated-heart");
          button.textContent = EMPTY_HEART;
        }
      })
      .catch(err => {
        errModal.classList.remove("hidden");
        errMessage.textContent = err;
        setTimeout(() => errModal.classList.add("hidden"), 3000);
      })
  });
}



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
    }, 100);
  });
}

// mimicServerCall().then(resp => console.log(resp));