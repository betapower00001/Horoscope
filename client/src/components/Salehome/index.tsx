import React from 'react';
import './style.css';
import Pic from '../Img/index-va-r.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Banner from '../Img/number-banner.png';
import PackageCard from '../Card/index';
import { Button } from 'react-bootstrap';
import { FaLine } from 'react-icons/fa';

export default function FortuneSalePage() {
  const lineId = '@yourlineid'; // แก้เป็นไอดีของคุณเอง
  const lineUrl = `https://line.me/R/ti/p/~${lineId.replace('@', '')}`;

  return (
    <div className="font-sans text-white">

      {/* Hero Section */}
      <div className="fortune-section">
        <div className='fortune-inner'>
          <h1 className="fortune-title">ดูดวงกับหมอดู</h1>
          <h2 className="fortune-subtitle">ตรวจดวงชะตา ที่ปรึกษาด้านอาชีพ</h2>

          <div className="fortune-content">
            {/* ด้านซ้าย */}
            <div className="fortune-box">
              <div className="fortune-item">
                <div className="icon">♓</div>
                <h3>การเงิน</h3>
                <p>ดวงการเงินช่วงนี้เป็นอย่างไร มีปัญหาเรื่องเงินมั้ย สภาพคล่องดีมั้ย ควรระวังเรื่องอะไร หรือจะป้องกันและแก้ไขอย่างไรได้บ้าง</p>
              </div>
              <div className="fortune-item">
                <div className="icon">♈</div>
                <h3>การงาน</h3>
                <p>ดวงการงานช่วงนี้เป็นอย่างไร มีปัญหาเรื่องงานมั้ย ควรระวังเรื่องอะไร จะป้องกันและแก้ไขอย่างไรได้บ้าง</p>
              </div>
            </div>

            {/* ภาพหมอดูตรงกลาง */}
            <div className="fortune-image">
              <img src={Pic}
                alt="Fortune Teller" />
            </div>

            {/* ด้านขวา */}
            <div className="fortune-box">
              <div className="fortune-item">
                <div className="icon">♉</div>
                <h3>ความรัก</h3>
                <p>ดวงความรักช่วงนี้เป็นอย่างไร จะได้เจอเนื้อคู่มั้ย คู่ครองมีปัญหามั้ย จะมีเรื่องอะไรมากวนใจที่ต้องระวังบ้าง
                  ปัญหาอุปสรรคจะป้องกันและแก้ไขอย่างไร</p>
              </div>
              <div className="fortune-item">
                <div className="icon">♍</div>
                <h3>สุขภาพ</h3>
                <p>ดวงสุขภาพช่วงนี้เป็นอย่างไร มีปัญหาเรื่องสุขภาพมั้ย มีอะไรควรระวังหรือป้องกันเรื่องอะไรเป็นพิเศษ หรือรักษาอย่างไรได้บ้าง</p>
              </div>
            </div>
          </div>
          <div className="text-center py-1">
            <Button
              variant="success"
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                alignItems: 'center',
                gap: '10px',
                borderRadius: '30px',
                fontSize: '1.1rem',
                padding: '10px 20px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                marginTop: '20px',
              }}
            >
              <FaLine size={24} />
              แอดไลน์: {lineId}
            </Button>
          </div>
        </div>

      </div>

      {/* รายละเอียดบริการ */}
      <section className="py-5 ">
        <div className="container text-center">
          <h2 className="h2 fw-bold mb-4">บริการของเรา</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <h4 className="fw-semibold">ดูดวงความรัก</h4>
              <p>รู้ทันหัวใจ คู่แท้จะมาเมื่อไร คนนี้ใช่ไหม?</p>
            </div>
            <div className="col-md-4 mb-4">
              <h4 className="fw-semibold">การงาน & การเงิน</h4>
              <p>เส้นทางอาชีพ เงินเดือน โบนัส ลงทุนดีไหม?</p>
            </div>
            <div className="col-md-4 mb-4">
              <h4 className="fw-semibold">ไพ่ยิปซีเฉพาะตัว</h4>
              <p>แม่นยำด้วยไพ่ยิปซีพร้อมคำแนะนำเฉพาะคุณ</p>
            </div>
          </div>
        </div>
      </section>

      {/* baner */}
      <div className="fortune-section">
        <div className='fortune-inner'>
          <div className="fortune-banner">
            <img src={Banner} alt="Fortune Teller" />
          </div>
          <div className="text-center py-1">
            <Button
              variant="success"
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                alignItems: 'center',
                gap: '10px',
                borderRadius: '30px',
                fontSize: '1.1rem',
                padding: '10px 20px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                marginTop: '20px',
              }}
            >
              <FaLine size={24} />
              แอดไลน์: {lineId}
            </Button>
          </div>
        </div>
      </div>

      {/* ราคา */}
      <section className="py-5 fortune-pagket ">
        <div className="fortune-inner">
          <div className="container text-center">
            <h2 className="h2 fw-bold mb-5"
              style={{
                backgroundColor: '#26004b', // สีม่วง (โทนหรู)
                border: '5px solid #26004b', // ขอบสีม่วงเข้มกว่า
                borderRadius: '10px'           // ขอบมนหน่อย ๆ
              }}>แพ็กเกจดูดวง</h2>
            <div className="row g-4">
              <PackageCard emoji="🔮" title="เบสิค" description="1 คำถาม / 15 นาที" price="฿199" />
              <PackageCard emoji="✨" title="โปร" description="ไม่จำกัดคำถาม / 30 นาที" price="฿499" highlight />
              <PackageCard emoji="📜" title="พรีเมียม" description="วิเคราะห์ดวงรายเดือน + PDF" price="฿899" />
            </div>
          </div>
        </div>
      </section>


      {/* CTA ปิดท้าย */}
      <section className="text-white text-center py-5" style={{ backgroundColor: '#45007e', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <h2 className="h3 fw-bold mb-4" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)' }}>พร้อมจะรู้อนาคตของคุณแล้วหรือยัง?</h2>
          <p className="mb-4" style={{ fontSize: '1.2rem', opacity: 0.8 }}>เปิดประตูสู่ความลึกลับที่รอให้คุณค้นพบ</p>
          <button className="btn btn-light btn-lg text-primary fw-semibold" style={{ padding: '1rem 2rem', borderRadius: '30px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            จองดูดวงเลยตอนนี้
          </button>
        </div>
      </section>

    </div >
  );
}
