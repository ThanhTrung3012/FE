import React from 'react';
import { Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { pickBy } from 'lodash';

import CoreInput from '@Core/components/Input/CoreInput';
import { errorMessage } from '@Core/Helper/Message';
import { usePageContext } from '@App/components/Provider/PageProvider';

const CategoryFilter = () => {
    const { contactTableHandler } = usePageContext();

    const { control, handleSubmit } = useForm({
        mode: 'onSubmit',
        defaultValues: {
            user_name: '',
            user_email: '',
            user_phone: ''
        }
    });

    const onSubmit = handleSubmit(async data => {
        try {
            data = pickBy(data, v => v !== '');
            await contactTableHandler.handleFetchData(data);
        } catch (error) {
            console.log(error);
            errorMessage(error);
        }
    });

    return (
        <Box className='mb-6 rounded-md bg-gray-100 p-6'>
            <form onSubmit={onSubmit}>
                <Box className='flex items-center gap-x-10 mb-3'>
                    <CoreInput
                        control={control}
                        name='user_name'
                        size='small'
                        label='Người liên hệ'
                        className='bg-white rounded-md w-full'
                        isOutlined
                    />
                    <CoreInput
                        control={control}
                        name='user_email'
                        size='small'
                        label='Email'
                        className='bg-white rounded-md w-full'
                        isOutlined
                    />
                </Box>
                <Box className='flex items-center gap-x-10'>
                    <Box className='w-1/2'>
                        <CoreInput
                            control={control}
                            name='user_phone'
                            size='small'
                            label='Số điện thoại'
                            className='bg-white rounded-md'
                            isOutlined
                        />
                    </Box>
                    <Box className='w-1/2 flex justify-end'>
                        <Button variant='contained' type='submit'>
                            Tìm kiếm
                        </Button>
                    </Box>
                </Box>
            </form>
        </Box>
    );
};

export default CategoryFilter;
