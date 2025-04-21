import React from 'react'
import ProductBox from './ProductBox'
import { badamzamini, pizza, product1, product2 } from '../../public/product'

const ProductList = () => {
  return (
    <div className='flex justify-center px-6 gap-1'>
      <div className='w-full mx-auto flex flex-col gap-14 justify-center'>
        <ProductBox img={badamzamini} info={"قارچ نون ، پنیر ، گوجه ، خیار سبزی"} title={"بادام هندی"} price={'180,000'} />
        <ProductBox img={badamzamini} info={"قارچ نون ، پنیر ، گوجه ، خیار سبزی"} title={"بادام هندی"} price={'180,000'} />
      </div>
    
    </div>
  )
}

export default ProductList