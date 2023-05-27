import React from 'react';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import CmsPageContent from '@App/components/Layout/CmsPageContent';
import { CMS_ROUTERS } from '@App/configs/constants';
import BannerTable from './components/BannerTable';
import BannerProvider from './BannerProvider';

const BannerList = () => {
    const navigate = useNavigate();
    const breadcrumbs = [<Link to={CMS_ROUTERS.banner.list}>Banner</Link>];

    return (
        <BannerProvider>
            <CmsPageContent
                title='Quản lý banner'
                breadcrumbs={breadcrumbs}
                content={<BannerTable />}
                action={
                    <Button
                        variant='contained'
                        onClick={() => navigate(CMS_ROUTERS.banner.list + '/new')}
                    >
                        Thêm banner
                    </Button>
                }
            />
        </BannerProvider>
    );
};

export default BannerList;
