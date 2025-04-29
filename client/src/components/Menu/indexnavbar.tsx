import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Imglogo from '../Img/LogoC-De.png';
import './style.css';
export default function App() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        data-bs-theme="dark"
        className="sticky-top slim-navbar">
        <Container >
          <Navbar.Brand href="/">
            <img
              src={Imglogo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">หน้าแรก</Nav.Link>
              <Nav.Link href="/Pagewebsite">แพ็คเกจเว็บ</Nav.Link>
              <Nav.Link href="/Pagegraphic">แพ็คเกจกราฟิก</Nav.Link>
              <NavDropdown title="ผลงาน" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">เว็บ</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  ภาพ ADS.
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">ภาพ</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  ....
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">บริการทำเว็บไซต์</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                บริการออกแบบกราฟิก
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   
        
    </>
  );
}