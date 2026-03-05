import React, { useState, useContext } from 'react';
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { CartContext } from '../../context/CartContext';
import { useParams } from 'react-router-dom';
import { products } from '../../data';

const Product = () => {

    const { id } = useParams();
    const item = products.find((p) => p.id === parseInt(id));

    const[selectedImg,setSelectedImg] = useState(0);
    const [quantity,setQuantity] = useState(1);
    const { dispatch } = useContext(CartContext);

    if (!item) return <div style={{ padding: '40px' }}>Product not found.</div>;

    const images = [item.img, item.img2].filter(Boolean);

    const product = {
        id: item.id,
        img: item.img,
        title: item.title,
        desc: item.desc,
        price: item.price,
        quantity,
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
            <button className='add' onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}>
                <AddShoppingCartIcon/>ADD TO CART
            </button>
            <div className='links'>
                <div className='item'>
               <FavoriteBorderIcon/> ADD TO WISH LIST
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
                         
