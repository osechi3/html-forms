export class Form {
  constructor () {
    this.formElement = document.querySelector('.form')
    this.usernameField = document.querySelector('.form__username-input')
    this.passwordField = document.querySelector('.form__password-input')
    this.showPasswordLabelShow =
      document.querySelector('.form__show-label-show')
    this.showPasswordLabelHide =
      document.querySelector('.form__show-label-hide')
    this.isPasswordShown = false

    this.initListeners()
  }

  initListeners () {
    this.showPasswordLabelShow.addEventListener('click', () => {
      this.togglePasswordVisibility()
      this.toggleShowLabel()
    })
    this.showPasswordLabelHide.addEventListener('click', () => {
      this.togglePasswordVisibility()
      this.toggleShowLabel()
    })

    this.usernameField.addEventListener('focus', () => {
      this.showUsernameHint()

    })
    this.usernameField.addEventListener('blur', () => {
      this.removeUsernameHint()
    })
  }

  togglePasswordVisibility () {
    if (this.isPasswordShown === false) {
      this.passwordField.type = 'text'
      this.isPasswordShown = true
    } else {
      this.passwordField.type = 'password'
      this.isPasswordShown = false
    }
  }

  toggleShowLabel () {
    this.showPasswordLabelShow.classList.toggle('form__show-label_hidden')
    this.showPasswordLabelHide.classList.toggle('form__show-label_hidden')
  }

  showUsernameHint () {
    const usernameHint = document.createElement('div')
    usernameHint.textContent = 'Choose a username that contains only letters and numbers, or use your email address. This is for login only.'
    usernameHint.classList.add('form__username-hint')

    this.formElement.insertBefore(
      usernameHint,
      this.usernameField.nextElementSibling
    )

    setTimeout(() => {
      usernameHint.classList.add('animation-show')
    }, 100)
  }

  removeUsernameHint () {
    const usernameHint = document.querySelector('.form__username-hint')

      if (usernameHint) {
        usernameHint.classList.add('animation-hide')

        setTimeout(() => {
          usernameHint.remove()
        }, 400)
      }
  }
}
