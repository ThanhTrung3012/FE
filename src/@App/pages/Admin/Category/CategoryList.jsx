import React from 'react';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import CmsPageContent from '@App/components/Layout/CmsPageContent';
import { CMS_ROUTERS } from '@App/configs/constants';
import UserTable from './components/CategoryTable';
import CategoryProvider from './CategoryProvider';

const CategoryList = () => {
    const navigate = useNavigate();
    const breadcrumbs = [<Link to={CMS_ROUTERS.category.list}>Loại sản phẩm</Link>];

    return (
        <CategoryProvider>
            <CmsPageContent
                title='Quản lý loại sản phẩm'
                breadcrumbs={breadcrumbs}
                content={<UserTable />}
                action={
                    <Button
                        variant='contained'
                        onClick={() => navigate(CMS_ROUTERS.category.list + '/new')}
                    >
                        Thêm loại sản phẩm
                    </Button>
                }
            />
        </CategoryProvider>
    );
};

export default CategoryList;
