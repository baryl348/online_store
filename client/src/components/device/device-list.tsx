import React from 'react'
import { useHistory } from 'react-router'
import { DeviceType } from '../../redux/reducers/device-reducer'
import style from './device.module.scss'

interface propsType {
    deviceList: Array<DeviceType>
}

export const DeviceList: React.FC<propsType> = ({ deviceList }) => {
    const history = useHistory()

    return (
        <div className={style.device__list}>
            <ul>
                {deviceList.map((item) => <ol key={item.id}> <div onClick={() => history.push(`/device/${item.id}`)}> <img src={item.img} alt="image" /> </div> <div className={style.device__list__name_device}>{item.name}</div> <div className={style.device__list__price_device} > Цена на товар {item.price} руб.</div> <div className={style.device__list__rating_device} > Рейтинг {item.rating} <span></span> </div> </ol>)}
            </ul>
        </div>
    )
}