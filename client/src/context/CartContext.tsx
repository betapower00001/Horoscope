import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Product {
  id: number;
  name: string;
  price: number;
  qty: number;
  image: string;
}

type CartContextType = {
  cart: Product[];
  addToCart: (product: Omit<Product, 'qty'>) => void;
  updateQty: (id: number, qty: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}

export function CartProvider({ children }: { children: ReactNode }): JSX.Element {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Omit<Product, 'qty'>) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      return exists
        ? prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        )
        : [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id: number, qty: number) => {
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty } : p))
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}