import React, { useContext, useRef, useState } from 'react'
import logo from '../Assets/OIP.jpg'
import cart from '../Assets/cart_icon.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import nav_dropdown from '../Assets/nav-dropdown.png'

function Navbar() {
    const [menu , setMenu] = useState("shop")
    const {getTotalCartItems} =useContext(ShopContext)
    const menuRef = useRef()
    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle("open")

    }
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className='nav-menu' >
            <li onClick={()=>setMenu("shop")}> <Link to="/">Shop</Link>{menu ==="shop" ? <hr/>:<></>}</li>
            <li onClick={()=>setMenu("menus")}><Link to="/mens">Mens</Link> {menu === "menus"? <hr/>:<></>}</li>
            <li onClick={()=>setMenu("womens")}><Link to="/womens">Women</Link> {menu === "womens"? <hr/>:<></>}</li>
            <li onClick={()=>setMenu("kids")}><Link to='/kids'>Kids</Link> {menu === "kids"? <hr/>:<></>}</li>
        </ul>
        <div className="nav-logoing-cart">
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={cart} alt="" /></Link>
            <div className='nav-count'>{getTotalCartItems()}</div>
        </div>
       
    </div>
  )
}

export default Navbar