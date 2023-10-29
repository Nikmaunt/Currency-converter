import React from "react";
import { useSelector } from "react-redux";
import { selectError } from "../../redux/selectors";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useDispatch } from "react-redux";
import { clearError } from "../../redux/currencySlice";

const ErrorComponent: React.FC = () => {
    const error = useSelector(selectError);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(clearError());
    };

    return (
        <Snackbar
            open={!!error}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
            <Alert severity="error" onClose={handleClose}>
                {error || "An error occurred."}
            </Alert>
        </Snackbar>
    );
};

export default ErrorComponent;
