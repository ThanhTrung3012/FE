import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import CmsPageContent from '@App/components/Layout/CmsPageContent';
import { CMS_ROUTERS } from '@App/configs/constants';
import UserTable from './components/UserTable';
import UserProvider from './UserProvider';

const UserList = () => {
    const navigate = useNavigate();
    const breadcrumbs = [<Link to={CMS_ROUTERS.user.list}>Người dùng</Link>];

    return (
        <UserProvider>
            <CmsPageContent
                title='Quản lý người dùng'
                breadcrumbs={breadcrumbs}
                content={<UserTable />}
                action={
                    <Button
                        variant='contained'
                        onClick={() => navigate(CMS_ROUTERS.user.list + '/new')}
                    >
                        Thêm người dùng
                    </Button>
                }
            />
        </UserProvider>
    );
};

export default UserList;
