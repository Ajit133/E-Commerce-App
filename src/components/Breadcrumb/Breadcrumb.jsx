import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './Breadcrumb.scss';

const Breadcrumb = ({ items }) => (
  <nav className="breadcrumb" aria-label="breadcrumb">
    <Link className="crumb" to="/">
      <HomeIcon fontSize="small" />Home
    </Link>
    {items.map((item, i) => (
      <React.Fragment key={i}>
        <NavigateNextIcon fontSize="small" className="sep" />
        {item.to ? (
          <Link className="crumb" to={item.to}>{item.label}</Link>
        ) : (
          <span className="crumb current">{item.label}</span>
        )}
      </React.Fragment>
    ))}
  </nav>
);

export default Breadcrumb;
