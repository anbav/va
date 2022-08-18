(function() {
  class ClipCalc extends HTMLElement {
    constructor() {
      super()

      const shadow = this.attachShadow({ mode: 'open' })

      const clipCalc = document.createElement('div')

      let clipCalcText = 'calc'

      clipCalc.classList.add('clip-calc')

      clipCalc.innerHTML =
        `
          <style>
            .calc {
              width: 166px;
              height: 45px;
              border: none;
              border-radius: 22.5px;
              background-color: #d8d8d8;
              transition: height .5s ease-in-out;

              display: flex;
              justify-content: center;
            }
          </style>
          <div class='calc'>
            <button>${clipCalcText}</button>
          </div>
        `

      //binding methods
      this.openCalc = this.openCalc.bind(this)
      
      shadow.appendChild(clipCalc)
    }

    openCalc(e) {

    }

    connectedCallback() {
      //post- mount actions
    }

  }

  customElements.define('clip-calc', ClipCalc)
})()