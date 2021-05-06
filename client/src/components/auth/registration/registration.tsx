import React from 'react'
import { Formik, Form, Field } from 'formik'
import { connect } from 'react-redux';
import { registrationThunk } from '../../../redux/reducers/auth-reducer'

interface propsType {
    registrationThunk: (firstName: string, secondName: string, email: string, password: string) => void
}

const RegistrationPage: React.FC<propsType> = ({ registrationThunk }) => {
    return (
        <div>
            <Formik
                initialValues={{ firstName: '', secondName: '', email: '', password: '' }}
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
                        // alert(JSON.stringify(values, null, 2));
                        registrationThunk(values.firstName, values.secondName, values.email, values.password,)
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type='text' name='firstName' />
                        <Field type='text' name='secondName' />
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
export default connect(null, { registrationThunk })(RegistrationPage)