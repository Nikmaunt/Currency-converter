import React from "react";
import {TableCell, TableRow} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export const LoadingRow: React.FC = () => (
    <TableRow>
        <TableCell colSpan={2} style={{ textAlign: "center" }}>
            <CircularProgress />
        </TableCell>
    </TableRow>
);