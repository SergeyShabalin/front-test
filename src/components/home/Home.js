import React from 'react'
import Volvo from '../video/Volvo.mp4'
import './Home.css'

export const Home = () => {
    const [showBanner, setShowBanner] = React.useState(false)


    function onBanner() {
        setShowBanner(!showBanner)
    }
        if (showBanner){
            setTimeout(onBanner, 18500)
        }    else {
            setTimeout(onBanner, 5000)
        }


    return (
        <div>

            <video className='video' autoPlay loop muted>
                <source src={Volvo} type="video/mp4"/>
            </video>

                { showBanner ?
                <div className='banner'>
                    <div className='textBanner'>
                        <h3>Только для вас самое выгодное предложение. Купи один VOLVO, второй в подарок</h3>
                    </div>
                </div> : null}
        </div>

    )
}