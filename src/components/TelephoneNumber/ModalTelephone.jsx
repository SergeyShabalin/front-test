import React from 'react'
import InputMask from "react-input-mask";
import {BiCheck} from "react-icons/bi";

export default function ModalTelephone({setIsApplication, appDone}){

    const [buttons, setButtons] = React.useState([])
    const [isValidationNumber, setIsValidationNumber] = React.useState(true)
    const [isChecked, setIsChecked] = React.useState(false)

    React.useEffect(function (){
        setIsChecked(false)
        setButtons([])
    },[])

    const allButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'стереть']

    function getButtonValue(button) {
        if (buttons.length < 10) {
            setButtons([...buttons, button])
        }
    }


    function toggleHope() {
        if (buttons.length < 9) {
            setIsValidationNumber(false)
        } else {
            setIsValidationNumber(true)
            setIsApplication(true)
           appDone()
        }
    }

    function delButtonValue() {
        let delButtons = [...buttons]
        delButtons.pop()
        setButtons(delButtons)
    }

    function inputMaskChange(event){
        setButtons(event.target.value)
    }

    function toggleCheckbox() {
        setIsChecked(!isChecked)
    }

    return(
        <div className='modalTelephone'>
            <h4 className='headerTelephone'>Введите ваш номер мобильного телефона</h4>
            <div className='telephone'>
                <InputMask autoFocus
                           onChange={inputMaskChange}
                           className={isValidationNumber ? 'telephone' : 'telephoneUncorrection'}
                           style={{fontSize: 28}}
                           mask="8(999)_999_99-99"
                           value={buttons}/>
                <div className='manager'>
                    и с Вами свяжется наш менеджер для дальнейшей консультации
                </div>
            </div>
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

            </div>
            <div className='checkbox' onClick={toggleCheckbox}>
                <BiCheck className={isChecked ? 'iconsChange bicheck' : 'bicheckOf'}/>
                <div className='checkboxLabel'>Согласие на обработку персональных данных</div>
            </div>

            <div className={isChecked ? 'confirmNumber' : 'confirmNumberDisabled'} onClick={toggleHope}>
                Подтвердить номер
            </div>

        </div>
    )
}