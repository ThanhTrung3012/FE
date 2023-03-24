import React, { useEffect } from 'react';
import { useRequest } from 'ahooks';

import { orderService } from '@App/services/orderService';
import useCoreTable from '@Core/components/Table/hooks/useCoreTable';
import PageProvider from '@App/components/Provider/PageProvider';

const OrderProvider = props => {
    const orderRequests = useRequest(orderService.list, {
        manual: true,
        onError: () => {
            mutate({
                data: []
            });
        }
    });

    const { mutate, run: getOrders } = orderRequests;
    const orderTableHandler = useCoreTable(orderRequests);

    useEffect(() => {
        getOrders();
    }, []);

    const data = {
        orderTableHandler,
    };

    return <PageProvider {...data}>{props.children}</PageProvider>;
};

export default OrderProvider;
