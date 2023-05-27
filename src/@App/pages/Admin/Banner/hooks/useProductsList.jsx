import { useRequest } from 'ahooks';
import { useEffect } from 'react';

import { productService } from '@App/services/productService';

const useProductsList = () => {
    const {
        data,
        loadingProduct,
        run: getProducts
    } = useRequest(productService.list, {
        manual: true
    });

    useEffect(() => {
        getProducts({ page_size: 1000000 });
    }, []);

    return { products: data?.data, loadingProduct };
};

export default useProductsList;
