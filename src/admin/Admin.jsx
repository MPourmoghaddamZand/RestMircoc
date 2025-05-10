import React, { useState, useEffect } from 'react';
import Input from '../components/util/Input';
import Button from '../components/util/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Admin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // در شروع، بررسی وضعیت ذخیره‌شده در localStorage
    useEffect(() => {
        const savedLogin = localStorage.getItem('adminLoggedIn');
        if (savedLogin === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = async () => {
        try {
            const res = await axios.post('http://localhost:5000/api/login', { username, password });
            if (res.data.success) {
                setIsLoggedIn(true);
                localStorage.setItem('adminLoggedIn', 'true'); // ذخیره وضعیت ورود
            } else {
                alert('نام کاربری یا رمز اشتباه است');
            }
        } catch (error) {
            alert('خطا در ارتباط با سرور یا رمز اشتباه است.');
        }
    };

    if (!isLoggedIn) {
        return (
            <div className="p-10 bg-bg-color h-screen flex flex-col gap-5 justify-center items-center font-Pinar-medium">
                <h2 className="text-xl mb-4">ورود ادمین</h2>
                <Input text="نام کاربری" value={username} onChange={(e) => setUsername(e.target.value)} />
                <Input text="رمز عبور" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button text="ورود" className="w-10/12 mx-auto" onClick={handleLogin} />
            </div>
        );
    }

    return (
        <>
            <nav>
                <h1 className="text-3xl text-center font-Pinar-medium">پنل ادمین</h1>
                <Link to="/admin/addproduct">
                    <Button text="افزودن محصول" className="w-10/12 mx-auto mt-5" />
                </Link>
            </nav>
        </>
    );
};

export default Admin;
