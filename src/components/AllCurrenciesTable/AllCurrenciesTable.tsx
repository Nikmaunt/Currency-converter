import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TableSortLabel,
    Box,
} from "@mui/material";
import { AppDispatch } from "../../redux/store";
import {
    selectSortedCurrencies,
    selectSortState,
} from "../../redux/selectors";
import {
    sortCurrencies,

} from "../../redux/thunks/sortCurrenciesThunk";
import { LoadingRow } from "./LoadingRow";
import styles from "./AllCurrenciesTable.module.css";
import {updateSortState} from "../../redux/currencySlice";

enum SortOrder {
    Asc = "asc",
    Desc = "desc",
}

const AllCurrenciesTable: React.FC = React.memo(() => {
    const sortedCurrencies = useSelector(selectSortedCurrencies);
    const sortState = useSelector(selectSortState);
    const dispatch = useDispatch<AppDispatch>();

    const [orderBy, setOrderBy] = useState<string>("name");
    const [order, setOrder] = useState<SortOrder>(SortOrder.Asc);
    const [loading, setLoading] = useState(true);
    const [initialLoad, setInitialLoad] = useState(true);

    const fetchSortedData = useCallback(
        async (sortBy: string, sortOrder: SortOrder) => {
            try {
                const response = await dispatch(sortCurrencies({ sortBy, sortOrder }));
                dispatch(updateSortState({ sortBy, sortOrder, data: response.payload }));
                setLoading(false);
            } catch (error) {
                console.error("Error fetching sorted data:", error);
                setLoading(false);
            }
        },
        [dispatch]
    );

    const handleSort = useCallback((property: string) => {
        if (property === orderBy) {
            const newOrder = order === SortOrder.Asc ? SortOrder.Desc : SortOrder.Asc;
            setOrder(newOrder);
            fetchSortedData(property, newOrder);
        } else {
            setOrderBy(property);
            setOrder(SortOrder.Asc);
            fetchSortedData(property, SortOrder.Asc);
        }
    }, [orderBy, order, fetchSortedData]);

    useEffect(() => {
        if (initialLoad || (orderBy && order)) {
            if (sortState[orderBy] && sortState[orderBy][order]) {
                setLoading(false);
            } else {
                fetchSortedData(orderBy, order);
            }
            setInitialLoad(false);
        }
    }, [fetchSortedData, orderBy, order, initialLoad, sortState]);

    return (
        <Box overflow="auto">
            <TableContainer className={styles.container}>
                <Table aria-label="all-currencies-table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === "name"}
                                    direction={order}
                                    onClick={() => handleSort("name")}
                                >
                                    Currency Name
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="right">
                                <TableSortLabel
                                    active={orderBy === "value"}
                                    direction={order}
                                    onClick={() => handleSort("value")}
                                >
                                    Conversion Rate to 1 USD
                                </TableSortLabel>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loading ? (
                            <LoadingRow />
                        ) : (
                            Object.keys(sortedCurrencies).map((currencyCode) => (
                                <TableRow key={currencyCode}>
                                    <TableCell>{currencyCode}</TableCell>
                                    <TableCell align="right">{sortedCurrencies[currencyCode].toFixed(4)}</TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
});

export default AllCurrenciesTable;
