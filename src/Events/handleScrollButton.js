export function handleScrollButton() {
  const buttonTop = document.querySelector(".to-top")

  if (window.pageYOffset >= 390)
    buttonTop.classList.add("active")
    
  else 
    buttonTop.classList.remove("active")
}