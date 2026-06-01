import React, { useContext, useState } from 'react'
import './OfferProductDisplay.css'
import { StoreContext } from "../../context/StoreContext";
import ProductItem from "../ProductItem/ProductItem";
import { assets } from '../../assets/assets';



const OfferProductDisplay = () => {

  const {offer_product_list} = useContext(StoreContext)
  const {homepage_assets} = useContext(StoreContext)
  return (
    <div className='offer-product-display' id='offer-product-display'>
      <div className="offer-poster">
      <img src={homepage_assets.offers_poster} alt="dfdfd" />
    </div>
      <div className="offer-product-display-list">
      {offer_product_list.map((item, index)=>{
        return(
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            discount={item.discount}
            regular_price={item.regular_price}
          />
        )
      })}
      </div>
      
    </div>
  )
}

export default OfferProductDisplay
