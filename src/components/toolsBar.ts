
const el = document.createElement('div')
el.className = 'tools-bar-container'

const tabButton = document.createElement('div')
tabButton.className = ''
tabButton.innerHTML = `
  ->
`

el.append(tabButton)

export default el
