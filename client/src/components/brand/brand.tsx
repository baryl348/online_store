import React from 'react'
import { BrandsType, selectedType } from '../../redux/reducers/device-reducer'
import style from './brand.module.scss'

interface propsType {
    brands: Array<BrandsType>
    selectedBrand: selectedType
    actionSelectedBrand: (id: number) => void
}

export const Brand: React.FC<propsType> = ({ brands, actionSelectedBrand, selectedBrand }) => {
    return (
        <div className={style.list__brand}>
            {brands.map((item) => (
                <span key={item.id} onClick={() => actionSelectedBrand(item.id)} className={(item.id === selectedBrand.id ? style.list__brand_select : '')} >{item.name}</span>
            ))}
        </div>
    )
}