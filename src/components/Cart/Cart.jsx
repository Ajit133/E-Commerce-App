import React, { useContext } from 'react';
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = ({ setOpen }) => {
    const { products, dispatch } = useContext(CartContext);
    const navigate = useNavigate();

    const totalPrice = products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const handleCheckout = () => {
        setOpen(false);
        navigate('/checkout');
    };

    return (
        <div className='cart'>
        <h1>Products in your cart</h1>
        {products?.map((item) => (
            <div className='item' key={item.id}>
                 <img src={item.img} alt="" />
                 <div className='details'>
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0, 100)}</p>
                    <div className='price'>{item.quantity} * ${item.price}</div>
                 </div>
                 <DeleteOutlinedIcon
                     className='delete'
                     onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                 />
            </div>
        ))}
        <div className='total'>
               <span>SUBTOTAL</span>
               <span>${totalPrice.toFixed(2)}</span>
        </div>
        <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
        <span className='reset' onClick={() => dispatch({ type: 'RESET_CART' })}>Reset Cart</span>
        </div>
    );
};

export default Cart;