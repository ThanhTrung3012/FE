import { Box, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import ContactFilter from './ContactFilter';
import { usePageContext } from '@App/components/Provider/PageProvider';
import CoreTable, { columnHelper } from '@Core/components/Table/CoreTable';
import {
    CoreTableActionDelete,
    CoreTableActionView
} from '@Core/components/Table/components/CoreTableActions';
import useContactDialog from '../hooks/UseContactDialog';

const CategoryTable = () => {
    const { contactTableHandler, handleDeleteContact } = usePageContext();
    const navigate = useNavigate();
    const {openDialog,renderDialog} = useContactDialog()

    const columns = useMemo(() => {
        return [
            columnHelper.accessor('_id', {
                header: 'Mã liên hệ'
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
                    const contact = row?.original;
                    return (
                        <Box className='flex items-center gap-x-4'>
                            <CoreTableActionView
                                callback={() =>
                                    openDialog(contact?._id)
                                }
                            />
                            <CoreTableActionDelete
                                callback={() => handleDeleteContact(contact?._id)}
                                content='Bạn có muốn xoá liên hệ này'
                            />
                        </Box>
                    );
                }
            })
        ];
    }, []);

    return (
        <Box>
            <ContactFilter />
            <CoreTable
                isPagination
                columns={columns}
                {...contactTableHandler}
                data={contactTableHandler?.data}
            />
            {renderDialog()}
        </Box>
    );
};

export default CategoryTable;
