import Peripheral from './peripheral'

class WebBluetooth {
  public static async discover(
    serviceUuid: BluetoothServiceUUID
  ): Promise<Peripheral> {
    try {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: false,
        filters: [{ services: [serviceUuid] }],
        optionalServices: [serviceUuid]
      })

      return new Peripheral(serviceUuid, device)
    } catch (error) {
      console.log(error.message)
    }
  }
}

export default WebBluetooth
