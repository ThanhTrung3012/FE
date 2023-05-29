import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Product from '../../Collections/components/Product';
import { Link } from 'react-router-dom';
import { errorMessage } from '@Core/Helper/Message';
import { productService } from '@App/services/productService';

const HomeSection = props => {
    const { data = [], title, category } = props;
    const [products,setProducts] = useState(data)
    
    useEffect(() => {
        if(category) {
            const getProducts = async () => {
                try {
                    const result = await productService.getByCategory(category)
                    setProducts(result?.data)
                } catch (error) {
                    console.log(error);
                    errorMessage(error)
                }
            }
            getProducts()
        }
    },[category])

    return (
        <div className='mt-3'>
            <div className='grid grid-cols-1 md:grid-cols-5 sm:grid-cols-3 gap-2'>
                {products?.map((item, index) => (
                    <Product key={index} item={item} />
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
