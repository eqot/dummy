import Cube from './cube'

document.getElementById('app').innerHTML = `
<div>
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
<button id="button">Discover</button>
<button id="forward">Forward</button>
<button id="backward">Backward</button>
`

document.querySelector('#button').addEventListener('click', async () => {
  // const Cube = window.Cube;
  const cube = await Cube.discover()

  document.querySelector('#forward').addEventListener('click', () => {
    cube.move([70, 70], 500)
  })

  document.querySelector('#backward').addEventListener('click', () => {
    cube.move([-70, -70], 500)
  })
})
