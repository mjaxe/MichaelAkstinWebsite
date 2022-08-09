//check
//18.27: https://www.youtube.com/watch?v=I2UBjN5ER4s&ab_channel=BrianDesign


function NavBar () {
  
  const today = new Date()
  return (
    <div>
      <p>it is {today.toDateString()}</p>
      <nav className='navbar'>
        <div className='navbar-container'>
            <a className="Left-title"
            href="https://reactjs.org">
            Learn Reacts
            </a>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
