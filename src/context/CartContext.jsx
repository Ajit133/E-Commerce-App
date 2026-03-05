import { createContext, useReducer } from "react";

export const CartContext = createContext(null);

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingIndex = state.products.findIndex(
        (p) => p.id === action.payload.id
      );
      if (existingIndex !== -1) {
        const updated = state.products.map((p, i) =>
          i === existingIndex
            ? { ...p, quantity: p.quantity + action.payload.quantity }
            : p
        );
        return { products: updated };
      }
      return { products: [...state.products, action.payload] };
    }
    case "REMOVE_ITEM": {
      return {
        products: state.products.filter((p) => p.id !== action.payload),
      };
    }
    case "RESET_CART": {
      return { products: [] };
    }
    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { products: [] });

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
