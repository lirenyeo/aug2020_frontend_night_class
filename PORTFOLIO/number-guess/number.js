// function ageTeller() {
//   const age = window.prompt('How old are you?')

//   if (isNaN(age) || age == null || age == '') {
//     alert('please key in a number')
//     return
//   }

//   if (age < 0) {
//     alert("that's not possible")
//     return
//   }

//   if (age <= 18) {
//     alert('you are below 18')
//   } else if (age > 18 && age <= 30) {
//     alert('you above 18 and below 65')
//   } else if (age > 30 && age <= 65) {
//     alert('you are above 30 and below 65')
//   } else {
//     alert('you are above 65')
//   }
// }

// ageTeller()



const PAGE_NAME = window.prompt('What is your page name?')
const startBtn = document.getElementById('start')

function fullName(firstName, lastName) {
  return firstName + ' ' + lastName
}

function greetFullName(firstName, lastName) {
  const fn = fullName(firstName, lastName)
  // document.write('Welcome to ' + PAGE_NAME + '! ' + firstName + ' ' + lastName + '.')
  document.write(`Welcome to ${PAGE_NAME}! ${fn}. 🥰`)
}

startBtn.onclick = function() {
  const first = window.prompt("What's your first name?")
  const last = window.prompt(`What's your last name?`)

  greetFullName(first, last)
}
