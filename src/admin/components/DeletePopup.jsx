import React from 'react'
import Button from '../../components/util/Button';

const DeletePopup = (item) => {
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
        <div className='font-Pinar-medium fixed flex justify-center items-center w-screen h-screen top-0 left-0 z-50'>
            <div className='p-10 text-center rounded-xl bg-white z-10'>
                <h2 className='mb-10 text-lg'>آیا مطمین هستید ؟</h2>
                <div className='flex flex-row-reverse gap-5'>
                    <Button text={"حذف"} onClick={() => { handleDelete(item.id) }} className='px-10' />
                    <Button text={"بازگشت"} className='!bg-black px-10' />
                </div>
            </div>
            <div className='fixed w-screen h-screen backdrop-blur-sm bg-black/30 ' />
        </div>
    )
}

export default DeletePopup