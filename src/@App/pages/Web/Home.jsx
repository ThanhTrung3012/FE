import React from 'react';
import { Box, Button, Stack } from '@mui/material';
import Helmet from '@Core/components/Helmet';
import CoreCheckBox from '@Core/components/Input/CoreCheckBox';
import { useForm } from 'react-hook-form';
import CoreCheckBoxGroup from '@Core/components/Input/CoreCheckBoxGroup';
import CoreInput from '@Core/components/Input/CoreInput';
import CoreRadioGroup from '@Core/components/Input/CoreRadioGroup';
import CoreAutoComplete from '@Core/components/Input/CoreAutoComplete';
import CoreDatePicker from '@Core/components/Input/CoreDatePicker';
import CoreInputFile from '@Core/components/Input/CoreInputFile';
const Home = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            file: ''
        }
    });

    const onSubmit = handleSubmit(data => {
        console.log(data);
    });

    return (
        <Helmet pageTitle='Wellcom to my app' pageDescription='Wellcom to my app'>
            <Box className='w-[1200px] mx-auto flex items-center justify-center h-screen'>
                {/* <CoreTable isPagination {...postTableHandler} columns={columns}/> */}
                <form onSubmit={onSubmit} className='w-[600px]'>
                    <Stack spacing={2}>
                        <CoreInputFile name='file' control={control} multiple/>
                    </Stack>
                    <Box className='mt-10 flex justify-center'>
                        <Button color='primary' variant='outlined' type='submit'>
                            Submit
                        </Button>
                    </Box>
                </form>
            </Box>
        </Helmet>
    );
};

export default Home;
