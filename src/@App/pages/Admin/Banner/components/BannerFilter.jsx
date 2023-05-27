import React from 'react';
import { Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { pickBy } from 'lodash';

import CoreInput from '@Core/components/Input/CoreInput';
import { errorMessage } from '@Core/Helper/Message';
import { usePageContext } from '@App/components/Provider/PageProvider';

const BannerFilter = () => {
    const { bannerTableHandler } = usePageContext();

    const { control, handleSubmit } = useForm({
        mode: 'onSubmit',
        defaultValues: {
            title: '',
        }
    });

    const onSubmit = handleSubmit(async data => {
        try {
            data = pickBy(data, v => v !== '');
            await bannerTableHandler.handleFetchData(data);
        } catch (error) {
            console.log(error);
            errorMessage(error);
        }
    });

    return (
        <Box className='mb-6 rounded-md bg-gray-100 p-6'>
            <form onSubmit={onSubmit}>
                <Box className='flex items-center gap-x-10'>
                    <Box className='w-1/2'>
                        <CoreInput
                            control={control}
                            name='title'
                            size='small'
                            label='Tiêu đề'
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

export default BannerFilter;
