import './styles/app.css'
import 'normalize.css'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/fontawesome'

import { Form } from './components/Form'
import { Validation } from './components/Validation'

class App {
  constructor () {
    this.form = new Form()
    this.validation = new Validation()
  }
}

new App()
