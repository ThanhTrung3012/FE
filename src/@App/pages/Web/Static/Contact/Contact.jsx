import React from 'react';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CoreInput from '@Core/components/Input/CoreInput';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { control } = useForm();

    return (
        <div className='p-10'>
            <div className='relative'>
                <h1 className='text-center text-[32px] font-bold'>Liên hệ với chúng tôi</h1>
                <span className='absolute w-[100px] h-[3px] bg-[#EF6837] left-1/2 translate-x-[-50%]'></span>
            </div>
            <div className='flex justify-around gap-5 mt-10'>
                <div className='text-center'>
                    <div className='w-[80px] h-[80px] grid place-content-center mx-auto shadow-lg rounded-full mb-3'>
                        <PlaceOutlinedIcon className='text-[#EF6837]' fontSize='large' />
                    </div>
                    <h3 className='font-bold'>Địa chỉ liên hệ</h3>
                    <p> 66 Thái Hà - P.Trung Liệt - Q.Đống Đa - TP.Hà Nội</p>
                </div>
                <div className='text-center'>
                    <div className='w-[80px] h-[80px] grid place-content-center mx-auto shadow-lg rounded-full mb-3'>
                        <PlaceOutlinedIcon className='text-[#EF6837]' fontSize='large' />
                    </div>
                    <h3 className='font-bold'>Tổng đài</h3>
                    <p>0987954221</p>
                </div>
                <div className='text-center'>
                    <div className='w-[80px] h-[80px] grid place-content-center mx-auto shadow-lg rounded-full mb-3'>
                        <PlaceOutlinedIcon className='text-[#EF6837]' fontSize='large' />
                    </div>
                    <h3 className='font-bold'>Giờ làm việc</h3>
                    <p>8h15 - 22h tất cả các ngày trong tuần (cả ngày lễ)</p>
                </div>
                <div className='text-center'>
                    <div className='w-[80px] h-[80px] grid place-content-center mx-auto shadow-lg rounded-full mb-3'>
                        <PlaceOutlinedIcon className='text-[#EF6837]' fontSize='large' />
                    </div>
                    <h3 className='font-bold'>Email liên hệ</h3>
                    <p>nghiemmanhcuong198@gmail.com</p>
                </div>
            </div>
            <p className='mt-20 text-17 mb-5'>
                Cảm ơn bạn đã quan tâm đến sản phẩm và dịch vụ của Oneway, vui lòng gửi liên hệ theo
                mẫu phản hồi bên dưới, chúng tôi sẽ sớm liên hệ lại với bạn.
            </p>
            <form action=''>
                <div class='flex gap-5 mb-5'>
                    <CoreInput
                        control={control}
                        name='name'
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline ': {
                                borderRadius: '12px !important'
                            }
                        }}
                    />
                    <CoreInput
                        control={control}
                        name='name'
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline ': {
                                borderRadius: '12px !important'
                            }
                        }}
                    />
                </div>
                <div class='flex gap-5 mb-5'>
                    <CoreInput
                        control={control}
                        name='name'
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline ': {
                                borderRadius: '12px !important'
                            }
                        }}
                    />
                    <CoreInput
                        control={control}
                        name='name'
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline ': {
                                borderRadius: '12px !important'
                            }
                        }}
                    />
                </div>
                <CoreInput
                    control={control}
                    name='name'
                    multiline
                    minRows={7}
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline ': {
                            borderRadius: '12px !important'
                        }
                    }}
                />
                <button className='w-full py-3 bg-[#EF6837] mt-5 rounded-[12px] text-white text-18'>Gửi liên hệ</button>
            </form>
        </div>
    );
};

export default Contact;
