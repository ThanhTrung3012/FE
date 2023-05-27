import { Box, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

import BannerFilter from './BannerFilter';
import { usePageContext } from '@App/components/Provider/PageProvider';
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable';
import {
    CoreTableActionEdit,
    CoreTableActionDelete
} from '@Core/components/Table/components/CoreTableActions';
import { CMS_ROUTERS } from '@App/configs/constants';

const CategoryTable = () => {
    const { bannerTableHandler, handleDeleteBanner } = usePageContext();
    const navigate = useNavigate();

    const columns = useMemo(() => {
        return [
            columnHelper.accessor('_id', {
                header: 'Mã loại'
            }),
            columnHelper.accessor('title', {
                header: 'Tiêu đề',
                cell: ({ row }) => {
                    return (
                        <Typography>
                            {row?.original?.title !== 'null' ? row?.original?.title : 'Trống'}
                        </Typography>
                    );
                }
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
                    const banner = row?.original;
                    return (
                        <Box className='flex items-center gap-x-4'>
                            <CoreTableActionEdit
                                callback={() =>
                                    navigate(CMS_ROUTERS.banner.list + '/' + banner?._id)
                                }
                            />
                            <CoreTableActionDelete
                                callback={() => handleDeleteBanner(banner?._id)}
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
            <BannerFilter />
            <CoreTable
                isPagination
                columns={columns}
                {...bannerTableHandler}
                data={bannerTableHandler?.data}
            />
        </Box>
    );
};

export default CategoryTable;
