import React from 'react';
import clsx from 'clsx';
import { Typography } from '@mui/material';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useLocation, useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

import BlogMenuIcon from './icons/BlogMenuIcon';
import { useAppContext } from '@App/AppContext';
import { closeMenu } from '@App/store/actions';
import { WEB_ROUTERS } from '@App/configs/constants';

const HomeMenu = ({ menus, isGlobal }) => {
    const localtion = useLocation();
    const navigate = useNavigate();
    const isMobile = useMediaQuery('(max-width:600px)');
    const isHome = localtion.pathname === '/';

    const {
        state: { menuActive },
        dispatch
    } = useAppContext();

    const hanldeNavigate = id => {
        dispatch(closeMenu());
        navigate(`/collections/${id}`);
    };

    return (
        <div
            className={clsx(
                'menu',
                isGlobal && 'fixed',
                isGlobal && isHome ? 'top-[80px]' : 'top-[64px]',
                isGlobal && 'menu-global',
                menuActive && 'active'
            )}
        >
            <div className='py-2 relative bg-white group rounded-md shadow-md z-50 min-h-[377px]'>
                {menus?.data?.map((item, i) => (
                    <div key={i} className='menu-child px-3 z-50'>
                        <div
                            onClick={() => hanldeNavigate(item?._id)}
                            className='flex justify-between items-center hover:text-[#F06837] cursor-pointer'
                        >
                            <div className='py-2 flex items-center gap-x-1'>
                                <img src={item?.icon_url} className='w-[20px] h-[20px]' />
                                <Typography>{item?.name}</Typography>
                            </div>
                            <KeyboardArrowRightOutlinedIcon />
                        </div>
                        {item?.children && item?.children.length > 0 ? (
                            <div
                                className={clsx(
                                    'absolute menu-child-list hidden top-0 bottom-0 w-[950px] bg-white rounded-xl',
                                    isGlobal ? 'left-[218px]' : 'left-[228px]'
                                )}
                            >
                                <div className='grid grid-cols-4 py-3 h-full'>
                                    {item?.children?.map((item, i) => (
                                        <div
                                            key={i}
                                            className='border-r-[1px] border-gray-200 min-h-full pl-4'
                                        >
                                            <h5
                                                onClick={() => hanldeNavigate(item?._id)}
                                                className='font-bold cursor-pointer mb-3'
                                            >
                                                {item?.name}
                                            </h5>
                                            {item?.children &&
                                                item?.children.length > 0 &&
                                                item?.children.map((item, i) => (
                                                    <div key={i} className='pb-2'>
                                                        <div
                                                            onClick={() =>
                                                                hanldeNavigate(item?._id)
                                                            }
                                                            className='text-14 text-[#999] hover:text-[#F06837] cursor-pointer'
                                                        >
                                                            {item?.name}
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : null}
                    </div>
                ))}
                <div className='px-3 z-50'>
                    <div
                        onClick={() => {
                            dispatch(closeMenu());
                            navigate(WEB_ROUTERS.blog.router);
                        }}
                        className='flex justify-between items-center hover:text-[#F06837] cursor-pointer'
                    >
                        <div className='py-2 flex items-center gap-x-1'>
                            <BlogMenuIcon />
                            <Typography>Bài viết</Typography>
                        </div>
                        <KeyboardArrowRightOutlinedIcon />
                    </div>
                </div>
                {isGlobal && isMobile && (
                    <div className='px-3 z-50'>
                        <div
                            onClick={() => {
                                dispatch(closeMenu());
                                navigate(WEB_ROUTERS.cart.router);
                            }}
                            className='flex justify-between items-center hover:text-[#F06837] cursor-pointer'
                        >
                            <div className='py-2 flex items-center gap-x-1'>
                                <ShoppingCartIcon />
                                <Typography>Giỏ hàng</Typography>
                            </div>
                            <KeyboardArrowRightOutlinedIcon />
                        </div>
                    </div>
                )}
            </div>
            <div
                className={clsx(
                    `w-screen fixed inset-0 
                    h-screen bg-[rgba(0,0,0,0.4)] z-[-1] opacity-0 ease-in duration-100`,
                    isGlobal ? 'menu-background-global' : 'menu-background'
                )}
            ></div>
        </div>
    );
};

export default HomeMenu;
