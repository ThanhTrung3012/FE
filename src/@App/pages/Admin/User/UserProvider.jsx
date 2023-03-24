import React, { useEffect } from 'react';
import { useRequest } from 'ahooks';

import { userService } from '@App/services/userService';
import useCoreTable from '@Core/components/Table/hooks/useCoreTable';
import { errorMessage, successMessage } from '@Core/Helper/Message';
import PageProvider from '@App/components/Provider/PageProvider';

const UserProvider = props => {
    const userRequests = useRequest(userService.list, {
        manual: true,
        onError: () => {
            mutate({
                data: []
            });
        }
    });

    const { mutate, run: getusers } = userRequests;
    const userTableHandler = useCoreTable(userRequests);

    const { runAsync: handleDeleteUser } = useRequest(userService.delete, {
        manual: true,
        onSuccess: () => {
            userTableHandler.handleFetchData();
            successMessage('Xoá người dùng thành công');
        },
        onError: () => {
            errorMessage('Xoá người dung thất bại đã có lỗi xảy ra');
        }
    });

    useEffect(() => {
        getusers();
    }, []);

    const data = {
        userTableHandler,
        handleDeleteUser
    };

    return <PageProvider {...data}>{props.children}</PageProvider>;
};

export default UserProvider;
