const open = '../../assets/open.svg'
const closed = '../../assets/closed.svg'
const satellite = '../../assets/satellite.svg'

const PanelCopy = (active) => {
  const info = document.createElement('div')
  info.innerHTML =
    `<p class='vibu-hl'>email: vibu.anbarasan@gmail.com<br>ig: @v.bu.a</p>`

  const tools = document.createElement('div')
  tools.innerHTML =
    `<p class='vibu-hl'>prioritizing the personal, my design/dev cycle begins with the experience.</p>
    <p>React, MUI, vanilla JS,</p>`

  const sup = document.createElement('div')
  sup.innerHTML =
    `<p>working mostly, watching anime and climbing during free time.</p>
    <p>-- February 9, 2022</p>
    <img src=${satellite} alt='satellite'>`
  
  return(
    active === 'info' ?
      info
    : active === 'tools' ?
      tools :
      sup
  )
}

const Menu = () => {
  const menu = document.createElement('div')
  const menuItems = document.createElement('div')

  const items = ['info', 'tools', 'sup']

  let active = 'info'

  const createButton = (item) => {
    const button = document.createElement('div')
    const dial = document.createElement('div')
    const text = document.createElement('p')

    button.setAttribute('class', 'menu-item')
    button.onclick = () => {
      active = button.firstChild.id

      items.forEach(i => {
        let el = document.querySelector(`#${i}`)
        let menu =  document.getElementById('menu')
        
        if (el.id === active) {
          el.innerHTML = `<img src=${open} alt='menu-btn'/>`
          menu.removeChild(menu.lastChild)
          menu.appendChild(PanelCopy(active))
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

  menu.setAttribute('id', 'menu')
  menu.setAttribute('class', 'center-align-menu')

  menuItems.setAttribute('class', 'center-align')

  items.map(item => createButton(item)).forEach(i => {
    menuItems.appendChild(i)
  })

  menu.appendChild(menuItems)
  menu.appendChild(PanelCopy('info'))

  return menu
}

export const Page = () => {
  const page = document.createElement('div')
  const card = document.createElement('div')
  const menu = Menu()

  card.innerHTML = 
    `<p class='vibu-text'>vibu anbarasan is a <span class='vibu-hl'>designer</span>, <span class='vibu-hl'>developer</span> based out of nyc.</p>`
  card.setAttribute('class', 'vibu')

  page.setAttribute('class', 'center-align-body')
  page.appendChild(card)
  page.appendChild(menu)

  return page
}