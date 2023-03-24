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
import { CircularProgress } from '@mui/material';

const WebLayout = () => {
    return (
        <div>
            <Suspense
                fallback={
                    <div className='flex justify-center items-center h-screen w-screen'>
                        <CircularProgress />
                    </div>
                }
            >
                <Outlet />
            </Suspense>
        </div>
    );
};

export default WebLayout;
