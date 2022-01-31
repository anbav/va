import { Menu } from './menu.js'

const newDiv = document.createElement('div')

newDiv.setAttribute('class', 'app')
newDiv.appendChild(Menu())

document.body.appendChild(newDiv)