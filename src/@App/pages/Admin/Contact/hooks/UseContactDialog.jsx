import React, { useCallback, useState } from 'react';
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
import { contactService } from '@App/services/contactService';
import moment from 'moment';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='down' ref={ref} {...props} timeout={500} />;
});

const useContactDialog = () => {
    const [open, { setTrue, setFalse }] = useBoolean(false);

    const {
        data: contact,
        loading,
        runAsync: getContact
    } = useRequest(contactService.find, {
        manual: true
    });

    const openDialog = async id => {
        setTrue();
        await getContact(id);
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
                <DialogTitle>Chi tiết liên hệ</DialogTitle>
                <DialogContent>
                    {loading ? (
                        <Box className='flex items-center justify-center'>
                            <CircularProgress size={20}/>
                        </Box>
                    ) : (
                        <>
                            <Box className='flex items-center mb-3'>
                                <Typography className='w-40'>Tên người liên hệ:</Typography>{' '}
                                {contact?.data?.user_name}
                            </Box>
                            <Box className='flex items-center mb-3'>
                                <Typography className='w-40'>Địa chỉ:</Typography>{' '}
                                {contact?.data?.user_address}
                            </Box>
                            <Box className='flex items-center mb-3'>
                                <Typography className='w-40'>Số điện thoại:</Typography>{' '}
                                {contact?.data?.user_phone}
                            </Box>
                            <Box className='flex items-center mb-3'>
                                <Typography className='w-40'>Email người liên hệ:</Typography>{' '}
                                {contact?.data?.user_email}
                            </Box>
                            <Box className='flex items-center mb-3'>
                                <Typography className='w-40'>Ngày giờ gửi:</Typography>{' '}
                                {moment(contact?.data?.createdAt).format('LLL')}
                            </Box>
                            <Box className='flex items-center mb-3'>
                                <Typography className='w-40'>Nội dung:</Typography>{' '}
                                {contact?.data?.content}
                            </Box>
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setFalse()}>Disagree</Button>
                    <Button onClick={() => setFalse()} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }, [open, contact]);

    return { openDialog, renderDialog };
};

export default useContactDialog;
