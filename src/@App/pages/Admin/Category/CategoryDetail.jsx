import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import CmsPageContent from '@App/components/Layout/CmsPageContent';
import { CMS_ROUTERS } from '@App/configs/constants';
import CategoryForm from './components/CategoryForm';
import useCategoryDetail from './hooks/useCategoryDetail';

const CategoryDetail = () => {
    const { isEdit, loading, category } = useCategoryDetail();

    const breadcrumbs = [
        <Link to={CMS_ROUTERS.category.list}>Loại sản phẩm</Link>,
        <Typography>Chi tiết loại sản phẩm</Typography>
    ];

    return (
        <CmsPageContent
            title='Chi tiết loại sản phẩm'
            breadcrumbs={breadcrumbs}
            content={
                loading ? (
                    <Box className='flex justify-center pt-10'>
                        <CircularProgress />
                    </Box>
                ) : (
                    <CategoryForm isEdit={isEdit} category={category}/>
                )
            }
        />
    );
};

export default CategoryDetail;
