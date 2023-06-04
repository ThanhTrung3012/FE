import React, { Fragment, useEffect } from 'react';
import banner from '@App/assets/content-banner.jpeg';
import Header from './Web/Header';
import Footer from './Web/Footer';
import { Link, useParams } from 'react-router-dom';
import clsx from 'clsx';
import useMenus from '@App/pages/Web/Home/hooks/useMenus';
import HomeMenu from '@App/pages/Web/Home/components/HomeMenu';

const StaticPageLayout = props => {
    const { content, menus } = props;
    const { page } = useParams();
    const { getMenus, menus: menuData } = useMenus();

    useEffect(() => {
        getMenus();
    }, []);

    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: 0 });
    }, [page]);

    return (
        <Fragment>
            <div  className='w-full lg:w-[1220px] mx-auto'>
                <HomeMenu menus={menuData} isGlobal />
            </div>
            <div className='bg-[#F5F5F7]'>
                <Header />
                <div className='z-[-1] pt-12'>
                    <img src={banner} className='h-[300px] lg:h-[unset]' />
                </div>
                <div className='translate-y-[-250px] md:translate-y-[-200px] lg:translate-y-[-300px] w-full lg:w-[1320px] mx-auto mb-[-300px]'>
                    <div className='mb-16'>
                        <h1 className='text-center text-[32px] font-bold text-white mb-10'>
                            THÔNG TIN LIÊN HỆ
                        </h1>
                        <div className='flex justify-center flex-wrap md:flex-nowrap gap-1 md:gap-5'>
                            {menus.map((item,i) => {
                                const active = page === item?.path?.split('/')[2];
                                return (
                                    <Link
                                        key={i}
                                        to={item?.path}
                                        className={clsx(
                                            'text-[12px] sm:text-18 font-700 min-w-max sm:min-w-[unset] w-4/12 sm:w-[unset] font-bold py-[16px] px-[24px] rounded-2xl',
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
                    <div className='bg-white w-full rounded-[32px] overflow-hidden lg:px-0 px-5'>{content}</div>
                </div>
                <Footer />
            </div>
        </Fragment>
    );
};

export default StaticPageLayout;
