let counter = 0
const x = document.querySelector('#start')
const title = document.querySelector('h1')
const countSpan = document.querySelector('#counter')

x.onclick = function() {
  x.innerHTML = 'are you happy now?'
}

x.onmouseover = function() {
  if (counter > 3) {
    title.innerHTML = 'I will stop moving...just click'
    return
  }

  // counter++
  counter = counter + 1

  countSpan.innerHTML = counter

  let plusOrMinus = 1
  if (Math.random() < 0.5) {
    plusOrMinus = -1
  }

  // create 2 random numbers, store them in variable
  const randX = Math.random() * (window.innerWidth/2 - 100) * plusOrMinus
  const randY = Math.random() * (window.innerHeight/2 - 100) * plusOrMinus

  x.style.transform = `translate(${randX}px, ${randY}px)`
}