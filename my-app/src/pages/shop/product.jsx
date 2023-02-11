import React, { useContext } from 'react'



export const Product = (props) => {
  const { id, productName, price, productImage } = props.data

  
  return (
    <div className='column'>

      <img src={productImage} />
      <div className='description'>
        <p><b>{productName}</b></p>
        <p>${price}</p>
      </div>
    </div>
  )
}
