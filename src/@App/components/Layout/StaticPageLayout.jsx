import React from 'react';
import banner from '@App/assets/content-banner.jpeg';
import Header from './Web/Header';
import Footer from './Web/Footer';
import { Link } from 'react-router-dom';

const StaticPageLayout = props => {
    const { content } = props;

    return (
        <div className='bg-[#F5F5F7]'>
            <Header />
            <div className='z-[-1] pt-12'>
                <img src={banner} alt='' />
            </div>
            <div className='translate-y-[-300px] w-[1320px] mx-auto mb-[-300px]'>
                <div className='mb-16'>
                    <h1 className='text-center text-[32px] font-bold text-white mb-10'>THÔNG TIN LIÊN HỆ</h1>
                    <div className='flex justify-center gap-x-5'>
                        <div className='py-[16px] px-[24px] rounded-[16px] bg-white'>
                            <Link to='/' className='text-18 font-700 text-[#EF6837]'>Giới thiệu công ty</Link>
                        </div>
                        <div className='py-[16px] px-[24px] rounded-[16px] bg-white'>
                            <Link to='/' className='text-18 font-700 text-[#EF6837]'>Giới thiệu công ty</Link>
                        </div>
                        <div className='py-[16px] px-[24px] rounded-[16px] bg-white'>
                            <Link to='/' className='text-18 font-700 text-[#EF6837]'>Giới thiệu công ty</Link>
                        </div>
                    </div>
                </div>
                <div className='bg-white w-full rounded-[32px] overflow-hidden'>
                    {content}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default StaticPageLayout;
