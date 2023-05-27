import React, { useEffect } from 'react';
import banner from '@App/assets/content-banner.jpeg';
import Header from './Web/Header';
import Footer from './Web/Footer';
import { Link, useParams } from 'react-router-dom';
import clsx from 'clsx';

const StaticPageLayout = props => {
    const { content, menus } = props;
    const { page } = useParams();

    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: 0 });
    }, []);

    return (
        <div className='bg-[#F5F5F7]'>
            <Header />
            <div className='z-[-1] pt-12'>
                <img src={banner} alt='' />
            </div>
            <div className='translate-y-[-300px] w-[1320px] mx-auto mb-[-300px]'>
                <div className='mb-16'>
                    <h1 className='text-center text-[32px] font-bold text-white mb-10'>
                        THÔNG TIN LIÊN HỆ
                    </h1>
                    <div className='flex justify-center gap-x-5'>
                        {menus.map(item => {
                            const active = page === item?.path?.split('/')[2];
                            return (
                                <Link
                                    key={item}
                                    to={item?.path}
                                    className={clsx(
                                        'text-18 font-700  font-bold py-[16px] px-[24px] rounded-2xl',
                                        active
                                            ? 'text-[#EF6837] bg-white'
                                            : 'text-white bg-[#F78A5B]'
                                    )}
                                >
                                    {item?.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div className='bg-white w-full rounded-[32px] overflow-hidden'>{content}</div>
            </div>
            <Footer />
        </div>
    );
};

export default StaticPageLayout;
