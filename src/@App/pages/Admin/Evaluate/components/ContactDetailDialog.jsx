import React, { useEffect } from 'react';
import { useRequest } from 'ahooks';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide } from '@mui/material';

import { contactService } from '@App/services/contactService';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='down' ref={ref} {...props} />;
});

const ContactDetailDialog = ({ open, setopen, id }) => {
    const {
        data,
        loading,
        run: getContact
    } = useRequest(contactService.find, {
        manual: true
    });

    const handleClose = () => {
        setopen(false);
    };

    useEffect(() => {
        if (id) {
            getContact(id);
        }
    }, [id]);

    return (
        <Dialog open={open} onClose={handleClose} TransitionComponent={Transition} keepMounted>
            <DialogTitle id='alert-dialog-title'></DialogTitle>
            <DialogContent></DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose} autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ContactDetailDialog;
