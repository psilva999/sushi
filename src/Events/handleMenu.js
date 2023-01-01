export function colorMenuItem() {
  if (window.scrollY < 400)
    handleClassItems(0)

  if (window.scrollY >= 400 && window.scrollY <= 943)
    handleClassItems(1)

  if (window.scrollY >= 944 && window.scrollY <= 1626)
    handleClassItems(2)

  if (window.scrollY >= 1627)
    handleClassItems(3)
}

export function handleMenuList(e) {
  handleClassItems()
  hideMenu()

  if (!e.target.classList.contains("active"))
    e.target.classList.add("active")
}

function handleClassItems(e) {
  const li = document.querySelectorAll('header li'),
        arrayItems = [...li]

  li.forEach(item => item.classList.remove('active'))

  if (e !== undefined)
    if (!arrayItems[e].classList.contains("active"))
      arrayItems[e].classList.add("active")
}

export function headerScroll() {
  const header = document.querySelector("header")

  if (window.scrollY >= 1) {
    header.classList.add("fixed")
    header.style.animation = 'padding-rest-header .3s linear forwards'
  }

  else {
    header.classList.remove("fixed")
    header.style.animation = 'padding-initial-header .1s linear forwards'
  }
}

export function handleMenu() {
  const button = document.querySelector("header button"),
        menu = document.querySelector('header ul')

  if (!menu.classList.contains("active")) {
    button.classList.add('active')
    menu.classList.add("active")
    menu.style.animation = 'show-menu .2s linear forwards'
  }

  else if (menu.classList.contains("active")) 
    hideMenu()
}

export function closeMenuFromOutside(e) {
  if (e.target.id !== 'toggle-menu' && e.target.id !== 'menu' && document.querySelector('header ul').classList.contains("active")) { 
    hideMenu()
  }
}

export function hideMenu() {
  const button = document.querySelector("header button"),
        menu = document.querySelector('header ul')

  let hideMenu = setInterval(countdown, 100),
      tempo = 2

  function countdown() {
    tempo--
    menu.style.animation = 'hide-menu .2s linear forwards'
    
    if (tempo === 0) {
      button.classList.remove('active')
      menu.classList.remove("active")
      clearInterval(hideMenu)
    }
  }
} 
