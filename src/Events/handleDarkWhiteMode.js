import sun from '../assets/svg/1-sun.svg'
import moon from '../assets/svg/2-moon.svg'

export function darkWhiteMode() {
  const toggle = document.querySelector('.toggle-background')

  if (!document.body.classList.contains('dark')) {
    document.body.classList.add('dark')
    toggle.src = sun

    localStorage.setItem('dark', "true") 
    properties(
      '#1A1714', 
      '#FFEAE0',
      'rgba(255,234,224,.6)',
      'rgba(255,234,224,.6)',
      'rgba(255,234,224,.05)')
  }

  else if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark')
    toggle.src = moon

    localStorage.setItem('dark', "false") 
    properties(
      '#FFEAE0', 
      '#2C2420',
      'rgba(44, 36, 32,.6)',
      'rgba(44, 36, 32,.6)',
      'rgba(44, 36, 32,.05)')
  }

  function properties(body, text, sombra, nevoa, nuvem) {
    document.documentElement.style.setProperty('--background-body', body)
    document.documentElement.style.setProperty('--color-text', text)
    
    document.documentElement.style.setProperty('--sombra', sombra)
    document.documentElement.style.setProperty('--nevoa', nevoa)
    document.documentElement.style.setProperty('--nuvem', nuvem)
  }
}

export function localStorageSushi() {
  const toggle = document.querySelector('.toggle-background')

  if (localStorage.getItem('dark') === null)
    localStorage.setItem('dark', "false")

  checkStatus()
  function checkStatus() {
    
    if (localStorage.getItem('dark') === "true") {
      document.body.classList.add('dark')
      toggle.src = sun

      properties(
        '#1A1714', 
        '#FFEAE0',
        'rgba(255,234,224,.6)',
        'rgba(255,234,224,.6)',
        'rgba(255,234,224,.05)')
    }

    else {
      document.body.classList.remove('dark')
      toggle.src = moon

      properties(
        '#FFEAE0', 
        '#2C2420',
        'rgba(44, 36, 32,.6)',
        'rgba(44, 36, 32,.6)',
        'rgba(44, 36, 32,.05)')

      console.log("down")
    }
    
  }

  function properties(body, text, sombra, nevoa, nuvem) {
    document.documentElement.style.setProperty('--background-body', body)
    document.documentElement.style.setProperty('--color-text', text)
    
    document.documentElement.style.setProperty('--sombra', sombra)
    document.documentElement.style.setProperty('--nevoa', nevoa)
    document.documentElement.style.setProperty('--nuvem', nuvem)
  }
}
