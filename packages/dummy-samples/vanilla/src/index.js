import './styles.css'

document.getElementById('app').innerHTML = `
<div>
  <button id="discover">Discover</button>
</div>
`

document.querySelector('#discover').addEventListener('click', async () => {
  console.log('discover')

  window.parent.parent.postMessage('discover', '*')
})
