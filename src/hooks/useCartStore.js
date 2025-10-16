import { useCallback, useState } from "react";

// Hook for cart management
export const useCartStore = () => {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((ticket) => {
    setCart((prev) => [...prev, { ...ticket, cartId: Math.random() }]);
  }, []);

  const removeFromCart = useCallback((cartId) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  return { cart, addToCart, removeFromCart, clearCart };
};
