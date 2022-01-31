const MenuItems = () => {
}

export const Menu = () => {
  const centerdDiv = document.createElement('div')

  const newDiv = document.createElement('div')

  const imgEl = document.createElement('img')

  newDiv.innerHTML = 'vibu anbarasan is a designer, developer based out of nyc.'
  newDiv.setAttribute('class', 'vibu')
  newDiv.onclick = () => { alert('clicking') }

  imgEl.src = '../../assets/selected.svg'

  centerdDiv.setAttribute('class', 'center-align')
  centerdDiv.appendChild(newDiv)
  centerdDiv.appendChild(imgEl)

  return centerdDiv
}