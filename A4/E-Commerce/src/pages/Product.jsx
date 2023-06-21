import React from 'react'
import Layout from '../Layout/Layout'
import { products } from '../data'
import ProductCard from '../components/ProductCard'

const Product = () => {
  return (
    <Layout>
      <h2>Products</h2>
      {products.map((item,index)=>{
        return(
          <ProductCard product={item} key={index} />
        )
      })}

    </Layout>
  )
}

export default Product