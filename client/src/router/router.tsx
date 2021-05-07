import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import AdminPage from '../admin_page/admin'
import LoginPage from '../components/auth/login/login'
import RegistrationPage from '../components/auth/registration/registration'
import Basket from '../components/basket/basket'
import Device from '../components/device/device'
import Shop from '../components/shop/shop'



export const useRouter = (isAuth: boolean) => {
    if (isAuth) {
        return (
            <Switch>
                <Redirect to="/main" />
                <Route path='/admin' render={() => <AdminPage />} />
                <Route path="/basket" render={() => <Basket />} />
                <Route path="/main" render={() => <Shop />} />
                <Route path="/device/:id" render={() => <Device />} />
                <Route path="/login" render={() => <LoginPage />} />
                <Route path="/registration" render={() => <RegistrationPage />} />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/login" render={() => <LoginPage />} />
            <Route path="/registration" render={() => <RegistrationPage />} />
            <Route path="/main" render={() => <Shop />} />
            <Route path="/device/:id" render={() => <Device />} />
            <Redirect to='/main' />
        </Switch>
    )
}
