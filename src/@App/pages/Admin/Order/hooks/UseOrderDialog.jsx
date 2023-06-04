import React, { useCallback } from 'react';
import {
    Box,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
    Typography
} from '@mui/material';
import { useRequest, useBoolean } from 'ahooks';
import moment from 'moment';

import { orderService } from '@App/services/orderService';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='down' ref={ref} {...props} timeout={500} />;
});

const useOrderDialog = () => {
    const [open, { setTrue, setFalse }] = useBoolean(false);

    const {
        data: order,
        loading,
        runAsync: getOrder
    } = useRequest(orderService.find, {
        manual: true
    });

    const openDialog = async id => {
        setTrue();
        await getOrder(id);
    };

    const renderDialog = useCallback(() => {
        return (
            <Dialog
                open={open}
                onClose={() => setFalse()}
                TransitionComponent={Transition}
                keepMounted
                maxWidth='md'
                fullWidth
            >
                <DialogTitle>Chi tiết đơn hàng</DialogTitle>
                <DialogContent>
                    {loading ? (
                        <Box className='flex items-center justify-center'>
                            <CircularProgress size={20}/>
                        </Box>
                    ) : (
                        <>
                            <Box className='flex items-center mb-3'>
                                <Typography className='w-52'>Họ và tên:</Typography>{' '}
                                {order?.data?.name}
                            </Box>
                            <Box className='flex items-center mb-3'>
                                <Typography className='w-52'>Giới tính:</Typography>{' '}
                                {order?.data?.sex == 0 ? 'Nữ' : 'Nam'}
                            </Box>
                            <Box className='flex items-center mb-3'>
                                <Typography className='w-52'>Địa chỉ:</Typography>{' '}
                                {order?.data?.address}
                            </Box>
                            <Box className='flex items-center mb-3'>
                                <Typography className='w-52'>Số điện thoại:</Typography>{' '}
                                {order?.data?.phone}
                            </Box>
                            <Box className='flex items-center mb-3'>
                                <Typography className='w-52'>Email :</Typography>{' '}
                                {order?.data?.email}
                            </Box>
                            <Box className='flex items-center mb-3'>
                                <Typography className='w-52'>Ngày giờ đặt:</Typography>{' '}
                                {moment(order?.data?.createdAt).format('LLL')}
                            </Box>
                            <Box className='flex items-center mb-3'>
                                <Typography className='w-52'>Phương thức nhận hàng:</Typography>{' '}
                                {order?.data?.method}
                            </Box>
                            <Box className='flex items-center mb-3'>
                                <Typography className='w-52'>Trạng thái:</Typography>{' '}
                                {order?.data?.status}
                            </Box>
                            <Box className='flex items-center mb-3'>
                                <Typography className='w-52'>Yêu cầu khác:</Typography>{' '}
                                {order?.data?.other_requirements ? order?.data?.other_requirements : 'Không có yêu cầu khác'}
                            </Box>
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setFalse()}>Đóng</Button>
                    <Button onClick={() => setFalse()} autoFocus>
                        Xác nhận
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }, [open, order]);

    return { openDialog, renderDialog };
};

export default useOrderDialog;
