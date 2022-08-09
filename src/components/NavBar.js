import React,{useState} from 'react'
//check
function NavBar() {
  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-container'>
            <a className="Left-title"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
            <div className='menu-icon'>
                //18.27: https://www.youtube.com/watch?v=I2UBjN5ER4s&ab_channel=BrianDesign
            </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
