import React, { useState, useContext } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import SearchOverlay from "../SearchOverlay/SearchOverlay";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { products } = useContext(CartContext);
  const { items: wishlistItems } = useContext(WishlistContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const cartCount = products.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistCount = wishlistItems.length;

  const closeAll = () => {
    setCartOpen(false);
    setWishlistOpen(false);
    setSearchOpen(false);
  };

  const IconBar = ({ mobile = false }) => (
    <div className={mobile ? "mobileIcons" : "icons"}>
      <SearchIcon
        onClick={() => { setMobileOpen(false); closeAll(); setSearchOpen((p) => !p); }}
      />
      <PersonOutlineOutlinedIcon />
      <div
        className="themeToggle"
        onClick={() => setDarkMode((p) => !p)}
        title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </div>
      <div
        className="wishlistIcon"
        onClick={() => { setMobileOpen(false); closeAll(); setWishlistOpen((p) => !p); }}
      >
        {wishlistCount > 0 ? <FavoriteIcon style={{ color: "red" }} /> : <FavoriteBorderOutlinedIcon />}
        {wishlistCount > 0 && <span>{wishlistCount}</span>}
      </div>
      <div
        className="cartIcon"
        onClick={() => { setMobileOpen(false); closeAll(); setCartOpen((p) => !p); }}
      >
        <ShoppingCartOutlinedIcon />
        <span>{cartCount}</span>
      </div>
    </div>
  );

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">MYSTORE</Link>
        </div>
        <div className="right">
          <div className="item"><Link className="link" to="/">Homepage</Link></div>
          <div className="item"><Link className="link" to="/about">About</Link></div>
          <div className="item"><Link className="link" to="/contact">Contact</Link></div>
          <div className="item"><Link className="link" to="/stores">Stores</Link></div>
          <IconBar />
        </div>
        <div className="hamburger" onClick={() => setMobileOpen((p) => !p)}>
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>

      {mobileOpen && (
        <div className="mobileMenu">
          <Link className="link mobileLink" to="/products/1" onClick={() => setMobileOpen(false)}>Women</Link>
          <Link className="link mobileLink" to="/products/2" onClick={() => setMobileOpen(false)}>Men</Link>
          <Link className="link mobileLink" to="/products/3" onClick={() => setMobileOpen(false)}>Children</Link>
          <Link className="link mobileLink" to="/" onClick={() => setMobileOpen(false)}>Homepage</Link>
          <Link className="link mobileLink" to="/about" onClick={() => setMobileOpen(false)}>About</Link>
          <Link className="link mobileLink" to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          <Link className="link mobileLink" to="/stores" onClick={() => setMobileOpen(false)}>Stores</Link>
          <IconBar mobile />
        </div>
      )}

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
      {wishlistOpen && <Wishlist setOpen={setWishlistOpen} />}
      {cartOpen && <Cart setOpen={setCartOpen} />}
    </div>
  );
};

export default Navbar;
