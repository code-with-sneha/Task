import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
// import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <Navbar bg="transparent" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="home"><img src="https://i.pinimg.com/564x/79/8e/b7/798eb7a51f0e7e4f63fbe479129b995e.jpg" alt="" height={50} width={50} style={{borderRadius: '50%'}}/>  Portfolio</Navbar.Brand>
          <Nav className="me-auto tp">
            <NavDropdown title="Demos" id="basic-nav-dropdown" active>
              <NavDropdown.Item href="sample1">sample1</NavDropdown.Item>
              <NavDropdown.Item href="sample2">
                sample2
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="others">
                Others
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Solutions" id="basic-nav-dropdown">
              <NavDropdown.Item href="sample1">sample1</NavDropdown.Item>
              <NavDropdown.Item href="sample2">
                sample2
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="others">
                Others
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Team" id="basic-nav-dropdown">
              <NavDropdown.Item href="sample1">sample1</NavDropdown.Item>
              <NavDropdown.Item href="sample2">
                sample2
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="others">
                Others
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="sample1">sample1</NavDropdown.Item>
              <NavDropdown.Item href="sample2">
                sample2
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="others">
                Others
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="blog">Blog</Nav.Link>
          </Nav>
          {/* <Button variant='light'>Contact Us</Button> */}
          <button className='btn' style={{fontWeight: '800', fontSize: '17px'}}>Contact Us</button>
        </Container>
      </Navbar>
  )
}

export default Header