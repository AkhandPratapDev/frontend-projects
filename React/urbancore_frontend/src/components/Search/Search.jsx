import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Search.css";
import { assets } from "../../assets/assets";

const Search = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedTerm = searchTerm.trim();
    if (!trimmedTerm) return;

    if (location.pathname !== "/shop") {
      navigate(`/shop?q=${encodeURIComponent(trimmedTerm)}`);
    } else {
      navigate(`?q=${encodeURIComponent(trimmedTerm)}`);
    }

    setSearchTerm("");
    onClose(); // close popup after searching
  };

  return (
    <div className="search-overlay">
      <div className="search-box">
      
        {/* Search input */}
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="search"
            placeholder="Search product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
          <button type="submit" className="search-btn-resp">
            <img src={assets.search_icon} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
