import React, { useContext } from 'react'
import "./ExploreCategory.css"
// import { category_list } from '../../assets/assets';
import { StoreContext} from '../../context/StoreContext'

const ExploreCategory = ({category,setCategory}) => {
    const {category_list} = useContext(StoreContext)
  return (
    <div className='explore-category' id='explore-category'>
        <div className="explore-category-list">
            {category_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.category_name?"All":item.category_name)} key={index} className="explore-category-list-item">
                        <img className={category===item.category_name?"active":""} src={item.category_image} alt="" />
                        <p>{item.category_name}</p>
                    </div>
                )
            })}
        </div>

    </div>
  )
}
import "./ExploreCategory.css"

export default ExploreCategory
