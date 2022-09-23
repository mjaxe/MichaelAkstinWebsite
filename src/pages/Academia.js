import React from 'react';
import "./Academia.css"

const Academia = () => {
    return (
        <div class="wrapper">
            <div className="WPILogo">
                <img src="https://www.robotevents.com/uploads/events/43801/2967db072957c38db74eef2ce92670a9.png" alt="" hight='300' width='300' />
            </div>
            <div class="two">
                <h4>I am a current <font COLOR="#00D8FF">Junior</font> at Worcester Polytechnic Institute</h4>
                <h5 className='information-overivew-section'><u>About me at school</u></h5>
                <ul>
                    <li>I am obtaining <font COLOR="#00D8FF">two</font> degrees:
                        <ul><li>Bachelor of Science in <font COLOR="#00D8FF">Computer Science</font></li>
                            <li><font COLOR="#00D8FF">Master</font> of Science in Management</li></ul></li>
                    <li>I am an involved memeber of greeklife within the <font COLOR="#00D8FF">ΣΦΕ</font> massachusetts beta chapter</li>
                    <li>I am have an <font COLOR="#00D8FF">executive</font> position within the Alpine Ski Club</li></ul>
            </div>
            <div class="three">
                <u>About My Degree</u>
                <br />
                <ul className='degree-overview-section'>
                    <li className='degree-point-one'>I am in the <font COLOR="#00D8FF">B.S./M.S.</font> program here at WPI, allowing me complete a B.S. degree and an M.S. degree within 4 years</li>
                    <li className='degree-point-two'>Notible topics I have covered in <font COLOR="#00D8FF">CS</font>:
                        <ul><li>OS</li>
                            <li>Web Dev</li>
                            <li>Object Oriented Concepts</li>
                            <li>Agile methodology</li>
                            <li>Algorithms and data structures</li>
                            <li>AI and logic</li></ul></li>
                    <li className='degree-point-two'>Topics I have covered in <font COLOR="#00D8FF">Management</font>:
                        <ul><li>Marketing</li>
                            <li>Operations management/supply chain</li></ul></li>
                </ul>
            </div>
            <div class="four"><u>Greek Life</u>
                <ul>
                    <li className='greek-life-point-one'>
                        I am currently the <font COLOR="#00D8FF">assignment manager</font>:
                        <ul><li>I assign dailies and grade them</li></ul>
                    </li>
                    <li className='greek-life-point-two'>
                        I was the <font COLOR="#00D8FF">interim chaplain executive</font>:
                        <ul><li>I was head of standards and rituals</li></ul>
                    </li>
                    <li className='greek-life-point-three'>
                        Our chapter's philanthropy:
                        <ul><li><font COLOR="#00D8FF">Saint Baldrick's</font>, a foundation of research for childhood cancer</li></ul>
                    </li>
                </ul>
            </div>
            <div class="five"><u>Alpine Ski Club</u>
            <ul>
                    <li className='ski-point-one'>
                        I am currently the <font COLOR="#00D8FF">treasurer executive</font>:
                        <ul><li>I manage all funds for the team</li></ul>
                    </li>
                    <li className='ski-point-two'>
                        I was the <font COLOR="#00D8FF">equipment manager</font>:
                        <ul><li>I head of all equipment</li></ul>
                    </li>
                    <li className='ski-point-three'>
                         Contributer to team's sucess:
                        <ul><li><font COLOR="#00D8FF">National's</font></li>
                        <li>3rd in the Tompson Division</li></ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Academia
