export const Menu = () => {
  const centerdDiv = document.createElement('div')

  const newDiv = document.createElement('div')

  newDiv.innerHTML = 'vibu anbarasan is a designer, developer based out of nyc.'
  newDiv.setAttribute('class', 'vibu')
  newDiv.onclick = () => { alert('clicking') }

  centerdDiv.setAttribute('class', 'center-align')
  centerdDiv.appendChild(newDiv)

  return centerdDiv
}