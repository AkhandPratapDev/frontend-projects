// import React, { useEffect, useRef, useState } from "react";
// import "./Header.css";
// import { assets } from "../../assets/assets";

// const Header = () => {
//   const images = [
//     assets.header_img_one,
//     assets.header_img_two,
//     assets.header_img_three,
//   ];

//   // Duplicate images to make infinite scrolling possible
//   const extendedImages = [...images, ...images];

//   const [index, setIndex] = useState(0);
//   const timerRef = useRef(null);

//   // Auto slide every 2s
//   useEffect(() => {
//     timerRef.current = setInterval(() => {
//       setIndex((prev) => prev + 1);
//     }, 2000);

//     return () => clearInterval(timerRef.current);
//   }, []);

//   // Reset index when reaching the end of the cloned list
//   useEffect(() => {
//     if (index >= images.length) {
//       const timeout = setTimeout(() => {
//         setIndex(0);
//       }, 500); // same as transition duration
//       return () => clearTimeout(timeout);
//     }
//   }, [index, images.length]);

//   return (
//     <div className="header">
//       <div
//         className="header-contents"
//         style={{
//           transform: `translateX(-${index * 100}%)`,
//           transition: index === 0 ? "none" : undefined,
//         }}
//       >
//         {extendedImages.map((img, i) => (
//           <img
//             key={i}
//             src={img}
//             alt={`header-${i}`}
//             className="header-img"
//           />
//         ))}
//       </div>

//       {/* Dots Navigation */}
//       <div className="dots">
//         {images.map((_, i) => (
//           <span
//             key={i}
//             className={`dot ${i === index % images.length ? "active" : ""}`}
//             onClick={() => setIndex(i)}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Header;


import React, { useEffect, useRef, useState, useContext } from "react";
import "./Header.css";
import { StoreContext } from "../../context/StoreContext"; // adjust path if needed

const Header = () => {
  const { homepage_assets } = useContext(StoreContext);

  const images = [
    homepage_assets.header_img_1,
    homepage_assets.header_img_2,
    homepage_assets.header_img_3,
  ];

  // Duplicate images to make infinite scrolling possible
  const extendedImages = [...images, ...images];

  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  // Auto slide every 2s
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(timerRef.current);
  }, []);

  // Reset index when reaching the end of the cloned list
  useEffect(() => {
    if (index >= images.length) {
      const timeout = setTimeout(() => {
        setIndex(0);
      }, 500); // same as transition duration
      return () => clearTimeout(timeout);
    }
  }, [index, images.length]);

  return (
    <div className="header">
      <div
        className="header-contents"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: index === 0 ? "none" : undefined,
        }}
      >
        {extendedImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`header-${i}`}
            className="header-img"
          />
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index % images.length ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Header;
