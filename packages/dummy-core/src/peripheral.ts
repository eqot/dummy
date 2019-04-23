export default class Peripheral {
  private device: any
  private characteristics: any

  constructor(device: any) {
    this.device = device

    console.log(this.device)
  }

  public connect() {
    return new Promise((resolve, reject) => {
      this.device.gatt
        .connect()
        .then((server: BluetoothRemoteGATTServer) =>
          server.getPrimaryService('10b20100-5b3b-4571-9508-cf3efcd7bbae')
        )
        .then((service: BluetoothRemoteGATTService) =>
          service.getCharacteristics()
        )
        .then((characteristics: BluetoothRemoteGATTCharacteristic[]) => {
          this.characteristics = {}
          for (const characteristic of characteristics) {
            this.characteristics[characteristic.uuid] = characteristic
          }

          resolve()
        })
        .catch(reject)
    })
  }
}
