import React from 'react';
import PropTypes from 'prop-types';
import Product from '../../Collections/components/Product';
import { Link } from 'react-router-dom';

const HomeSection = props => {
    const { data, title, categories } = props;

    return (
        <div className='mt-3'>
            <div className='mb-3 flex justify-between items-center'>
                <h3 className='text-xl font-bold'>{title}</h3>
                <div className='flex items-center'>
                    {categories?.map((item, index) => (
                        <div key={index} className='border border-gray-400 rounded-md p-2 text-12'>
                            <Link to='/'>{item?.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-5 sm:grid-cols-3 gap-3'>
                    {data?.map((item, index) => (
                        <Product key={index}/>
                    ))}
            </div>
        </div>
    );
};

HomeSection.propTypes = {
    data: PropTypes.array.isRequired,
    categories: PropTypes.array,
    title: PropTypes.string.isRequired
};

export default React.memo(HomeSection);
