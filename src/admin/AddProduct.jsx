import React, { useEffect, useState } from 'react'
import Button from '../components/util/Button';
import axios from 'axios';
import Input from '../components/util/Input';
import { Link } from 'react-router-dom';
import { chevronSVG } from '../../public/svg';
import AdminNavbar from './components/AdminNavbar';



const AddProduct = () => {
    // مقادیر محصول
    const [name, setName] = useState('');
    const [detail, setDetail] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]); // for combo box
    const [imageFile, setImageFile] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:5000/api/categories')
            .then(res => setCategories(res.data))
            .catch(err => console.error("خطا در گرفتن دسته‌بندی‌ها:", err));
            console.log(categories)
    }, []);

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
            <AdminNavbar />
            <div className="flex flex-col gap-5">
                <Input text="نام محصول" value={name} onChange={(e) => setName(e.target.value)} />
                <Input text="قیمت محصول" value={price} onChange={(e) => setPrice(e.target.value)} />
                <div>
                    <h2 className="text-right w-full pr-2 mb-1">دسته‌بندی محصول</h2>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="rounded-full w-full text-center text-xs p-2"
                    >
                        <option value="">یک دسته‌بندی انتخاب کنید</option>
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.category}>{cat.title}</option>
                        ))}
                    </select>
                </div>
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