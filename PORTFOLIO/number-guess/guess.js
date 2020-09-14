const startBtn = document.getElementById('start')

startBtn.onclick = function() {
  const randomNumber = Math.ceil(Math.random() * 10)
  console.log(randomNumber)

  const yourGuess = window.prompt('Guess a number from 1 to 10')
  // complete the rest...
}