import React from 'react'
import ProductBox from './ProductBox'
import { badamzamini, pizza, product1, product2 } from '../../public/product'
import menuData from '../data/menu.json'
const ProductList = () => {
  return (
    <div className='flex justify-center px-6 gap-1'>
      <div className='w-full mx-auto flex flex-col gap-14 justify-center'>
        {menuData.map((item, index) => {
          return (
            <ProductBox item={item} key={index} />
          )
        })}
      </div>
    </div>
  )
}

export default ProductList