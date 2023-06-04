import clsx from 'clsx';
import React from 'react';

const LeftMenu = ({ onSetCategoryId, menus, categoryId, setPage }) => {
    return (
        <div className='sticky w-[300px] left-0 top-[82px]'>
            <div
                className='mb-2 cursor-pointer'
                onClick={() => {
                    onSetCategoryId(null);
                    setPage(1);
                }}
            >
                <p
                    className={clsx(
                        'text-20 font-bold',
                        categoryId === null ? 'text-[#F06837]' : 'text-black'
                    )}
                >
                    Trang chủ
                </p>
            </div>
            {menus?.data?.map(item => (
                <div
                    key={item?._id}
                    className='mb-2 cursor-pointer'
                    onClick={() => {
                        onSetCategoryId(item?._id);
                        setPage(1);
                    }}
                >
                    <p
                        className={clsx(
                            'text-20 font-bold',
                            categoryId === item?._id ? 'text-[#F06837]' : 'text-black'
                        )}
                    >
                        {item?.name}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default LeftMenu;
