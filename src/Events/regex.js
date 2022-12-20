export function regexEmail() {
  const email = document.querySelector('#email'),
        button = document.querySelector('.subscribe button'),

        regex = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i

  if (email.value.match(regex)) button.disabled = false

  else button.disabled = true
}

export function disabledEmail() {
  const email = document.querySelector('#email'),
        button = document.querySelector('.subscribe button')
  
  if (button.disabled === false) {
    button.disabled = true
    email.disabled = true
  }
}
