import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  // Alt, der skrives her, kan indsættes i "value", der kan bruges alle andre steder i App
  const [cartData, setCartData] = useState([]);

  return (
    <CartContext.Provider value={{ cartData }}>{children}</CartContext.Provider>
  );
};
