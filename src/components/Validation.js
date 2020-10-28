export class Validation {
  constructor () {
    this.signUpBtn = document.querySelector('.form__sign-up-btn')
    this.passwordField = document.querySelector('.form__password-input')
    this.validationList =
      document.querySelector('.form__password-validation-list')
    this.passwordSuccessText =
      document.querySelector('.form__password-success-text')

    this.validationPointNumber =
      document.querySelector('.form__validation-point-number')
    this.validationPointUppercase =
      document.querySelector('.form__validation-point-uppercase')
    this.validationPointLowercase =
      document.querySelector('.form__validation-point-lowercase')
    this.validationPointLength =
      document.querySelector('.form__validation-point-length')
    this.validationPointSymbol =
      document.querySelector('.form__validation-point-symbol')

    this.initListeners()
  }

  initListeners () {
    this.passwordField.addEventListener('input', () => {
      this.validatePasswordRequirements()
      this.validatePassword()
    })
  }

  validatePasswordRequirements () {
    if (this.passwordField.value.match(/[0-9]/)) {
      this.validationPointNumber
        .classList.add('form__validation-point_validated')
      this.validationPointNumber.firstElementChild
        .classList.add('form__validation-bullet_validated')
    } else {
      this.validationPointNumber
        .classList.remove('form__validation-point_validated')
      this.validationPointNumber.firstElementChild
        .classList.remove('form__validation-bullet_validated')
    }

    if (this.passwordField.value.match(/[a-z]/)) {
      this.validationPointLowercase
        .classList.add('form__validation-point_validated')
      this.validationPointLowercase.firstElementChild
        .classList.add('form__validation-bullet_validated')
    } else {
      this.validationPointLowercase
        .classList.remove('form__validation-point_validated')
      this.validationPointLowercase.firstElementChild
        .classList.remove('form__validation-bullet_validated')
    }

    if (this.passwordField.value.match(/[A-Z]/)) {
      this.validationPointUppercase
        .classList.add('form__validation-point_validated')
      this.validationPointUppercase.firstElementChild
        .classList.add('form__validation-bullet_validated')
    } else {
      this.validationPointUppercase
        .classList.remove('form__validation-point_validated')
      this.validationPointUppercase.firstElementChild
        .classList.remove('form__validation-bullet_validated')
    }

    if (this.passwordField.value.match(
        /[-!$%#@^&*()_+|~=`{}\[\]:";'<>?,.\/]/
      )) {
      this.validationPointSymbol
        .classList.add('form__validation-point_validated')
      this.validationPointSymbol.firstElementChild
        .classList.add('form__validation-bullet_validated')
    } else {
      this.validationPointSymbol
        .classList.remove('form__validation-point_validated')
      this.validationPointSymbol.firstElementChild
        .classList.remove('form__validation-bullet_validated')
    }

    if (this.passwordField.value.length >= 8) {
      this.validationPointLength
        .classList.add('form__validation-point_validated')
      this.validationPointLength.firstElementChild
        .classList.add('form__validation-bullet_validated')
    } else {
      this.validationPointLength
        .classList.remove('form__validation-point_validated')
      this.validationPointLength.firstElementChild
        .classList.remove('form__validation-bullet_validated')
    }
  }

  validatePassword () {
    if (this.passwordField.value.match(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/)) {
      this.signUpBtn.disabled = false
      this.validationList.classList
        .add('form__password-validation-list_hidden')
      this.passwordSuccessText.classList
        .remove('form__password-success-text_hidden')
    } else {
      this.signUpBtn.disabled = true
      this.validationList.classList
        .remove('form__password-validation-list_hidden')
      this.passwordSuccessText.classList
        .add('form__password-success-text_hidden')
    }
  }
}
