export const Button = () => {
  const newBtn = document.createElement('button')

  newBtn.innerHTML = '<div>hi</div>'
  newBtn.onclick = () => { alert('clicking') }

  return newBtn
}