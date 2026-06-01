// import React, { useState } from "react";
// import Navbar from "../Navbar/Navbar";
// import Review from "../Review/Review";
// import Footer from "../Footer/Footer";
// import "./Layout.css";
// import LoginPopup from "../LoginPopup/LoginPopup";

// const Layout = ({ children }) => {
//   const [showLogin,setShowLogin] = useState(false);
//   return (
//     <>
//     {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
//       <Navbar setShowLogin={setShowLogin}  />
//       <div className="layout">
//         <main>{children}</main>
//         <Review/>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Layout;




// import React, { useState } from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
// import Review from "../Review/Review";
// import Footer from "../Footer/Footer";
// import "./Layout.css";
// import LoginPopup from "../LoginPopup/LoginPopup";

// const Layout = () => {
//   const [showLogin, setShowLogin] = useState(false);
//   const location = useLocation();

//   return (
//     <>
//       {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
//       <Navbar setShowLogin={setShowLogin} />

//       <div className="layout">
//         <main>
//           <Outlet /> {/* Active page (Home, Shop, Offers, ProductDetails) goes here */}
//         </main>

//         {/* Hide Review on product details page */}
//         {location.pathname.startsWith("/product/") ? null :""}
      
//       </div>

//        <Review />
//       <Footer />
//     </>
//   );
// };

// export default Layout;


import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Review from "../Review/Review";
import Footer from "../Footer/Footer";
import "./Layout.css";
import LoginPopup from "../LoginPopup/LoginPopup";

const Layout = () => {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();

  // ✅ Reset scroll to top on every route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // use "smooth" if you want animation
    });
  }, [location.pathname]);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <Navbar setShowLogin={setShowLogin} />

      <div className="layout">
        <main>
          <Outlet /> {/* Active page (Home, Shop, Offers, ProductDetails) goes here */}
        </main>

        {/* Your existing condition untouched */}
        {location.pathname.startsWith("/product/") ? null : ""}
      </div>

      <Review />
      <Footer />
    </>
  );
};

export default Layout;
