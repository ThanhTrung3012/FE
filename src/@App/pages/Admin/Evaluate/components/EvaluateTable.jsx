import { Box, Typography } from '@mui/material';
import React, { useMemo } from 'react';

import EvaluateFilter from './EvaluateFilter';
import { usePageContext } from '@App/components/Provider/PageProvider';
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable';
import {
    CoreTableActionDelete,
    CoreTableActionView
} from '@Core/components/Table/components/CoreTableActions';
import moment from 'moment';
import useEvaluateDialog from '../hooks/UseEvaluateDialog';

const EvaluateTable = () => {
    const { evaluateTableHandler, handleDeleteEvaluate } = usePageContext();
    const { openDialog, renderDialog } = useEvaluateDialog();

    const columns = useMemo(() => {
        return [
            columnHelper.accessor('productId', {
                header: 'Mã đánh giá'
            }),
            columnHelper.accessor('user_name', {
                header: 'Tên người gửi'
            }),
            columnHelper.accessor('user_email', {
                header: 'Email người gửi'
            }),
            columnHelper.accessor('user_phone', {
                header: 'Số điện thoại'
            }),
            columnHelper.accessor('createdAt', {
                header: 'Ngày gửi',
                cell: ({ row }) => {
                    return <Typography>{moment(row?.original?.createdAt).format('L')}</Typography>;
                }
            }),
            columnHelper.accessor('action', {
                header: 'Chức năng',
                cell: ({ row }) => {
                    const evaluate = row?.original;
                    return (
                        <Box className='flex items-center gap-x-4'>
                            <CoreTableActionView callback={() => openDialog(evaluate?._id)} />
                            <CoreTableActionDelete
                                callback={() => handleDeleteEvaluate(evaluate?._id)}
                                content='Bạn có muốn xoá đánh giá này'
                            />
                        </Box>
                    );
                }
            })
        ];
    }, []);

    return (
        <Box>
            <EvaluateFilter />
            <CoreTable
                isPagination
                columns={columns}
                {...evaluateTableHandler}
                data={evaluateTableHandler?.data}
            />
            {renderDialog()}
        </Box>
    );
};

export default EvaluateTable;
