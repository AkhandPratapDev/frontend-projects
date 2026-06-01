// import { createContext } from "react";
// import {product_list,last_product_list,offer_product_list} from "../assets/assets"

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const contextValue = {
//     product_list,
//     last_product_list,
//     offer_product_list,
    
//   };
//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;




// import { createContext, useState } from "react";
// import {
//   product_list,
//   last_product_list,
//   offer_product_list,
// } from "../assets/assets";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   // --- CART STATE ---
//   const [cart, setCart] = useState([]);

//   // --- Add to cart ---
//   const addToCart = (product) => {
//     setCart((prev) => {
//       const existing = prev.find((item) => item.id === product.id);
//       if (existing) {
//         // Increase quantity if already exists
//         return prev.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         // Add new product with quantity 1
//         return [...prev, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   // --- Remove from cart ---
//   const removeFromCart = (productId) => {
//     setCart((prev) =>
//       prev
//         .map((item) =>
//           item.id === productId
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   // --- Clear Cart ---
//   const clearCart = () => setCart([]);

//   // Context Value
//   const contextValue = {
//     product_list,
//     last_product_list,
//     offer_product_list,
//     cart,
//     addToCart,
//     removeFromCart,
//     clearCart,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;



import { createContext, useState } from "react";
import {
  homepage_assets,
  category_list,
  product_list,
  last_product_list,
  offer_product_list,
} from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  // --- CART STATE ---
  const [cart, setCart] = useState([]);

  // --- Add to cart ---
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) =>
          item.id === product.id &&
          item.size === product.size &&
          item.color === product.color
      );

      if (existing) {
        // Increase quantity if same id+size+color
        return prev.map((item) =>
          item.id === product.id &&
          item.size === product.size &&
          item.color === product.color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new product with quantity 1
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // --- Remove from cart ---
  const removeFromCart = (productId, size, color) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === productId &&
          item.size === size &&
          item.color === color
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // --- Delete product completely from cart ---
  const deleteFromCart = (productId, size, color) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(
            item.id === productId &&
            item.size === size &&
            item.color === color
          )
      )
    );
  };

  // --- Update cart item (size, color, etc.) ---
  const updateCartItem = (productId, updates) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, ...updates } : item
      )
    );
  };

  // --- Clear Cart ---
  const clearCart = () => setCart([]);

  // Context Value
  const contextValue = {
    homepage_assets,
    category_list,
    product_list,
    last_product_list,
    offer_product_list,
    cart,
    addToCart,
    removeFromCart,
    deleteFromCart,
    clearCart,
    updateCartItem, // ✅ added
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
