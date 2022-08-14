'use strict'

(function() {
  class Calculator extends HTMLElement {
    constructor() {
      super()

      const shadow = this.attachShadow({ mode: 'open' })

      const calculator = document.createElement('div')

      calculator.classList.add('calculator')

      calculator.innerHTML =
        `
          <style>
          </style>
          <div>
          </div>
        `
      
      shadow.appendChild(calculator)
    }

    connectedCallback() {
      //on mount actions
    }

  }

  customElements.define('calculator', Calculator)
})()