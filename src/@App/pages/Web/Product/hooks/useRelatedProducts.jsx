import { productService } from '@App/services/productService';
import { useRequest } from 'ahooks';

const useRelatedProducts = categoryId => {
    const {
        data: relatedProducts,
        loading: loadingRelatedProducts,
        run: getRelatedProducts
    } = useRequest(productService.getByCategory, {
        manual: true
    });

    return { relatedProducts, loadingRelatedProducts,getRelatedProducts };
};

export default useRelatedProducts;
