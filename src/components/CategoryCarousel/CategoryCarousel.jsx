import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CategoryCarousel.scss';
import { categories } from '../../data';

const slides = Object.entries(categories).map(([id, cat]) => ({
  id: parseInt(id),
  name: cat.name,
  banner: cat.banner,
}));

const CategoryCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <div className="categoryCarousel">
      <div
        className="slideTrack"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s) => (
          <div className="slide" key={s.id}>
            <img src={s.banner} alt={s.name} />
            <div className="overlay" />
            <div className="content">
              <h2>{s.name}'s Collection</h2>
              <p>Explore the latest styles</p>
              <Link className="shopBtn" to={`/products/${s.id}`}>
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button className="arrow left" onClick={prev}>&#8249;</button>
      <button className="arrow right" onClick={next}>&#8250;</button>

      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryCarousel;
