import { Box, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

import CategoryFilter from './CategoryFilter';
import { usePageContext } from '@App/components/Provider/PageProvider';
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable';
import {
    CoreTableActionEdit,
    CoreTableActionDelete
} from '@Core/components/Table/components/CoreTableActions';
import { CMS_ROUTERS } from '@App/configs/constants';

const CategoryTable = () => {
    const { categoryTableHandler, handleDeleteCategory } = usePageContext();
    const navigate = useNavigate();

    const columns = useMemo(() => {
        return [
            columnHelper.accessor('_id', {
                header: 'Mã loại'
            }),
            columnHelper.accessor('name', {
                header: 'Tên loại'
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
                    const category = row?.original;
                    return (
                        <Box className='flex items-center gap-x-4'>
                            <CoreTableActionEdit
                                callback={() =>
                                    navigate(CMS_ROUTERS.category.list + '/' + category?._id)
                                }
                            />
                            <CoreTableActionDelete
                                callback={() => handleDeleteCategory(category?._id)}
                                content='Bạn có muốn xoá loại sản phẩm này'
                            />
                        </Box>
                    );
                }
            })
        ];
    }, []);

    return (
        <Box>
            <CategoryFilter />
            <CoreTable
                isPagination
                columns={columns}
                {...categoryTableHandler}
                data={categoryTableHandler?.data}
            />
        </Box>
    );
};

export default CategoryTable;
