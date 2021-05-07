import React from 'react'
import { Formik, Form, Field } from 'formik'
import { connect } from 'react-redux';
import { loginThunk } from '../../../redux/reducers/auth-reducer'
import style from './login.module.scss'


interface propsType {
    loginThunk: (email: string, password: string) => void
    isAuth: boolean
    firstName: string
}


const LoginPage: React.FC<propsType & any> = ({ loginThunk }) => {


    return (
        <div className={style.login} >
            <Formik
                initialValues={{ email: '', password: '' }}
                //    validate={values => {
                //      const errors = {};
                //      if (!values.email) {
                //        errors.email = 'Required';
                //      } else if (
                //        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                //      ) {
                //        errors.email = 'Invalid email address';
                //      }
                //      return errors;
                //    }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        loginThunk(values.email, values.password,)
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (

                    <Form className={style.login__form}>
                        <h1>Login</h1>
                        <Field type="email" name="email" />
                        {/* <ErrorMessage name="email" component="div" /> */}
                        <Field type="password" name="password" />
                        {/* <ErrorMessage name="password" component="div" /> */}
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default connect(null, { loginThunk })(LoginPage)