import React from 'react';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
    return (
        <section className='flex h-full dark:bg-gray-900 dark:text-gray-100 min-h-[63vh]'>
            <div className='container flex flex-col items-center px-5 mx-auto my-8'>
                <CheckCircleRoundedIcon fontSize='large' sx={{width:'80px !important',height:'80px !important'}} color='success'/>
                <div className='text-center mt-3'>
                    <h2 className='mb-5 font-extrabold text-5xl text-green-600 dark:text-gray-600'>
                        Đặt hàng thành công!
                    </h2>
                    <p className='font-semibold md:text-2xl'>
                        Cảm ơn bạn đã tin tưởng Oneway mobile.
                    </p>
                    <p className='mt-4 mb-8 dark:text-gray-400 max-w-xl text-17'>
                        Chúng tôi sẽ kiểm tra và giao hàng sớm tới bạn, bạn vui lòng để ý điển thoại
                        và email chúng tôi sẽ liên hệ tới bạn để xác nhận đơn hàng.
                    </p>
                    <Link
                        rel='noopener noreferrer'
                        to='/'
                        className='px-8 py-3 text-blue-500 underline font-semibold rounded dark:bg-violet-400 dark:text-gray-900'
                    >
                        Quay lại trang chủ
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default OrderSuccess;
