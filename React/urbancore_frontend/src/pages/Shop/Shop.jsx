// import React, { useState } from "react";
// import "./Shop.css";
// import Search from "../../components/Search/Search";
// import ExploreCategory from "../../components/ExploreCategory/ExploreCategory";
// import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";


// const Shop = () => {
//   const [category, setCategory] = useState("All");
//   return (
//     <div className="shop-product">
//       {/* <Search /> */}
//       <ExploreCategory />
//       <ProductDisplay category="all" showPoster={false} infiniteScroll={true} />

//     </div>
//   );
// };

// export default Shop;



// import React, { useState } from "react";
// import "./Shop.css";
// import Search from "../../components/Search/Search";
// import ExploreCategory from "../../components/ExploreCategory/ExploreCategory";
// import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";

// const Shop = () => {
//   const [category, setCategory] = useState("All");

//   return (
//     <div className="shop-product">
//       {/* Optional: Uncomment if you want search */}
//       {/* <Search /> */}

//       {/* Pass state down properly */}
//       <ExploreCategory category={category} setCategory={setCategory} />

//       {/* Use the category state */}
//       <ProductDisplay
//         category={category}
//         showPoster={false}
//         infiniteScroll={true}
//       />
//     </div>
//   );
// };

// export default Shop;





import React, {useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import ExploreCategory from "../../components/ExploreCategory/ExploreCategory";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import "./Shop.css";
import Search from "../../components/Search/Search";

const Shop = () => {
   const [category, setCategory] = useState("All");

  const { product_list } = useContext(StoreContext);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("q")?.toLowerCase() || "";

  // Filter products by name OR search_keyword array
  const filteredProducts = searchTerm
    ? product_list.filter((p) => {
        const nameMatch = p.name?.toLowerCase().includes(searchTerm);

        const keywordMatch = Array.isArray(p.search_keyword)
          ? p.search_keyword.some((kw) =>
              kw.toLowerCase().includes(searchTerm)
            )
          : false;

        return nameMatch || keywordMatch;
      })
    : product_list;

  return (
       <div className="shop-product">
        <div className="search-resp">
        <Search />
        </div>
       <ExploreCategory category={category} setCategory={setCategory} />
      {filteredProducts.length > 0 ? (
        <ProductDisplay products={filteredProducts}   category={category} showPoster={false} infiniteScroll={true} />
      ) : (
        <p className="no-products">No products found</p>
      )}
    </div>
  );
};

export default Shop;


