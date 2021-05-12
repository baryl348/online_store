import React, { useState } from 'react'
import { BrandsType, TypedeviceType } from '../redux/reducers/device-reducer'
import { BrandDeviceModels } from './models/brandDevice'
import { DeviceModels } from './models/device'
import { TypeDevice } from './models/typeDevice'

interface propsType {
    deviceType: Array<TypedeviceType>
    brandDevice: Array<BrandsType>
}

const AdminPage: React.FC<propsType> = ({ deviceType, brandDevice }) => {
    const [modalBrand, setModalBrand] = useState(false)
    const onClose = () => {
        setModalBrand(false)
    }
    const [modalTypeDevice, setModalTypeDevice] = useState(false)
    const onCloseModalType = () => {
        setModalTypeDevice(false)
    }
    const [modalDevice, setModalDevice] = useState(false)
    const onCloseModalDevice = () => {
        setModalDevice(false)
    }
    return (
        <div>
            <button onClick={() => setModalTypeDevice(true)} >добавить тип устройства</button>
            {modalTypeDevice && <TypeDevice onClose={onCloseModalType} />}
            <button onClick={() => setModalBrand(true)}>
                добавить бренд
            </button>
            {modalBrand && <BrandDeviceModels onClose={onClose} />}
            <button onClick={() => setModalDevice(true)} >добавить устройство</button>
            {modalDevice && <DeviceModels onClose={onCloseModalDevice} deviceType={deviceType} brandDevice={brandDevice} />}
        </div>
    )
}
export default AdminPage