import React from 'react'
import './CardItem.css'


function CardItem(props) {
    return (
        <div className='card-list'>
      <div class="card">
        <img className='image' src="https://cdn-icons-png.flaticon.com/128/2907/2907497.png" alt="" />
        <div class="container">
          <h4><b>This Website</b></h4>
          <p>Built using HTML, CSS, JS, and various frameworks</p>
          <a href="https://github.com/mjaxe/michaelakstinwebsite" class="btn btn-primary">See GitHub</a>
        </div>
      </div>

      <div class="card">
        <img className='image' src="https://cdn-icons-png.flaticon.com/128/1493/1493171.png" alt="" />
        <div class="container">
          <h4><b>Concert Finder</b></h4>
          <p>Uses Spotify, and concerts APIs</p>
          <a href="#" class="btn btn-primary">See GitHub</a>
        </div>
      </div>

      <div class="card">
        <img className='image' src="https://cdn-icons-png.flaticon.com/128/2895/2895071.png" alt="" />
        <div class="container">
          <h4><b>Hospital App</b></h4>
          <p>Built a hospital maintenance app for Mass General Brigham</p>
          <a href="https://github.com/mjaxe/CS3733-D22-Team-U-Final-Iteration" class="btn btn-primary">See GitHub</a>
        </div>
      </div>

    </div>
    )
}

export default CardItem