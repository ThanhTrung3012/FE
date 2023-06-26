

import { LoadingButton } from '@mui/lab';
import React, { createContext, useCallback, useContext, useState } from 'react';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
} from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

const ConfirmContext = createContext();

export const useConfirm = () => {
    const confirm = useContext(ConfirmContext);
    return confirm;
};

const CoreConfirmProvider = props => {
    const [configs, setConfigs] = useState({});
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const confirm = useCallback(configs => {
        setConfigs(configs);
        setOpen(true);
    }, []);

    const hanldeOk = async () => {
        setLoading(true);
        try {
            setOpen(false);
            await configs?.onOk();
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ConfirmContext.Provider value={confirm}>
            {props.children}
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                maxWidth='sm'
            >
                {configs?.title && (
                    <DialogTitle
                        className='text-center'
                        variant='h2'
                        sx={{ '& .MuiTypography-root ': { fontSize: '19px', fontWeight: '600' } }}
                    >
                        {configs?.title}
                    </DialogTitle>
                )}
                {configs?.content && (
                    <DialogContent className='flex gap-x-3 items-center'>
                        {configs?.isIcon &&
                            (configs?.icon ?? (
                                <DeleteForeverRoundedIcon fontSize='large' color='error' />
                            ))}
                        {configs?.content}
                    </DialogContent>
                )}
                <DialogActions>
                    <Button className='text-gray-400' color='info' onClick={handleClose}>
                        Đóng
                    </Button>
                    <LoadingButton
                        variant='contained'
                        loading={loading}
                        className='text-white'
                        color={configs?.color ?? 'error'}
                        onClick={hanldeOk}
                        size='small'
                    >
                        {configs?.okText ?? 'Xoá'}
                    </LoadingButton>
                </DialogActions>
            </Dialog>
        </ConfirmContext.Provider>
    );
};

export default CoreConfirmProvider;
