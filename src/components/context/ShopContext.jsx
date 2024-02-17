import { React , createContext, useState } from "react";
import all_prodcut from '../Assets/all_product'



export const ShopContext = createContext(null)

const getDefaultCart = () =>{
    let cart = {};
    for (let index = 0; index < all_prodcut.length+1; index++) {
        cart[index] = 0
    }
    return cart;
}

const ShopContextProvider = (props) =>{
    

    const [cartItems , SetCartItems] = useState(getDefaultCart())


        const addToCart = ((itemId)=>{
                SetCartItems((prev)=>({...prev ,[itemId]:prev[itemId]+1}))
        })
        const removeFromCart = ((itemId)=>{
            SetCartItems((prev)=>({...prev ,[itemId]:prev[itemId]-1}))
    })
            
    const getTotalCartAmount = () =>{
        let totalAmount = 0
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_prodcut.find((prodcut)=>prodcut.id=== Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }            

        } 
         return totalAmount
    }

    const getTotalCartItems = () =>{
        let totalItems = 0
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItems +=cartItems[item]
            }
        }
        return totalItems
    }

        

    const ShopValue = { getTotalCartItems,getTotalCartAmount, all_prodcut , cartItems , addToCart , removeFromCart }

          
            
        return(
            <ShopContext.Provider value={ShopValue}>
            {props.children}
        </ShopContext.Provider>
        )
       
}


export default ShopContextProvider