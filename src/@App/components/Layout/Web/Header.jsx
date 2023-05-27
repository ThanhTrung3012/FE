import { Box, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import React from 'react';
import { Link } from 'react-router-dom';
import { WEB_ROUTERS } from '@App/configs/constants';

const Header = () => {
    return (
        <Box className='fixed top-0 left-0 right-0 bg-[#F06837] min-h-[50px] z-[1000]'>
            <Box className='w-[1220px] mx-auto px-[10px] py-2 flex items-center justify-between'>
                <Link to='/'>
                    <img
                        src='https://onewaymobile.vn/images/config/logo-1_1663066621_1663318779.svg'
                        alt=''
                    />
                </Link>
                <Box className='border border-white rounded-xl px-6 flex h-[45px] items-center gap-x-3 cursor-pointer'>
                    <img src='https://onewaymobile.vn/images/menu.svg' alt='' />
                    <Typography variant='subtitle1'>Danh mục</Typography>
                </Box>
                <Box className='bg-white rounded-xl relative w-[455px] h-[45px] overflow-hidden focus-visible:outline-none'>
                    <input
                        placeholder='Bạn cần tìm gì? iPhone,iPad, Macbook...?'
                        className='min-h-full absolute top-0 bottom-0 pl-4 w-full pr-10'
                    />
                    <SearchIcon
                        className='absolute top-1/2 translate-y-[-50%] right-2 cursor-pointer'
                        color='error'
                    />
                </Box>
                <Box className='flex items-center h-[45px] text-white'>
                    <Box className='h-full bg-[#ffffff33] grid place-items-center w-[45px] rounded-full'>
                        <PhoneInTalkRoundedIcon className='text-white' />
                    </Box>
                    <a href='tel:0987954221' className='pl-3'>
                        <Typography className='text-13'>Tổng đài</Typography>
                        <Typography className='text-14 font-semibold'>0987954221</Typography>
                    </a>
                </Box>
                <Box className='flex items-center h-[45px] text-white'>
                    <Box className='h-full bg-[#ffffff33] grid place-items-center w-[45px] rounded-full'>
                        <PlaceOutlinedIcon className='text-white' />
                    </Box>
                    <Link to={WEB_ROUTERS.staticPage.contact.shops} className='pl-3'>
                        <Typography className='text-13'>Chỉ đường đến</Typography>
                        <Typography className='text-14 font-semibold'>Showroom</Typography>
                    </Link>
                </Box>
                <Box className='flex items-center h-[45px] text-white'>
                    <Box className='h-full bg-[#ffffff33] grid place-items-center w-[45px] rounded-full'>
                        <LocalMallOutlinedIcon className='text-white' />
                    </Box>
                    <Link to={WEB_ROUTERS.cart.router} className='pl-3'>
                        <Typography className='text-13'>Giỏ hàng</Typography>
                        <Box className='flex items-center gap-x-1'>
                            <Typography className='text-14 font-semibold'>Sản phẩm</Typography>
                            <Box className='w-[20px] text-13 h-[20px] text-[#F06837] grid place-items-center rounded-full bg-white'>
                                0
                            </Box>
                        </Box>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default React.memo(Header);
