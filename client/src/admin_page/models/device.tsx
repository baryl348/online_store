import { Field, Form, Formik } from 'formik'
import React from 'react'
import { BrandsType, TypedeviceType } from '../../redux/reducers/device-reducer'
import style from './createDevice.module.scss'

interface propsType {
    onClose: () => void
    deviceType: Array<TypedeviceType>
    brandDevice: Array<BrandsType>
}


export const DeviceModels: React.FC<propsType> = ({ onClose, deviceType, brandDevice }) => {
    return (<div className={style.modal} >
        <div className={style.modal__dialog} onClick={(e) => e.stopPropagation()}>
            <h3>Добавление устройства</h3>
            <Formik initialValues={{ typeId: '', brandId: '' }} onSubmit={(values, { setSubmitting }) => {
                console.log(values)
                setSubmitting(false)
            }}>
                {({ isSubmitting }) => (
                    <Form className={style.modal__form}>
                        <h5>Выберите тип устройства</h5>
                        <Field name='typeId' component='select' >
                            {deviceType.map((item) => <option key={item.id}>{item.name}</option>)}
                        </Field>
                        <h5>Выберите бренд устройства</h5>
                        <Field name='brandId' component='select' >
                            {brandDevice.map((item) => <option key={item.id}>{item.name}</option>)}
                        </Field>
                        <h5>Наименование товара</h5>
                        <Field name='name' />
                        <h5>Цена на товар</h5>
                        <Field name='price' />
                        <h5>Описание товара</h5>
                        <Field name='info' />
                        <div>
                            <button type='submit' disabled={isSubmitting}>Добавить</button>
                            <button onClick={onClose}>Закрыть</button>
                        </div>
                    </Form>

                )}
            </Formik>
        </div>
    </div>)
}