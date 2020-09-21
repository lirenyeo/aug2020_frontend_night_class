// Challenge 1: Write your answers here

setTimeout(() => {
  const entirePage = document.querySelector('body')
  entirePage.style.background = '#2f2f2f'

  const pageHeader = document.querySelector('header')
  pageHeader.style.backgroundImage = "url('https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')"

  const descriptions = document.querySelectorAll('.descriptions')
  descriptions[0].innerHTML = 'im <strong>cool</strong>'
  descriptions[1].innerText = 'im <strong>cool</strong>'

  const h2s = document.querySelectorAll('h2')

  h2s.forEach(x => {
    x.style.color = 'purple'
  })

  const ninjaPic = document.querySelector('#skill-images img')
  ninjaPic.src = 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

  const skillList = document.querySelector('#skills-list')
  skillList.insertAdjacentHTML('beforeend', '<li>are you guys okay?</li>')

  const article = document.querySelector('article')
  article.insertAdjacentHTML('beforeend', `
    <section>
      <h2>What do I think of JS?</h2>
      <p>it's rewarding, it takes times. you can do it.</p>
    </section>s
  `)

  const currentBackground = document.getElementById('random-section').style.backgroundColor
  const randomSection = document.querySelector('#random-section')
  if (currentBackground == 'black') {
    // change the text to white
    randomSection.style.color = 'white'
  }
}, 5000)