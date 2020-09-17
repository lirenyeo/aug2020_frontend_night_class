let counter = 0
const x = document.querySelector('#start')
const title = document.querySelector('h1')

x.onclick = function() {
  x.innerHTML = 'merry christmas'
  x.style.borderRadius = '50%'
  window.location.href = "https://www.youtube.com/watch?v=oHg5SJYRHA0"
}

x.onmouseover = function() {
  counter = counter + 1
  // create 2 random numbers, store them in variable
  if (counter < 6) {
    const randX = Math.random() * 500
    const randY = Math.random() * 500
    x.style.transform = `translate(${randX}px, ${randY}px)`
  } else {
    title.innerHTML = 'NO MORE $1000, sorry!'
    x.innerHTML = 'I GIVE UP, touch me now!'
    x.style.background = 'red'
  }
}