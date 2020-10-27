import './styles/app.css'
import 'normalize.css'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/fontawesome'

import { Form } from './components/Form'

class App {
  constructor () {
    this.form = new Form()
  }
}

new App()
