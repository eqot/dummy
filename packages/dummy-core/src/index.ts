import WebBluetooth from './webBluetooth'

const discover = async () => {
  const peripheral = await WebBluetooth.discover(
    '10b20100-5b3b-4571-9508-cf3efcd7bbae'
  )

  peripheral.connect()
}

window.onload = () => {
  document.querySelector('#button').addEventListener('click', () => {
    discover()
  })
}

document.getElementById('app').innerHTML = `
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
<button id="button2">Discover</button>
`

document.querySelector('#button2').addEventListener('click', () => {
  discover()
})
