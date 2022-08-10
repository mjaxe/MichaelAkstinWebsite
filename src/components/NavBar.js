//check
//18.27: https://www.youtube.com/watch?v=I2UBjN5ER4s&ab_channel=BrianDesign
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './test.css'

function NavBar () {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Michael Akstin</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="http://google.com">Google</Nav.Link>
              <NavDropdown title="Academia" id="basic-nav-dropdown">
                <NavDropdown.Item href="#coursework">Course Work</NavDropdown.Item>
                <NavDropdown.Item href="#greeklife">Greek Life</NavDropdown.Item>
                <NavDropdown.Item href="#athletics">Athletics</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#aboutwpi">About me at WPI</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
