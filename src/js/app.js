import { Page } from './page.js'

const app = document.createElement('div')

app.setAttribute('class', 'app')
app.appendChild(Page())

document.body.appendChild(app)