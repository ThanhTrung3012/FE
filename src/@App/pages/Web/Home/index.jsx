import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import Helmet from '@Core/components/Helmet';
import HomeMenu from './components/HomeMenu';
import HomeSlides from './components/HomeSlides';
import { heroBanners, heroBlogs } from './data';
import { Link } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Product from '../Collections/components/Product';
import CoreSwiper from '@Core/components/Swiper/CoreSwiper';
import HomeSection from './components/HomeSection';

const Home = () => {
    const arrays = [1,2,3,4,5,6,7,8,9,10];
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: 0 });
    }, []);

    return (
        <Helmet pageTitle='OneWay Mobile' pageDescription='Wellcom to my app'>
            <div className='flex items-start gap-x-3'>
                <div className='w-1/5'>
                    <HomeMenu />
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
                                <KeyboardArrowRightIcon fontSize='small'/>
                            </Link>
                        </div>
                        <div className='flex flex-col gap-y-3 mt-2'>
                            {heroBlogs.map((blog,i) => (
                                <div key={i} className='bg-white rounded-md flex items-start p-1 gap-x-1'>
                                    <img src={blog.image} className="h-[30px] min-w-[60px] object-cover" />
                                    <p className='text-12 truncate-2'>{blog.title}</p>
                                </div>
                            ))}
                        </div>
                    </Box>
                </div>
            </div>
            <div className='py-3 w-full'>
                <Link to='/'>
                    <img className='rounded-md w-full' src="https://onewaymobile.vn/images/config/banner-web_1678500731.png" alt="Hình ảnh" />
                </Link>
            </div>
            <div className='min-h-[550px] bg-[url("https://onewaymobile.vn/images/bg-sale.jpg")] rounded-md px-3'>
                <div className='flex justify-center'>
                    <img src="https://onewaymobile.vn/images/config/hotsale-onewaymobile_1672048883.png" alt="Hình ảnh" />
                </div>
                <CoreSwiper 
                    data={arrays}
                    SlideItem={Product}
                    slidesPerView={5}
                    isShowButton
                    spaceBetween={5}
                    loop
                />
            </div>
            <HomeSection  data={arrays} title='ĐIỆN THOẠI NỔI BẬT NHẤT' categories={[{name:'Iphone'}]}/>
            <HomeSection  data={[1,2,3,4,5]} title='MÁY TÍNH BẢNG' categories={[{name:'Iphone'}]}/>
            <HomeSection  data={[1,2,3,4,5]} title='ĐỒNG HỒ THÔNG MINH' categories={[{name:'Iphone'}]}/>
            <HomeSection  data={[1,2,3,4,5]} title='NHÀ THÔNG MINH' categories={[{name:'Iphone'}]}/>
            <HomeSection  data={[1,2,3,4,5]} title='PHỤ KIỆN NỔI BẬT' categories={[{name:'Iphone'}]}/>
            <HomeSection  data={[1,2,3,4,5]} title='PHỤ KIỆN' categories={[{name:'Iphone'}]}/>
        </Helmet>
    );
};

export default Home;
