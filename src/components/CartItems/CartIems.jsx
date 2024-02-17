import './CartItems.css'
import remove_icon from '../Assets/cart_cross_icon.png'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
const CartIems = () => {
  const {getTotalCartAmount, all_prodcut , cartItems , removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartiems'>
        <div className="Cartitems-format-main">
            <p>Prodcuts</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
       <hr />
          {all_prodcut.map((e)=>{
            if(cartItems[e.id]>0){
              return   <div>
              <div className="Cartitems-format Cartitems-format-main">
                  <img src={e.image} alt="" className='carticon-prodcut-icon' />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className='carticon-quantity'>{cartItems[e.id]}</button>
                  <p>${e.new_price*cartItems[e.id]}</p>
                  <img className='carticon-remove'  src={remove_icon} alt="" onClick={()=>removeFromCart(e.id)} />
              </div>
              <hr />
             </div>
            } return null
          })}
          <div className="cartitems-down">
            <div className="cartiems-total">
              <h1>Cart Totals</h1>
              <div>
              <div className="cartiems-total-item">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartiems-total-item">
                <p>Shipping Free</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartiems-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
              </div>
          
          <button>PROCEED TO CHECKOUT</button>
        </div>
         <div className="cartiems-promo-code">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartiems-promo-box">
              <input type="text" placeholder='Promo Code' />
              <button>Submit</button>
            </div>
          </div>
            </div>
          


         
        
    </div>
  )
}

export default CartIems