

import React from 'react';
import PropTypes from 'prop-types';
import { TableContainer, Paper, Table, CircularProgress, Pagination, Box } from '@mui/material';
import { useReactTable, getCoreRowModel, createColumnHelper } from '@tanstack/react-table';
import CoreTableHeader from './components/CoreTableHeader';
import CoreTableBody from './components/CoreTableBody';

export const columnHelper = createColumnHelper();

const CoreTable = props => {
    const {
        data,
        columns,
        pageIndex,
        pageSize,
        total,
        handleFetchData,
        loading,
        isPagination,
        query
    } = props;

    const rerender = React.useReducer(() => ({}), {})[1];
    const defaultData = React.useMemo(() => []);
    const pagination = React.useMemo(
        () => ({
            pageIndex,
            pageSize
        }),
        [pageIndex, pageSize]
    );

    const table = useReactTable({
        data: data ?? defaultData,
        columns: columns,
        getCoreRowModel: getCoreRowModel(),
        state: {
            pagination
        },
        manualPagination: true,
        debugTable: true
    });

    return (
        <TableContainer className='relative' component={Paper}>
            <Table stickyHeader className='table' sx={{ minWidth: 1000 }}>
                <CoreTableHeader table={table} />
                <CoreTableBody table={table} loading={loading} />
            </Table>
            {loading && (
                <Box className='absolute top-16 left-[50%] translate-x-[-50%]'>
                    <CircularProgress color='primary' size={40} />
                </Box>
            )}
            {isPagination && (  
                <Box className='flex justify-end py-2'>
                    <Pagination
                        count={Math.ceil(total / pageSize) ?? 1}
                        page={pageIndex}
                        onChange={(event, value) => {
                            handleFetchData({ page_index: value, ...query });
                        }}
                        color='primary'
                    />
                </Box>
            )}
        </TableContainer>
    );
};

CoreTable.defaultProps = {
    data: [],
    columns: [],
    pageIndex: 1,
    pageSize: 10,
    total: 1,
    handleFetchData: () => {},
    loading: false,
    isPagination: false,
    query: {}
};

CoreTable.propTypes = {
    data: PropTypes.array,
    columns: PropTypes.array.isRequired,
    pageIndex: PropTypes.number,
    pageSize: PropTypes.number,
    total: PropTypes.number,
    handleFetchData: PropTypes.func,
    loading: PropTypes.bool,
    isPagination: PropTypes.bool,
    query: PropTypes.object
};

export default React.memo(CoreTable);
