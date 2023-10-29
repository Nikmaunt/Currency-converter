import React, { Suspense, lazy } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';

const AllCurrenciesTable = lazy(() => import('./AllCurrenciesTable'));

const LoadingFallback = () => (
    <Paper
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '300px',
        }}
    >
        <CircularProgress />
    </Paper>
);

const LazyAllCurrenciesTable = () => {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <AllCurrenciesTable />
        </Suspense>
    );
};

export default LazyAllCurrenciesTable;
