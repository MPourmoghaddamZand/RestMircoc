import React from 'react';

const dashboardItems = [
    { name: 'داشبورد', svg: '/svg/home.svg' },
    { name: 'محصولات', svg: '/svg/product.svg' },
    { name: 'سفارشات', svg: '/svg/order.svg' },
    { name: 'تنظیمات', svg: '/svg/setting.svg' },
];

const SideBar = ({ activePage, setActivePage }) => {
    const [isSelected, setIsSelected] = React.useState(0);

    const handleClick = (index) => {
        setIsSelected(index);
        setActivePage(index);
    };

    return (
        <nav className='w-full bg-white'>
            <ul className='flex flex-col gap-5 w-10/12 mx-auto'>
                {dashboardItems.map((item, index) => (
                    <li
                        key={index}
                        className={`flex justify-end gap-4 items-center p-4 hover:bg-gray-200 cursor-pointer rounded-xl ${isSelected === index ? 'bg-primary text-white' : 'text-black'}`}
                        onClick={() => handleClick(index)}
                    >
                        <p className='pt-2'>{item.name}</p>
                        <img className={`w-7 h-7 ${isSelected === index ? 'invert' : undefined}`} src={item.svg} alt="" />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SideBar;
