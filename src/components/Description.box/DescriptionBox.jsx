import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionBox'>
        <div className="descriptionBox-navigator">
            <div className="descriptionBox-nav-box">Description</div>
            <div className="descriptionBox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionBox-description">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ipsam tenetur obcaecati. Facere incidunt temporibus error natus nostrum, sunt iste.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequuntur distinctio numquam veniam, corrupti laborum ad vel alias aut neque, deserunt minus laboriosam ab asperiores suscipit, ducimus eligendi. Ab, quibusdam!</p>
        </div>
    </div>
  )
}

export default DescriptionBox