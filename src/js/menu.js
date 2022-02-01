const MenuItems = () => {
  const items = ['info', 'tools', 'sup']

  let active = 'info'

  const createButton = (id) => {
    const button = document.createElement('button')
    button.setAttribute('id', id)
    button.setAttribute('class', (active === id) ? 'button-active' : 'button')
    button.onclick = () => { 
      items.filter(i => i !== id).forEach(item => {
        let el = document.querySelector(`#${item}`)
        if (el.classList.contains('button-active')) {
          el.classList.remove('button-active')
          el.classList.add('button')
        } else {
          let el = document.querySelector(`#${id}`)
          el.classList.remove('button')
          el.classList.add('button-active')
        }
      })
    }

    return button
  }

  return items.map(items => createButton(items))
}

export const Menu = () => {
  const centerdDiv = document.createElement('div')
  const newDiv = document.createElement('div')
  const menuBtns = MenuItems()

  newDiv.innerHTML = 'vibu anbarasan is a designer, developer based out of nyc.'
  newDiv.setAttribute('class', 'vibu')
  newDiv.onclick = () => { alert('clicking') }

  centerdDiv.setAttribute('class', 'center-align')
  centerdDiv.appendChild(newDiv)
  menuBtns.forEach(item => centerdDiv.appendChild(item))

  return centerdDiv
}