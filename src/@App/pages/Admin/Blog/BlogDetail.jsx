import React from 'react';
import { Link } from 'react-router-dom';
import { Box, CircularProgress, Typography } from '@mui/material';

import CmsPageContent from '@App/components/Layout/CmsPageContent';
import { CMS_ROUTERS } from '@App/configs/constants';
import BlogForm from './components/BlogForm';
import useBlogDetail from './hooks/useBlogDetail';

const BlogDetail = () => {
    const { isEdit, loading, blog } = useBlogDetail();

    const breadcrumbs = [
        <Link to={CMS_ROUTERS.blog.list}>Bài viết</Link>,
        <Typography>Chi tiết bài viết</Typography>
    ];

    return (
        <CmsPageContent
            title='Chi tiết bài viết'
            breadcrumbs={breadcrumbs}
            content={
                loading ? (
                    <Box className='flex justify-center pt-10'>
                        <CircularProgress />
                    </Box>
                ) : (
                    <BlogForm isEdit={isEdit} blog={blog} />
                )
            }
        />
    );
};

export default BlogDetail;
