import React from 'react';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

const Shops = () => {
    return (
        <div className='p-10'>
            <div className='relative'>
                <h1 className='text-center text-[32px] font-bold'>HỆ THỐNG CỬA HÀNG</h1>
                <span className='absolute w-[100px] h-[3px] bg-[#EF6837] left-1/2 translate-x-[-50%]'></span>
            </div>
            <div className='my-10 flex justify-center gap-x-4'>
                <button className='px-5 py-3 bg-[#EF6837] rounded-lg text-white'>Miền Bắc</button>
                <button className='px-5 py-3 bg-[#EF6837] rounded-lg text-white'>Miền Nam</button>
            </div>
            <div className='flex justify-center flex-wrap'>
                {[1, 2, 3, 4].map(item => (
                    <div className='p-3 w-4/12'>
                        <div className='p-6 border border-gray-200 rounded-xl'>
                            <iframe
                                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39911.820447105034!2d105.73291790236208!3d21.044971534161505!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345457e292d5bf%3A0x20ac91c94d74439a!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2hp4buHcCBIw6AgTuG7mWk!5e0!3m2!1svi!2s!4v1685024554200!5m2!1svi!2s'
                                height='350'
                                className='w-full'
                                loading='lazy'
                                referrerpolicy='no-referrer-when-downgrade'
                            ></iframe>
                            <div className='mt-3 flex items-strat'>
                                <PlaceOutlinedIcon />
                                <p className='ml-2 leading-[120%]'>
                                    {' '}
                                    416 Cầu Giấy - P.Dịch Vọng - Q.Cầu Giấy - TP.Hà Nội
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shops;
