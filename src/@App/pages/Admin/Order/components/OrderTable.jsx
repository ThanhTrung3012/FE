import { Box, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

import OrderFilter from './OrderFilter';
import { usePageContext } from '@App/components/Provider/PageProvider';
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable';
import {
    CoreTableActionChangeStatus,
    CoreTableActionView
} from '@Core/components/Table/components/CoreTableActions';
import UseOrderDialog from '../hooks/UseOrderDialog';
import { CMS_ROUTERS } from '@App/configs/constants';

const OrderTable = () => {
    const navigate = useNavigate()
    const { orderTableHandler } = usePageContext();
    const { openDialog, renderDialog } = UseOrderDialog();

    const columns = useMemo(() => {
        return [
            columnHelper.accessor('_id', {
                header: 'Mã đơn hàng'
            }),
            columnHelper.accessor('name', {
                header: 'Tên khách hàng'
            }),
            columnHelper.accessor('email', {
                header: 'Email khách hàng'
            }),
            columnHelper.accessor('phone', {
                header: 'Số điện thoại'
            }),
            columnHelper.accessor('createdAt', {
                header: 'Ngày đặt hàng',
                cell: ({ row }) => {
                    return <Typography>{moment(row?.original?.createdAt).format('L')}</Typography>;
                }
            }),
            columnHelper.accessor('status', {
                header: 'Trạng thái đơn hàng'
            }),
            columnHelper.accessor('action', {
                header: 'Chức năng',
                width: '10%',
                cell: ({ row }) => {
                    const order = row?.original;
                    return (
                        <Box className='flex items-center gap-x-4'>
                            <CoreTableActionView callback={() => openDialog(order?._id)} />
                            <CoreTableActionChangeStatus
                                callback={() =>
                                    navigate(CMS_ROUTERS.order.list + '/' + order?._id)
                                }
                            />
                        </Box>
                    );
                }
            })
        ];
    }, []);

    return (
        <Box>
            <OrderFilter />
            <CoreTable
                isPagination
                columns={columns}
                {...orderTableHandler}
                data={orderTableHandler?.data}
            />
            {renderDialog()}
        </Box>
    );
};

export default OrderTable;
