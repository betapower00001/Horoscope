import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Imglogo from '../Img/LogoC-De.png';
import Banner1 from '../Img/clearHeaderOem-branding.jpg';
import Button from 'react-bootstrap/Button';
import './style.css';
import PicNextjs from '../Img/nextjs.png';
import PicReact from '../Img/reactlogo.png';

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
      <div
        className='p-5 text-center bg-image'
        style={{
          backgroundImage: `url(${Banner1})`, // ภาพพื้นหลัง
          backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%',
          minHeight: '100vh', justifyContent: 'center', alignItems: 'center'
        }} //กำหนดตำแหน่งภาพ
      >
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3 responsive-heading'>รับทำเว็บไซต์ | Graphic Design</h1>
              <h4 className="mb-3 responsive-subheading">
                พัฒนาเว็บไซต์ด้วยเทคโนโลยี React และ Next.js
                <img
                  src={PicNextjs}
                  alt="Next.js Logo"
                  style={{ width: "50px", height: "auto", marginLeft: "8px" }}
                />
                <img
                  src={PicReact}
                  alt="Next.js Logo"
                  style={{ width: "45px", height: "auto", marginLeft: "8px" }}
                />
              </h4>
              <Button
                href="https://line.me/R/ti/p/@018jebed?text=สวัสดีค่ะ%20สนใจบริการ%20ทำ%20Giveaway%20ค่ะ"
                target="_blank"
                rel="nofollow"
                variant="light" // หรือเปลี่ยนเป็น primary, success ฯลฯ
                size="lg"
                className="m-2 d-inline-block responsive-button"
                style={{
                  width: 'auto',
                  display: 'inline-block',
                  maxWidth: '300px',
                  textDecoration: 'none',
                  boxShadow: 'none',
                  transform: 'none'
                }}
              >
                ทำเว็บไซต์
              </Button>
              <Button
                href="https://line.me/R/ti/p/@018jebed?text=สวัสดีค่ะ%20สนใจบริการ%20ทำ%20Giveaway%20ค่ะ"
                target="_blank"
                rel="nofollow"
                variant="outline-light"
                size="lg"
                className="m-2 d-inline-block responsive-button"
                style={{
                  width: 'auto',
                  display: 'inline-block',
                  maxWidth: '300px',
                  textDecoration: 'none',
                  boxShadow: 'none',
                  transform: 'none'
                }}
              >
                ออกแบบกราฟิก
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}