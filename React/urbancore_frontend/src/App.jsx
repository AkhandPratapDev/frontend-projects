
// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Layout from './components/Layout/Layout'
// import Home from './pages/Home/Home'
// import Shop from './pages/Shop/Shop'
// import Offers from './pages/Offers/Offers'

// const App = () => {
//   return (

//       <Routes>
//         <Route path="/" element={<Layout><Home/></Layout>} />
//         <Route path="/shop" element={<Layout><Shop/></Layout>} />
//         <Route path="/offers" element={<Layout><Offers/></Layout>} />
//       </Routes>


//   )
// }

// export default App


// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout/Layout";
// import Home from "./pages/Home/Home";
// import Shop from "./pages/Shop/Shop";
// import Offers from "./pages/Offers/Offers";
// import ProductDetail from "./components/ProductDetail/ProductDetail";
// import Cart from "./pages/Cart/Cart";
// import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";

// const App = () => {
//   return (
//     <Routes>
//       {/* Wrap Layout around all nested routes */}
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="shop" element={<Shop />} />
//         <Route path="offers" element={<Offers />} />
//         <Route path="cart" element={<Cart />} />
//         <Route path="product/:id" element={<ProductDetail />} />
//         <Route path="order" element={<PlaceOrder />} />
//       </Route>
//     </Routes>
//   );
// };

// export default App;



import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Offers from "./pages/Offers/Offers";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Account from "./pages/Account/Account";

const App = () => {
  return (
    <Routes>
      {/* Wrap Layout around all nested routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="offers" element={<Offers />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:id" element={<ProductDetail />} />
        {/* ✅ Pass product id to Order page */}
        <Route path="order/:id" element={<PlaceOrder />} />

        <Route path="account" element={<Account />} />
      </Route>
    </Routes>
  );
};

export default App;




















// import React from 'react'
// import Navbar from './components/Navbar/Navbar'
// import Header from './components/Header/Header'
// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home/Home'
// import Shop from './pages/Shop/Shop'
// import Offers from './pages/Offers/Offers'

// const App = () => {
//   return (
//     <div className='app'>
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/shop' element={<Shop/>}/>
//         <Route path='/offers' element={<Offers/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App
