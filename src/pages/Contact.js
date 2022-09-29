import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <div className='contact-wrapper'>
            <div className='contact-information'>
                <h1><u>Michael Akstin</u></h1>
                <span class="dot"></span>
                <div className='contact-forms'>
                    <h5>makstin33@gmail.com</h5>
                    <h5>603-851-3317</h5>
                </div>
            </div>
            <div className='contact-icons-block'>
                <a className='icons' href='https://www.facebook.com/michael.akstin.7'><i class="fa fa-facebook"></i></a>
                <a className='icons' href="https://www.linkedin.com/in/michael-akstin-54a984209/"><i class="fa fa-linkedin"></i></a>
                <a className='icons' href="https://github.com/mjaxe?tab=repositories"><i class="fa fa-github"></i></a>
            </div>
        </div>
    )
}

export default Contact
