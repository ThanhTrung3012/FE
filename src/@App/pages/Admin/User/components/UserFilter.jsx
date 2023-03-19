import React from 'react';
import { Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { pickBy } from 'lodash';

import CoreInput from '@Core/components/Input/CoreInput';
import { errorMessage } from '@Core/Helper/Message';
import { usePageContext } from '@App/components/Provider/PageProvider';

const UserFilter = () => {
    const { userTableHandler } = usePageContext();

    const { control, handleSubmit } = useForm({
        mode: 'onSubmit',
        defaultValues: {
            name: '',
            email: '',
            phone: ''
        }
    });

    const onSubmit = handleSubmit(async data => {
        try {
            data = pickBy(data, v => v !== '');
            await userTableHandler.handleFetchData(data);
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
                        name='name'
                        size='small'
                        label='Tên người dùng'
                        className='bg-white rounded-md w-full'
                        isOutlined
                    />
                    <CoreInput
                        control={control}
                        name='email'
                        size='small'
                        label='Email người dùng'
                        className='bg-white rounded-md w-full'
                        isOutlined
                    />
                </Box>
                <Box className='flex items-center gap-x-10'>
                    <Box className='w-1/2'>
                        <CoreInput
                            control={control}
                            name='phone'
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

export default UserFilter;
