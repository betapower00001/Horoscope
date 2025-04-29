import React, { useState } from "react";
import axios from "axios";

interface Book {
  id: number;
  title: string;
  price: number;
}

interface CartItem {
  book: Book;
  quantity: number;
}

const books: Book[] = [
  { id: 1, title: "ดูดวงความรักแม่นขั้นเทพ", price: 250 },
  { id: 2, title: "คู่มือดูดวงไพ่ยิปซีเบื้องต้น", price: 199 },
  { id: 3, title: "โหราศาสตร์ไทยฉบับมือใหม่", price: 299 },
];

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [checkout, setCheckout] = useState(false);
  const [customer, setCustomer] = useState({ name: "", email: "", phone: "" });
  const [message, setMessage] = useState("");

  const addToCart = (book: Book) => {
    const existing = cart.find((item) => item.book.id === book.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.book.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { book, quantity: 1 }]);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.book.price * item.quantity, 0);

  const handleCheckout = async () => {
    try {
      await axios.post("http://localhost:4000/api/send-order", {
        customer,
        cart,
        total,
      });
      setMessage("✅ ส่งคำสั่งซื้อเรียบร้อยแล้ว! ขอบคุณที่อุดหนุน");
      setCart([]);
      setCheckout(false);
    } catch (err) {
      console.error(err);
      setMessage("❌ เกิดข้อผิดพลาดในการส่งคำสั่งซื้อ");
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">ร้านหนังสือดูดวง</h1>
      {message && <div className="alert alert-info">{message}</div>}

      {!checkout && (
        <>
          <div className="row">
            {books.map((book) => (
              <div className="col-md-4" key={book.id}>
                <div className="card mb-4">
                  <div className="card-body">
                    <h5>{book.title}</h5>
                    <p>ราคา {book.price} บาท</p>
                    <button className="btn btn-primary" onClick={() => addToCart(book)}>
                      เพิ่มลงตะกร้า
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card mt-4">
            <div className="card-body">
              <h5>ตะกร้าสินค้า</h5>
              {cart.length === 0 ? (
                <p>ยังไม่มีสินค้าในตะกร้า</p>
              ) : (
                <ul className="list-group mb-3">
                  {cart.map((item) => (
                    <li key={item.book.id} className="list-group-item d-flex justify-content-between">
                      {item.book.title} x {item.quantity}
                      <span>{item.book.price * item.quantity} บาท</span>
                    </li>
                  ))}
                </ul>
              )}
              <h6>รวมทั้งหมด: {total} บาท</h6>
              <button
                className="btn btn-success mt-3"
                onClick={() => setCheckout(true)}
                disabled={cart.length === 0}
              >
                ดำเนินการสั่งซื้อ
              </button>
            </div>
          </div>
        </>
      )}

      {checkout && (
        <div className="card mt-4">
          <div className="card-body">
            <h5>กรอกข้อมูลลูกค้า</h5>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="ชื่อ-นามสกุล"
                value={customer.name}
                onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="อีเมล"
                value={customer.email}
                onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                placeholder="เบอร์โทร"
                value={customer.phone}
                onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
              />
            </div>
            <button className="btn btn-primary" onClick={handleCheckout}>
              ส่งคำสั่งซื้อ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
