import React, { useContext } from 'react'
import { ShopContext } from "../Context/ShopContext"
import {useParams} from "react-router-dom"
import ProductHd from '../components/ProductHd';
import ProductDisplay from '../components/ProductDisplay';
import ProductDescription from '../components/ProductDescription';
import RelateProducts from '../components/RelateProducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  if(!product) {
    return <div>product papou</div>
  }
  return (
    <section className='max_padd_container py-28'>
      <div>
        <ProductHd product={product}/>
        <ProductDisplay product={product}/>
        <ProductDescription/>
        <RelateProducts/>
      </div>
    </section>
  )
}

export default Product