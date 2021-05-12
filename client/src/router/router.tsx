import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import LoginPage from '../components/auth/login/login'
import RegistrationPage from '../components/auth/registration/registration'
import Basket from '../components/basket/basket'
import AdminContainer from '../container/admin/admin-container'
import DeviceContainer from '../container/device/device-container'
import ShopContainer from '../container/shop/shop-container'




export const useRouter = (isAuth: boolean) => {
    if (isAuth) {
        return (
            <Switch>

                <Route path='/admin' render={() => <AdminContainer />} />
                <Route path="/basket" render={() => <Basket />} />
                <Route path="/main" render={() => <ShopContainer />} />
                <Route path="/device/:id" render={() => <DeviceContainer />} />
                <Route path="/login" render={() => <LoginPage />} />
                <Route path="/registration" render={() => <RegistrationPage />} />
                <Redirect to="/main" />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/login" render={() => <LoginPage />} />
            <Route path="/registration" render={() => <RegistrationPage />} />
            <Route path="/main" render={() => <ShopContainer />} />
            <Route path="/device/:id" render={() => <DeviceContainer />} />
            <Redirect to='/main' />
        </Switch>
    )
}
