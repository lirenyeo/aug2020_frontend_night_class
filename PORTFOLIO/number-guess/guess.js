const startBtn = document.getElementById('start')
const pageTitle = document.querySelector('h1')
const winMessage = document.querySelector('#win-message')

const randomNumber = Math.ceil(Math.random() * 10)
console.log(randomNumber)




startBtn.onclick = function () {
  const yourGuess = window.prompt('Guess a number from 1 to 10')

  // handle alphabet input, cancel prompt, empty answer
  if (isNaN(yourGuess) || yourGuess == null || yourGuess == '') {
    alert('please key in a number')
    return
  }

  // handle out of range
  if (yourGuess < 1 || yourGuess > 10) {
    alert('your input out of range')
    return
  }

  // handle answer higher/lower
  if (randomNumber == yourGuess) {
    // document.write('CORRECT!!! Refresh to play again!')
    winMessage.innerHTML = '<h2>CORRECT!</h2>'
    startBtn.style.borderRadius = '50%'
    startBtn.style.background = '#dadada'
    startBtn.style.color = 'red'
    startBtn.innerHTML = 'PLAY AGAIN'
    // users can click 'play again' button to refresh the page
    startBtn.onclick = function() {
      window.location.reload()
    }

  } else if (randomNumber > yourGuess) {
    alert('your number is too low')
  } else if (randomNumber < yourGuess) {
    alert('your number is too high')
  }
}
