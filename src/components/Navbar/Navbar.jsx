import React, { useState, useContext } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import SearchOverlay from "../SearchOverlay/SearchOverlay";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { products } = useContext(CartContext);
  const { items: wishlistItems } = useContext(WishlistContext);
  const cartCount = products.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistCount = wishlistItems.length;

  const closeAll = () => {
    setCartOpen(false);
    setWishlistOpen(false);
    setSearchOpen(false);
  };

  // keep open state variable name compatible with Cart
  const open = cartOpen;
  const setOpen = setCartOpen;
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/images/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            MYSTORE
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon
              onClick={() => {
                closeAll();
                setSearchOpen((prev) => !prev);
              }}
            />
            <PersonOutlineOutlinedIcon />
            <div
              className="wishlistIcon"
              onClick={() => {
                closeAll();
                setWishlistOpen((prev) => !prev);
              }}
            >
              {wishlistCount > 0 ? (
                <FavoriteIcon style={{ color: "red" }} />
              ) : (
                <FavoriteBorderOutlinedIcon />
              )}
              {wishlistCount > 0 && <span>{wishlistCount}</span>}
            </div>
            <div
              className="cartIcon"
              onClick={() => {
                closeAll();
                setCartOpen((prev) => !prev);
              }}
            >
              <ShoppingCartOutlinedIcon />
              <span>{cartCount}</span>
            </div>
          </div>
        </div>
      </div>
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
      {wishlistOpen && <Wishlist setOpen={setWishlistOpen} />}
      {open && <Cart setOpen={setOpen} />}
    </div>
  );
};

export default Navbar;
