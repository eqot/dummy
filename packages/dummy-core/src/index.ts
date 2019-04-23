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
