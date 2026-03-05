import React, { useContext } from 'react';
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { CartContext } from '../../context/CartContext';
import { ToastContext } from '../../context/ToastContext';
import { useNavigate } from 'react-router-dom';

const Cart = ({ setOpen }) => {
    const { products, dispatch } = useContext(CartContext);
    const { addToast } = useContext(ToastContext);
    const navigate = useNavigate();

    const totalPrice = products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const handleCheckout = () => {
        setOpen(false);
        navigate('/checkout');
    };

    const handleRemove = (id, title) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id });
        addToast(`"${title}" removed from cart`, 'info');
    };

    const handleReset = () => {
        dispatch({ type: 'RESET_CART' });
        addToast('Cart cleared', 'info');
    };

    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            {products.length === 0 ? (
                <div className='emptyState'>
                    <ShoppingBagOutlinedIcon className='emptyIcon' />
                    <p>Your cart is empty</p>
                    <span>Add items to get started</span>
                    <button className='shopBtn' onClick={() => { setOpen(false); navigate('/'); }}>
                        Start Shopping
                    </button>
                </div>
            ) : (
                <>
                    {products.map((item) => (
                        <div className='item' key={item.id}>
                            <img src={item.img} alt="" />
                            <div className='details'>
                                <h1>{item.title}</h1>
                                <p>{item.desc?.substring(0, 100)}</p>
                                <div className='price'>{item.quantity} * ${item.price}</div>
                            </div>
                            <DeleteOutlinedIcon
                                className='delete'
                                onClick={() => handleRemove(item.id, item.title)}
                            />
                        </div>
                    ))}
                    <div className='total'>
                        <span>SUBTOTAL</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
                    <span className='reset' onClick={handleReset}>Reset Cart</span>
                </>
            )}
        </div>
    );
};

export default Cart;