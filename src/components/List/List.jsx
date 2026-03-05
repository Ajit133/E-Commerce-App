import React, { useState, useEffect } from 'react';
import "./List.scss";
import Card from '../Card/Card';
import SkeletonCard from '../SkeletonCard/SkeletonCard';
import { products } from '../../data';

const ITEMS_PER_PAGE = 3;

const List = ({ catId, maxPrice, sort }) => {
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setLoading(true);
        setPage(1);
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

    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
    const paginated = data.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

    return (
        <div className='listContainer'>
            <div className='list'>
                {loading ? (
                    Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => <SkeletonCard key={i} />)
                ) : data.length === 0 ? (
                    <div className='emptyList'>
                        <span className='emptyIcon'>🔍</span>
                        <p>No products found</p>
                        <span>Try adjusting the price filter or sort order</span>
                    </div>
                ) : (
                    paginated.map(item => (
                        <Card item={item} key={item.id} />
                    ))
                )}
            </div>

            {!loading && totalPages > 1 && (
                <div className='pagination'>
                    <button
                        className='pageBtn'
                        disabled={page === 1}
                        onClick={() => setPage(p => p - 1)}
                    >
                        &laquo; Prev
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            className={`pageBtn${page === i + 1 ? ' active' : ''}`}
                            onClick={() => setPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        className='pageBtn'
                        disabled={page === totalPages}
                        onClick={() => setPage(p => p + 1)}
                    >
                        Next &raquo;
                    </button>
                </div>
            )}
        </div>
    );
};

export default List;