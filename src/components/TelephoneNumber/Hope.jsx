import React from 'react'

export default function Hope({onModalTelephone, toggleModalTelephone}){

    return(
        <div className={onModalTelephone ? 'hope' : 'hopeHidden'}>
            <div className='label'>
                Исполните мечту вашего малыша. Купите ему Volvo
                <div>
                    <img className='qr'
                         src='https://spravkaru.info/qr/firm/855056.png'/>
                </div>
                <div>Сканируйте QR код или нажмите кнопку ОК</div>
                <div className='hopeOK' onClick={toggleModalTelephone}>OK</div>
            </div>

        </div>
    )

}