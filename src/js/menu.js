const MenuItems = () => {
  const wrapper = document.createElement('div')

  const items = ['info', 'tools', 'sup']

  let active = 'info'

  const createButton = (id) => {
    const button = document.createElement('div')
    const dial = document.createElement('button')
    const text = document.createElement('p')

    button.setAttribute('class', 'menu-item')
    button.onclick = () => { 
      items.filter(i => i !== id).forEach(item => {
        let el = document.querySelector(`#${item}`)
        if (el.classList.contains('dial-active')) {
          el.classList.remove('dial-active')
          el.classList.add('dial')
        } else {
          let el = document.querySelector(`#${id}`)
          el.classList.remove('dial')
          el.classList.add('dial-active')
        }
      })
    }

    dial.setAttribute('id', id)
    dial.setAttribute('class', (active === id) ? 'dial-active' : 'dial')

    text.setAttribute('class', 'button-text')
    text.innerHTML = `${id === 'sup' ? 'sup?' : id}`

    button.appendChild(dial)
    button.appendChild(text)

    return button
  }

  wrapper.setAttribute('class', 'center-align')

  items.map(item => createButton(item)).forEach(i => {
    wrapper.appendChild(i)
  })

  return wrapper
}

export const Menu = () => {
  const centerdDiv = document.createElement('div')
  const newDiv = document.createElement('div')
  const menu = MenuItems()

  newDiv.innerHTML = `<p class='vibu-text'>vibu anbarasan is a designer, developer based out of nyc.</p>`
  newDiv.setAttribute('class', 'vibu')

  centerdDiv.setAttribute('class', 'center-align')
  centerdDiv.appendChild(newDiv)
  centerdDiv.appendChild(menu)

  return centerdDiv
}