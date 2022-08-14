export const Page = () => {
  const page = document.createElement('div')
  const intro = document.createElement('div')

  intro.innerHTML = 
    `
    <p>I'm a <span class='text-hl'>designer</span>, <span class='text-hl'>developer</span> based out of nyc.</p>
    <p>Recently, I've been taken by JavaScript's native web components.</p>
    `
  intro.setAttribute('class', 'text')

  page.setAttribute('class', 'center-align-body')
  page.appendChild(intro)

  return page
}