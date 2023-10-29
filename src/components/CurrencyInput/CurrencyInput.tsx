import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { InputAdornment } from "@mui/material";

interface CurrencyInputProps {
    amount: number;
    currency: string;
    onAmountChange: (value: number | null) => void;
    value: number;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
                                                         amount,
                                                         currency,
                                                         onAmountChange,
                                                         value,
                                                     }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(e.target.value);
        if (!isNaN(newValue) && newValue >= 0) {
            onAmountChange(newValue);
        } else {
            onAmountChange(0);
        };
    };

    return (
        <Grid container spacing={4}>
            <Grid item xs={8}>
                <TextField
                    variant="outlined"
                    margin="dense"
                    type="number"
                    size={'small'}
                    value={amount || value}
                    onChange={handleInputChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">{currency}</InputAdornment>
                        ),
                    }}
                    inputProps={{ min: "0", step: "any", inputMode: "numeric" }}
                />
            </Grid>
        </Grid>
    );
};

export default React.memo(CurrencyInput);
