
import React, { useContext } from "react";
import "./LastProductDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import ProductItem from "../ProductItem/ProductItem";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const LastProductDisplay = () => {
  const { last_product_list } = useContext(StoreContext);
  const { homepage_assets } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="last-product-display" id="last-product-display">
      {/* Poster */}
      <div className="last-product-poster">
        <img src={homepage_assets.last_product_display_poster} alt="Poster" />
      </div>

      {/* Product List */}
      {last_product_list.map((item, index) => {
        const cartPosition = index === 0 ? "left" : "right"; // first product left, rest right
        return (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            discount={item.discount}
            regular_price={item.regular_price}
            cartPosition={cartPosition}
          />
        );
      })}

      {/* Load More Button */}
      <button onClick={() => navigate('/shop')} className="load-more-btn">
        <img src={assets.arrow_icon} alt="" />
      </button>
    </div>
  );
};

export default LastProductDisplay;









// MY CODE----------------------------------------

// import React, { useContext } from "react";
// import "./LastProductDisplay.css";
// import { StoreContext } from "../../context/StoreContext";
// import ProductItem from "../ProductItem/ProductItem";
// import { assets } from "../../assets/assets";
// import { Link, useNavigate } from "react-router-dom";

// const LastProductDisplay = () => {
//   const { last_product_list } = useContext(StoreContext);
//   const navigate = useNavigate();

//   return (
//     <div className="last-product-display" id="last-product-display">


//       <div className="last-product-poster">
//         <img src={assets.last_product_poster} alt="Poster" />
//       </div>

   
//       {last_product_list.map((item, index) => {
//         return (
//           <ProductItem
//             key={index}
//             id={item._id}
//             name={item.name}
//             description={item.description}
//             price={item.price}
//             image={item.image}
//             discount={item.discount}
//             regular_price={item.regular_price}
//           />
//         );
//       })}
 
 
//       <button onClick={()=>navigate('/shop')} className="load-more-btn">
//         <img src={assets.arrow_icon} alt="" />
//       </button>

//     </div>
//   );
// };

// export default LastProductDisplay;




// import React, { useContext, useEffect, useState } from "react";
// import "./LastProductDisplay.css";
// import { StoreContext } from "../context/StoreContext";
// import ProductItem from "../ProductItem/ProductItem";
// import { assets } from "../../assets/assets";

// const LastProductDisplay = () => {
//   const { last_product_list = [] } = useContext(StoreContext);

//   // Determine initial visible count safely (SSR-safe)
//   const getCountFromWidth = (w) => {
//     if (w <= 1025) return 1;    // small phones
//     if (w <= 1289) return 2;    // small tablets / large phones
//     return 3;                  // desktop / wide screens
//   };

//   const [visibleCount, setVisibleCount] = useState(() => {
//     if (typeof window === "undefined") return 3;
//     return getCountFromWidth(window.innerWidth);
//   });

//   useEffect(() => {
//     const onResize = () => {
//       const next = getCountFromWidth(window.innerWidth);
//       setVisibleCount((prev) => (prev === next ? prev : next));
//     };

//     // listen
//     window.addEventListener("resize", onResize);
//     // in case CSS/viewport changed before listener runs, set once on mount
//     onResize();

//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   // only render as many products as fit in one row
//   const visibleProducts = last_product_list.slice(0, visibleCount);

//   return (
//     <div className="last-product-display" id="last-product-display">
//       {/* Poster (single) */}
//       <div className="last-product-poster">
//         <img src={assets.last_product_poster} alt="Poster" />
//       </div>

//       {/* Only the visible products */}
//       {visibleProducts.map((item) => (
//         <ProductItem
//           key={item._id}
//           id={item._id}
//           name={item.name}
//           description={item.description}
//           price={item.price}
//           image={item.image}
//           discount={item.discount}
//           regular_price={item.regular_price}
//         />
//       ))}
//     </div>
//   );
// };

// export default LastProductDisplay;
