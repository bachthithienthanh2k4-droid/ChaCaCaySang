"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Định nghĩa Interface trước khi sử dụng
export interface CartItem {
  id: string | number;
  name: string;
  price: number | string;
  image: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
  updateQuantity: (id: string | number, delta: number) => void;
  removeFromCart: (id: string | number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Đảm bảo useState đã nhận Generic Type <CartItem[]>
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('sang_cart');
    if (!savedData) return;

    try {
      const data = JSON.parse(savedData);
      if (Array.isArray(data)) {
        // Kiểm tra xem đây có thực sự là mảng CartItem không bằng cách ép kiểu
        setCart(data as CartItem[]);
      }
    } catch (error) {
      console.error("Lỗi parse dữ liệu giỏ hàng:", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('sang_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string | number, delta: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeFromCart = (id: string | number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{
      cart, addToCart, updateQuantity, removeFromCart,
      isCartOpen, setIsCartOpen, clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart phải được sử dụng bên trong CartProvider');
  }
  return context;
};