import React from 'react'
import { DeviceType } from '../../redux/reducers/device-reducer'

interface propsType {
    device: any
}


const Device: React.FC<propsType> = ({ device }) => {
    return <div>
        <div>
            <div>  <img src={device.name} alt="" /></div>
            <div> nameDevice, rating, price</div>
        </div>
    </div>
}
export default Device