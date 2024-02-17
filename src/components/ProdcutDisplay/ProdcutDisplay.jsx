import React, { useContext } from 'react'
import './ProdcutDisplay.css'
import Star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../context/ShopContext'
const ProdcutDisplay = (props) => {
    const {prodcut} = props
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='prodcutDisplay'>
        <div className="prodcut-left">
                <div className="prodcut-img-list">
                    <img src={prodcut.image} alt="" />
                    <img src={prodcut.image} alt="" />
                    <img src={prodcut.image} alt="" />
                    <img src={prodcut.image} alt="" />
                </div>
                <div className="prodcut-img">
                <img className='prodcutDisplay-main-img' src={prodcut.image} alt="" />

                </div>
        </div>
        <div className="prodcut-right">
            <h1>{prodcut.name}</h1>
            <div className="prodcutDisplay-right-star">
                <img src={Star_icon} alt="" />
                <img src={Star_icon} alt="" />
                <img src={Star_icon} alt="" />
                <img src={Star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="prodcutDisplay-right-prices">
                <div className="prodcutDisplay-right-old-price">${prodcut.old_price}</div>
                <div className="prodcutDisplay-right-new-price">${prodcut.new_price}</div>
            </div>
            <div className="prodcutDisplay-right-description">
                A lightweight, usually knitted, pullover shirt, close-fitting and with around neckline and short sleeves, warn as an undershirt or outer garment
            </div>
            <div className="prodcutDisplay-right-size">
                <h1>Select Size</h1>
                <div className="prodcutDisplay-right-size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
            </div>
            <button onClick={()=>{addToCart(prodcut.id)}}>
                ADD To CART
            </button>
            <p className='prodcutDisplay-right-category'><span>Category :</span>Women , T-Shirt, Crop Top</p>
            <p className='prodcutDisplay-right-category'><span>Tages :</span>Modern, Latest</p>
           
        </div>

    </div>
  )
}

export default ProdcutDisplay