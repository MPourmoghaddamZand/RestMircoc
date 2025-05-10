import React, { useState } from 'react'
import Button from '../components/util/Button';
import axios from 'axios';
import Input from '../components/util/Input';
import { Link } from 'react-router-dom';
import { chevronSVG } from '../../public/svg';



const AddProduct = () => {
    // مقادیر محصول
    const [name, setName] = useState('');
    const [detail, setDetail] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [imageFile, setImageFile] = useState(null);

    const handleImageUpload = (e) => {
        setImageFile(e.target.files[0]);
    };

    const addProduct = async () => {
        try {
            let imagePath = '';
            if (imageFile) {
                const formData = new FormData();
                formData.append('image', imageFile);
                const uploadRes = await axios.post('http://localhost:5000/api/upload', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
                imagePath = uploadRes.data.imagePath;
            }

            const newProduct = {
                name,
                detail,
                price: parseFloat(price),
                category,
                image: imagePath,
            };

            await axios.post('http://localhost:5000/api/menu', newProduct);
            setName('');
            setDetail('');
            setPrice('');
            setCategory('');
            setImageFile(null);
            alert('محصول اضافه شد!');
        } catch (error) {
            alert('خطا در افزودن محصول');
        }
    };


    return (
        <div className="font-Pinar-medium p-10 bg-bg-color h-screen">
            <nav className="flex justify-center mb-10">
                <div className='flex-1 cursor-pointer'>
                    <Link to={'/admin'}>
                        <div><img src={chevronSVG} alt="" /></div>
                    </Link>
                </div>
                <h1 className="text-3xl">پنل ادمین</h1>
            </nav>
            <div className="flex flex-col gap-5">
                <Input text="نام محصول" value={name} onChange={(e) => setName(e.target.value)} />
                <Input text="قیمت محصول" value={price} onChange={(e) => setPrice(e.target.value)} />
                <Input text="دسته‌بندی محصول" value={category} onChange={(e) => setCategory(e.target.value)} />
                <Input text="توضیحات محصول" value={detail} onChange={(e) => setDetail(e.target.value)} />
                <div>
                    <label className="text-right block mb-1">آپلود تصویر</label>
                    <input type="file" onChange={handleImageUpload} />
                </div>
                <Button text="افزودن محصول" className="w-10/12 mx-auto" onClick={addProduct} />
            </div>
        </div>
    )
}

export default AddProduct