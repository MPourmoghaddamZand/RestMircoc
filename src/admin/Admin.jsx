import { useState, useEffect, useContext } from 'react';
import Input from '../components/util/Input';
import Button from '../components/util/Button';
import axios from 'axios';
import SideBar from './components/SideBar';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import ProductList from './pages/ProductList';
import OrderList from './pages/OrderList';
import SettingPanel from './pages/SettingPanel';
import { AdminContext, AdminProvider } from './AdminContext';
import DeletePopup from './components/DeletePopup';
import Panel from './Panel';

const Admin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    if (!isLoggedIn) {
        return (
            <Login setIsLoggedIn={setIsLoggedIn} />
        );
    }
    return (
        <AdminProvider>
            <Panel />            
        </AdminProvider>
    );
};

export default Admin;
