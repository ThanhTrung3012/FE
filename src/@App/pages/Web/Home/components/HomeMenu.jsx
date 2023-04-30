import React from 'react';
import { Paper, Typography } from '@mui/material';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

import { menus } from '../data';
import { Link } from 'react-router-dom';

const HomeMenu = () => {
    return (
        <div className='menu'>
            <div className='py-2 relative bg-white group rounded-md shadow-md z-50'>
                {menus.map((item, i) => (
                    <div key={i} className='menu-child px-3 z-50'>
                        <Link
                            to='/'
                            className='flex justify-between items-center hover:text-[#F06837]'
                        >
                            <div className='py-2 flex items-center gap-x-1'>
                                <img src={item?.icon} className='w-[20px] h-[20px]' />
                                <Typography>{item?.title}</Typography>
                            </div>
                            <KeyboardArrowRightOutlinedIcon />
                        </Link>
                        {item?.chidrens && item?.chidrens.length > 0 ? (
                            <div className='absolute menu-child-list hidden left-[228px] top-0 bottom-0 w-[950px] bg-white rounded-xl'>
                                <div className='grid grid-cols-4 py-3 h-full'>
                                    {item?.chidrens?.map((item, i) => (
                                        <div
                                            key={i}
                                            className='border-r-[1px] border-gray-200 min-h-full pl-4'
                                        >
                                            <Link to='/' className='font-bold'>
                                                {item?.title}
                                            </Link>
                                            {item?.chidrens &&
                                                item?.chidrens.length > 0 &&
                                                item?.chidrens.map((item, i) => (
                                                    <div key={i} className='pb-2'>
                                                        <Link
                                                            to='/'
                                                            className='text-14 text-[#999] hover:text-[#F06837]'
                                                        >
                                                            {item?.title}
                                                        </Link>
                                                    </div>
                                                ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
            <div
                className='menu-background w-screen fixed inset-0 
                    h-screen bg-[rgba(0,0,0,0.4)] z-[-1] opacity-0 ease-in duration-100'
            ></div>
        </div>
    );
};

export default HomeMenu;
