import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './Checkout.scss';

const Checkout = () => {
    const { products, dispatch } = useContext(CartContext);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        cardName: '',
        cardNumber: '',
        expiry: '',
        cvv: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const totalPrice = products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        dispatch({ type: 'RESET_CART' });
    };

    if (submitted) {
        return (
            <div className='checkout'>
                <div className='success'>
                    <h1>Thank you for your order!</h1>
                    <p>Your order has been placed successfully. A confirmation will be sent to <strong>{form.email}</strong>.</p>
                    <button onClick={() => navigate('/')}>Continue Shopping</button>
                </div>
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className='checkout'>
                <div className='success'>
                    <h1>Your cart is empty</h1>
                    <button onClick={() => navigate('/')}>Go Shopping</button>
                </div>
            </div>
        );
    }

    return (
        <div className='checkout'>
            <div className='checkoutWrapper'>
                {/* Order Summary */}
                <div className='summary'>
                    <h2>Order Summary</h2>
                    <div className='summaryItems'>
                        {products.map((item) => (
                            <div className='summaryItem' key={item.id}>
                                <img src={item.img} alt={item.title} />
                                <div className='summaryDetails'>
                                    <span className='summaryTitle'>{item.title}</span>
                                    <span className='summaryQty'>Qty: {item.quantity}</span>
                                </div>
                                <span className='summaryPrice'>
                                    ${(item.price * item.quantity).toFixed(2)}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className='summaryTotal'>
                        <span>Subtotal</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className='summaryTotal'>
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className='summaryTotal grand'>
                        <span>Total</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                </div>

                {/* Checkout Form */}
                <form className='checkoutForm' onSubmit={handleSubmit}>
                    <h2>Shipping Information</h2>
                    <div className='formRow'>
                        <div className='formGroup'>
                            <label>First Name</label>
                            <input
                                name='firstName'
                                value={form.firstName}
                                onChange={handleChange}
                                required
                                placeholder='John'
                            />
                        </div>
                        <div className='formGroup'>
                            <label>Last Name</label>
                            <input
                                name='lastName'
                                value={form.lastName}
                                onChange={handleChange}
                                required
                                placeholder='Doe'
                            />
                        </div>
                    </div>
                    <div className='formGroup'>
                        <label>Email</label>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder='john@example.com'
                        />
                    </div>
                    <div className='formGroup'>
                        <label>Address</label>
                        <input
                            name='address'
                            value={form.address}
                            onChange={handleChange}
                            required
                            placeholder='123 Main Street'
                        />
                    </div>
                    <div className='formRow'>
                        <div className='formGroup'>
                            <label>City</label>
                            <input
                                name='city'
                                value={form.city}
                                onChange={handleChange}
                                required
                                placeholder='New York'
                            />
                        </div>
                        <div className='formGroup'>
                            <label>ZIP Code</label>
                            <input
                                name='zip'
                                value={form.zip}
                                onChange={handleChange}
                                required
                                placeholder='10001'
                            />
                        </div>
                    </div>

                    <h2>Payment Details</h2>
                    <div className='formGroup'>
                        <label>Name on Card</label>
                        <input
                            name='cardName'
                            value={form.cardName}
                            onChange={handleChange}
                            required
                            placeholder='John Doe'
                        />
                    </div>
                    <div className='formGroup'>
                        <label>Card Number</label>
                        <input
                            name='cardNumber'
                            value={form.cardNumber}
                            onChange={handleChange}
                            required
                            placeholder='1234 5678 9012 3456'
                            maxLength={19}
                        />
                    </div>
                    <div className='formRow'>
                        <div className='formGroup'>
                            <label>Expiry Date</label>
                            <input
                                name='expiry'
                                value={form.expiry}
                                onChange={handleChange}
                                required
                                placeholder='MM/YY'
                                maxLength={5}
                            />
                        </div>
                        <div className='formGroup'>
                            <label>CVV</label>
                            <input
                                name='cvv'
                                value={form.cvv}
                                onChange={handleChange}
                                required
                                placeholder='123'
                                maxLength={3}
                            />
                        </div>
                    </div>

                    <button type='submit' className='placeOrder'>
                        PLACE ORDER — ${totalPrice.toFixed(2)}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
