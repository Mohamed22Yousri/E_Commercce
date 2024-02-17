import React from 'react'
import New_Collection from '../Assets/new_collections'
import Item from '../item/Item'
import './NewCollections.css'

const NewCollections = () => {
  return (
    <div className='newCollections'>
        <h1>NEW COLLECTION</h1>
        <hr/>
        <div className="collection">
            {New_Collection.map((item , i )=>{
                return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}

        </div>
    </div>
  )
}

export default NewCollections