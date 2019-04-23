import Peripheral from './peripheral'

class WebBluetooth {
  public static discover(serviceUuid: string): Promise<Peripheral> {
    return new Promise((resolve, reject) => {
      navigator.bluetooth
        .requestDevice({ filters: [{ services: [serviceUuid] }] })
        .then((device: any) => {
          resolve(new Peripheral(device))
        })
        .catch((error: any) => {
          console.warn(error)
          reject(error)
        })
    })
  }
}

export default WebBluetooth
