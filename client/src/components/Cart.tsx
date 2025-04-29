import { Table, Button, Form } from "react-bootstrap";
import { useCart } from "../context/CartContext";

export default function Cart(): JSX.Element {
  const { cart, updateQty, removeItem } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="my-4" style={{color:'white'}}>
      <h1>🛍 ตะกร้าสินค้า</h1>
      {cart.length === 0 ? (
        <p>ยังไม่มีสินค้าในตะกร้า</p>
      ) : (
        <Table bordered>
          <thead>
            <tr>
              <th>สินค้า</th>
              <th>จำนวน</th>
              <th>ราคารวม</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  <Form.Control
                    type="number"
                    min="1"
                    value={item.qty}
                    onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
                  />
                </td>
                <td>{item.price * item.qty} บาท</td>
                <td>
                  <Button variant="danger" onClick={() => removeItem(item.id)}>
                    ลบ
                  </Button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={2}>รวมทั้งหมด</td>
              <td colSpan={2}>{total} บาท</td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
}
