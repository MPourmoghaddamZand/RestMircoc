import React, { useState } from 'react';
import Input from '../components/util/Input';
import Button from '../components/util/Button';
import axios from 'axios';

const Admin = () => {
    const [name, setName] = useState('');
    const [detail, setDetail] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [imageFile, setImageFile] = useState(null);

    // برای آپلود تصویر
    const handleImageUpload = (event) => {
        setImageFile(event.target.files[0]); // ذخیره فایل تصویر انتخاب شده
    };

    const addProduct = async () => {
        try {
            let imagePath = '';

            // بررسی اینکه آیا تصویر انتخاب شده است یا نه
            if (imageFile) {
                const formData = new FormData();
                formData.append('image', imageFile);

                const uploadRes = await axios.post('http://localhost:5000/api/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                // مسیر تصویر برگشتی از سرور
                imagePath = uploadRes.data.imagePath;
            }

            // ساخت شی محصول جدید
            const newProduct = {
                name,
                detail,
                price: parseFloat(price),
                category,
                image: imagePath,
            };

            // ارسال محصول به سرور
            const res = await axios.post('http://localhost:5000/api/menu', newProduct);

            // ریست کردن فرم
            setName('');
            setDetail('');
            setPrice('');
            setCategory('');
            setImageFile(null);

            alert('محصول با موفقیت اضافه شد!');
        } catch (error) {
            console.error('خطا در افزودن محصول:', error);
            alert('مشکلی در افزودن محصول رخ داد.');
        }
    };

    return (
        <div className='font-Pinar-medium p-10 bg-bg-color h-screen'>
            <nav className='flex justify-center mb-10'>
                <h1 className='text-3xl'>پنل ادمین</h1>
            </nav>
            <div className='flex flex-col gap-5'>
                <Input
                    text='نام محصول'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    text='قیمت محصول'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <Input
                    text='دسته‌بندی محصول'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <Input
                    text='توضیحات محصول'
                    value={detail}
                    onChange={(e) => setDetail(e.target.value)}
                />

                {/* قسمت آپلود تصویر */}
                <div>
                    <label className='text-right block mb-1'>آپلود تصویر</label>
                    <input
                        type="file"
                        onChange={handleImageUpload}
                        accept="image/*" // فقط تصاویری با فرمت عکس
                    />
                </div>

                {/* دکمه افزودن محصول */}
                <Button text='افزودن محصول' className='w-10/12 mx-auto' onClick={addProduct} />
            </div>
        </div>
    );
};

export default Admin;
