import React from 'react'
import {NavLink} from "react-router-dom";
import '../Navbar/Navbar.css'
import Menu from "./Menu";


const Navbar = () => {

const navItems = [
    {value: "Главная страница", href: '/home'},
    {value: "Страница ввода телефона", href: '/telephone'},
    {value: "Информационная страница", href: '/info'}
    ]

    return (
        <div>

        <nav className='navbar'>
            <div className="menu-button">
                <span/>

            </div>

        </nav>
            <main>

            </main>
            <Menu
                header = {'Main menu'}
                navItems={navItems}
            />
        </div>

    )
}
export default Navbar