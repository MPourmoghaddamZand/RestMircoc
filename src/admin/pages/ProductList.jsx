import React, { useEffect, useState } from 'react'
import Button from '../../components/util/Button'
import axios from 'axios';
import TableProduct from '../components/TableProduct';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [popup, setPopup] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:5000/api/categories")
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
        axios.get("http://localhost:5000/api/menu")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);
    return (
        <div className='flex flex-col gap-5 bg-bg-color'>
            <nav className='flex flex-row-reverse justify-between w-full rounded-lg p-6 drop-shadow-sm bg-white'>
                <p className='text-2xl font-Pinar-bold text-right'>
                    محصولات
                </p>
                <Button text={"افزودن محصول +"} className={'px-5'} />
            </nav>

            <div className='w-full rounded-lg p-6 drop-shadow-sm bg-white'>
                {products.length === 0 ? (
                    <div className='flex justify-center items-center'>محصولی وجود ندارد</div>
                ) : (
                    <TableProduct products={products} categories={categories} />
                )}
            </div>
        </div>
    )
}

export default ProductList