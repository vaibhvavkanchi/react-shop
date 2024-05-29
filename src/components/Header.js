import React, { useState } from 'react'
import { LuShoppingCart } from 'react-icons/lu'
import { Link } from 'react-router-dom'

function Header() {
    const [route, setRoute] = useState


        (window.location.pathname)
    return (
        <div className='appBar'>
            <div className='toolBar'>
                <h3>Shop Mart</h3>
                {route === '/home' && (<Link to="/cart"><LuShoppingCart fontSize={24} className='cart' /></Link>)}
            </div>
        </div>
    )
}

export default Header
