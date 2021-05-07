import React from 'react'
import LeftPanel from '../left-panel/left_panel'
import NavBar from '../navBar/navBar'


const Shop: React.FC<any & any> = () => {
    return <div>
        <NavBar />
        <div><LeftPanel /></div>
    </div>
}
export default Shop;