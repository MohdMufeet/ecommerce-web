import React from 'react'

const ProductCard = ({data}) => {
  return (
    <>
        <p>{data.title}</p>
        <p>{data.description}</p>
        <p>{data.stock}</p>
        <p>{data.price}</p>
        <p>{data.image}</p>
    </>
  )
}

export default ProductCard