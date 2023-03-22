import React, { useEffect } from 'react';
import { useRequest } from 'ahooks';

import { productService } from '@App/services/productService';
import useCoreTable from '@Core/components/Table/hooks/useCoreTable';
import { errorMessage, successMessage } from '@Core/Helper/Message';
import PageProvider from '@App/components/Provider/PageProvider';

const ProductProvider = props => {
    const productRequests = useRequest(productService.list, {
        manual: true,
        onError: () => {
            mutate({
                data: []
            });
        }
    });

    const { mutate, run: getProducts } = productRequests;
    const productTableHandler = useCoreTable(productRequests);

    const { runAsync: handleDeleteProduct } = useRequest(productService.delete, {
        manual: true,
        onSuccess: () => {
            productTableHandler.handleFetchData();
            successMessage('Xoá sản phẩm thành công');
        },
        onError: () => {
            errorMessage('Xoá sản phẩm thất bại đã có lỗi xảy ra');
        }
    });

    useEffect(() => {
        getProducts();
    }, []);

    const data = {
        productTableHandler,
        handleDeleteProduct,
    };

    return <PageProvider {...data}>{props.children}</PageProvider>;
};

export default ProductProvider;
