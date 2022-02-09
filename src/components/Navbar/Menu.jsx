import React from 'react';
import './Menu.css'

const Menu = ({header, navItems}) => {
    return (
        <div className='menu'>
            <div className='blur'/>
            <div className='menu__content'>
                <div className='menu__header'>{header}</div>
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