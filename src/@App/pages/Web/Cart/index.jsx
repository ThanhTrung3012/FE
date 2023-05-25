import React from 'react';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import CoreRadioGroup from '@Core/components/Input/CoreRadioGroup';
import { useForm } from 'react-hook-form';
import CoreInput from '@Core/components/Input/CoreInput';

const Cart = () => {
    const { control } = useForm();

    const sexs = [
        { label: 'Nam', value: 'nam' },
        { label: 'Nữ', value: 'nữ' }
    ];

    const paymentMethods = [
        { label: 'Giao tận nơi', value: 1 },
        { label: 'Nhận tại cửa hàng', value: 2 }
    ];

    return (
        <div className='pt-2 w-[800px] mx-auto'>
            <div className='flex justify-between items-center mb-2'>
                <Link to='/collections/:1' className='flex items-center text-[#20863D]'>
                    <KeyboardArrowLeftRoundedIcon />
                    Mua thêm sản phẩm khác
                </Link>
                <Link to='/collections/:1' className='flex items-center text-[#20863D]'>
                    Giỏ hàng của bạn
                </Link>
            </div>
            <div className='shadow-sm p-4 bg-white'>
                <div className='flex gap-x-3 pb-4 border-b-[1px] border-gray-300'>
                    <div className='flex flex-col justify-center w-2/12'>
                        <img src='https://onewaymobile.vn/images/products/2022/09/08/resized/14-1-5_1662618869.png' />
                        <Button color='info'>
                            <CloseRoundedIcon fontSize='medium' />
                            Xoá
                        </Button>
                    </div>
                    <div className='w-6/12'>
                        <Link to='/product/:1' className='text-18'>
                            Điện thoại Apple iPhone 14 Plus 128GB VN/A
                        </Link>
                        <div className='mt-2'>
                            <p className='text-[#20863D] text-18'>
                                Màu: Đỏ
                                <ArrowDropDownIcon />
                            </p>
                        </div>
                    </div>
                    <div className='w-4/12'>
                        <p className='text-right mb-1 text-17 text-[#FF6700]'>20.790.000đ</p>
                        <p className='text-right text-17 line-through'>24.790.000đ</p>
                        <div className='border border-gray-300 w-7/12 ml-auto mt-3 flex items-center justify-between rounded-sm'>
                            <button className='px-2 py-1 border-r-[1px] border-gray-300 h-full'>
                                <RemoveIcon />
                            </button>
                            <p>1</p>
                            <button className='px-2 py-1 border-l-[1px] border-gray-300 h-full'>
                                <AddIcon />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='mt-6 font-bold text-18'>
                    <h3 className='mb-1'>Thông tin mua hàng</h3>
                    <CoreRadioGroup options={sexs} control={control} name='sex' row />
                    <div className='flex gap-x-4 mb-4'>
                        <CoreInput
                            control={control}
                            name='name'
                            size='medium'
                            placeholder='Họ tên'
                        />
                        <CoreInput
                            control={control}
                            name='phone'
                            size='medium'
                            placeholder='Số điện thoại'
                        />
                    </div>
                    <CoreInput
                        control={control}
                        name='address'
                        size='medium'
                        placeholder='Địa chỉ'
                    />
                </div>
                <div className='mt-6 font-bold text-18'>
                    <h3 className='mb-1'>Chọn cách thức nhận hàng</h3>
                    <CoreRadioGroup options={paymentMethods} control={control} name='sex' row />
                    <CoreInput
                        control={control}
                        name='address_2'
                        size='medium'
                        className='mb-4'
                        placeholder='Địa chỉ nhận hàng'
                    />
                    <CoreInput
                        control={control}
                        name='address'
                        size='medium'
                        placeholder='Yêu cầu khác'
                    />
                </div>
                <div className='flex justify-between items-center mt-4'>
                    <p className='text-20 font-bold'>Tổng tiền</p>
                    <p className='text-20 font-bold text-[#FF6700]'>20.790.000đ</p>
                </div>
                <button className='w-full py-3 mt-5 rounded-sm bg-gradient-to-r from-[#FF6700] to-[#F9920F] text-white'>
                    ĐẶT HÀNG
                </button>
            </div>
        </div>
    );
};

export default Cart;
