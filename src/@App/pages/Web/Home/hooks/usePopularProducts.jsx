import { productService } from '@App/services/productService';
import { useRequest } from 'ahooks';
import React from 'react'

const usePopularProducts = () => {
    const {
        data: popularProducts,
        loading: loadingPopularProduct,
        run: getPopularProducts
    } = useRequest(productService.getByDisplay, {
        manual: true
    });

    return {popularProducts,loadingPopularProduct,getPopularProducts}
}

export default usePopularProducts