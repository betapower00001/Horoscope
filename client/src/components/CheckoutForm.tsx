import React from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { useCart } from "../context/CartContext";

export default function CheckoutForm(): JSX.Element {
  const { cart, clearCart } = useCart();

  const shop = {
    name: "ร้านกาแฟสดสุดชิค",
    email: "betapower00002@gmail.com",
  };

  const calculateCost = () => {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const shipping = 50;
    const tax = Math.round(subtotal * 0.07);
    const total = subtotal + shipping + tax;
    return { shipping, tax, total };
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (cart.length === 0) {
      alert("🛒 กรุณาเลือกสินค้าอย่างน้อย 1 รายการก่อนสั่งซื้อ");
      return;
    }

    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const address = formData.get("address") as string;
    const phone = formData.get("phone") as string;

    const cost = calculateCost();

    const ordersHtml = cart.map(item => `
      <div style="margin-bottom: 12px;">
        <img src="${item.image || ''}" alt="item" height="64" style="margin-bottom: 4px;" />
        <div>${item.name} x ${item.qty} — <strong>${(item.price * item.qty).toFixed(2)} บาท</strong></div>
      </div>
    `).join("");

    const templateParams = {
      order_id: Date.now().toString(),
      email: shop.email,
      name,
      address,
      phone,
      orders: ordersHtml,
      shipping: cost.shipping.toFixed(2),
      tax: cost.tax.toFixed(2),
      total: cost.total.toFixed(2),
    };

    console.log("🧾 ข้อมูลที่จะส่ง:", templateParams);

    emailjs
      .send("service_mh9aqii", "template_25k73q6", templateParams, "HWSuWZJKpjVGErJMc")
      .then(() => {
        alert("✅ ส่งคำสั่งซื้อเรียบร้อยแล้ว!");
        form.reset();
        clearCart?.();
      })
      .catch((error) => {
        alert("❌ ส่งไม่สำเร็จ: " + error.text);
      });
  };

  return (
    <div className="my-4" style={{color:'white'}}>
      <h2>📦 ฟอร์มสั่งซื้อ</h2>
      <Form onSubmit={sendEmail}>
        <Form.Group className="mb-3">
          <Form.Label>ชื่อ-นามสกุล</Form.Label>
          <Form.Control name="name" type="text" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>ที่อยู่จัดส่ง</Form.Label>
          <Form.Control name="address" as="textarea" rows={2} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>เบอร์โทร</Form.Label>
          <Form.Control name="phone" type="tel" required />
        </Form.Group>

        <Button type="submit">ยืนยันการสั่งซื้อ</Button>
      </Form>
    </div>
  );
}
