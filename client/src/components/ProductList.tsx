import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import Ex1 from './Img/ex1.png';
import Ex2 from './Img/ex2.png';
import Ex3 from './Img/ex1.png';

const products = [
  { id: 1, name: "สินค้า A", price: 100, image: Ex1 },
  { id: 2, name: "สินค้า B", price: 200, image: Ex2 },
  { id: 3, name: "สินค้า C", price: 300, image: Ex3 },
];

export default function ProductList(): JSX.Element {
  const { addToCart } = useCart();

  return (
    <div className="d-flex justify-content-center">
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={product.image}
                style={{ width: '100%', height: '350px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>ราคา {product.price} บาท</Card.Text>
                <Button onClick={() => addToCart(product)}>เพิ่มลงตะกร้า</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
