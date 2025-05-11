import React, { useEffect, useState } from 'react'
import AdminNavbar from './components/AdminNavbar'
import { Link, useLocation } from 'react-router-dom';
import Button from '../components/util/Button';
import Input from '../components/util/Input';
import axios from 'axios';

const EditProduct = () => {
    const location = useLocation();
    const { product } = location.state || {};
    const [detail, setDetail] = useState(product?.detail || '');
    const [category, setCategory] = useState(product?.category || '');
    const [categories, setCategories] = useState([]); // for combo box
    const [name, setName] = useState(product?.name || '');
    const [image, setImage] = useState(product?.image || '');
    const [imageFile, setImageFile] = useState(null);
    const [price, setPrice] = useState(product?.price || 0);
    const backendURL = 'http://localhost:5000/';
    useEffect(() => {
        axios.get('http://localhost:5000/api/categories')
            .then(res => setCategories(res.data))
            .catch(err => console.error("خطا در گرفتن دسته‌بندی‌ها:", err));
        console.log(categories)
    }, []);
    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            const formData = new FormData();
            formData.append('image', file);

            const res = await axios.post('http://localhost:5000/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const newImagePath = res.data.imagePath;
            setImage(newImagePath); // نمایش جدید
            setImageFile(newImagePath); // ذخیره برای ارسال به بک‌اند
        } catch (err) {
            console.error("خطا در آپلود تصویر:", err);
            alert("آپلود تصویر با مشکل مواجه شد.");
        }
    };
    return (
        product ? (
            <div className='font-Pinar-medium p-10 bg-bg-color min-h-screen h-full'>
                <AdminNavbar title={"ویرایش محصول"} />
                <div className='flex flex-col gap-5'>
                    <div className='w-1/2 mx-auto relative'>
                        {/* image && for undefined select */}
                        {image && <img src={backendURL + image} alt="Product" />}

                        {/* input فایل مخفی */}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className='absolute inset-0 opacity-0 cursor-pointer'
                            style={{ zIndex: 10 }}
                        />

                        {/* دکمه نمایشی برای کلیک */}
                        <div className='absolute bottom-0 right-0 bg-primary p-2 text-white rounded-full z-0'>
                            <p>ویرایش</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <Input text={"نام محصول"} value={name} onChange={(e) => setName(e.target.value)} />
                        <Input text={"قیمت محصول"} value={price} onChange={(e) => setPrice(e.target.value)} />
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
                        <div className='flex justify-center'>
                            <Link to={'/admin'}>
                                <Button text={"ثبت محصول"} className={'px-10'} onClick={() => {
                                    const editedProduct = {
                                        id: product.id,
                                        name,
                                        detail,
                                        price: parseFloat(price),
                                        category,
                                        image: imageFile || product.image,
                                    };
                                    axios.put(`http://localhost:5000/api/menu/${product.id}`, editedProduct)
                                        .then(res => {
                                            console.log(res.data);
                                            alert('محصول ویرایش شد!');
                                        })
                                        .catch(err => {
                                            console.error(err);
                                            alert('خطا در ویرایش محصول');
                                        });
                                }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className='w-full h-screen bg-bg-color flex justify-center items-center font-Pinar-medium text-center flex-col gap-5'>
                <p>محصولی برای ویرایش انتخاب نشده است.</p>
                <Link to={'/admin'}>
                    <Button text={"بازگشت به پنل مدیریت"} className={'px-5'} />
                </Link>
            </div>
        )
    );
}

export default EditProduct