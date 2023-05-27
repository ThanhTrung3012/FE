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

import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import Header from './Web/Header';
import Footer from './Web/Footer';

const WebLayout = () => {

    return (
        <Box className='bg-[#F5F5F7] min-h-screen'>
            <Header />
            <Suspense
                fallback={
                    <div className='flex justify-center items-center h-screen w-screen'>
                        <CircularProgress />
                    </div>
                }
            >
                <Box className='w-[1220px] px-[10px] mx-auto pt-[80px]'>
                    <Outlet />
                </Box>
            </Suspense>
            <Footer />
        </Box>
    );
};

export default WebLayout;
