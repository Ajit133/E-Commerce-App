import React, { useContext } from "react";
import "./Wishlist.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Wishlist = ({ setOpen }) => {
  const { items, dispatch } = useContext(WishlistContext);
  const { dispatch: cartDispatch } = useContext(CartContext);

  const moveToCart = (item) => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: { ...item, quantity: 1 },
    });
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item.id });
  };

  return (
    <div className="wishlist">
      <h1>Wish List</h1>
      {items.length === 0 ? (
        <p className="empty">Your wish list is empty.</p>
      ) : (
        items.map((item) => (
          <div className="item" key={item.id}>
            <Link
              to={`/product/${item.id}`}
              className="imgLink"
              onClick={() => setOpen(false)}
            >
              <img src={item.img} alt={item.title} />
            </Link>
            <div className="details">
              <Link
                to={`/product/${item.id}`}
                className="titleLink"
                onClick={() => setOpen(false)}
              >
                <h1>{item.title}</h1>
              </Link>
              <span className="price">${item.price}</span>
              <button className="cartBtn" onClick={() => moveToCart(item)}>
                <ShoppingCartOutlinedIcon fontSize="small" />
                Move to Cart
              </button>
            </div>
            <DeleteOutlinedIcon
              className="delete"
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item.id })
              }
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
