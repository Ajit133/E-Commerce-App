import React from 'react';
import "./FeaturedProducts.scss";
import Card from '../Card/Card';
import { products } from '../../data';

const FeaturedProducts = ({ type }) => {
    let data;
    let title;
    let desc;

    if (type === 'new') {
        data = products.filter(p => p.isNew);
        title = 'New Arrivals';
        desc = 'Fresh styles, just landed. Be the first to wear our newest pieces across Women, Men, and Children collections.';
    } else {
        data = [...products].sort((a, b) => b.price - a.price).slice(0, 4);
        title = 'Trending Now';
        desc = "Our most-loved styles right now. Discover what's hot this season and update your wardrobe with the finest picks.";
    }

    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
            <div className="bottom">
                {data.map(item => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;