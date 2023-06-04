import React, { useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import Helmet from '@Core/components/Helmet';
import HomeMenu from './components/HomeMenu';
import HomeSlides from './components/HomeSlides';
import { Link } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Product from '../Collections/components/Product';
import CoreSwiper from '@Core/components/Swiper/CoreSwiper';
import HomeSection from './components/HomeSection';

import hotSaleBg from '@App/assets/hotsale-bg.png';
import useHotProducts from './hooks/useHotProducts';
import usePopularProducts from './hooks/usePopularProducts';
import useMenus from './hooks/useMenus';
import useSliders from './hooks/useSliders';
import useHotBanner from './hooks/useHotBanner';
import usePopularBlog from './hooks/usePopularBlog';
import { WEB_ROUTERS } from '@App/configs/constants';
import usePopularBanner from './hooks/usePopularBanner';
import WebLoading from '@App/components/Loading/WebLoading';

const Home = () => {
    const { getMenus, loadingMenus, menus } = useMenus();
    const { getBlogs, loadingBlog, popularBlogs } = usePopularBlog();
    const { getHotBanners, loadingHotBanners, hotBanners } = useHotBanner();
    const { getPopularBanners, popularBanners } = usePopularBanner();
    const { getSliders, loadingSliders, sliders } = useSliders();
    const { getHotProducts, hotProducts, loadingHotProduct } = useHotProducts();
    const { getPopularProducts, loadingPopularProduct, popularProducts } = usePopularProducts();

    useEffect(() => {
        getHotProducts('isHot');
        getPopularProducts('isPopular');
        getSliders(3);
        getHotBanners(1);
        getPopularBanners(2);
        getMenus();
        getBlogs();
        window.scrollTo({ behavior: 'smooth', top: 0 });
    }, []);

    if (loadingSliders) {
        return (
            <div className='flex justify-center items-center min-h-[80vh]'>
                <WebLoading />
            </div>
        );
    }

    return (
        <Helmet pageTitle='OneWay Mobile' pageDescription='Wellcom to my app'>
            <div className='flex items-start gap-x-3'>
                <div className='hidden lg:block w-1/5'>
                    <HomeMenu menus={menus} />
                </div>
                <div className='w-full md:w-4/5 lg:w-3/5'>
                    <HomeSlides sliders={sliders?.data} />
                </div>
                <div className='hidden md:block md:w-1/5'>
                    {hotBanners?.slice(0, 2)?.map((banner, i) => (
                        <div key={i} className='h-[100px] mb-3  rounded-md overflow-hidden'>
                            <Link
                                to={`${banner?.category === 1 ? '/product' : '/collections'}/${
                                    banner.path
                                }`}
                            >
                                <img src={banner.image} className='h-full w-full object-cover' />
                            </Link>
                        </div>
                    ))}
                    <Box
                        className='w-full h-[153px] rounded-md p-2'
                        sx={{ background: 'linear-gradient(180deg, #b80000 0%, #8d0000 100%)' }}
                    >
                        <div className='hidden lg:flex items-center justify-between'>
                            <h3 className='text-white font-bold text-13'>KHUYẾN MÃI</h3>
                            <Link
                                to={WEB_ROUTERS.blog.router}
                                className='text-12 text-[#fcd95d] flex items-center'
                            >
                                Xem tất cả
                                <KeyboardArrowRightIcon fontSize='small' />
                            </Link>
                        </div>
                        <div className='flex flex-col gap-y-3 mt-2'>
                            {popularBlogs?.map((blog, i) => (
                                <div key={i}>
                                    <Link
                                        to={WEB_ROUTERS.blog.detail + '/' + blog?._id}
                                        className='bg-white rounded-md flex items-start p-1 gap-x-1'
                                    >
                                        <img
                                            src={blog.image}
                                            className='h-[33px] min-w-[60px] object-cover'
                                        />
                                        <p className='text-12 truncate-2'>{blog.title}</p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </Box>
                </div>
            </div>
            <div className='py-3 w-full flex flex-col gap-3'>
                {popularBanners?.map((banner, i) => (
                    <Link
                        to={`${banner?.category === 1 ? '/product' : '/collections'}/${
                            banner.path
                        }`}
                        key={i}
                    >
                        <img
                            className='rounded-md w-full h-[121px] object-cover'
                            src={banner?.image}
                            alt='Hình ảnh'
                        />
                    </Link>
                ))}
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
                        data={hotProducts?.data ?? []}
                        SlideItem={Product}
                        slidesPerView={5}
                        isShowButton
                        spaceBetween={5}
                        breakpoints={{
                            // when window width is >= 320px
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 5
                            },
                            // when window width is >= 480px
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 5
                            },
                            // when window width is >= 640px
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 5
                            }
                        }}
                        loop
                    />
                )}
            </div>
            <HomeSection data={popularProducts?.data ??  []} title='ĐIỆN THOẠI NỔI BẬT NHẤT' />
            <HomeSection
                title='MÁY TÍNH BẢNG'
                category='64520203bb87984a40b49400'
            />
            <HomeSection
                title='ĐỒNG HỒ THÔNG MINH'
                category='645202b6bb87984a40b49412'
            />
            <HomeSection
                title='NHÀ THÔNG MINH'
                category='6474b4005ed5c448c8a27833'
            />
            <HomeSection
                title='PHỤ KIỆN NỔI BẬT'
                category='6474b5645ed5c448c8a27873'
            />
            <HomeSection
                title='PHỤ KIỆN'
                category='645202ecbb87984a40b4941b'
            />
        </Helmet>
    );
};

export default Home;
