import React from 'react';
import "./List.scss";
import Card from '../Card/Card';
import { products } from '../../data';

const List = ({ catId, maxPrice, sort }) => {
    let data = products.filter(
        (item) => item.catId === catId && item.price <= maxPrice
    );

    if (sort === "asc") {
        data = [...data].sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
        data = [...data].sort((a, b) => b.price - a.price);
    }

    return (
        <div className='list'>
            {data.length === 0 ? (
                <p style={{ color: 'gray', padding: '20px' }}>No products found.</p>
            ) : (
                data.map(item => (
                    <Card item={item} key={item.id} />
                ))
            )}
        </div>
    );
};

export default List;