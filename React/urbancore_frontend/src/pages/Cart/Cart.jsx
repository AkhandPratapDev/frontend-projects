import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const Cart = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    updateCartItem,
    product_list,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  const goToDetails = (id) => {
    navigate(`/product/${id}`);
  };

  // ✅ Update size via context
  const handleSizeChange = (item, newSize) => {
    updateCartItem(item.id, { size: newSize });
  };

  if (cart.length === 0) {
    return <div className="cart-empty">Your cart is empty 🛒</div>;
  }

  return (
    <div className="cart-page">
      {cart.map((item) => {
        const product = product_list.find((p) => p._id === item.id);

        return (
          <div key={item.id + item.size + item.color} className="cart-card">
            {/* Image (clickable) */}
            <div
              className="cart-img"
              onClick={() => goToDetails(item.id)}
              style={{ cursor: "pointer" }}
            >
              <img src={item.image} alt={item.name} />
            </div>

            {/* Details (NOT clickable) */}
            <div className="cart-details">
              <h4 className="cart-product-name">{item.name}</h4>

              {/* Size options */}
              <div className="product-sizes">
                <span className="label">Size:</span>
                {product?.sizes?.map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${
                      item.size === size ? "active" : ""
                    }`}
                    onClick={() => handleSizeChange(item, size)}
                  >
                    {size}
                  </button>
                ))}
              </div>

              {/* Color */}
              <p>
                <strong>Color:</strong> {item.color || "Default"}
              </p>
            </div>

            {/* Quantity Control */}
            <div className="cart-quantity-action-btn">
            <div className="cart-quantity">
              <button onClick={() => removeFromCart(item.id, item.size, item.color)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => addToCart(item)}>+</button>
              <button
                className="delete-btn"
                onClick={() =>
                  removeFromCart(item.id, item.size, item.color)
                }
              >
                <img src={assets.delete_icon} alt="" />
              </button>
            </div>

            {/* Order Button */}
            <div className="cart-action">
              <button
                onClick={() =>
                  navigate(`/order/${item.id}`, {
                    state: { quantity: item.quantity },
                  })
                }
                className="order-btn"
              >
                Order
              </button>
            </div>

            </div>


          </div>
        );
      })}

    </div>
  );
};

export default Cart;
