import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  //  Añadir producto al carrito
  const addToCart = (producto) => {
    setCartItems((prev) => {
      const existe = prev.find((item) => item.slug === producto.slug);
      if (existe) {
        // 👇 devolvemos un NUEVO array, no mutado
        return prev.map((item) =>
          item.slug === producto.slug
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };

  //  Aumentar cantidad
  const incrementQuantity = (slug) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.slug === slug
          ? { ...item, cantidad: item.cantidad + 1 } // NUEVO objeto
          : item
      )
    );
  };

  // Disminuir cantidad
  const decrementQuantity = (slug) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.slug === slug && item.cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1 } // NUEVO objeto
          : item
      )
    );
  };

  //  Eliminar
  const removeFromCart = (slug) => {
    setCartItems((prev) => prev.filter((item) => item.slug !== slug));
  };

  // Vaciar
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
