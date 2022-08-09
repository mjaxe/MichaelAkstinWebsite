//https://fullstackopen.com/en/part1/java_script
//basic JS syntax found at this link
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './test.css'

function Testcomponents () {
    const Hello = (props) =>{
        return(
            <div>
                <h1>Hello {props.name}, you are {props.age} years old</h1>
            </div>
        )
    }

    const Peter = {
        name: 'peter',
        age: 27
    }

    const Linda = {
        name: 'linda',
        age: 29
    }

    return(
        <div>
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="http://google.com">Google</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div class="typewriter">
    <h1 class="line-1 anim-typewriter">Animation typewriter style using css steps()</h1>
    </div>
    </div>
    
    )
  }
  
  export default Testcomponents
  