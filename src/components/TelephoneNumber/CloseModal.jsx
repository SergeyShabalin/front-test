import React from 'react'
import {AiOutlineClose} from "react-icons/ai";
import './TelephoneNumber.css'

export default function CloseModal({closeModal}){
    return(
        <div>
            <div onClick={closeModal} className='buttonCloseModal'>
    <AiOutlineClose className='outlineClose'/>
            </div >
            <img className='closeModalQR' src='https://www.volvocars.com/images/support/img960930c3fca8bb4ec0a80152563aaca4_1_--_--_VOICEpnghigh.jpg'/>
            <div className='closeModalLabel' >СКАНИРУЙТЕ QR-КОД ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
            </div>
        </div>
    )
}