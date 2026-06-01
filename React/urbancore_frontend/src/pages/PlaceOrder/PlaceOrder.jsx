// import React, { useContext } from "react";
// import { useParams } from "react-router-dom";
// import { StoreContext } from "../../context/StoreContext";
// import "./PlaceOrder.css";

// const PlaceOrder = () => {
//   const { id } = useParams();
//   const { product_list } = useContext(StoreContext);

//   const product = product_list.find((item) => String(item._id) === String(id));

//   if (!product) {
//     return <h2 className="order-not-found">Product not found!</h2>;
//   }

//   return (
//     <div className="order-container">
//       {/* Left: Product Summary */}
//       <div className="order-summary">
//         <h2>Order Summary</h2>
//         <img src={product.image} alt={product.name} className="order-product-img" />
//         <h3>{product.name}</h3>
//         <p>{product.product_detail}</p>
//         <div className="order-price">
//           <span className="price">₹{product.price}</span>
//           {product.regular_price && (
//             <span className="old-price">₹{product.regular_price}</span>
//           )}
//         </div>
//       </div>

//       {/* Right: Order Form */}
//       <div className="order-form">
//         <h2>Shipping Details</h2>
//         <form>
//           <div className="form-group">
//             <label>Full Name</label>
//             <input type="text" placeholder="Enter your name" required />
//           </div>

//           <div className="form-group">
//             <label>Address</label>
//             <textarea placeholder="Enter your address" required></textarea>
//           </div>

//           <div className="form-group">
//             <label>Phone Number</label>
//             <input type="tel" placeholder="Enter your phone" required />
//           </div>

//           <div className="form-group">
//             <label>Payment Method</label>
//             <div className="payment-options">
//               <label>
//                 <input type="radio" name="payment" value="cod" defaultChecked />
//                 Cash on Delivery
//               </label>
//               <label>
//                 <input type="radio" name="payment" value="paynow" />
//                 Pay Now
//               </label>
//             </div>
//           </div>

//           <button type="submit" className="place-order-btn">
//             Place Order (₹{product.price})
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PlaceOrder;







import React, { useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { id } = useParams();
  const location = useLocation();
  const { product_list } = useContext(StoreContext);

  const product = product_list.find((item) => String(item._id) === String(id));
  const quantity = location.state?.quantity || 1;

  if (!product) {
    return <h2 className="order-not-found">Product not found!</h2>;
  }

  const totalPrice = product.price * quantity;

  return (
    <div className="order-container">
      {/* Left: Product Summary */}
      <div className="order-summary">
        <h2>Order Summary</h2>
        <img src={product.image} alt={product.name} className="order-product-img" />
        <h3>{product.name}</h3>
        <p>{product.product_detail}</p>
        <div className="order-price">
          <span className="price">₹{product.price} × {quantity} = ₹{totalPrice}</span>
          {product.regular_price && (
            <span className="old-price">₹{product.regular_price}</span>
          )}
        </div>
      </div>

      {/* Right: Order Form */}
      <div className="order-form">
        <h2>Shipping Details</h2>
        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea placeholder="Enter your address" required></textarea>
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone" required />
          </div>

          <div className="form-group">
            <label>Payment Method</label>
            <div className="payment-options">
              <label>
                <input type="radio" name="payment" value="cod" defaultChecked />
                Cash on Delivery
              </label>
              <label>
                <input type="radio" name="payment" value="paynow" />
                Pay Now
              </label>
            </div>
          </div>

          <button type="submit" className="place-order-btn">
            Place Order (₹{totalPrice})
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;
