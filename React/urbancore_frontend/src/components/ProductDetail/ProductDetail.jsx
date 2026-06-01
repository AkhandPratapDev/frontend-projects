import React, { useState, useContext, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./ProductDetail.css";
import { assets } from "../../assets/assets";
import LastProductDisplay from "../LastProductDisplay/LastProductDisplay";

const ProductDetail = () => {
  const { id } = useParams();
  const { product_list, addToCart } = useContext(StoreContext);

  const product = product_list.find((item) => String(item._id) === String(id));

  const [mainImage, setMainImage] = useState(product?.image);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1); // ✅ Quantity state
  const [openDropdown, setOpenDropdown] = useState(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!product) {
    return (
      <div className="product-detail not-found">
        <h2>Product not found!</h2>
      </div>
    );
  }

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const thumbnails = [
    product.image,
    product.product_image_1,
    product.product_image_2,
    product.product_image_3,
  ].filter(Boolean);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const width = carouselRef.current.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  // ✅ Add to Cart with quantity
  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      size: selectedSize,
      color: product.color,
      quantity, // ✅ include quantity
    });
  };

  return (
    <>
      <div className="product-detail">
        {/* Left: Images */}
        <div className="product-detail-images">
          {isMobile ? (
            <>
              <div
                className="thumbnail-row carousel-mode"
                ref={carouselRef}
                onScroll={handleScroll}
              >
                {thumbnails.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`thumb-${index}`}
                    className={`thumb ${activeIndex === index ? "active" : ""}`}
                  />
                ))}
              </div>
              <div className="dots">
                {thumbnails.map((_, i) => (
                  <span
                    key={i}
                    className={`dot ${i === activeIndex ? "active" : ""}`}
                    onClick={() => {
                      if (carouselRef.current) {
                        carouselRef.current.scrollTo({
                          left: i * carouselRef.current.offsetWidth,
                          behavior: "smooth",
                        });
                      }
                    }}
                  ></span>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="thumbnail-row">
                {thumbnails.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`thumb-${index}`}
                    onClick={() => setMainImage(img)}
                    className={`thumb ${mainImage === img ? "active" : ""}`}
                  />
                ))}
              </div>
              <img src={mainImage} alt={product.name} className="main-image" />
            </>
          )}
        </div>

        {/* Right: Info */}
        <div className="product-detail-info">
          <h2 className="product-title">{product.product_detail}</h2>
          <h3 className="product-name">{product.name}</h3>
          <div className="product-price-section">
            {product.discount && (
              <span className="current-price">₹{product.price}</span>
            )}
            {product.regular_price && (
              <span className="old-price">₹{product.regular_price}</span>
            )}
            {product.discount && (
              <span className="discount">{product.discount} OFF</span>
            )}
          </div>
          <p className="offer-note">
            🚀 {product.sold_last_week || 0} people bought this in last 7 days
          </p>

          {/* Sizes */}
          <div className="product-sizes">
            <span className="label">Size:</span>
            {product.sizes?.map((size) => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? "active" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          {/* ✅ Single Color */}
          <div className="product-color-quantity-details">
            {/* ✅ Quantity Control */}
            <div className="quantity-control">
              <span className="label">Quantity:</span>
              <div className="quantity-btns">
              <button onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}>
                −
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)}>+</button>
              </div>
            </div>

            <div className="product-color">
              <span className="label">Color: </span>
              <span className="color-value">{product.color}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="product-actions">
            <button
              onClick={() =>
                navigate(`/order/${product._id}`, { state: { quantity } })
              }
              className="product-display-order-btn"
            >
              Order
            </button>
            <button className="cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>

          {/* Dropdowns */}
          <div className="dropdowns">
            <div className="dropdown">
              <div
                className="dropdown-header"
                onClick={() => toggleDropdown("description")}
              >
                <span>Product Description</span>
                <span>{openDropdown === "description" ? "−" : "+"}</span>
              </div>
              {openDropdown === "description" && (
                <div className="dropdown-body">
                  <p>{product.description}</p>
                </div>
              )}
            </div>

            <div className="dropdown">
              <div
                className="dropdown-header"
                onClick={() => toggleDropdown("return")}
              >
                <span>15 Days Return & Instant Refunds</span>
                <span>{openDropdown === "return" ? "−" : "+"}</span>
              </div>
              {openDropdown === "return" && (
                <div className="dropdown-body">
                  <p>
                    Easy returns within 15 days. Instant refund once processed.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Return Policy */}
          <div className="return_policy">
            <div className="return_policy_icon">
              <div>
                <img src={assets.easy_return_icon} alt="" />
                <p>Easy Return & Refunds.</p>
              </div>
              <div>
                <img src={assets.cod_icon} alt="" />
                <p>Cash on Delivery.</p>
              </div>
              <div>
                <img src={assets.quality_assurence_icon} alt="" />
                <p>Quality Assurance.</p>
              </div>
            </div>
            <div className="delivery_time">
              <p>
                Expected delivery in{" "}
                <span className="time">
                  {product.delivery[0]} to {product.delivery[1]} working days.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <LastProductDisplay />
    </>
  );
};

export default ProductDetail;
