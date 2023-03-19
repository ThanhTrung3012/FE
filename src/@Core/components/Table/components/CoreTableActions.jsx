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
import { useConfirm } from '@Core/components/Confirm/CoreConfirm';
import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RateReviewRoundedIcon from '@mui/icons-material/RateReviewRounded';

export const CoreTableActionDelete = ({ callback = () => {}, content = '' }) => {
    const confirm = useConfirm();

    const handleDelete = () => {
        confirm({
            content: content,
            isIcon: true,
            onOk: callback
        });
    };

    return (
        <Tooltip title='Xoá'>
            <IconButton color='error' onClick={handleDelete}>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    );
};

export const CoreTableActionEdit = ({ callback = () => {} }) => {
    return (
        <Tooltip title='Sửa'>
            <IconButton color='success' onClick={callback}>
                <RateReviewRoundedIcon />
            </IconButton>
        </Tooltip>
    );
};
