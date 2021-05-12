import React from 'react'
import { connect } from 'react-redux'
import Device from '../../components/device/device'
import { AppState } from '../../redux/redux-store'
import { DeviceType } from '../../redux/reducers/device-reducer'

interface propsType {
    device: Array<DeviceType>
}

const DeviceContainer: React.FC<propsType & any> = ({ device }) => {
    return (
        <div>
            <Device device={device} />
        </div>
    )
}
const mapStateToProps = (state: AppState) => ({
    device: state.device.device
})
export default connect(mapStateToProps, null)(DeviceContainer)