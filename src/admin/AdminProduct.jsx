import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from '../components/util/Button';

const AdminProduct = () => {
    const [products, setProducts] = useState([]);
    const [popup, setPopup] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:5000/api/menu")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/menu/${id}`);
            if (res.status === 200) {
                // حذف محصول از آرایه و به روز رسانی در front-end
                setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
                setPopup((prev) => !prev)
            }
        } catch (error) {
            setPopup((prev) => !prev)
            console.error(error);
        }

    };

    return (
        <div className='font-Pinar-medium p-10'>
            {products.length === 0 ? (
                <div className='flex justify-center items-center'>محصولی وجود ندارد</div>
            ) : (
                <>
                    {products.map((item) => (
                        <>
                            {popup && (
                                <div className='font-Pinar-medium fixed flex justify-center items-center w-screen h-screen top-0 left-0 z-50'>
                                    <div className='p-10 text-center rounded-xl bg-white z-10'>
                                        <h2 className='mb-10'>آیا مطمین هستید ؟</h2>
                                        <div className='flex flex-row-reverse gap-5'>
                                            <Button text={"حذف"} onClick={() => handleDelete(item.id)} className='px-10' />
                                            <Button text={"بازگشت"} onClick={() => setPopup((prev) => !prev)} className='bg-black px-10' />
                                        </div>
                                    </div>
                                    <div className='fixed w-screen h-screen backdrop-blur-sm bg-black/30 ' />
                                </div>
                            )}
                            <div key={item.id} className='flex flex-row-reverse justify-between items-center border-b-2 border-b-gray-300 py-5'>
                                <div className='flex flex-row-reverse gap-5'>
                                    <img src={`http://localhost:5000/${item.image}`} alt="" className='w-[100px] h-[100px]' />
                                    <div className='flex flex-col gap-2 items-end justify-center'>
                                        <h3 className='text-xl'>{item.name}</h3>
                                        <p className='text-[10px]'>{item.detail}</p>
                                    </div>
                                </div>
                                <div className='flex flex-row-reverse gap-5 items-center'>
                                    <p>{item.price} تومان</p>
                                    <div className='flex flex-col gap-1'>
                                        <Button text={"حذف"} onClick={() => setPopup((prev) => !prev)} className='w-full text-white px-4 py-2 rounded' />
                                        <Button text={"ویرایش"} className='w-full text-white px-4 py-2 rounded' />
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </>)}

        </div>
    )
}

export default AdminProduct