export class Form {
  static initListeners () {
    const passwordField = document.querySelector('.form__password-input')
    const showPasswordLabelShow = document.querySelector('.form__show-label-show')
    const showPasswordLabelHide = document.querySelector('.form__show-label-hide')

    let isPasswordShown = false

    showPasswordLabelShow.addEventListener('click', () => {
      togglePasswordVisibility()
      toggleShowLabel()
    })
    showPasswordLabelHide.addEventListener('click', () => {
      togglePasswordVisibility()
      toggleShowLabel()
    })

    function togglePasswordVisibility () {
      if (isPasswordShown === false) {
        passwordField.type = 'text'
        isPasswordShown = true
      } else {
        passwordField.type = 'password'
        isPasswordShown = false
      }
    }

    function toggleShowLabel () {
      showPasswordLabelShow.classList.toggle('form__show-label_hidden')
      showPasswordLabelHide.classList.toggle('form__show-label_hidden')
    }
  }
}
