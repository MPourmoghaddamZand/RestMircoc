import React, { useContext, useState } from 'react'
import DeletePopup from './components/DeletePopup';
import { AdminContext } from './AdminContext';
import Dashboard from './pages/Dashboard';
import ProductList from './pages/ProductList';
import OrderList from './pages/OrderList';
import SettingPanel from './pages/SettingPanel';
import SideBar from './components/SideBar';

const Panel = () => {
    const { delPopup, setDelPopup } = useContext(AdminContext);
    const [activePage, setActivePage] = useState(0);
    return (
        <>
            {delPopup && <DeletePopup />}
            <div className='w-full text-right max-h-screen h-screen font-Pinar-medium flex flex-row bg-bg-color'>
                <div className="w-full p-10 h-screen overflow-auto">
                    {activePage === 0 && <Dashboard />}
                    {activePage === 1 && <ProductList />}
                    {activePage === 2 && <OrderList />}
                    {activePage === 3 && <SettingPanel />}
                </div>

                <div className="w-3/12 h-screen drop-shadow-sm bg-white flex flex-col py-10 items-center">
                    <div className='mb-10'>logo</div>
                    <SideBar activePage={activePage} setActivePage={setActivePage} />
                </div>
            </div>
        </>
    )
}

export default Panel