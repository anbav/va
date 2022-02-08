const CopyPanel = (active) => {
  //returns copy element for active menuItem
}

const MenuItems = () => {
  const open = '../../assets/open.svg'
  const closed = '../../assets/closed.svg'

  const menuItems = document.createElement('div')

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

  menuItems.setAttribute('class', 'center-align')

  items.map(item => createButton(item)).forEach(i => {
    menuItems.appendChild(i)
  })

  return menuItems
}

export const Page = () => {
  const page = document.createElement('div')
  const card = document.createElement('div')
  const menu = MenuItems()

  card.innerHTML = 
    `<p class='vibu-text'>vibu anbarasan is a designer, developer based out of nyc.</p>`
  card.setAttribute('class', 'vibu')

  page.setAttribute('class', 'center-align-body')
  page.appendChild(card)
  page.appendChild(menu)

  return page
}