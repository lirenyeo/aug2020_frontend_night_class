const todoForm = document.querySelector('form')
const todoInput = document.querySelector('#todo-input')
const addButton = document.querySelector('#add-btn')
const list = document.querySelector('#todo-list')

fetch('https://simple-crud-server.glitch.me/getTodos')
  .then((resp) => resp.json())
  .then((result) => {
    // console.log(result)
    result.forEach((item) => {
      // console.log(item)
      const newItem = document.createElement('div')
      newItem.id = item.id
      newItem.classList.add('item')
      newItem.innerText = item.todo
      list.insertAdjacentElement('afterbegin', newItem)
    })
  })

todoForm.onsubmit = (e) => {
  e.preventDefault()
  if (todoInput.value.length < 3) {
    return
  }

  // disable button & change text to 'Adding...'
  addButton.disabled = true
  addButton.value = 'Adding...'

  fetch('https://simple-crud-server.glitch.me/addTodo', {
    method: 'POST',
    body: JSON.stringify({ todo: todoInput.value }),
    headers: { 'Content-Type': 'application/json' },
  })
  .then(response => response.json())
  .then(result => {
    if (result.message == 'success') {
      const newItem = document.createElement('div')
      newItem.classList.add('item')
      newItem.innerText = todoInput.value
      list.insertAdjacentElement('afterbegin', newItem)

      // clear the todoInput
      todoInput.value = ''

      // revert button text to 'Add Todo'
      addButton.value = 'Add Todo'
    }
  })

  // dangerous way:
  // list.insertAdjacentHTML('afterbegin', `
  //   <div class="item">${todoInput.value}</div>
  // `)
}

todoInput.oninput = () => {
  if (todoInput.value.length >= 3) {
    addButton.disabled = false
  } else [(addButton.disabled = true)]
}

list.onclick = (e) => {
  e.target.innerHTML = '<small><strong>Deleting...</strong></small>'
  fetch(`https://simple-crud-server.glitch.me/deleteTodo?id=${e.target.id}`, {
    method: 'POST'
  })
  .then(resp => resp.json())
  .then(result => {
    console.log(result)
    e.target.remove()
  })
}