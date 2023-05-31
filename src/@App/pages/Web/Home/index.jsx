import React, { useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import Helmet from '@Core/components/Helmet';
import HomeMenu from './components/HomeMenu';
import HomeSlides from './components/HomeSlides';
import { heroBanners, heroBlogs } from './data';
import { Link } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Product from '../Collections/components/Product';
import CoreSwiper from '@Core/components/Swiper/CoreSwiper';
import HomeSection from './components/HomeSection';

import hotSaleBg from '@App/assets/hotsale-bg.png';
import { useRequest } from 'ahooks';
import { productService } from '@App/services/productService';
import { categoryService } from '@App/services/categoryService';

const Home = () => {
    const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: 0 });
    }, []);

    const {
        data: hotProducts,
        loading: loadingHotProduct,
        run: getHotProducts
    } = useRequest(productService.getByDisplay, {
        manual: true
    });

    const {
        data: popularProducts,
        loading: loadingPopularProduct,
        run: getPopularProducts
    } = useRequest(productService.getByDisplay, {
        manual: true
    });

    const {
        data: menus,
        loading:loadingMenus,
        run: getMenus
    } = useRequest(categoryService.getMenus, {
        manual: true
    });

    useEffect(() => {
        getMenus();
    }, []);

    useEffect(() => {
        getHotProducts('isHot');
        getPopularProducts('isPopular');
    }, []);

    if(loadingMenus) {
        return (
            <div className="flex justify-center items-center min-h-[80vh]">
                <CircularProgress />
            </div>
        )
    }

    return (
        <Helmet pageTitle='OneWay Mobile' pageDescription='Wellcom to my app'>
            <div className='flex items-start gap-x-3'>
                <div className='w-1/5'>
                    <HomeMenu menus={menus}/>
                </div>
                <div className='w-3/5'>
                    <HomeSlides />
                </div>
                <div className='w-1/5'>
                    {heroBanners.map((banner, i) => (
                        <div key={i} className='h-[100px] mb-3  rounded-md overflow-hidden'>
                            <Link to='/'>
                                <img src={banner.image} className='h-full  w-full object-cover' />
                            </Link>
                        </div>
                    ))}
                    <Box
                        className='w-full h-[153px] rounded-md p-2'
                        sx={{ background: 'linear-gradient(180deg, #b80000 0%, #8d0000 100%)' }}
                    >
                        <div className='flex items-center justify-between'>
                            <h3 className='text-white font-bold text-13'>KHUYẾN MÃI</h3>
                            <Link to='/' className='text-12 text-[#fcd95d] flex items-center'>
                                Xem tất cả
                                <KeyboardArrowRightIcon fontSize='small' />
                            </Link>
                        </div>
                        <div className='flex flex-col gap-y-3 mt-2'>
                            {heroBlogs.map((blog, i) => (
                                <div
                                    key={i}
                                    className='bg-white rounded-md flex items-start p-1 gap-x-1'
                                >
                                    <img
                                        src={blog.image}
                                        className='h-[30px] min-w-[60px] object-cover'
                                    />
                                    <p className='text-12 truncate-2'>{blog.title}</p>
                                </div>
                            ))}
                        </div>
                    </Box>
                </div>
            </div>
            <div className='py-3 w-full'>
                <Link to='/'>
                    <img
                        className='rounded-md w-full'
                        src='https://onewaymobile.vn/images/config/banner-web_1678500731.png'
                        alt='Hình ảnh'
                    />
                </Link>
            </div>
            <div className='min-h-[550px] bg-[url("https://onewaymobile.vn/images/bg-sale.jpg")] rounded-md px-3'>
                <div className='flex justify-center'>
                    <img src={hotSaleBg} alt='Hình ảnh' />
                </div>
                {loadingHotProduct ? (
                    <div className='flex justify-center'>
                        <CircularProgress />
                    </div>
                ) : (
                    <CoreSwiper
                        data={hotProducts?.data}
                        SlideItem={Product}
                        slidesPerView={5}
                        isShowButton
                        spaceBetween={5}
                        loop
                    />
                )}
            </div>
            <HomeSection
                data={popularProducts?.data}
                title='ĐIỆN THOẠI NỔI BẬT NHẤT'
            />
            <HomeSection
                data={[1, 2, 3, 4, 5]}
                title='MÁY TÍNH BẢNG'
                category='64520203bb87984a40b49400'
            />
            <HomeSection
                data={[1, 2, 3, 4, 5]}
                title='ĐỒNG HỒ THÔNG MINH'
                category='645202b6bb87984a40b49412'
            />
            <HomeSection
                data={[1, 2, 3, 4, 5]}
                title='NHÀ THÔNG MINH'
                category='6474b4005ed5c448c8a27833'
            />
            <HomeSection
                data={[1, 2, 3, 4, 5]}
                title='PHỤ KIỆN NỔI BẬT'
                category='6474b5645ed5c448c8a27873'
            />
            <HomeSection
                data={[1, 2, 3, 4, 5]}
                title='PHỤ KIỆN'
                category='645202ecbb87984a40b4941b'
            />
        </Helmet>
    );
};

export default Home;
