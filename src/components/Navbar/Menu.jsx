import React from 'react';
import './Menu.css'
import {NavLink} from "react-router-dom";

const Menu = ({header, navItems, activeMenu, setActiveMenu}) => {

    function closeMenu() {
        setActiveMenu(false)
    }


    return (
        <div className={ activeMenu ?   'menu active' : 'menu' } onClick={closeMenu}>
            <div className='blur'/>
            <div className='menu__content' onClick={e=>e.stopPropagation()}>
                <div className='menu__header' >{header}</div>
                <ul>
                    {navItems.map((item) =>
                        <li key={item.href}>
                            <NavLink onClick={closeMenu} className = 'navlink' to={item.href}>{item.value}</NavLink>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Menu;