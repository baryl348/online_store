import { Field, Form, Formik } from 'formik'
import React from 'react'
import style from './typeDevice.module.scss'

interface propsType {
    onClose: () => void
}

export const TypeDevice: React.FC<propsType> = ({ onClose }) => {
    return (<div className={style.modal} >
        <div className={style.modal__dialog} onClick={(e) => e.stopPropagation()}>
            <h3>Добавление типа устройства</h3>
            <Formik initialValues={{ name: '' }} onSubmit={(values, { setSubmitting }) => {
                console.log(values)
                setSubmitting(false)
            }}>
                {({ isSubmitting }) => (
                    <Form className={style.modal__form}>
                        <Field type='text' name='name' placeholder='Введите название типа' />
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