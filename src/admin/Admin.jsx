import { useState, useEffect } from 'react';
import Input from '../components/util/Input';
import Button from '../components/util/Button';
import axios from 'axios';
import SideBar from './components/SideBar';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import ProductList from './pages/ProductList';
import OrderList from './pages/OrderList';
import SettingPanel from './pages/SettingPanel';

const Admin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activePage, setActivePage] = useState(0);
    if (!isLoggedIn) {
        return (
            <Login setIsLoggedIn={setIsLoggedIn} />
        );
    }
    return (
        <div className='w-full text-right max-h-screen h-screen font-Pinar-medium flex flex-row bg-bg-color'>
            <div className="w-10/12 h-screen p-6 overflow-auto">
                {activePage === 0 && <Dashboard />}
                {activePage === 1 && <ProductList />}
                {activePage === 2 && <OrderList />}
                {activePage === 3 && <SettingPanel />}
            </div>

            <div className="w-2/12 h-screen bg-white flex flex-col py-10 items-center">
                <div className='mb-10'>logo</div>
                <SideBar activePage={activePage} setActivePage={setActivePage} />
            </div>
        </div>
    );
};

export default Admin;
