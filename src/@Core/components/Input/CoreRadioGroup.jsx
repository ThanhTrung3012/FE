

import React from 'react';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import {
    Box,
    FormControlLabel,
    FormHelperText,
    Radio,
    RadioGroup,
    Typography
} from '@mui/material';

const CoreRadioGroup = props => {
    const { name, control, legendLabel, options, row, defaultValue, className, ...restProps } =
        props;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, ref, value }, fieldState: { error } }) => {
                return (
                    <Box className='flex items-center gap-x-20'>
                        {legendLabel ? (
                            <Typography className='text-[12px]' component='p'>
                                {legendLabel}
                            </Typography>
                        ) : null}
                        <Box className={className}>
                            <RadioGroup
                                defaultValue={defaultValue}
                                value={value}
                                row={row}
                                onChange={onChange}
                                ref={ref}
                                {...restProps}
                            >
                                {options.map((option, i) => {
                                    return (
                                        <FormControlLabel
                                            label={
                                                <Typography variant='body2' className='text-15'>
                                                    {option?.label}
                                                </Typography>
                                            }
                                            value={option?.value}
                                            key={i}
                                            control={<Radio color='primary' />}
                                            disabled={option?.disabled ? option?.disabled : false}
                                        />
                                    );
                                })}
                            </RadioGroup>
                            {error && error.message ? (
                                <FormHelperText sx={{marginTop:'-5px !important'}} error>{error.message}</FormHelperText>
                            ) : null}
                        </Box>
                    </Box>
                );
            }}
        />
    );
};

CoreRadioGroup.defaultProps = {
    className: '',
    legendLabel: '',
    options: [],
    defaultValue: null
};

CoreRadioGroup.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    control: PropTypes.object.isRequired,
    legendLabel: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.any,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            disabled: PropTypes.bool
        })
    ),
    row: PropTypes.bool,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default React.memo(CoreRadioGroup);
