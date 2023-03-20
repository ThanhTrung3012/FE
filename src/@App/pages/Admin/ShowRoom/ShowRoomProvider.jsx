import React, { useEffect } from 'react';
import { useRequest } from 'ahooks';

import { showRoomService } from '@App/services/showRoomService';
import useCoreTable from '@Core/components/Table/hooks/useCoreTable';
import { errorMessage, successMessage } from '@Core/Helper/Message';
import PageProvider from '@App/components/Provider/PageProvider';

const ShowRoomProvider = props => {
    const showRoomRequests = useRequest(showRoomService.list, {
        manual: true,
        onError: () => {
            mutate({
                data: []
            });
        }
    });

    const { mutate, run: getShowRooms } = showRoomRequests;
    const showRoomTableHandler = useCoreTable(showRoomRequests);

    const { runAsync: handleDeleteShowRoom } = useRequest(showRoomService.delete, {
        manual: true,
        onSuccess: () => {
            showRoomTableHandler.handleFetchData();
            successMessage('Xoá cửa hàng thành công');
        },
        onError: () => {
            errorMessage('Xoá cửa hàng thất bại đã có lỗi xảy ra');
        }
    });

    useEffect(() => {
        getShowRooms();
    }, []);

    const data = {
        showRoomTableHandler,
        handleDeleteShowRoom
    };

    return <PageProvider {...data}>{props.children}</PageProvider>;
};

export default ShowRoomProvider;
