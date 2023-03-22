import React from 'react';
import { Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { pickBy } from 'lodash';

import CoreInput from '@Core/components/Input/CoreInput';
import { errorMessage } from '@Core/Helper/Message';
import { usePageContext } from '@App/components/Provider/PageProvider';
import CoreAutoComplete from '@Core/components/Input/CoreAutoComplete';

const OrderFilter = () => {
    const { orderTableHandler } = usePageContext();

    const { control, handleSubmit } = useForm({
        mode: 'onSubmit',
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            status: ''
        }
    });

    const onSubmit = handleSubmit(async data => {
        try {
            data = pickBy(data, v => v !== '');
            await orderTableHandler.handleFetchData(data);
        } catch (error) {
            console.log(error);
            errorMessage(error);
        }
    });

    const statusOptions = [
        { label: 'Chờ xác nhận', value: 'chờ xác nhận' },
        { label: 'Xác nhận', value: 'xác nhận' },
        { label: 'Đang vận chuyển', value: 'đang giao' },
        { label: 'Đã giao', value: 'đã giao' }
    ];

    return (
        <Box className='mb-6 rounded-md bg-gray-100 p-6'>
            <form onSubmit={onSubmit}>
                <Box className='flex w-[87.5%] items-center gap-x-10 mb-3'>
                    <CoreInput
                        control={control}
                        name='name'
                        size='small'
                        label='Họ tên'
                        className='bg-white rounded-md w-full'
                        isOutlined
                    />
                    <CoreInput
                        control={control}
                        name='email'
                        size='small'
                        label='Email'
                        className='bg-white rounded-md w-full'
                        isOutlined
                    />
                </Box>
                <Box className='flex items-center gap-x-10'>
                    <Box className='w-[45%]'>
                        <CoreInput
                            control={control}
                            name='phone'
                            size='small'
                            label='Số điện thoại'
                            className='bg-white rounded-md'
                            isOutlined
                        />
                    </Box>
                    <Box className='w-[45%]'>
                        <CoreAutoComplete
                            control={control}
                            name='status'
                            label='Tên danh mục'
                            options={statusOptions}
                            returnValueType='enum'
                            size='small'
                            className='bg-white'
                            placeholder='Trạng thái'
                        />
                    </Box>
                    <Box className='w-[10%] flex justify-end'>
                        <Button variant='contained' type='submit'>
                            Tìm kiếm
                        </Button>
                    </Box>
                </Box>
            </form>
        </Box>
    );
};

export default OrderFilter;
