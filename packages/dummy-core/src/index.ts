import Cube from './cube'

document.getElementById('app').innerHTML = `
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
<button id="button">Discover</button>
`

document.querySelector('#button').addEventListener('click', async () => {
  // const Cube = window.Cube;
  const cube = await Cube.discover()
  cube.move([70, 70], 1000)
})
