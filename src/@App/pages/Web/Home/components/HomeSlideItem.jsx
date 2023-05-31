import Image from 'mui-image';
import React from 'react';
import { Link } from 'react-router-dom';
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';

const HomeSlideItem = ({ item }) => {
    return (
        <Link to={`${item?.category === 1 ? '/product' : '/collections'}/${item.path}`}>
            <Image
                src={item?.image}
                errorIcon={<ImageNotSupportedIcon />}
                duration={100}
                className='object-cover'
            />
        </Link>
    );
};

export default HomeSlideItem;
