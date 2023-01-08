export function scrollAnime() {
  const arrayContainer = [...document.querySelectorAll('.reveal')]

  let showContent = window.innerHeight - 250,
      showProvide = arrayContainer[0].getBoundingClientRect().top,

      showPopular = arrayContainer[1].getBoundingClientRect().top,
      showRecently = arrayContainer[2].getBoundingClientRect().top,

      showSubscribe = arrayContainer[3].getBoundingClientRect().top,
      showFooter = arrayContainer[4].getBoundingClientRect().top


  if (showProvide < showContent) 
    arrayContainer[0].classList.add('active')

  if (showPopular < showContent) 
    arrayContainer[1].classList.add('active')

  if (showRecently < showContent) 
    arrayContainer[2].classList.add('active')

  if (showSubscribe < showContent) 
    arrayContainer[3].classList.add('active')

  if (showFooter < showContent) 
    arrayContainer[4].classList.add('active')
}
