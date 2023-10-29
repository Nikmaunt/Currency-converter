import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import {IconButton, InputAdornment} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

interface CurrencyInputProps {
    amount: number;
    currency: string;
    baseCurrency:string[];
    onAmountChange: (value: number | null) => void;
    onClearClick: (currency:string) => void;
    value: number;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
                                                         amount,
                                                         currency,
                                                         onAmountChange,
                                                         value,
                                                         baseCurrency,
                                                         onClearClick,
                                                     }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(e.target.value);
        if (!isNaN(newValue) && newValue >= 0) {
            console.log(newValue)
            onAmountChange(newValue);
        }
        else {
            onAmountChange(0);
        };
    };



    return (
        <Grid container spacing={4}>
            <Grid item xs={12} >
                <TextField
                    style={{width: '100%'}}
                    variant="outlined"
                    margin="dense"
                    type="number"
                    size="small"
                    value={amount ? amount : value ? value : ''}
                    onChange={handleInputChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">{currency}</InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                {!baseCurrency.includes(currency) && (
                                    <IconButton onClick={() => onClearClick(currency)} >
                                    <ClearIcon />
                                    </IconButton>
                                )}
                            </InputAdornment>
                        ),
                    }}
                    inputProps={{ min: "0", step: "any", inputMode: "numeric" }}
                />
            </Grid>
        </Grid>
    );
};

export default React.memo(CurrencyInput);
