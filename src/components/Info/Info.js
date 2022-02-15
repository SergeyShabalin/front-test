import React from 'react'
import './info.css'
import {BiChevronsRight, BiChevronsLeft} from "react-icons/bi";

export const Info = () => {

    const initState = [
        'https://images.wallpaperscraft.ru/image/single/volvo_v40_volvo_fary_134772_1920x1080.jpg',
        'https://s1.1zoom.ru/b5043/702/Volvo_2018-19_V60_D4_Cross_Country_Worldwide_Black_563905_1920x1080.jpg',
        'https://www.zastavki.com/pictures/1920x1080/2015/Auto___Volvo_Old_green_Volvo_on_the_road_100454_23.jpg',
        'https://s1.1zoom.ru/b5753/184/Volvo_XC90_Crossover_516825_1920x1080.jpg',
        'https://s1.1zoom.ru/big7/205/Volvo_Polestar_1_2019_Grey_Front_571523_1920x1080.jpg'
    ]

    const [background, setBackground] = React.useState(0)

    React.useEffect(()=>{
        document.addEventListener('keydown', logKey)
        return(()=> {
            document.removeEventListener('keydown', logKey)
        })
    }, [background])

    const toggleBackgroundNext = () => {
        setBackground(background + 1)
        if (background === initState.length - 1) {
            setBackground(0)
        }
    }


    function toggleBackgroundPrev() {
        setBackground(background - 1)
        if (background === 0) {
            setBackground(initState.length - 1)
        }
    }



    function logKey(e) {
      if (e.keyCode === 37) {
          toggleBackgroundPrev()
      }
      if(e.keyCode === 39){
          toggleBackgroundNext()
      }

    }

    return (
        <div>
            <div className='buttonScroll'>
                <BiChevronsLeft className = 'button' onClick={toggleBackgroundPrev}/>
                <BiChevronsRight className = 'button' onClick={toggleBackgroundNext}/>
            </div>
            <div className='labelFinnaly'>В финальном экране вы можете просмотреть все модели и выбрать для себя любую из них</div>
            <div>
                <img className='background' src={initState[background]}/>
            </div>
        </div>
    )
}