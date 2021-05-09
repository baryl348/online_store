import React from 'react'
import { BrandsType, selectedType } from '../../redux/reducers/device-reducer'
import { Brand } from '../brand/brand'
import LeftPanel from '../left-panel/left_panel'
import NavBar from '../navBar/navBar'

interface propsType {
    brands: Array<BrandsType>
    selectedBrand: selectedType
    actionSelectedBrand: (id: number) => void
}


const Shop: React.FC<propsType> = ({ brands, actionSelectedBrand, selectedBrand }) => {
    return <div>
        <div> <NavBar /></div>
        <div> <Brand brands={brands} actionSelectedBrand={actionSelectedBrand} selectedBrand={selectedBrand} /> </div>
        <div><LeftPanel /></div>
    </div>
}
export default Shop;