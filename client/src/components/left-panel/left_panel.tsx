import React, { useState } from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../redux/redux-store'
import { actionsDevice, TypedeviceType } from '../../redux/reducers/device-reducer'
import style from './left-panel.module.scss'



interface propsType {
    typeDevice: any
    deviceAction: any
}
// TODO смделдать типы

const LeftPanel: React.FC<propsType & any> = ({ typeDevice, actionDevice, deviceAction }) => {
    const state = typeDevice
    return (
        <div>
            <ul>
                {state.typeDevice.map((type: any) =>
                    (<ol key={type.id} onClick={() => actionDevice(type.id)} className={(type.id === deviceAction.id ? style.test2 : '')} >{type.name}</ol>)
                )}
            </ul>
        </div>
    )

}
const mapStateToProps = (state: AppState) => ({
    typeDevice: state.device,
    deviceAction: state.device.selectedType
})

export default connect(mapStateToProps, { actionDevice: actionsDevice.selectedType })(LeftPanel)