import React, { useCallback } from 'react';
import {
    Box,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Rating,
    Slide,
    Typography
} from '@mui/material';
import { useRequest, useBoolean } from 'ahooks';
import { evaluateService } from '@App/services/evaluateService';
import moment from 'moment';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='down' ref={ref} {...props} timeout={500} />;
});

const useEvaluateDialog = () => {
    const [open, { setTrue, setFalse }] = useBoolean(false);

    const {
        data: evaluate,
        loading,
        runAsync: getEvaluate
    } = useRequest(evaluateService.find, {
        manual: true
    });

    const openDialog = async id => {
        setTrue();
        await getEvaluate(id);
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
                <DialogTitle>Chi tiết đánh giá</DialogTitle>
                <DialogContent>
                    {loading ? (
                        <Box className='flex items-center justify-center'>
                            <CircularProgress size={20} />
                        </Box>
                    ) : (
                        <>
                            <Box className='flex items-center mb-3'>
                                <Typography className='w-48'>Tên người đánh giá:</Typography>{' '}
                                {evaluate?.data?.user_name}
                            </Box>
                            <Box className='flex items-center mb-3'>
                                <Typography className='w-48'>Số điện thoại:</Typography>{' '}
                                {evaluate?.data?.user_phone}
                            </Box>
                            <Box className='flex items-center mb-3'>
                                <Typography className='w-48'>Email người đánh giá:</Typography>{' '}
                                {evaluate?.data?.user_email}
                            </Box>
                            <Box className='flex items-center mb-3'>
                                <Typography className='w-48'>Ngày giờ gửi:</Typography>{' '}
                                {moment(evaluate?.data?.createdAt).format('LLL')}
                            </Box>
                            <Box className='flex items-center mb-3'>
                                <Typography className='w-48'>Nội dung:</Typography>{' '}
                                {evaluate?.data?.content}
                            </Box>
                            <Box className='flex items-center mb-3'>
                                <Typography className='w-48'>Đánh giá:</Typography>{' '}
                                <Rating name="read-only" value={evaluate?.data?.stars} readOnly />
                            </Box>
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' onClick={() => setFalse()}>Đóng</Button>
                    <Button variant='contained' onClick={() => setFalse()} autoFocus>
                        Xác nhận
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }, [open, evaluate]);

    return { openDialog, renderDialog };
};

export default useEvaluateDialog;
