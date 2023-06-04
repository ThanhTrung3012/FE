import { showRoomService } from '@App/services/showRoomService';
import { useRequest } from 'ahooks';
import React from 'react';

const useShops = () => {
    const {
        data: shops,
        loading: loadingShops,
        run: getShops
    } = useRequest(showRoomService.list, {
        manual: true
    });

    return { shops:shops?.data, loadingShops, getShops };
};

export default useShops;
