import { Menu } from './menu.js'

const app = document.createElement('div')

app.setAttribute('class', 'app')
app.appendChild(Menu())

document.body.appendChild(app)