import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Header: React.FC = () => {
    return (
        <Paper elevation={3} style={{ padding: "1rem" }}>
            <Typography variant="h4" component="div" gutterBottom>
                Currency Converter
            </Typography>
        </Paper>
    );
};

export default Header;