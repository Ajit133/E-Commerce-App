import React, { useState, useContext } from 'react';
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BalanceIcon from "@mui/icons-material/Balance";
import { CartContext } from '../../context/CartContext';
import { WishlistContext } from '../../context/WishlistContext';
import { ToastContext } from '../../context/ToastContext';
import { useParams } from 'react-router-dom';
import { products } from '../../data';

const Product = () => {

    const { id } = useParams();
    const item = products.find((p) => p.id === parseInt(id));

    const[selectedImg,setSelectedImg] = useState(0);
    const [quantity,setQuantity] = useState(1);
    const { dispatch } = useContext(CartContext);
    const { items: wishlistItems, dispatch: wishlistDispatch } = useContext(WishlistContext);
    const { addToast } = useContext(ToastContext);
    const isWishlisted = item ? wishlistItems.some((w) => w.id === item.id) : false;

    if (!item) return <div style={{ padding: '40px' }}>Product not found.</div>;

    const images = [item.img, item.img2].filter(Boolean);

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: { id: item.id, img: item.img, title: item.title, desc: item.desc, price: item.price, quantity } });
        addToast(`"${item.title}" added to cart!`, 'cart');
    };

    const handleWishlist = () => {
        if (isWishlisted) {
            wishlistDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: item.id });
            addToast(`"${item.title}" removed from wish list`, 'info');
        } else {
            wishlistDispatch({ type: 'ADD_TO_WISHLIST', payload: { id: item.id, img: item.img, title: item.title, price: item.price } });
            addToast(`"${item.title}" added to wish list!`, 'wishlist');
        }
    };
    return (
        <div className="product">
          <div className="left">
            <div className="images">
            <img src={images[0]} alt='' onClick={e=>setSelectedImg(0)} />
            <img src={images[1]} alt='' onClick={e=>setSelectedImg(1)} />
            </div>
            <div className="mainImg">
            <img src={images[selectedImg]} alt='' />
            </div>
          </div>
          <div className="right">
            <h1>{item.title}</h1>
            <span className='price'>${item.price}</span>
            <p>{item.desc}</p>
            <div className='quantity'>
                 <button onClick={()=>setQuantity((prev)=>(prev === 1? 1 : prev -1))}>-</button>
                 {quantity}
                 <button onClick={()=>setQuantity((prev)=>prev + 1)}>+</button>
            </div>
            <button className='add' onClick={handleAddToCart}>
                <AddShoppingCartIcon/>ADD TO CART
            </button>
            <div className='links'>
                <div
                  className='item'
                  style={{ cursor: 'pointer' }}
                  onClick={handleWishlist}
                >
                  {isWishlisted
                    ? <FavoriteIcon style={{ color: 'red' }} />
                    : <FavoriteBorderIcon />}
                  {isWishlisted ? 'WISHLISTED' : 'ADD TO WISH LIST'}
                </div>
                <div className='item'>
                 <BalanceIcon /> ADD TO COMPARE
                </div>
            </div>
            <div className='info'>
                  <span>Vendor : Easy</span>
                  <span>Product Type : T-shirt</span>
                  <span>Tag : T-Shirt,Women,Top</span>
            </div>
            <hr />
            <div className='info'>
                <span>DESCRIPTION</span>
                <hr />
                <span>ADDITIONAL INFORMATION</span>
                <hr />
                <span>FAQ</span>
            </div>
            </div>
          </div>
      )}

export default Product;
                         
