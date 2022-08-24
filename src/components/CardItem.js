import React from 'react'
import './CardItem.css'


function CardItem(props) {
    return (
        <a class="card 1" href='https://github.com/mjaxe/michaelakstinwebsite'>
            <div class="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
            <div class="card_title title-white">
                <p>My Personal Website</p>
            </div>
        </a>
    )
}

export default CardItem