import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../redux/redux-store'
import { actionsDevice, InitialStateType, TypedeviceType } from '../../redux/reducers/device-reducer'
import style from './left-panel.module.scss'



interface propsType {
    typeDevice: InitialStateType
    deviceAction: { id: number | null }
    actionDevice: (id: number) => void
}

const LeftPanel: React.FC<propsType> = ({ typeDevice, actionDevice, deviceAction }) => {
    const state = typeDevice
    return (
        <div className={style.left__panel}>
            <ul>
                {state.typeDevice.map((type: TypedeviceType) =>
                    (<ol key={type.id} onClick={() => actionDevice(type.id)} className={(type.id === deviceAction.id ? style.left__panel_list : '')} >{type.name}</ol>)
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