import React, { forwardRef } from 'react';
import Tippy from '@tippyjs/react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const CoreTooltip = props => {
    const {
        content,
        allowHTML,
        delay,
        duration,
        disabled,
        placement,
        contentChild,
        classNameWapperChild,
        maxWidth,
        ...restProps
    } = props;

    const ForwardProps = forwardRef((props, ref) => {
        return (
            <div ref={ref} className={clsx('max-w-max', classNameWapperChild)}>
                {contentChild}
            </div>
        );
    });

    return (
        <Tippy
            content={content}
            allowHTML={allowHTML}
            disabled={disabled}
            placement={placement}
            delay={delay}
            duration={duration}
            maxWidth={maxWidth}
            {...restProps}
        >
            <ForwardProps />
        </Tippy>
    );
};

CoreTooltip.defaultProps = {
    content: '',
    allowHTML: true,
    delay: 0,
    duration: 200,
    disabled: false,
    placement: 'bottom'
};

CoreTooltip.propTypes = {
    content: PropTypes.arrayOf(PropTypes.string, PropTypes.element),
    allowHTML: PropTypes.bool,
    delay: PropTypes.number,
    duration: PropTypes.number,
    disabled: PropTypes.bool,
    placement: PropTypes.string,
    contentChild: PropTypes.element,
    classNameWapperChild:PropTypes.string
};

export default React.memo(CoreTooltip);
