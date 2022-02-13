import React from 'react'
import './TelephoneNumber.css'
import InputMask from 'react-input-mask';

export const TelephoneNumber = () => {

    const [buttons, setButtons] = React.useState([])
    const [onModalTelephone, setOnModalTelephone] = React.useState(true)

    const allButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'стереть']

    function getButtonValue(button) {
        setButtons([...buttons, button])
    }

    function delButtonValue() {
        let delButtons = [...buttons]
        delButtons.pop()
        setButtons(delButtons)
    }

    function toggleModalTelephone() {
        setOnModalTelephone(false)
    }

    function toggleHope() {
        setOnModalTelephone(true)
    }

    return (
        <div>
            <div className={onModalTelephone ? 'modalTelephoneHidden' : 'modalTelephone'}>
                <h4 className='headerTelephone'>Введите ваш номер мобильного телефона</h4>

                <InputMask className='telephoneNumber' mask="8(999)_999_99-99" value={buttons}/>


                <div className='buttonsField'>
                    {allButtons.map(function (button, index) {
                        return (
                            <div key={index}
                                 onClick={button === 'стереть' ? () => delButtonValue() : () => getButtonValue(button)}
                                 className={button === 'стереть' ? 'buttonClear' : 'buttons'}>
                                {button}
                            </div>
                        )
                    })}
                    <div>
                        Здесь будет чекбокс
                    </div>

                    <div className='confirmNumber' onClick={toggleHope}>Подтвердить номер</div>
                </div>
            </div>


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
            <img className="images"
                 src="https://images.wallpaperscraft.ru/image/single/volvo_avtomobil_seryj_194075_1920x1080.jpg"/>

        </div>


    )
}