import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import Image from 'react-bootstrap/Image';
import Logo from './Img/logo mockup.png';
import { FaFacebook, FaInstagram, FaLine } from 'react-icons/fa'; // เพิ่มไอคอนจาก react-icons

export default function Header(): JSX.Element {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <Navbar style={{
      backgroundColor: '#26004b',
      position: 'sticky',
      top: 0,
      zIndex: 1000 // ให้แน่ใจว่า navbar อยู่เหนือองค์ประกอบอื่น ๆ
    }}
      variant="dark">
      <Container>
        <Navbar.Brand style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Image src={Logo} width='50px' />
          <span>HOROSCOPE</span>
        </Navbar.Brand>
        <Nav className="ms-auto" style={{ alignItems: 'center', gap: '15px' }}>
          <Nav.Link style={{ color: 'white' }}>🛒 {totalItems} รายการ</Nav.Link>
          <Nav.Link href="https://facebook.com" target="_blank" style={{ color: 'white' }}>
            <FaFacebook size={20} />
          </Nav.Link>
          <Nav.Link href="https://instagram.com" target="_blank" style={{ color: 'white' }}>
            <FaInstagram size={20} />
          </Nav.Link>
          <Nav.Link href="https://line.me" target="_blank" style={{ color: 'white' }}>
            <FaLine size={20} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
