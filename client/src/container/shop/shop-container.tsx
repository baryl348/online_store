import React from 'react'
import { connect } from 'react-redux'
import Shop from '../../components/shop/shop'
import { actionsDevice, BrandsType, selectedType } from '../../redux/reducers/device-reducer'
import { AppState } from '../../redux/redux-store'

interface propsType {
    brands: Array<BrandsType>
    selectedBrand: selectedType
    actionSelectedBrand: (id: number) => void
}

const ShopContainer: React.FC<propsType & any> = ({ brands, actionSelectedBrand, selectedBrand }) => {
    return (
        <div>
            <Shop brands={brands} actionSelectedBrand={actionSelectedBrand} selectedBrand={selectedBrand} />
        </div>
    )
}
const mapStateToProps = (state: AppState) => ({
    brands: state.device.brands,
    selectedBrand: state.device.selectedBrand
})
export default connect(mapStateToProps, { actionSelectedBrand: actionsDevice.selectedBrand })(ShopContainer)