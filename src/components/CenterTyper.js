//https://fullstackopen.com/en/part1/java_script
//basic JS syntax found at this link
import 'bootstrap/dist/css/bootstrap.min.css';
import './CenterTyper.css'
import Typewriter from 'typewriter-effect';

const CenterTyper = () => {
  return (
    <div className="all-text">
      <h1 className='type-container'>
        <Typewriter
          options={{
            strings: ["I\'m Mike", "I\'m a CS student"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      
      <h2 className="second-header">Hi, welcome to my website!</h2>
    </div>
  )
}

export default CenterTyper
