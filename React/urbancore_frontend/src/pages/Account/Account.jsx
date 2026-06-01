import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Account.css";

const Account = () => {
  const navigate = useNavigate();

  // Dummy user data
  const [user] = useState({
    name: "Emma Watson",
    email: "emma@example.com",
  });

  // Avatar options
  const avatarOptions = [
    "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
    "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
  ];

  const [selectedAvatar, setSelectedAvatar] = useState(avatarOptions[0]);
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);

  // Dummy orders
  const [orders] = useState([
    { id: 101, item: "Floral Summer Dress", date: "Aug 25, 2025", status: "Delivered", price: "$49.99" },
    { id: 102, item: "Denim Jacket", date: "Aug 28, 2025", status: "Shipped", price: "$79.00" },
    { id: 103, item: "White Sneakers", date: "Sep 01, 2025", status: "Processing", price: "$59.50" },
  ]);

  const handleOrderClick = (orderId) => {
    navigate(`/order/${orderId}`);
  };

  return (
    <div className="account-page">
      {/* Profile Info */}
      <div className="account-header">
        <div className="avatar-wrapper">
          <img src={selectedAvatar} alt="Avatar" className="avatar-img" />
          <button
            className="avatar-edit-btn"
            onClick={() => setShowAvatarPicker(true)}
          >
            {/* Pencil icon as image */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png"
              alt="Edit"
              className="pencil-icon"
            />
          </button>
        </div>
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>

      {/* Avatar Picker Modal */}
      {showAvatarPicker && (
        <div className="avatar-modal">
          <div className="avatar-modal-content">
            <h3>Choose Your Avatar</h3>
            <div className="avatar-options">
              {avatarOptions.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt={`Avatar ${index + 1}`}
                  className={`avatar-choice ${
                    selectedAvatar === avatar ? "selected" : ""
                  }`}
                  onClick={() => {
                    setSelectedAvatar(avatar);
                    setShowAvatarPicker(false);
                  }}
                />
              ))}
            </div>
            <button
              className="close-btn"
              onClick={() => setShowAvatarPicker(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Orders */}
      <div className="account-section">
        <h3>My Orders</h3>
        {orders.length > 0 ? (
          <div className="orders-list">
            {orders.map((order) => (
              <div
                key={order.id}
                className="order-card clickable"
                onClick={() => handleOrderClick(order.id)}
              >
                <div className="order-info">
                  <h4>{order.item}</h4>
                  <p>Date: {order.date}</p>
                  <p>
                    Status:{" "}
                    <span className={`status ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </p>
                </div>
                <div className="order-price">{order.price}</div>
              </div>
            ))}
          </div>
        ) : (
          <p className="empty">You have no orders yet.</p>
        )}
      </div>

      {/* Settings */}
      <div className="account-section">
        <h3>Account Settings</h3>
        <button className="account-btn">Edit Profile</button>
        <button className="account-btn">Change Password</button>
        <button className="account-btn logout">Logout</button>
      </div>
    </div>
  );
};

export default Account;
