import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="menu-btn" onClick={toggleSidebar}>
        ☰
      </button>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ✕
        </button>
        <ul>
          <li><a href="#home">🏠 Home</a></li>
          <li><a href="#about">ℹ️ About</a></li>
          <li><a href="#services">💼 Services</a></li>
          <li><a href="#contact">📞 Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
