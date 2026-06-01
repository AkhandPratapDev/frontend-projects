// import React, { useState } from "react";
// import "./Home.css";
// import Header from "../../components/Header/Header";
// import ExploreCategory from "../../components/ExploreCategory/ExploreCategory";
// import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
// import LastProductDisplay from "../../components/LastProductDisplay/LastProductDisplay";

// const Home = () => {
//   const [category, setCategory] = useState("All");

//   return (
//     <div>
//       <Header />
//       <ExploreCategory category={category} setCategory={setCategory} />
//       <ProductDisplay category="all" showPoster={true} limit={20} />
//       <LastProductDisplay/>
//     </div>
//   );
// };

// export default Home;





import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreCategory from "../../components/ExploreCategory/ExploreCategory";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import LastProductDisplay from "../../components/LastProductDisplay/LastProductDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />

      {/* Category filter */}
      <ExploreCategory category={category} setCategory={setCategory} />

      {/* Product list (filtered by category) */}
      <ProductDisplay category={category} showPoster={true} limit={20} />

      {/* Example: last row of products or special deals */}
      <LastProductDisplay />
    </div>
  );
};

export default Home;
