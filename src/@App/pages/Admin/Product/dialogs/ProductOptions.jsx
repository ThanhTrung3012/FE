import React from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Slide,
    Typography
} from '@mui/material';
import { useFieldArray, useFormContext } from 'react-hook-form';
import DeleteIcon from '@mui/icons-material/Delete';

import CoreInput from '@Core/components/Input/CoreInput';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='down' ref={ref} {...props} timeout={500} />;
});

const ProductOptions = ({ open, setType }) => {
    const { control,errors } = useFormContext();

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'options'
    });

    const handleAddOptions = () => {
        append({ title: '', price: '' });
    };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            maxWidth='sm'
            fullWidth
        >
            <DialogTitle className='text-center'>Thêm lựa chọn cho sản phẩm</DialogTitle>
            <DialogContent>
                {fields.length > 0 ? (
                    fields.map((field, index) => (
                        <Box className='flex items-center gap-x-6 pt-3' key={index}>
                            <Box className='w-1/2'>
                                <CoreInput
                                    control={control}
                                    name={`options.${index}.title`}
                                    size='small'
                                    isOutlined
                                    label='Tên lựa chọn'
                                />
                            </Box>
                            <Box className='w-1/2'>
                                <CoreInput
                                    control={control}
                                    name={`options.${index}.price`}
                                    size='small'
                                    isOutlined
                                    label='Giá cho lựa chọn này'
                                />
                            </Box>
                            <IconButton aria-label='delete' onClick={() => remove(index)}>
                                <DeleteIcon color='error' />
                            </IconButton>
                        </Box>
                    ))
                ) : (
                    <Typography className='leading-7'>
                        Sản phẩm chưa có lựa chọn
                        <br />
                        Nhấn nút để thêm lựa chọn cho sản phẩm
                    </Typography>
                )}
                <Box className='mt-6'>
                    <Button variant='contained' onClick={handleAddOptions}>
                        Thêm lựa chọn
                    </Button>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setType(null)} disabled={Boolean(errors?.options)}>Đóng</Button>
                <Button onClick={() => setType(null)} autoFocus disabled={Boolean(errors?.options)}>
                    Xác nhận
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ProductOptions;
