import React from 'react';

const LeftMenu = () => {
    const menus = ['Trang chủ', 'Tin mới', 'Khuyến mãi', 'Mẹo hay', 'Tin tuyển dụng'];

    return (
        <div className='sticky w-[300px] left-0 top-20'>
            {menus.map(item => (
                <div key={item} className='mb-2'>
                    <p className='text-20 font-bold'>{item}</p>
                </div>
            ))}
        </div>
    );
};

export default LeftMenu;
