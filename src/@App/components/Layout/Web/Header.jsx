import { Box, CircularProgress, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { WEB_ROUTERS } from '@App/configs/constants';
import { useDebounce, useRequest, useUpdateEffect } from 'ahooks';
import { productService } from '@App/services/productService';
import { useState } from 'react';
import handlePrice from '@Core/Helper/Price';

const Header = () => {
    const navigate = useNavigate()
    const [keyword, setKeyword] = useState('');
    const debouncedKeyword = useDebounce(keyword, { wait: 500 });
    const {
        data: products,
        loading,
        run: getProducts
    } = useRequest(productService.searchProduct, {
        manual: true
    });

    useUpdateEffect(() => {
        getProducts(keyword);
    }, [debouncedKeyword]);

    return (
        <Box className='fixed top-0 left-0 right-0 bg-[#F06837] min-h-[50px] z-[999]'>
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
                <Box className='relative'>
                    <div className='bg-white rounded-xl relative w-[455px] h-[45px] overflow-hidden focus-visible:outline-none'>
                        <input
                            placeholder='Bạn cần tìm gì? iPhone,iPad, Macbook...?'
                            className='min-h-full absolute top-0 bottom-0 pl-4 w-full pr-10'
                            value={keyword}
                            onChange={e => setKeyword(e.target.value)}
                        />
                        <SearchIcon
                            className='absolute top-1/2 translate-y-[-50%] right-2 cursor-pointer'
                            color='error'
                        />
                    </div>
                    {keyword && products?.data?.length > 0 && (
                        <div className='absolute left-0 right-0 top-[45px] border border-[#F06837] space-y-1 bg-white p-3 w-full z-50 max-h-[400px] overflow-y-scroll'>
                            {loading ? (
                                <div className='flex justify-center'>
                                    <CircularProgress />
                                </div>
                            ) : (
                                products?.data?.map(product => (
                                    <div key={product?._id} className='hover:bg-gray-100'>
                                        <div
                                            className='flex'
                                            onClick={() => {
                                                setKeyword('')
                                                navigate(WEB_ROUTERS.product.index + '/' + product._id)
                                            }}
                                        >
                                            <img
                                                src={product?.images?.[0]}
                                                className='w-[60px] h-[60px] border border-[#f6bea9]'
                                            />
                                            <div className='pl-2'>
                                                <h3 className='text-16 font-bold'>
                                                    {product?.name}
                                                </h3>
                                                <p className='mt-2 text-17 text-[#fd0000] font-bold'>
                                                    {handlePrice(product?.options?.[0]?.price)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    )}
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
