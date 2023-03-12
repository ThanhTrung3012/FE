import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const AuthLayout = () => {
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

export default AuthLayout;
