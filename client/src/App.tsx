import React from 'react';
import { connect } from 'react-redux';
import './index.scss'
import { AppState } from './redux/redux-store';
import { useRouter } from './router/router';

interface propsType {
  isAuth: boolean
}

const App: React.FC<propsType & any> = ({ isAuth }) => {
  const routes = useRouter(isAuth)
  return (
    <div>
      {routes}
    </div>
  )
}
const mapStateToProps = (state: AppState) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, null)(App);
