import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Shop from '../../components/shop/shop'
import { actionsDevice, BrandsType, selectedType, getBrands, DeviceType, } from '../../redux/reducers/device-reducer'
import { AppState } from '../../redux/redux-store'
import { checkUser } from '../../redux/reducers/auth-reducer'

interface propsType {
    brands: Array<BrandsType>
    selectedBrand: selectedType
    actionSelectedBrand: (id: number) => void
    getBrands: () => Array<BrandsType>
    deviceList: Array<DeviceType>
}

const ShopContainer: React.FC<propsType & any> = ({ brands, actionSelectedBrand, selectedBrand, getBrands, deviceList, checkUser }) => {
    useEffect(() => {
        checkUser()
    })
    return (
        <div>
            <Shop brands={brands} actionSelectedBrand={actionSelectedBrand} selectedBrand={selectedBrand} getBrands={getBrands} deviceList={deviceList} />
        </div>
    )
}
const mapStateToProps = (state: AppState) => ({
    brands: state.device.brands,
    selectedBrand: state.device.selectedBrand,
    deviceList: state.device.device
})
export default connect(mapStateToProps, { actionSelectedBrand: actionsDevice.selectedBrand, getBrands, checkUser })(ShopContainer)