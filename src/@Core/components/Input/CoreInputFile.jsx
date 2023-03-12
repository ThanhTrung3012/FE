/*
 * Created Date: 03-02-2023, 21:00 pm
 * Author: Nghiêm Mạnh Cường
 * Email: nghiemmanhcuong98@gmail.com
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) ...
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import BackupRoundedIcon from '@mui/icons-material/BackupRounded';
import React, { useCallback, useRef, useState } from 'react';
import { useController } from 'react-hook-form';
import { isArray } from 'lodash';

const CoreInputFile = props => {
    const {
        className,
        control,
        name,
        label,
        placeholder,
        InputLabelProps,
        required,
        helperText,
        accept,
        isPreview = false,
        multiple
    } = props;
    const inputRef = useRef();

    const {
        field: { onChange, value, ref },
        fieldState: { error }
    } = useController({ name, control });

    const [file, setFile] = useState(null);

    const handleChange = useCallback(async event => {
        const { files } = event.target;
        if (files) {
            if (multiple) {
                setFile(files);
                const fileList = Object.entries(files).map(file => file[1])
                onChange(fileList);
            } else {
                setFile(files[0]);
                onChange(files[0]);
            }
        }
    }, []);

    const getFileName = () => {
        if(value && isArray(value)) {
            return value.map(item => item.name).join(',')
        }
    }

    const handleClick = () => {
        inputRef.current.click();
    };

    return (
        <Box className={className}>
            <>
                <TextField
                    fullWidth
                    label={label}
                    placeholder={placeholder || 'No files are selected!'}
                    value={(multiple ? getFileName() : value?.name) ?? ''}
                    inputRef={ref}
                    error={!!error}
                    helperText={(error && error.message) || helperText || undefined}
                    InputLabelProps={{
                        shrink: placeholder ? true : undefined,
                        required,
                        ...InputLabelProps
                    }}
                    inputProps={{
                        readOnly: true
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <IconButton color='primary' onClick={handleClick}>
                                    <BackupRoundedIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />

                <input
                    type='file'
                    multiple={multiple}
                    accept={accept}
                    ref={inputRef}
                    onChange={handleChange}
                    className='hidden'
                />
            </>
        </Box>
    );
};

CoreInputFile.defaultProps = {
    className: null,
    label: null,
    placeholder: null,
    InputLabelProps: null,
    required: false,
    helperText: null,
    accept: null
};
CoreInputFile.propTypes = {
    className: PropTypes.string,
    control: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    InputLabelProps: PropTypes.object,
    required: PropTypes.bool,
    helperText: PropTypes.string,
    accept: PropTypes.string
};

export default React.memo(CoreInputFile);
