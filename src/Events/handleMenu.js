export function handleMenuList() {
  const ul = document.querySelector('header ul')

  console.log(ul, ul.children)
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
