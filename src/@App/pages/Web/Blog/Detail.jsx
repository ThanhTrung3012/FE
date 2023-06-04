import React, {  useEffect } from 'react';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import moment from 'moment';
import useBlogDetail from './hooks/useBlogDetail';
import { CircularProgress } from '@mui/material';
import { WEB_ROUTERS } from '@App/configs/constants';
import { Link } from 'react-router-dom';
import WebLoading from '@App/components/Loading/WebLoading';

const BlogDetail = () => {
    const { blog, loading } = useBlogDetail();

    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: 0 });
    }, []);

    return loading ? (
        <div className='flex justify-center min-h-[70vh] items-center'>
            <WebLoading />
        </div>
    ) : (
        <div className='bg-white p-10 rounded-xl'>
            <Link to={WEB_ROUTERS.blog.router} className='text-[#20863D] underline flex items-center group'>
                <span className='group-hover:translate-x-[-5px] transition-transform'>
                    <KeyboardArrowLeftRoundedIcon />
                </span>
                Quay lại
            </Link>
            <div className='flex gap-x-3 items-center mb-5 mt-5'>
                <p className='text-20'>{moment(blog?.date).format('YYYY/MM/DD')}</p>
                <FiberManualRecordRoundedIcon className='text-11 text-[#C4C4C4]' />
                <p className='text-20 text-[#EF6837]'>{blog?.author}</p>
            </div>
            <h1 className='text-[32px] font-bold'>{blog?.title}</h1>
            <p className='mt-5 text-20'>{blog?.description}</p>
            <img src={blog?.image} className='rounded-xl mt-5  w-full object-cover h-[500px]' />
            <p className='mt-5 text-20'>{blog?.content}</p>
        </div>
    );
};

export default BlogDetail;
