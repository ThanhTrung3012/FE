import React from 'react';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import CmsPageContent from '@App/components/Layout/CmsPageContent';
import { CMS_ROUTERS } from '@App/configs/constants';
import BlogTable from './components/BlogTable';
import BlogProvider from './BlogProvider';

const BlogList = () => {
    const navigate = useNavigate();
    const breadcrumbs = [<Link to={CMS_ROUTERS.blog.list}>Bài viết</Link>];

    return (
        <BlogProvider>
            <CmsPageContent
                title='Quản lý bài viết'
                breadcrumbs={breadcrumbs}
                content={<BlogTable />}
                action={
                    <Button
                        variant='contained'
                        onClick={() => navigate(CMS_ROUTERS.blog.list + '/new')}
                    >
                        Thêm bài viết
                    </Button>
                }
            />
        </BlogProvider>
    );
};

export default BlogList;
