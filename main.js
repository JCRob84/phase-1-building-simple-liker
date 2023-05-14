// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const emptyHearts = document.querySelectorAll('.like-glyph');
emptyHearts.forEach(heart => {
  heart.addEventListener('click', handleLike);
});


function handleLike(event) {
  const heart = event.target;
  mimicServerCall()
    .then(() => {
      
      heart.classList.add('activated-heart');
      heart.innerHTML = FULL_HEART;
    })
    .catch(() => {
      
      const errorModal = document.getElementById('modal');
      errorModal.classList.remove('hidden');
      const errorMessage = document.getElementById('modal-message');
      errorMessage.textContent = 'Server Error. Please try again.';
      setTimeout(() => {
        errorModal.classList.add('hidden');
      }, 3000);
    });
}

// Provided function to mimic server call
function mimicServerCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.5) {
        resolve('success');
      } else {
        reject('error');
      }
    }, 300);
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
    }, 300);
  });
}
