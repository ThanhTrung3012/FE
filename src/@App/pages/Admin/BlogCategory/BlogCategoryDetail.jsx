import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import CmsPageContent from '@App/components/Layout/CmsPageContent';
import { CMS_ROUTERS } from '@App/configs/constants';
import CategoryForm from './components/BlogCategoryForm';
import useBlogCategoryDetail from './hooks/useBlogCategoryDetail';

const BlogCategoryDetail = () => {
    const { isEdit, loading, blogCategory } = useBlogCategoryDetail();

    const breadcrumbs = [
        <Link to={CMS_ROUTERS.blogCategory.list}>Danh mục bài viết</Link>,
        <Typography>Chi tiết danh mục bài viết</Typography>
    ];

    return (
        <CmsPageContent
            title='Chi tiết danh mục bài viết'
            breadcrumbs={breadcrumbs}
            content={
                loading ? (
                    <Box className='flex justify-center pt-10'>
                        <CircularProgress />
                    </Box>
                ) : (
                    <CategoryForm isEdit={isEdit} blogCategory={blogCategory} />
                )
            }
        />
    );
};

export default BlogCategoryDetail;
