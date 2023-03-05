import React, { Suspense } from 'react';
import Loading from '@Core/components/Loading/CoreLoading';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Suspense
                fallback={
                    <div className='flex justify-center items-center h-screen w-screen'>
                        <Loading />
                    </div>
                }
            >
                <Outlet />
            </Suspense>
        </div>
    );
};

export default MainLayout;
