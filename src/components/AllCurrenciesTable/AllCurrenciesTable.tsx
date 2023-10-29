import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import { AppDispatch } from "../../redux/store";
import { selectSortedCurrencies } from "../../redux/selectors";

import CircularProgress from "@mui/material/CircularProgress";
import {sortCurrencies} from "../../redux/thunks/sortCurrenciesThunk";

const LoadingRow: React.FC = () => (
    <TableRow>
        <TableCell colSpan={2} style={{ textAlign: "center" }}>
            <CircularProgress />
        </TableCell>
    </TableRow>
);

const AllCurrenciesTable: React.FC = React.memo(() => {
    const sortedCurrencies = useSelector(selectSortedCurrencies);
    const dispatch = useDispatch<AppDispatch>();

    const [orderBy, setOrderBy] = useState<string>("name");
    const [order, setOrder] = useState<"asc" | "desc">("asc");
    const [loading, setLoading] = useState(true);

    const fetchSortedData = useCallback(async (sortBy: string, sortOrder: "asc" | "desc") => {
        try {
            await dispatch(sortCurrencies({ sortBy, sortOrder }));
            setLoading(false);
        } catch (error) {
            console.error("Error fetching sorted data:", error);
        }
    }, [dispatch]);

    const handleSort = useCallback((property: string) => {
        if (property === orderBy) {
            setOrder(order === "asc" ? "desc" : "asc");
        } else {
            setOrderBy(property);
            setOrder("asc");
        }
    }, [orderBy, order]);

    useEffect(() => {
        fetchSortedData(orderBy, order);
    }, [fetchSortedData, orderBy, order]);

    return (
        <TableContainer component={Paper}>
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
                        <TableCell>
                            <TableSortLabel
                                active={orderBy === "value"}
                                direction={order}
                                onClick={() => handleSort("value")}
                            >
                                Conversion Rate (to 1 USD)
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
                                <TableCell>{sortedCurrencies[currencyCode].toFixed(4)}</TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
});

export default AllCurrenciesTable;
