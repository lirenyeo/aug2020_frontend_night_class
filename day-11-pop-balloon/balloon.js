const MAX_LIFE = 4

let score = 0
let life = MAX_LIFE
let timer

const box = document.querySelector('#box')
const popSound = document.querySelector('audio')
const scoreCount = document.querySelector('#score-count')
const subtitle = document.querySelector('h2')
const resetBtn = document.querySelector('#reset-btn')
const startBtn = document.querySelector('#start-btn')

function gameOver() {
  clearInterval(timer)
  subtitle.innerHTML = 'Game Over!'
  // to destroy all existing balloons
  document.querySelectorAll('img').forEach(b => {
    b.remove()
  })
  // show play again button
  resetBtn.style.display = 'inline-block'
}

function addBalloon() {
  const balloon = document.createElement('img')
  balloon.src = "assets/red-balloon.png"
  balloon.style.left = Math.random() * (box.clientWidth - 100) + 'px'
  balloon.style.animationDuration = Math.random() * 3 + 2 + 's'

  balloon.onanimationend = function() {
    // reduce life count
    life-- // life = life - 1
    displayLifeCount()
    balloon.remove()

    // check life count is zero, if so, gameOver()
    if (life <= 0) {
      gameOver()
    }
  }

  balloon.onclick = function() {
    // increase score
    score++ // score = score + 1
    scoreCount.innerText = score

    popSound.load()
    popSound.play()
    balloon.remove()
  }

  box.insertAdjacentElement('beforeend', balloon)
}

function displayLifeCount() {
  subtitle.innerHTML = 'Life left: ' + '❤️ '.repeat(life)
}

function startGame() {
  startBtn.style.display = 'none'
  resetBtn.style.display = 'none'
  life = MAX_LIFE
  displayLifeCount()

  // call addBalloon() function every 0.5 second:
  timer = setInterval(addBalloon, 300)
}

// driver code:
resetBtn.style.display = 'none'

startBtn.onclick = () => {
  startGame()
}

resetBtn.onclick = () => {
  startGame()
}

/**
 * Another way of popping balloons is by adding
 * onclick event on the entire box, when clicked,
 * check if the clicked target is <img>, if so, pop it
 */
// box.onclick = (e) => {
//   if (e.target.tagName == 'IMG') {
//       score++ // score = score + 1
//       scoreCount.innerText = score

//       popSound.load()
//       popSound.play()
//       e.target.remove()
//   }
// }