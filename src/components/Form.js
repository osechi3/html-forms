export class Form {
  constructor () {
    this.usernameField = document.querySelector('.form__username-input')
    this.passwordField = document.querySelector('.form__password-input')
    this.showPasswordLabelShow = document.querySelector('.form__show-label-show')
    this.showPasswordLabelHide = document.querySelector('.form__show-label-hide')
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
}
