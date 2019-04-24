import './styles.css'

document.getElementById('app').innerHTML = `
<div>
<button id="discover">Discover</button>
<button id="forward">Forward</button>
<button id="backward">Backward</button>
</div>
`

function send(message) {
  console.log(message)
  console.log(window.parent.parent)
  window.parent.parent.postMessage(message, '*')
}

document.querySelector('#discover').addEventListener('click', () => {
  send('discover')
})

document.querySelector('#forward').addEventListener('click', () => {
  send('forward')
})

document.querySelector('#backward').addEventListener('click', () => {
  send('backward')
})
