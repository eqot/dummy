export default class Peripheral {
  private serviceUuid: BluetoothServiceUUID
  private device: BluetoothDevice
  private characteristics: {
    [key: string]: BluetoothRemoteGATTCharacteristic
  } = {}

  constructor(serviceUuid: BluetoothServiceUUID, device: BluetoothDevice) {
    console.log(device)
    this.serviceUuid = serviceUuid
    this.device = device
  }

  public async connect(): Promise<void> {
    try {
      const server = await this.device.gatt.connect()
      console.log('0')

      const service = await server.getPrimaryService(this.serviceUuid)
      console.log('1')

      const characteristics = await service.getCharacteristics(
        '10b20102-5b3b-4571-9508-cf3efcd7bbae'
      )
      console.log('2')

      for (const characteristic of characteristics) {
        this.characteristics[characteristic.uuid] = characteristic
      }
      console.log('3')
    } catch (error) {
      console.log(error)
    }
  }

  public read(
    characteristicUuid: BluetoothCharacteristicUUID
  ): Promise<DataView> {
    return this.characteristics[characteristicUuid].readValue()
  }

  public write(
    characteristicUuid: BluetoothCharacteristicUUID,
    data: number[],
    withResponse: boolean
  ) {
    return this.characteristics[characteristicUuid].writeValue(
      new Uint8Array(data)
    )
  }
}
