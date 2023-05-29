import React, { useEffect } from 'react';
import { CircularProgress, Paper, Typography } from '@mui/material';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

import { menus } from '../data';
import { Link } from 'react-router-dom';
import BlogMenuIcon from './icons/BlogMenuIcon';
import { useRequest } from 'ahooks';
import { categoryService } from '@App/services/categoryService';

const HomeMenu = () => {
    const {
        data: menus,
        loading,
        run: getMenus
    } = useRequest(categoryService.getMenus, {
        manual: true
    });

    useEffect(() => {
        getMenus();
    }, []);

    return (
        <div className='menu'>
            <div className='py-2 relative bg-white group rounded-md shadow-md z-50 min-h-[377px]'>
                {loading ? (
                    <div className='flex justify-center'>
                        <CircularProgress />
                    </div>
                ) : (
                    menus?.data?.map((item, i) => (
                        <div key={i} className='menu-child px-3 z-50'>
                            <Link
                                to={`/collections/${item?._id}`}
                                className='flex justify-between items-center hover:text-[#F06837]'
                            >
                                <div className='py-2 flex items-center gap-x-1'>
                                    <img src={item?.icon_url} className='w-[20px] h-[20px]' />
                                    <Typography>{item?.name}</Typography>
                                </div>
                                <KeyboardArrowRightOutlinedIcon />
                            </Link>
                            {item?.children && item?.children.length > 0 ? (
                                <div className='absolute menu-child-list hidden left-[228px] top-0 bottom-0 w-[950px] bg-white rounded-xl'>
                                    <div className='grid grid-cols-4 py-3 h-full'>
                                        {item?.children?.map((item, i) => (
                                            <div
                                                key={i}
                                                className='border-r-[1px] border-gray-200 min-h-full pl-4'
                                            >
                                                <Link
                                                    to={`/collections/${item?._id}`}
                                                    className='font-bold'
                                                >
                                                    {item?.name}
                                                </Link>
                                                {item?.children &&
                                                    item?.children.length > 0 &&
                                                    item?.children.map((item, i) => (
                                                        <div key={i} className='pb-2'>
                                                            <Link
                                                                to={`/collections/${item?._id}`}
                                                                className='text-14 text-[#999] hover:text-[#F06837]'
                                                            >
                                                                {item?.name}
                                                            </Link>
                                                        </div>
                                                    ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    ))
                )}
                <div className='px-3 z-50'>
                    <Link
                        to='/blog'
                        className='flex justify-between items-center hover:text-[#F06837]'
                    >
                        <div className='py-2 flex items-center gap-x-1'>
                            <BlogMenuIcon />
                            <Typography>Bài viết</Typography>
                        </div>
                        <KeyboardArrowRightOutlinedIcon />
                    </Link>
                </div>
            </div>
            <div
                className='menu-background w-screen fixed inset-0 
                    h-screen bg-[rgba(0,0,0,0.4)] z-[-1] opacity-0 ease-in duration-100'
            ></div>
        </div>
    );
};

export default HomeMenu;
