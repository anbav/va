(function() {
  let temp = []

  class ClipCalc extends HTMLElement {
    constructor() {
      super()

      const shadow = this.attachShadow({ mode: 'open' })

      const clipCalc = document.createElement('div')

      clipCalc.classList.add('clip-calc')

      const inputValues = [
        [1, 2, 3, '/'],
        [4, 5, 6, '*'],
        [7, 8, 9, '+'],
        ['.', 0, '=', '-']
      ]

      clipCalc.innerHTML =
        `
          <style>
            input {
              color: black;
              cursor: pointer;
            }
            .calc {
              width: 166px;
              height: 45px;
              border-radius: 22.5px;
              background-color: #d8d8d8;
              transition: height .5s ease-in-out;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .open-calc-btn {
              width: 100px;
              height: 45px;
              font-size: 1.2rem;
              border: 0;
              background-color: #d8d8d8;
              text-align: center;
            }
            .open-calc {
              width: 153px;
              max-height: 0;
              transition: visibility .1s ease-in-out;
              visibility: hidden;
            }
            .display-group {
              border-radius: 7px;
              background-color: #e1fcea;
              padding: 9px 0;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            .ac-btn {
              background: none;
              font-size: 1rem;
              border: 0;
              padding: 1px 6px;
            }
            .display-value {
              font-size: 1rem;
              text-align: left;
              margin: 0;
              padding: 1px 6px;
            }
            .input-modal {
              width: 153px;
              padding: 10px 0;
            }
            .input-modal-row {
              display: flex;
              justify-content: space-between;
              padding: 6px 2px;
            }
            .input-modal-btn {
              border-radius: 50%;
              border: 0;
              width: 30px;
              height: 30px;
              background-color: #f6f6f6;
            }
          </style>
          <div class='calc'>
            <input class='open-calc-btn' type='button' value='calc'></input>
            <div class='open-calc'>
              <div class='display-group'>
                <input class='ac-btn' type='button' value='a/c'></input>
                <p class='display-value'></p>
              </div>
              <div class='input-modal'>
                ${inputValues.map(inputRow => `
                  <div class='input-modal-row'>
                    ${inputRow.map(inputValue => `
                      <input class='input-modal-btn'
                        ${['/', '*', '+', '-', '='].includes(inputValue) && `style='background-color: #d1e5ff;'`}
                        type='button'
                        value=${inputValue}></input>
                    `).join('')}
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `

      //binding methods
      this.openCalc = this.openCalc.bind(this)
      this.allClear = this.allClear.bind(this)
      this.evalExpr = this.evalExpr.bind(this)
      this.handleInput = this.handleInput.bind(this)
      
      shadow.appendChild(clipCalc)
    }

    openCalc(e) {
      const openCalcBtn = this.shadowRoot.querySelector('.open-calc-btn')
      let value = openCalcBtn.value
      openCalcBtn.value = (value === 'calc' ? 'x' : 'calc')

      const calc = this.shadowRoot.querySelector('.calc')
      calc.style.height = (value === 'calc' ? '268px' : '45px')

      const display = this.shadowRoot.querySelector('.open-calc')
      display.style.visibility = (value === 'calc' ? 'visible' : 'hidden')
    }

    allClear() {
      const displayValue = this.shadowRoot.querySelector('.display-value')
      displayValue.innerHTML = ''
      temp = []
    }

    evalExpr(value) {
      const displayValue = this.shadowRoot.querySelector('.display-value')

      if (value === '=' && temp.length === 2) {
        temp.push(displayValue.innerHTML)
        displayValue.innerHTML = Math.round(eval(`${temp[0]}${temp[1]}${temp[2]}`) * 100)/100
        //clear for new expression
        temp = []
        temp.push(displayValue.innerHTML, value)
      }
    }

    handleInput(e) {
      const displayValue = this.shadowRoot.querySelector('.display-value')
      const currentValue = displayValue.innerHTML

      if (!isNaN(e.target.value) || (e.target.value === '.')) {
        if (temp.includes('=')) {
          temp = []
          displayValue.innerHTML = e.target.value
          temp.push(displayValue.innerHTML)
        } else if (currentValue) {
          if (e.target.value !== '.') {
            displayValue.innerHTML = currentValue + e.target.value
          }
      
          if (!currentValue.includes('.')) {
            displayValue.innerHTML = currentValue + e.target.value
          }
        } else {
          displayValue.innerHTML = e.target.value
        }
      } else {
        if (currentValue && !currentValue.endsWith('.')) {
          if (temp.some(op => ['/', '*', '+', '-'].includes(op)) && e.target.value === '=') {
            this.evalExpr(e.target.value)
          } else {
            if (temp.length === 1) {
              temp.push(e.target.value)
              displayValue.innerHTML = ''
            } else {
              temp = []
              temp.push(currentValue, e.target.value)
              displayValue.innerHTML = ''
            }
          }
        }
      }
    }

    connectedCallback() {
      //post- mount actions
      const openCalcBtn = this.shadowRoot.querySelector('.open-calc-btn')
      openCalcBtn.addEventListener('click', this.openCalc, false)

      const acBtn = this.shadowRoot.querySelector('.ac-btn')
      acBtn.addEventListener('click', this.allClear, false)

      const inputValueBtns = this.shadowRoot.querySelectorAll('.input-modal-btn')
      inputValueBtns.forEach(btn => btn.addEventListener('click', this.handleInput, false))
    }

  }

  customElements.define('clip-calc', ClipCalc)
})()