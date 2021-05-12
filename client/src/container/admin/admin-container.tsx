import React from 'react'
import { connect } from 'react-redux'
import AdminPage from '../../admin_page/admin'
import { BrandsType, TypedeviceType } from '../../redux/reducers/device-reducer'
import { AppState } from '../../redux/redux-store'

interface propsType {
    deviceType: Array<TypedeviceType>
    brandDevice: Array<BrandsType>
}

const AdminContainer: React.FC<propsType> = ({ deviceType, brandDevice }) => {
    console.log(deviceType, 'hmmm')
    return (
        <div>
            <AdminPage deviceType={deviceType} brandDevice={brandDevice} />
        </div>
    )
}
const mapStateToProps = (state: AppState) => ({
    deviceType: state.device.typeDevice,
    brandDevice: state.device.brands
})
export default connect(mapStateToProps, {})(AdminContainer)