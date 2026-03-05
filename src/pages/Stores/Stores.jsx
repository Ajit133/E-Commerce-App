import React, { useState } from 'react';
import './Stores.scss';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

const storeList = [
  {
    id: 1,
    name: 'MYSTORE New York – Flagship',
    address: '123 Fashion Avenue, New York, NY 10001',
    phone: '+1 (800) 123-4567',
    hours: 'Mon–Sat 9:00–21:00 · Sun 10:00–19:00',
    img: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Flagship',
  },
  {
    id: 2,
    name: 'MYSTORE Los Angeles',
    address: '456 Sunset Blvd, Los Angeles, CA 90028',
    phone: '+1 (800) 234-5678',
    hours: 'Mon–Sat 10:00–20:00 · Sun 11:00–18:00',
    img: 'https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Store',
  },
  {
    id: 3,
    name: 'MYSTORE London',
    address: '78 Oxford Street, London, W1D 1BS, UK',
    phone: '+44 20 7946 0000',
    hours: 'Mon–Sat 9:30–21:00 · Sun 12:00–18:00',
    img: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Store',
  },
  {
    id: 4,
    name: 'MYSTORE Paris',
    address: '12 Rue de Rivoli, 75001 Paris, France',
    phone: '+33 1 40 20 50 50',
    hours: 'Mon–Sat 10:00–20:00 · Sun Closed',
    img: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Outlet',
  },
  {
    id: 5,
    name: 'MYSTORE Tokyo',
    address: '1-1 Omotesando, Shibuya, Tokyo 150-0001',
    phone: '+81 3-1234-5678',
    hours: 'Daily 11:00–21:00',
    img: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Store',
  },
  {
    id: 6,
    name: 'MYSTORE Dubai',
    address: 'Dubai Mall, Financial Centre Rd, Dubai, UAE',
    phone: '+971 4 123 4567',
    hours: 'Sun–Wed 10:00–22:00 · Thu–Sat 10:00–24:00',
    img: 'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Flagship',
  },
];

const Stores = () => {
  const [search, setSearch] = useState('');
  const filtered = storeList.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="stores">
      <div className="pageHero">
        <h1>Our Stores</h1>
        <p>Find a MYSTORE location near you</p>
        <input
          className="storeSearch"
          type="text"
          placeholder="Search by city or store name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="storeGrid">
        {filtered.length === 0 ? (
          <div className="noResults">
            <span>🏪</span>
            <p>No stores match your search.</p>
          </div>
        ) : (
          filtered.map((store) => (
            <div className="storeCard" key={store.id}>
              <div className="cardImg">
                <img src={store.img} alt={store.name} />
                <span className={`tag ${store.tag.toLowerCase()}`}>{store.tag}</span>
              </div>
              <div className="cardBody">
                <h3>{store.name}</h3>
                <div className="detail">
                  <LocationOnOutlinedIcon className="dIcon" />
                  <span>{store.address}</span>
                </div>
                <div className="detail">
                  <PhoneOutlinedIcon className="dIcon" />
                  <span>{store.phone}</span>
                </div>
                <div className="detail">
                  <AccessTimeOutlinedIcon className="dIcon" />
                  <span>{store.hours}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Stores;
