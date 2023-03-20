import React from 'react';
import { Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { pickBy } from 'lodash';

import CoreInput from '@Core/components/Input/CoreInput';
import { errorMessage } from '@Core/Helper/Message';
import { usePageContext } from '@App/components/Provider/PageProvider';
import CoreAutoComplete from '@Core/components/Input/CoreAutoComplete';

const ShowRoomFilter = () => {
    const { showRoomTableHandler } = usePageContext();

    const { control, handleSubmit } = useForm({
        mode: 'onSubmit',
        defaultValues: {
            name: '',
            address: '',
            area: ''
        }
    });

    const onSubmit = handleSubmit(async data => {
        try {
            data = pickBy(data, v => v !== '');
            await showRoomTableHandler.handleFetchData(data);
        } catch (error) {
            console.log(error);
            errorMessage(error);
        }
    });

    const areaOptions = [
        { label: 'Miền bắc', value: 'MIEN-BAC' },
        { label: 'Miền trung', value: 'MIEN-TRUNG' },
        { label: 'Miền nam', value: 'MIEN-NAM' }
    ];

    return (
        <Box className='mb-6 rounded-md bg-gray-100 p-6'>
            <form onSubmit={onSubmit}>
                <Box className='flex items-center gap-x-10 mb-3'>
                    <CoreInput
                        control={control}
                        name='name'
                        size='small'
                        label='Tên cửa hàng'
                        className='bg-white rounded-md w-full'
                        isOutlined
                    />
                    <CoreInput
                        control={control}
                        name='address'
                        size='small'
                        label='Địa chỉ cửa hàng'
                        className='bg-white rounded-md w-full'
                        isOutlined
                    />
                </Box>
                <Box className='flex items-center gap-x-10'>
                    <Box className='w-1/2'>
                        <CoreAutoComplete
                            control={control}
                            name='area'
                            placeholder='Khu vực'
                            options={areaOptions}
                            returnValueType='enum'
                            size='small'
                            className='bg-white'
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

export default ShowRoomFilter;
