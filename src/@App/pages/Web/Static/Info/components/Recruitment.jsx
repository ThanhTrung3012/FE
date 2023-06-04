import React from 'react';
import banner from '@App/assets/recruitment_banner.jpeg';
import WorkIcon from './WorkIcon';

const Recruitment = () => {
    const works = [
        'Chế độ đãi ngộ tốt giúp bản thân yên tâm làm việc.',
        'Được tham gia các chế độ BHXH, BHYT theo quy định của nhà nước.',
        'Công bằng, xứng đáng, đoàn kết hỗ trợ nhau phát triển là văn hoá của Công ty.',
        'Được tham gia các hoạt động Team Building, Du lịch Nghỉ mát hàng năm cùng công ty (2 lần/năm).',
        'Được đào tạo nghiệp vụ, có định hướng nghề nghiệp rõ ràng chúng tôi coi trọng tiềm năng hơn năng lực hiện tại.',
        'Thời gian làm việc: 8h/ngày, ca xoay linh động | Được nghỉ 1 ngày / tuần. Nghỉ phép 6 ngày / năm | Nghỉ lễ/Tết theo quy định nhà nước.'
    ];

    return (
        <div className='p-0 md:p-10'>
            <div className='relative text-center'>
                <h1 className='text-[32px] font-bold'>TUYỂN DỤNG</h1>
                <span className='absolute w-[100px] h-[3px] bg-[#EF6837] left-1/2 translate-x-[-50%]'></span>
                <p className='mt-10 mb-2 text-19'>Thu nhập CAO TOP đầu trong ngành</p>
                <p className='text-19'>--- Oneway Mobile tuyển dụng ---</p>
            </div>
            <div className='mt-10'>
                <img src={banner} alt='banner' />
            </div>
            <div className='relative text-center mt-10'>
                <h1 className='text-[32px] font-bold'>QUYỀN LỢI</h1>
                <span className='absolute w-[100px] h-[3px] bg-[#EF6837] left-1/2 translate-x-[-50%]'></span>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-[-12px] mt-10'>
                {works.map(work => (
                    <div key={work} className='p-3'>
                        <div className='p-8 bg-[#F5F5F7] rounded-[40px] min-h-[255px]'>
                            <div className='relative'>
                                <WorkIcon />
                                <span className='absolute h-[48px] w-[4px] bg-[#EF6837] left-[-31px] top-0 rounded-tr-2xl rounded-br-2xl'></span>
                            </div>
                            <p className='mt-5 text-20'>{work}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recruitment;
