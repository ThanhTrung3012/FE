/*
 * Created Date: 03-02-2023, 21:00 pm
 * Author: Nghiêm Mạnh Cường
 * Email: nghiemmanhcuong98@gmail.com
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) Đỗ Thành trung
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import React, { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './Web/Header';
import Footer from './Web/Footer';
import HomeMenu from '@App/pages/Web/Home/components/HomeMenu';
import useMenus from '@App/pages/Web/Home/hooks/useMenus';
import WebLoading from '../Loading/WebLoading';

const WebLayout = () => {
    const { getMenus, menus } = useMenus();

    useEffect(() => {
        getMenus();
    }, []);

    return (
        <Box className='bg-[#F5F5F7] min-h-screen'>
            <Header />
            <Suspense
                fallback={
                    <div className='flex justify-center items-center h-screen w-screen'>
                        <WebLoading />
                    </div>
                }
            >
                <Box className='w-full lg:w-[1220px] px-[10px] mx-auto pt-[80px]'>
                    <Outlet />
                    <HomeMenu menus={menus} isGlobal/>
                </Box>
            </Suspense>
            <Footer />
        </Box>
    );
};

export default WebLayout;
