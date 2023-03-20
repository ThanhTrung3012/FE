import React from 'react';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import CmsPageContent from '@App/components/Layout/CmsPageContent';
import { CMS_ROUTERS } from '@App/configs/constants';
import BlogCategoryTable from './components/BlogCategoryTable';
import CategoryProvider from './BlogCategoryProvider';

const BlogCategoryList = () => {
    const navigate = useNavigate();
    const breadcrumbs = [<Link to={CMS_ROUTERS.blogCategory.list}>Danh mục bài viết</Link>];

    return (
        <CategoryProvider>
            <CmsPageContent
                title='Quản lý danh mục bài viết'
                breadcrumbs={breadcrumbs}
                content={<BlogCategoryTable />}
                action={
                    <Button
                        variant='contained'
                        onClick={() => navigate(CMS_ROUTERS.blogCategory.list + '/new')}
                    >
                        Thêm danh mục bài viết
                    </Button>
                }
            />
        </CategoryProvider>
    );
};

export default BlogCategoryList;
