//https://fullstackopen.com/en/part1/java_script
//basic JS syntax found at this link
import 'bootstrap/dist/css/bootstrap.min.css';
import './test.css'
import Typewriter from 'typewriter-effect';

function CenterTyper() {
  return (
    <div className='type-container'>
      <Typewriter
        options={{
          strings: ['Hello', 'World'],
          autoStart: true,
          loop: true,
        }}
      />
      </div>
  )
}

export default CenterTyper
