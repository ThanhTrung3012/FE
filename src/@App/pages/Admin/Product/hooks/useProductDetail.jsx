import { useRequest } from 'ahooks';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { productService } from '@App/services/productService';

const useProductDetail = () => {
    const { id } = useParams();
    const isEdit = id !== 'new';

    const {
        data,
        loading,
        run: getProduct
    } = useRequest(productService.find, {
        manual: true
    });

    useEffect(() => {
        if (isEdit) {
            getProduct(id);
        }
    }, [id]);

    return { product: data?.data, loading, isEdit };
};

export default useProductDetail;
