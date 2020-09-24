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


box.ondragstart = function() {
  return false
}

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
  // fastest balloon takes 1 second
  let modifier = Math.max(1, 3 - (score * 0.1))
  let speed = Math.random() * 3 + modifier + 's'
  console.log(modifier, speed)
  const balloon = document.createElement('img')
  balloon.src = 'assets/red-balloon.png'
  balloon.style.left = Math.random() * (box.clientWidth - 100) + 'px'
  balloon.style.animationDuration = speed

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