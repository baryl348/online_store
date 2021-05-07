import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { AppState } from '../../redux/redux-store'
import style from './navBar.module.scss'

interface propsType {
    isAuth: boolean
}

const NavBar: React.FC<propsType & any> = ({ isAuth }) => {
    const [auth, setAuth] = useState(false)
    useEffect(() => {
        setAuth(isAuth)
    }, [isAuth])
    return (
        <div className={style.navBar}>
            <div className={style.navBar__logo}> <NavLink to='/'>Купи Айфон</NavLink> </div>
            <div className={style.navBar__nav} >
                {auth ? <span> <NavLink to='/admin'>Админ</NavLink> </span> : null}
                <span><NavLink to='/basket'>Корзина</NavLink></span>
                {auth ? <span>Выйти</span> : <span> <NavLink to='/login'>Войти</NavLink> </span>}

            </div>
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, null)(NavBar)