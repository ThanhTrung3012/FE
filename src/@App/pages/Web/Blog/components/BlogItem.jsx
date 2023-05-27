import moment from 'moment';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const BlogItem = ({ item, height, imageWidth }) => {
    return (
        <div className={clsx('w-full p-8 bg-white cursor-grab rounded-2xl', height)}>
            <Link to='/blog/detail/1' className='flex gap-x-5'>
                <img
                    src={item?.image}
                    className={clsx('h-full object-cover rounded-xl', imageWidth)}
                />
                <div>
                    <h5 className='text-[24px] font-bold mb-5'>{item?.title}</h5>
                    <div className='flex gap-x-3 items-center mb-5'>
                        <p className='text-20'>{moment(item?.date).format('YYYY/MM/DD')}</p>
                        <FiberManualRecordRoundedIcon className='text-11 text-[#C4C4C4]' />
                        <p className='text-20 text-[#EF6837]'>{item?.category}</p>
                    </div>
                    <p className='text-18'>{item?.content}</p>
                </div>
            </Link>
        </div>
    );
};

BlogItem.defaultProps = {
    height: 'h-[320px]',
    imageWidth: 'w-[450px]'
};

export default BlogItem;
