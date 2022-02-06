const open = '../../assets/open.svg'
const closed = '../../assets/closed.svg'

const MenuItems = () => {
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
        console.log(el.id)
        if (el.id === active) {
          el.innerHTML = `<img class='dial' src=${open} alt='menu-btn'/>`
        } else {
          el.innerHTML = `<img class='dial' src=${closed} alt='menu-btn'/>`
        }
      })
    }

    dial.setAttribute('id', item)
    dial.innerHTML = `<img class='dial' src=${(active === item) ? open : closed} alt='menu-btn'/>`

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
    `<p class='vibu-text'>vibu anbarasan is a <span class='vibu-hl'>designer</span>, <span class='vibu-hl'>developer</span> based out of nyc.</p>`
  card.setAttribute('class', 'vibu')

  centerdDiv.setAttribute('class', 'center-align-body')
  centerdDiv.appendChild(card)
  centerdDiv.appendChild(menu)

  return centerdDiv
}