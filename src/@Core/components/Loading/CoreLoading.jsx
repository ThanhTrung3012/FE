import ClipLoader from 'react-spinners/ClipLoader';
import PropTypes from 'prop-types'
import React from 'react';

const CoreLoading = props => {
    const { color, size, speed, cssOverride,...restProps } = props;

    return (
        <ClipLoader
            color={color}
            size={size}
            speed={speed}
            cssOverride={cssOverride}
            {...restProps}
        />
    );
};

CoreLoading.defaultProps = {
    color: '#36d7b7',
    size: 35,
    speed: 1,
    cssOverride: {},
};

CoreLoading.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
    speed: PropTypes.number,
    cssOverride: PropTypes.object,
};

export default React.memo(CoreLoading);
