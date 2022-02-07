const MenuItems = () => {
  const open = '../../assets/open.svg'
  const closed = '../../assets/closed.svg'

  const wrapper = document.createElement('div')

  const items = ['info', 'tools', 'sup']

  const createButton = (item) => {
    const button = document.createElement('div')
    const dial = document.createElement('div')
    const text = document.createElement('p')

    let active = 'info'

    button.setAttribute('class', 'menu-item')
    button.onclick = () => {
      active = button.firstChild.id

      items.forEach(i => {
        let el = document.querySelector(`#${i}`)
        
        if (el.id === active) {
          el.innerHTML = `<img src=${open} alt='menu-btn'/>`
        } else {
          el.innerHTML = `<img src=${closed} alt='menu-btn'/>`
        }
      })
    }

    dial.setAttribute('id', item)
    dial.setAttribute('class', 'dial')
    dial.innerHTML = `<img src=${(active === item) ? open : closed} alt='menu-btn'/>`

    text.setAttribute('class', 'button-text')
    text.innerHTML = `${(item === 'sup') ? 'sup?' : item}`

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
  const card = document.createElement('div')
  const menu = MenuItems()

  card.innerHTML = 
    `<p class='vibu-text'>vibu anbarasan is a <span class='vibu-des'>designer</span>, <span class='vibu-dev'>developer</span> based out of nyc.</p>`
  card.setAttribute('class', 'vibu')

  centerdDiv.setAttribute('class', 'center-align-body')
  centerdDiv.appendChild(card)
  centerdDiv.appendChild(menu)

  return centerdDiv
}