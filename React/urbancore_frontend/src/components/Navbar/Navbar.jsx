// import React, { useState, useContext } from "react";
// import "./Navbar.css";
// import { assets } from "../../assets/assets";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { StoreContext } from "../../context/StoreContext";
// import ContactFormPopup from "../ContactFormPopup/ContactFormPopup";

// const Navbar = ({ setShowLogin }) => {
//   const [menu, setMenu] = useState("/");
//   const [openSidenav, setOpenSidenav] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showContactPopup, setShowContactPopup] = useState(false);

//   const navigate = useNavigate();
//   const location = useLocation();
//   const { cart } = useContext(StoreContext);

//   const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

//   const toggleSidenavbar = () => {
//     setOpenSidenav(!openSidenav);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const trimmedTerm = searchTerm.trim();
//     if (!trimmedTerm) return;

//     if (location.pathname !== "/shop") {
//       navigate(`/shop?q=${encodeURIComponent(trimmedTerm)}`);
//     } else {
//       navigate(`?q=${encodeURIComponent(trimmedTerm)}`);
//     }

//     setSearchTerm("");
//   };

//   return (
//     <div className={`navbar ${location.pathname === "/shop" ? "navbar--shop" : ""}`}>
//       <div className="navbar-container">
//         <img src={assets.logo} alt="logo" className="logo" />

//         <ul className="navbar-menu">
//           <Link to={`/`}>
//             <li
//               onClick={() => setMenu("home")}
//               className={menu === "home" ? "active" : ""}
//             >
//               Home
//             </li>
//           </Link>
//           <Link to={`/shop`}>
//             <li
//               onClick={() => setMenu("shop")}
//               className={menu === "shop" ? "active" : ""}
//             >
//               Shop
//             </li>
//           </Link>
//           <Link to={`/offers`}>
//             <li
//               onClick={() => setMenu("offers")}
//               className={menu === "offers" ? "active" : ""}
//             >
//               Offers
//             </li>
//           </Link>
//           <li
//             onClick={() => {
//               setMenu("contact");
//               setShowContactPopup(true);
//             }}
//             className={menu === "contact" ? "active" : ""}
//           >
//             Contact
//           </li>
//         </ul>

//         <div className="navbar-right">
//           <form onSubmit={handleSearch} className="nav-search-icon">
//             <input
//               type="search"
//               className="search-bar"
//               placeholder="Search product......."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <button type="submit" className="search-btn">
//               <img src={assets.search_icon} alt="search" />
//             </button>
//           </form>

//           <div className="navbar-bag-icon">
//             <Link to="/cart">
//               <img src={assets.bag_icon} alt="bag-icon" />
//               {cartCount > 0 && <div className="bag-dot">{cartCount}</div>}
//             </Link>
//           </div>

//           <div onClick={() => setShowLogin(true)} className="navbar-user-icon">
//             <img src={assets.user_icon} alt="user-icon" />
//           </div>
//         </div>

//         {/* --- Responsive Side Navbar --- */}
//         <div className="responsive-navbar-right">
//           <div className="side-navbar">
//             <img
//               src={assets.bar_icon}
//               alt="bar"
//               onClick={toggleSidenavbar}
//               className="open-sidenav"
//             />
//             <div className={`side-menu ${openSidenav ? "open" : ""}`}>
//               <div className="side-navbar-top">
//                 <img src={assets.logo} alt="" className="sidenav-logo" />
//                 <button onClick={toggleSidenavbar} className="close-sidenav">
//                   <img src={assets.cross_icon} alt="" />
//                 </button>
//               </div>
//               <ul className="side-navbar-menu">
//                 <Link to="/account" onClick={toggleSidenavbar}>
//                   <li>
//                     <img src={assets.user_icon} alt="" /> My Account
//                   </li>
//                 </Link>
//                 <Link to="/shop" onClick={toggleSidenavbar}>
//                   <li>
//                     <img src={assets.home_icon} alt="" /> Products
//                   </li>
//                 </Link>
//                 <Link to="/offers" onClick={toggleSidenavbar}>
//                   <li>
//                     <img src={assets.home_icon} alt="" /> Offers
//                   </li>
//                 </Link>
//                 <Link to="/cart" onClick={toggleSidenavbar}>
//                   <li>
//                     <img src={assets.bag_icon} alt="bag-icon" /> Cart
//                   </li>
//                 </Link>
//                 <li
//                   onClick={() => {
//                     toggleSidenavbar();
//                     setMenu("contact");
//                     setShowContactPopup(true);
//                   }}
//                 >
//                   <img src={assets.home_icon} alt="" /> Contact
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* --- Bottom Navbar (Mobile) --- */}
//       <div className="navbar-bottom">
//         <Link to="/">
//           <div className="nav-home-icon">
//             <img src={assets.home_icon} alt="home-icon" />
//           </div>
//         </Link>
//         <Link to="/shop">
//           <div className="navbar-search-icon">
//             <img src={assets.search_icon} alt="search-icon" />
//           </div>
//         </Link>
//         <Link to="/cart">
//           <div className="navbar-bag-icon">
//             <img src={assets.bag_icon} alt="bag-icon" />
//             {cartCount > 0 && <div className="bag-dot">{cartCount}</div>}
//           </div>
//         </Link>
//         <div onClick={() => setShowLogin(true)} className="navbar-user-icon">
//           <img src={assets.user_icon} alt="user-icon" />
//         </div>
//       </div>

//       {/* Contact Form Popup */}
//       {showContactPopup && (
//         <ContactFormPopup onClose={() => setShowContactPopup(false)} />
//       )}
//     </div>
//   );
// };

// export default Navbar;








import React, { useState, useContext, useEffect } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import ContactFormPopup from "../ContactFormPopup/ContactFormPopup";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [openSidenav, setOpenSidenav] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showContactPopup, setShowContactPopup] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { cart } = useContext(StoreContext);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // ✅ Sync active menu with current route
  useEffect(() => {
    if (location.pathname === "/") {
      setMenu("home");
    } else if (location.pathname.startsWith("/shop")) {
      setMenu("shop");
    } else if (location.pathname.startsWith("/offers")) {
      setMenu("offers");
    } else if (location.pathname.startsWith("/contact")) {
      setMenu("contact");
    }
  }, [location.pathname]);

  const toggleSidenavbar = () => {
    setOpenSidenav(!openSidenav);
  };

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
  };

  return (
    <div className={`navbar ${location.pathname === "/shop" ? "navbar--shop" : ""}`}>
      <div className="navbar-container">
        <img src={assets.logo} alt="logo" className="logo" />

        {/* --- Main Nav Menu --- */}
        <ul className="navbar-menu">
          <Link to={`/`}>
            <li className={menu === "home" ? "active" : ""}>Home</li>
          </Link>
          <Link to={`/shop`}>
            <li className={menu === "shop" ? "active" : ""}>Shop</li>
          </Link>
          <Link to={`/offers`}>
            <li className={menu === "offers" ? "active" : ""}>Offers</li>
          </Link>
          <li
            onClick={() => {
              setMenu("contact");
              setShowContactPopup(true);
            }}
            className={menu === "contact" ? "active" : ""}
          >
            Contact
          </li>
        </ul>

        {/* --- Right Section --- */}
        <div className="navbar-right">
          <form onSubmit={handleSearch} className="nav-search-icon">
            <input
              type="search"
              className="search-bar"
              placeholder="Search product......."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="search-btn">
              <img src={assets.search_icon} alt="search" />
            </button>
          </form>

          <div className="navbar-bag-icon">
            <Link to="/cart">
              <img src={assets.bag_icon} alt="bag-icon" />
              {cartCount > 0 && <div className="bag-dot">{cartCount}</div>}
            </Link>
          </div>

          <div onClick={() => setShowLogin(true)} className="navbar-user-icon">
            <img src={assets.user_icon} alt="user-icon" />
          </div>
        </div>

        {/* --- Responsive Side Navbar --- */}
        <div className="responsive-navbar-right">
          <div className="side-navbar">
            <img
              src={assets.bar_icon}
              alt="bar"
              onClick={toggleSidenavbar}
              className="open-sidenav"
            />
            <div className={`side-menu ${openSidenav ? "open" : ""}`}>
              <div className="side-navbar-top">
                <img src={assets.side_nav_logo} alt="" className="sidenav-logo" />
                <button onClick={toggleSidenavbar} className="close-sidenav">
                  <img src={assets.cross_icon} alt="" />
                </button>
              </div>
              <ul className="side-navbar-menu">
                <Link to="/account" onClick={toggleSidenavbar}>
                  <li>
                    <img src={assets.user_icon} alt="" /> My Account
                  </li>
                </Link>
                <Link to="/shop" onClick={toggleSidenavbar}>
                  <li>
                    <img src={assets.shop_icon} alt="" /> Products
                  </li>
                </Link>
                <Link to="/offers" onClick={toggleSidenavbar}>
                  <li>
                    <img src={assets.offer_icon} alt="" /> Offers
                  </li>
                </Link>
                <Link to="/cart" onClick={toggleSidenavbar}>
                  <li>
                    <img src={assets.bag_icon} alt="bag-icon" /> Cart
                  </li>
                </Link>
                <li
                  onClick={() => {
                    toggleSidenavbar();
                    setMenu("contact");
                    setShowContactPopup(true);
                  }}
                >
                  <img src={assets.contact_icon} alt="" /> Contact
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* --- Bottom Navbar (Mobile) --- */}
      <div className="navbar-bottom">
        <Link to="/">
          <div className="nav-home-icon">
            <img src={assets.home_icon} alt="home-icon" />
          </div>
        </Link>
        <Link to="/shop">
          <div className="navbar-search-icon">
            <img src={assets.search_icon} alt="search-icon" />
          </div>
        </Link>
        <Link to="/cart">
          <div className="navbar-bag-icon">
            <img src={assets.bag_icon} alt="bag-icon" />
            {cartCount > 0 && <div className="bag-dot">{cartCount}</div>}
          </div>
        </Link>
        <div onClick={() => setShowLogin(true)} className="navbar-user-icon">
          <img src={assets.user_icon} alt="user-icon" />
        </div>
      </div>

      {/* Contact Form Popup */}
      {showContactPopup && (
        <ContactFormPopup onClose={() => setShowContactPopup(false)} />
      )}
    </div>
  );
};

export default Navbar;
