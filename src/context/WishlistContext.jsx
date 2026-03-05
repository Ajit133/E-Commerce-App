import { createContext, useReducer } from "react";

export const WishlistContext = createContext(null);

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST": {
      const already = state.items.find((i) => i.id === action.payload.id);
      if (already) return state;
      return { items: [...state.items, action.payload] };
    }
    case "REMOVE_FROM_WISHLIST": {
      return { items: state.items.filter((i) => i.id !== action.payload) };
    }
    case "RESET_WISHLIST": {
      return { items: [] };
    }
    default:
      return state;
  }
};

export const WishlistContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, { items: [] });

  return (
    <WishlistContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};
