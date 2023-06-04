import React, { useEffect, useState } from 'react';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { useRequest } from 'ahooks';
import { showRoomService } from '@App/services/showRoomService';
import ElementLoading from '@App/components/Loading/ElementLoading';
import clsx from 'clsx';

const getMapUrl = (iframe) => {
    var regex = /src="([^"]+)"/;
    var match = regex.exec(iframe);
    var link = match[1];
}

const Shops = () => {
    const [area, setArea] = useState('MIEN-BAC');
    const { data, loading, run: getShops } = useRequest(showRoomService.list);

    useEffect(() => {
        getShops({ area });
    }, [area]);

    return (
        <div className='p-0 md:p-10'>
            <div className='relative'>
                <h1 className='text-center text-[32px] font-bold'>HỆ THỐNG CỬA HÀNG</h1>
                <span className='absolute w-[100px] h-[3px] bg-[#EF6837] left-1/2 translate-x-[-50%]'></span>
            </div>
            <div className='my-10 flex justify-center gap-x-4'>
                <button
                    className={clsx(
                        'px-5 py-3 bg-white rounded-lg',
                        area === 'MIEN-BAC'
                            ? 'bg-[#EF6837]  text-white'
                            : 'border border-[#EF6837] bg-white text-[#EF6837]'
                    )}
                    onClick={() => setArea('MIEN-BAC')}
                >
                    Miền Bắc
                </button>
                <button
                    className={clsx(
                        'px-5 py-3 bg-white rounded-lg',
                        area === 'MIEN-NAM'
                            ? 'bg-[#EF6837]  text-white'
                            : 'border border-[#EF6837] bg-white text-[#EF6837]'
                    )}
                    onClick={() => setArea('MIEN-NAM')}
                >
                    Miền Nam
                </button>
            </div>
            {loading ? (
                <div className='flex justify-center'>
                    <ElementLoading />
                </div>
            ) : (
                <div className='flex justify-center flex-wrap'>
                    {data?.data?.map((item,i) => (
                        <div className='p-3 w-full md:w-1/2 lg:w-4/12'  key={i}>
                            <div className='p-6 border border-gray-200 rounded-xl'>
                                <iframe
                                    src={item?.link_map?.match(/<iframe\s+src="([^"]+)"/)?.[1] ?? ''}
                                    className='w-full h-[250px] md:h-[350px]'
                                    loading='lazy'
                                    referrerPolicy='no-referrer-when-downgrade'
                                ></iframe>
                                <div className='mt-3 flex items-strat'>
                                    <PlaceOutlinedIcon />
                                    <p className='ml-2 leading-[120%]'>{item?.address}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Shops;
