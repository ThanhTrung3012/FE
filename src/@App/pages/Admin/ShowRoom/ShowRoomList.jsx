import React from 'react';

import CmsPageContent from '@App/components/Layout/CmsPageContent';
import { Link, useNavigate } from 'react-router-dom';
import { CMS_ROUTERS } from '@App/configs/constants';
import UserTable from './components/ShowRoomTable';
import ShowRoomProvider from './ShowRoomProvider';
import { Button } from '@mui/material';

const ShowRoomList = () => {
    const navigate = useNavigate();
    const breadcrumbs = [<Link to={CMS_ROUTERS.showRoom.list}>Cửa hàng</Link>];

    return (
        <ShowRoomProvider>
            <CmsPageContent
                title='Quản lý cửa hàng'
                breadcrumbs={breadcrumbs}
                content={<UserTable />}
                action={
                    <Button
                        variant='contained'
                        onClick={() => navigate(CMS_ROUTERS.showRoom.list + '/new')}
                    >
                        Thêm Cửa hàng
                    </Button>
                }
            />
        </ShowRoomProvider>
    );
};

export default ShowRoomList;
