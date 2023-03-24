import { Box } from '@mui/material';
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import UserFilter from './UserFilter';
import { usePageContext } from '@App/components/Provider/PageProvider';
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable';
import {
    CoreTableActionEdit,
    CoreTableActionDelete
} from '@Core/components/Table/components/CoreTableActions';
import { CMS_ROUTERS } from '@App/configs/constants';

const UserTable = () => {
    const { userTableHandler,handleDeleteUser } = usePageContext();
    const navigate = useNavigate();

    const columns = useMemo(() => {
        return [
            columnHelper.accessor('_id', {
                header: 'Mã người dùng'
            }),
            columnHelper.accessor('name', {
                header: 'Tên người dùng'
            }),
            columnHelper.accessor('email', {
                header: 'Email người dùng'
            }),
            columnHelper.accessor('phone', {
                header: 'Số điện thoại'
            }),
            columnHelper.accessor('action', {
                header: 'Chức năng',
                cell: ({ row }) => {
                    const user = row?.original;
                    return (
                        <Box className='flex items-center gap-x-4'>
                            <CoreTableActionEdit
                                callback={() => navigate(CMS_ROUTERS.user.list + '/' + user?._id)}
                            />
                            <CoreTableActionDelete callback={() => handleDeleteUser(user?._id)} content='Bạn có muốn xoá người dùng này'/>
                        </Box>
                    );
                }
            })
        ];
    }, []);

    return (
        <Box>
            <UserFilter />
            <CoreTable
                isPagination
                columns={columns}
                {...userTableHandler}
                data={userTableHandler?.data}
            />
        </Box>
    );
};

export default UserTable;
