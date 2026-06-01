import React, { useContext, useEffect, useState } from "react";
import "./ProductDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import ProductItem from "../ProductItem/ProductItem";
import { assets } from "../../assets/assets";

const ProductDisplay = ({
  category,
  showPoster = false,
  limit = null,
  infiniteScroll = false,
  products: propsProducts = null, // <-- new: accept filtered products from parent
}) => {
  const { product_list } = useContext(StoreContext);
  const { homepage_assets } = useContext(StoreContext);

  // Use propsProducts if provided, otherwise fall back to full product_list
  const sourceProducts = Array.isArray(propsProducts)
    ? propsProducts
    : Array.isArray(product_list)
    ? product_list
    : [];

  // 🔑 Filter products by category if not "All"
  const filteredByCategory =
    category && category !== "All"
      ? sourceProducts.filter(
          (item) => (item.category || "").toString() === category.toString()
        )
      : sourceProducts;

  const getInitialCount = () => {
    if (infiniteScroll) {
      return window.innerWidth <= 500 ? 12 : 20;
    }
    return limit || 20;
  };

  const [visibleCount, setVisibleCount] = useState(getInitialCount);
  const [columns, setColumns] = useState(4);
  const [loading, setLoading] = useState(false);

  // --- Column calculation ---
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth <= 500) setColumns(2);
      else if (window.innerWidth <= 1024) setColumns(3);
      else if (window.innerWidth <= 1288) setColumns(4);
      else setColumns(5);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // --- Adjust visibleCount on resize ---
  useEffect(() => {
    const updateCount = () => {
      if (infiniteScroll) {
        setVisibleCount((prev) => {
          if (window.innerWidth <= 500 && prev < 12) return 12;
          if (window.innerWidth > 500 && prev < 20) return 20;
          return prev;
        });
      } else if (limit) {
        if (window.innerWidth <= 500) setVisibleCount(12);
        else if (window.innerWidth <= 768) setVisibleCount(15);
        else if (window.innerWidth <= 1020) setVisibleCount(18);
        else setVisibleCount(limit);
      }
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, [limit, infiniteScroll]);

  // --- Infinite scroll ---
  useEffect(() => {
    if (!infiniteScroll) return;

    const sentinel = document.getElementById("scroll-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          visibleCount < filteredByCategory.length
        ) {
          setLoading(true);
          setTimeout(() => {
            setVisibleCount((prev) =>
              Math.min(
                prev + (window.innerWidth <= 500 ? 6 : 10),
                filteredByCategory.length
              )
            );
            setLoading(false);
          }, 800);
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [infiniteScroll, filteredByCategory.length, visibleCount]);

  const posterIndex = columns * 2 - 1;
  const productsToShow = filteredByCategory.slice(0, visibleCount);

  return (
    <div className="product-display" id="product-display">
      <h2>Top Selling Products</h2>

      {productsToShow.length === 0 ? (
        <p className="no-products">No products to display</p>
      ) : (
        <div className="product-display-list">
          {productsToShow.map((item, index) => (
            <React.Fragment key={item._id || index}>
              <div className="fade-in">
                <ProductItem
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  discount={item.discount}
                  regular_price={item.regular_price}
                  category={item.category}
                  color={item.color}
                />
              </div>

              {showPoster && index === posterIndex && (
                <div className="product-poster">
                  <img src={homepage_assets.homepage_poster} alt="Poster" />
                </div>
              )}
            </React.Fragment>
          ))}

          {/* Skeleton loader */}
          {loading &&
            infiniteScroll &&
            [...Array(columns)].map((_, i) => (
              <div key={i} className="product-item skeleton-item">
                <div className="skeleton skeleton-img"></div>
                <div className="skeleton-text-content">
                  <div className="skeleton skeleton-text short"></div>
                  <div className="skeleton skeleton-text"></div>
                  <div className="skeleton skeleton-price"></div>
                  <div className="skeleton skeleton-btn"></div>
                </div>
              </div>
            ))}

          {/* Sentinel div for infinite scroll */}
          {infiniteScroll && <div id="scroll-sentinel" />}
        </div>
      )}
    </div>
  );
};

export default ProductDisplay;
