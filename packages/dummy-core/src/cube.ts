import WebBluetooth from './webBluetooth'

class Cube {
  peripheral: any

  public static async discover() {
    const peripheral = await WebBluetooth.discover(
      '10b20100-5b3b-4571-9508-cf3efcd7bbae'
    )

    await peripheral.connect()

    return new Cube(peripheral)
  }

  constructor(peripheral) {
    this.peripheral = peripheral
  }

  public move(speeds: number[], duration: number) {
    const data = []

    data.push(duration ? 2 : 1)

    for (let i = 0; i < speeds.length; i++) {
      const speed = Math.max(Math.min(speeds[i], 100), -100)
      data.push(i + 1, speed >= 0 ? 1 : 2, Math.abs(speed))
    }

    if (duration) {
      data.push(duration * (1000 / 10))
    }

    this.peripheral.write('10b20102-5b3b-4571-9508-cf3efcd7bbae', data, false)
  }
}

/*
document.getElementById('app').innerHTML = `
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
<button id="button">Discover</button>
`

document.querySelector('#button').addEventListener('click', () => {
  discover()
})
*/

window.Cube = Cube

export default Cube
