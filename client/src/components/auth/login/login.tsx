import React from 'react'
import { Formik, Form, Field } from 'formik'
import { connect } from 'react-redux';
import { loginThunk } from '../../../redux/reducers/auth-reducer'
import { AppState } from '../../../redux/redux-store';

interface propsType {
    loginThunk: (email: string, password: string) => void
    error: string | null
}


const LoginPage: React.FC<propsType> = ({ loginThunk, error }) => {
    return (
        <div>
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
                        // alert(JSON.stringify(values, null, 2));
                        loginThunk(values.email, values.password,)
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="email" name="email" />
                        {/* <ErrorMessage name="email" component="div" /> */}
                        <Field type="password" name="password" />
                        {/* <ErrorMessage name="password" component="div" /> */}
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </Form>
                )}
            </Formik>
            <span>{error}</span>
        </div>
    )
}
const mapStateToProps = (state: AppState) => ({
    error: state.auth.error
})
export default connect(mapStateToProps, { loginThunk })(LoginPage)