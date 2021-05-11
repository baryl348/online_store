import React, { useState } from 'react'
import { BrandsType, selectedType } from '../../redux/reducers/device-reducer'
import style from './brand.module.scss'

interface propsType {
    brands: Array<BrandsType>
    selectedBrand: selectedType
    actionSelectedBrand: (id: number) => void
    getBrands: () => Array<BrandsType> | any
}

export const Brand: React.FC<propsType> = ({ brands, actionSelectedBrand, selectedBrand, getBrands }) => {
    const [brandState, setBrandState] = useState(null)
    if (brandState === null) {
        setBrandState(getBrands())
    }
    return (
        <div className={style.list__brand}>
            {brands.map((item) => (
                <span key={item.id} onClick={() => actionSelectedBrand(item.id)} className={(item.id === selectedBrand.id ? style.list__brand_select : '')} >{item.name}</span>
            ))}
        </div>
    )
}