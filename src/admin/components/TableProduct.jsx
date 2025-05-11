import React from 'react'
import Button from '../../components/util/Button'

const TableProduct = ({ products, categories }) => {
    return (
        <table className='w-full [direction:rtl]'>
            <thead>
                <tr className='text-center bg-bg-color text-gray-500 '>
                    <th className='p-2'>عکس محصول</th>
                    <th className='p-2'>نام محصول</th>
                    <th className='p-2'>دسته بندی</th>
                    <th className='p-2'>قیمت</th>
                    <th className='p-2'>عملیات</th>
                </tr>
            </thead>
            <tbody>
                {products.map((item) => (
                    <tr key={item.id} className='text-center'>
                        <td className='p-2'><img src={`http://localhost:5000/${item.image}`} className='w-12 mx-auto' alt="" /> </td>
                        <td className='p-2'>{item.name}</td>
                        <td className='p-2'>
                            {categories.find(cat => cat.category === item.category)?.title || item.category}
                        </td>
                        <td className='p-2'>{item.price}</td>
                        <td className='p-2 flex items-center justify-center gap-2'>
                            <Button text={"حذف"} className={'w-full'} />
                            <Button text={"ویرایش"} className={'w-full'} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableProduct