import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Product from '../../Collections/components/Product';
import { Link } from 'react-router-dom';
import { errorMessage } from '@Core/Helper/Message';
import { productService } from '@App/services/productService';
import ElementLoading from '@App/components/Loading/ElementLoading';

const HomeSection = props => {
    const { data = [], title, category } = props;
    const [products, setProducts] = useState(data);

    useEffect(() => {
        if (category) {
            const getProducts = async () => {
                try {
                    const result = await productService.getByCategory(category, { page_size: 5 });
                    setProducts(result?.data);
                } catch (error) {
                    console.log(error);
                    errorMessage(error);
                }
            };
            getProducts();
        } else {
            setProducts(data);
        }
    }, [category, data]);

    return (
        <div className='mt-3'>
            <div className='mb-3'>
                <h3 className='text-xl font-bold'>{title}</h3>
            </div>
            {!products  && products.length ===  0 ? (
                <div className='flex justify-center'>
                    <ElementLoading />
                </div>
            ) : (
                <div className='grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:md:grid-cols-1 gap-2'>
                    {products?.map((item, index) => (
                        <Product key={index} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

HomeSection.propTypes = {
    title: PropTypes.string.isRequired
};

export default React.memo(HomeSection);
