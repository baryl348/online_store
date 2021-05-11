import React, { useState } from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../redux/redux-store'
import { actionsDevice, InitialStateType, TypedeviceType, getTypeDevice } from '../../redux/reducers/device-reducer'
import style from './left-panel.module.scss'



interface propsType {
    typeDevice: Array<TypedeviceType>
    deviceAction: { id: number | null }
    actionDevice: (id: number) => void
    getTypeDevice: any
}

const LeftPanel: React.FC<propsType> = ({ actionDevice, deviceAction, getTypeDevice, typeDevice }) => {
    const [deviceType, setDeviceType] = useState(null)
    if (deviceType === null) {
        setDeviceType(getTypeDevice())
    }

    return (
        <div className={style.left__panel} >
            <ul>
                {typeDevice.map((type: TypedeviceType) =>
                    <ol key={type.id} onClick={() => actionDevice(type.id)} className={(type.id === deviceAction.id ? style.left__panel_list : '')}>{type.name}</ol>
                )}
            </ul>
        </div>
    )

}
const mapStateToProps = (state: AppState) => ({
    typeDevice: state.device.typeDevice,
    deviceAction: state.device.selectedType
})

export default connect(mapStateToProps, { actionDevice: actionsDevice.selectedType, getTypeDevice })(LeftPanel)