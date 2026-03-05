import React, { useState, useEffect } from 'react';
import "./List.scss";
import Card from '../Card/Card';
import SkeletonCard from '../SkeletonCard/SkeletonCard';
import { products } from '../../data';

const List = ({ catId, maxPrice, sort }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 700);
        return () => clearTimeout(timer);
    }, [catId]);

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
            {loading ? (
                Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
            ) : data.length === 0 ? (
                <div className='emptyList'>
                    <span className='emptyIcon'>🔍</span>
                    <p>No products found</p>
                    <span>Try adjusting the price filter or sort order</span>
                </div>
            ) : (
                data.map(item => (
                    <Card item={item} key={item.id} />
                ))
            )}
        </div>
    );
};

export default List;