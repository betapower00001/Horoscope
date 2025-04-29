// components/Footer.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLine, FaEnvelope } from 'react-icons/fa';
import Logo from '../Img/logo mockup.png';

interface SocialItem {
  icon: JSX.Element;
  label: string;
}

const Footer: React.FC = () => {
  const socialItems: SocialItem[] = [
    { icon: <FaLine />, label: 'ไอดีไลน์' },
    { icon: <FaFacebookF />, label: 'ชื่อเฟสบุ๊ก' },
    { icon: <FaInstagram />, label: 'ชื่อไอจี' },
    { icon: <FaEnvelope />, label: 'อีเมล์' },
  ];

  return (
    <footer className="pt-5" style={{ backgroundColor: '#45007e', color: 'white' }}>
      <Container className="text-center">
        <Row className="justify-content-center mb-4">
          <Col md={12}>
            <img src={Logo} alt="Logo" style={{ width: '70px' }} />
            <h5 className="mt-3 fs-2">ดูดวง</h5>
            <p className="fs-5">บริการดูดวงที่ตอบโจทย์เกี่ยวกับดวงของคุณ</p>
          </Col>
        </Row>

        <Row className="justify-content-center text-center mb-4">
          {socialItems.map((item, index) => (
            <Col key={index} xs={6} sm={4} md={2} className="mb-3">
              <div
                className="py-3"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderRadius: '10px',
                  transition: '0.3s',
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)')
                }
              >
                <div className="fs-3 mb-2">{item.icon}</div>
                <div className="fw-semibold">{item.label}</div>
              </div>
            </Col>
          ))}
        </Row>

        <hr className="border-light opacity-50" />
        <p className="small text-secondary mb-1" style={{ fontSize: '17px' }}>
          © {new Date().getFullYear()} DESIGN by{' '}
          <a href="#" className="text-white text-decoration-none fw-bold">C-DESIGN </a>
          All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
