const MAX_LIFE = 5

let score = 0
let life = MAX_LIFE
let balloonInterval

const box = document.querySelector('#box')
const popSound = document.querySelector('audio')
const scoreCount = document.querySelector('#score-count')
const subtitle = document.querySelector('h2')
const startBtn = document.querySelector('#start-btn')
const resetBtn = document.querySelector('#reset-btn')


function startGame() {
  life = MAX_LIFE
  score = 0
  displayLifeCount()
  scoreCount.innerHTML = 0
  window.clearInterval(balloonInterval)
  startBtn.style.display = 'none'
  resetBtn.style.display = 'none'
  balloonInterval = window.setInterval(addBalloon, 500)
}

function gameOver() {
  resetBtn.style.display = 'block'
  document.querySelectorAll('img').forEach((b) => b.remove())
  window.clearInterval(balloonInterval)
  subtitle.innerHTML = `Game over!`
}

function displayLifeCount() {
  subtitle.innerHTML = `Life count: ${'❤️ '.repeat(life)}`
}

function addBalloon() {
  const balloon = document.createElement('img')
  balloon.src = 'assets/red-balloon.png'
  balloon.style.left = Math.random() * (box.clientWidth - 100) + 'px'
  balloon.style.animationDuration = Math.random() * 3 + 2 + 's'

  balloon.onanimationend = function () {
    life--
    displayLifeCount()
    if (life <= 0) {
      gameOver()
    }
    balloon.remove()
  }

  balloon.onclick = function () {
    score++
    scoreCount.innerHTML = score

    popSound.load()
    popSound.play()
    balloon.remove()
  }

  box.insertAdjacentElement('beforeend', balloon)
}

resetBtn.style.display = 'none'
resetBtn.onclick = startGame
startBtn.onclick = startGame