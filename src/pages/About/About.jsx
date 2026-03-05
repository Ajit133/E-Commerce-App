import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="about">
      <div className="hero">
        <img
          src="https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="About MYSTORE"
        />
        <div className="heroText">
          <h1>Our Story</h1>
          <p>Fashion for everyone, everywhere.</p>
        </div>
      </div>

      <div className="section">
        <div className="textBlock">
          <h2>Who We Are</h2>
          <p>
            MYSTORE was founded in 2010 with a single belief — great style should
            never be out of reach. From our humble beginnings as a small boutique
            to a globally recognised fashion destination, we have stayed true to
            our roots: quality craftsmanship, inclusive sizing, and designs that
            empower you to express yourself every day.
          </p>
        </div>
        <div className="textBlock">
          <h2>Our Mission</h2>
          <p>
            We curate the finest collections across Women, Men, and Children,
            partnering with ethical manufacturers who share our commitment to
            sustainability. Every piece you buy helps us plant a tree and support
            fair-wage factories around the world.
          </p>
        </div>
      </div>

      <div className="stats">
        <div className="stat">
          <span className="num">2M+</span>
          <span className="label">Happy Customers</span>
        </div>
        <div className="stat">
          <span className="num">120+</span>
          <span className="label">Countries Shipped</span>
        </div>
        <div className="stat">
          <span className="num">500+</span>
          <span className="label">Brand Partners</span>
        </div>
        <div className="stat">
          <span className="num">15</span>
          <span className="label">Years of Fashion</span>
        </div>
      </div>

      <div className="team">
        <h2>Meet the Team</h2>
        <div className="members">
          {[
            { name: 'Sarah Mitchell', role: 'CEO & Founder', img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400' },
            { name: 'James Lee',     role: 'Head of Design', img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400' },
            { name: 'Priya Sharma',  role: 'Marketing Director', img: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400' },
          ].map((m) => (
            <div className="member" key={m.name}>
              <img src={m.img} alt={m.name} />
              <h3>{m.name}</h3>
              <span>{m.role}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
