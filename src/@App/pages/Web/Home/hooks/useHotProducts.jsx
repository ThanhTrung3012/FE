import { productService } from '@App/services/productService';
import { useRequest } from 'ahooks';
import React from 'react';

const useHotProducts = () => {
    const {
        data: hotProducts,
        loading: loadingHotProduct,
        run: getHotProducts
    } = useRequest(productService.getByDisplay, {
        manual: true
    });

    return {hotProducts,loadingHotProduct,getHotProducts}
};

export default useHotProducts;
