import React from 'react'
import {NavLink} from "react-router-dom";
import '../Navbar/Navbar.css'
import Menu from "./Menu";


const Navbar = () => {

    const [activeMenu, setActiveMenu] = React.useState(false)

    const navItems = [
        {value: "Главная страница", href: '/home'},
        {value: "Страница ввода телефона", href: '/telephone'},
        {value: "Информационная страница", href: '/info'}
    ]

    function toggleMenu(){
        setActiveMenu(!activeMenu)
    }

    console.log(activeMenu)
    return (
        <div >
            <nav className='navbar' onClick={toggleMenu} >
                <div onClick={toggleMenu} className="menu-button">
                    <span/>
                </div>

            </nav>

            <Menu
                activeMenu = {activeMenu}
                setActiveMenu = {setActiveMenu}
                header={'Main menu'}
                navItems={navItems}
            />
        </div>

    )
}
export default Navbar