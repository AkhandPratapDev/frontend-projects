import React, { useState } from "react";
import "./Review.css";

const Review = () => {
  const [rating, setRating] = useState(3); // default rating

  const handleClick = (value) => {
    setRating(value);
    console.log("Rated:", value); // send to backend later
  };

  return (
    <div className="review" id="review">
      <div className="review-card rate-us">
        <h3>Rate Us</h3>

        {/* Star Rating UI directly inside Review */}
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= rating ? "filled" : ""}
              onClick={() => handleClick(star)}
            >
              ★
            </span>
          ))}
        </div>

        <p>
          We value your feedback! Please take a moment to rate us and share your
          thoughts — it helps us improve and serve you better every time.
        </p>
      </div>
    </div>
  );
};

export default Review;




// import React from "react";
// import "./Review.css";

// const Review = () => {
//   return (
//     <div className="review" id="review">
//       <div className="review-card rate-us">
//         <h3>Rate Us</h3>

//         {/* Placeholder stars (not functional yet) */}
//         <div className="stars">
//           <span>★</span>
//           <span>★</span>
//           <span>★</span>
//           <span>★</span>
//           <span>★</span>
//         </div>

//         <p>
//           We value your feedback! Please take a moment to rate us and share your
//           thoughts — it helps us improve and serve you better every time.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Review;
