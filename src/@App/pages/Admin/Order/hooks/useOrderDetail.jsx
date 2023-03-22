import { useRequest } from 'ahooks';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { orderService } from '@App/services/orderService';

const useOrderDetail = () => {
    const { id } = useParams();

    const {
        data,
        loading,
        run: getCategory
    } = useRequest(orderService.find, {
        manual: true
    });

    useEffect(() => {
        getCategory(id);
    }, [id]);

    return { order: data?.data, loading };
};

export default useOrderDetail;
