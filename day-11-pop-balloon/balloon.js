let score = 0
const box = document.querySelector('#box')
const popSound = document.querySelector('audio')
const scoreCount = document.querySelector('#score-count')

function addBalloon() {
  const balloon = document.createElement('img')
  balloon.src = "assets/red-balloon.png"
  balloon.style.left = Math.random() * (box.clientWidth - 100) + 'px'
  balloon.style.animationDuration = Math.random() * 3 + 2 + 's'

  balloon.onanimationend = function() {
    // reduce life count
    // check life count is zero, if so, gameOver()
    balloon.remove()
  }

  balloon.onclick = function() {
    // increase score
    score++
    scoreCount.innerHTML = score

    popSound.load()
    popSound.play()
    balloon.remove()
  }

  box.insertAdjacentElement('beforeend', balloon)
}

// call addBalloon() function every 0.5 second:
setInterval(addBalloon, 500)