/*
 * Created Date: 03-02-2023, 21:00 pm
 * Author: Nghiêm Mạnh Cường
 * Email: nghiemmanhcuong98@gmail.com
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) Đỗ Thành Trung
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import React, { Suspense, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import { getAuthToken } from '@Core/Helper/Session';
import { CMS_ROUTERS } from '@App/configs/constants';

const AuthLayout = () => {
    const token = getAuthToken();
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate(CMS_ROUTERS.doashboard);
        }
    }, []);

    return (
        <div>
            <Suspense
                fallback={
                    <div className='flex justify-center items-center'>
                        <CircularProgress />
                    </div>
                }
            >
                <div className='auth-container'>
                    <Outlet />
                </div>
            </Suspense>
        </div>
    );
};

export default AuthLayout;
