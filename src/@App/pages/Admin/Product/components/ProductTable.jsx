import { Box, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import ProductFilter from './ProductFilter';
import { usePageContext } from '@App/components/Provider/PageProvider';
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable';
import {
    CoreTableActionEdit,
    CoreTableActionDelete
} from '@Core/components/Table/components/CoreTableActions';
import { CMS_ROUTERS } from '@App/configs/constants';

const CategoryTable = () => {
    const { productTableHandler, handleDeleteProduct } = usePageContext();
    const navigate = useNavigate();

    const columns = useMemo(() => {
        return [
            columnHelper.accessor('_id', {
                header: 'Mã sản phẩm'
            }),
            columnHelper.accessor('name', {
                header: 'Tên sản phẩm'
            }),
            columnHelper.accessor('discount', {
                header: 'Giảm giá(%)'
            }),
            columnHelper.accessor('sold', {
                header: 'Lượt bán'
            }),
            columnHelper.accessor('createdAt', {
                header: 'Ngày tạo',
                cell: ({ row }) => {
                    return <Typography>{moment(row?.original?.createdAt).format('L')}</Typography>;
                }
            }),
            columnHelper.accessor('action', {
                header: 'Chức năng',
                cell: ({ row }) => {
                    const product = row?.original;
                    return (
                        <Box className='flex items-center gap-x-4'>
                            <CoreTableActionEdit
                                callback={() =>
                                    navigate(CMS_ROUTERS.product.list + '/' + product?._id)
                                }
                            />
                            <CoreTableActionDelete
                                callback={() => handleDeleteProduct(product?._id)}
                                content='Bạn có muốn xoá sản phẩm này'
                            />
                        </Box>
                    );
                }
            })
        ];
    }, []);

    return (
        <Box>
            <ProductFilter />
            <CoreTable
                isPagination
                columns={columns}
                {...productTableHandler}
                data={productTableHandler?.data}
            />
        </Box>
    );
};

export default CategoryTable;
