import React from "react";
import { Container } from "react-bootstrap";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import Salehome from './components/Salehome/index';
import './App.css';
import Footer from './components/Footer/index';

export default function App(): JSX.Element {
  return (
    <CartProvider>
      <Header />
      <Salehome />
      <Container className="my-4">
        <ProductList />
        <Cart />
        <CheckoutForm />
      </Container>
      <Footer />
    </CartProvider>
  );
}
