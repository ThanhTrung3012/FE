import moment from 'moment';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { WEB_ROUTERS } from '@App/configs/constants';

const BlogItem = ({ item, height, imageWidth,contentWidth,truncate,truncate2 }) => {
    return (
        <div className={clsx('w-full p-8 bg-white cursor-grab rounded-2xl', height)}>
            <Link to={WEB_ROUTERS.blog.detail + '/' + item._id} className='flex gap-x-5 h-full'>
                <img
                    src={item?.image}
                    className={clsx('max-h-full object-cover rounded-xl', imageWidth)}
                />
                <div className={contentWidth}>
                    <h5 className={clsx('text-[24px] font-bold mb-5',truncate2)}>{item?.title}</h5>
                    <div className='flex gap-x-3 items-center mb-5'>
                        <p className='text-20'>{moment(item?.date).format('YYYY/MM/DD')}</p>
                        <FiberManualRecordRoundedIcon className='text-11 text-[#C4C4C4]' />
                        <p className='text-20 text-[#EF6837]'>{item?.category}</p>
                    </div>
                    <p className={clsx('text-18',truncate)}>{item?.description}</p>
                </div>
            </Link>
        </div>
    );
};

BlogItem.defaultProps = {
    height: 'h-[320px]',
    imageWidth: 'min-w-[450px] w-[450px]',
    contentWidth:'w-1/2',
    truncate:'truncate-4',
    truncate2:'truncate-2',
};

export default BlogItem;
