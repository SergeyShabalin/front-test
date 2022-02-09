import React from 'react'
import Volvo from '../video/Volvo.mp4'
import './Home.css'

export const Home = () => {
    return (
        <div>

            <video className='video' autoPlay loop muted>
                <source src={Volvo} type="video/mp4"/>
            </video>


        </div>

    )
}