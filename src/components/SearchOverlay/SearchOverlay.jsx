import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { products } from "../../data";
import "./SearchOverlay.scss";

const SearchOverlay = ({ onClose }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const results =
    query.trim().length > 0
      ? products.filter((p) =>
          p.title.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  const handleSelect = (id) => {
    onClose();
    navigate(`/product/${id}`);
  };

  return (
    <div className="searchOverlay">
      <div className="searchBox">
        <SearchIcon className="searchIcon" />
        <input
          autoFocus
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <CloseIcon className="closeIcon" onClick={onClose} />
      </div>

      {results.length > 0 && (
        <div className="searchResults">
          {results.map((item) => (
            <div
              className="resultItem"
              key={item.id}
              onClick={() => handleSelect(item.id)}
            >
              <img src={item.img} alt={item.title} />
              <div className="resultInfo">
                <span className="resultTitle">{item.title}</span>
                <span className="resultPrice">${item.price}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {query.trim().length > 0 && results.length === 0 && (
        <div className="noResults">No products found for "{query}"</div>
      )}
    </div>
  );
};

export default SearchOverlay;
