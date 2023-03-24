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

const ProductColors = ({ open, setType }) => {
    const { control,errors } = useFormContext();

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'colors'
    });

    const handleAddColors = () => {
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
            <DialogTitle className='text-center'>Thêm màu cho sản phẩm</DialogTitle>
            <DialogContent>
                {fields.length > 0 ? (
                    fields.map((field, index) => (
                        <Box className='flex items-center gap-x-6 pt-3' key={index}>
                            <Box className='w-1/2'>
                                <CoreInput
                                    control={control}
                                    name={`colors.${index}.title`}
                                    size='small'
                                    isOutlined
                                    label='Tên màu'
                                />
                            </Box>
                            <Box className='w-1/2'>
                                <CoreInput
                                    control={control}
                                    name={`colors.${index}.price`}
                                    size='small'
                                    isOutlined
                                    label='Giá cho màu này'
                                />
                            </Box>
                            <IconButton aria-label='delete' onClick={() => remove(index)}>
                                <DeleteIcon color='error'/>
                            </IconButton>
                        </Box>
                    ))
                ) : (
                    <Typography className='leading-7'>
                        Sản phẩm chưa có màu
                        <br />
                        Nhấn nút để thêm màu cho sản phẩm
                    </Typography>
                )}
                <Box className='mt-6'>
                    <Button variant='contained' onClick={handleAddColors}>
                        Thêm màu
                    </Button>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setType(null)} disabled={Boolean(errors?.colors)}>Đóng</Button>
                <Button onClick={() => setType(null)} autoFocus disabled={Boolean(errors?.colors)}>
                    Xác nhận
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ProductColors;
