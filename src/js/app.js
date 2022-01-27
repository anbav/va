// let dash = 1
// let size = 20

// function setup () {
//   pixelDensity(window.devicePixelRatio)
//   createCanvas(50, 50)
// }

// function draw () {
//   background('white')
//   drawingContext.setLineDash([dash, dash])
//   ellipse(25, 25, size)
// }

// function mousePressed() {
//   if (dist(mouseX, mouseY, 25, 25) <= size) {
//     if (dash === 1) {
//       dash = 3
//       size = 23
//     } else {
//       dash = 1
//       size = 20
//     }
//   }
// }

import { Menu } from './menu.js'

const newDiv = document.createElement('div')

newDiv.setAttribute('class', 'app')
newDiv.appendChild(Menu())

document.body.appendChild(newDiv)