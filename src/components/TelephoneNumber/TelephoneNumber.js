import React from 'react'
import Hope from './Hope'
import './TelephoneNumber.css'
import InputMask from 'react-input-mask';
import {BiCheck} from "react-icons/bi";
import AppDone from "./AppDone";
import ModalTelephone from "./ModalTelephone";
import CloseModal from "./CloseModal";

export const TelephoneNumber = () => {


    const [onModalTelephone, setOnModalTelephone] = React.useState(true)
    const [isApplication, setIsApplication] = React.useState(false)

    function toggleModalTelephone() {
        setOnModalTelephone(false)
    }

    function closeModal(){
        setOnModalTelephone(true)
    }

    function appDone() {
        setTimeout(done, 5000)

        function done() {
            setIsApplication(false)
            setOnModalTelephone(true)
        }
    }

    return (
        <div className='images' >

            {
                onModalTelephone
                    ? <Hope
                        onModalTelephone={onModalTelephone}
                        toggleModalTelephone={toggleModalTelephone}
                    /> : <>
                        <CloseModal
                            closeModal={closeModal}
                        />
                        {isApplication
                            ? <AppDone/>
                            : <ModalTelephone
                                setIsApplication={setIsApplication}
                                appDone={appDone}
                            />
                        }
                    </>
            }

        </div>
    )
}