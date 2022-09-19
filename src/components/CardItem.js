import React from 'react'
import './CardItem.css'
import TestCard from './testCard';


function CardItem(props) {
    return (
      <div className='cards__container'>
      <div className='cards__wrapper'>
          <ul className="cards__items">
              <TestCard 
              src="https://www.scoopbyte.com/wp-content/uploads/2021/09/0_HICLyAdNSIyT0ODU.jpg"
              text="Built using HTML, CSS, JS, and various other frameworks"
              label="This Website"
              path="https://github.com/mjaxe/michaelakstinwebsite"
              />
              <TestCard
              src="data:image/png;base64,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"
              text="Built a web application for Mass General Brigham"
              label="Hosptial Maintenance App"
              path="https://github.com/mjaxe/CS3733-D22-Team-U-Final-Iteration"
              />
          </ul>
      </div>
  </div>
    )
}

export default CardItem