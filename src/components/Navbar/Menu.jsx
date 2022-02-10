import React from 'react';
import './Menu.css'

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
                    {navItems.map(item =>
                        <li>
                            <a href={item.href}>{item.value}</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Menu;