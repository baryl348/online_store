import React from 'react'
import { BrandsType, DeviceType, selectedType } from '../../redux/reducers/device-reducer'
import { Brand } from '../brand/brand'
import { DeviceList } from '../device/device-list'
import LeftPanel from '../left-panel/left_panel'
import NavBar from '../navBar/navBar'
import style from './shop.module.scss'

interface propsType {
    brands: Array<BrandsType>
    selectedBrand: selectedType
    actionSelectedBrand: (id: number) => void
    getBrands: () => Array<BrandsType>
    deviceList: Array<DeviceType>
}


const Shop: React.FC<propsType> = ({ brands, actionSelectedBrand, selectedBrand, getBrands, deviceList }) => {
    return <div className={style.main} >
        <div> <NavBar /></div>
        <div> <Brand brands={brands} actionSelectedBrand={actionSelectedBrand} selectedBrand={selectedBrand} getBrands={getBrands} /> </div>
        <div className={style.main__content} >
            <div><LeftPanel /></div>
            <div> <DeviceList deviceList={deviceList} /></div>
        </div>
    </div>
}
export default Shop;