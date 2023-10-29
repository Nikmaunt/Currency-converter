import React from "react";
import Grid from "@mui/material/Grid";
import ClearIcon from '@mui/icons-material/Clear';
import CurrencyInput from "./CurrencyInput";

interface CurrencyInputsProps {
    selectedCurrencies: string[];
    amounts: { [key: string]: number };
    onAmountChange: (value: number, currency: string) => void;
    handleRemoveCurrency: (currency: string) => void;
    inputValues: number;
    baseCurrency: string[];
}

const CurrencyInputs: React.FC<CurrencyInputsProps> = ({
                                                           selectedCurrencies,
                                                           amounts,
                                                           onAmountChange,
                                                           handleRemoveCurrency,
                                                           inputValues,
                                                           baseCurrency,
                                                       }) => {
    return (
        <>
            {selectedCurrencies.map((currency: string) => (
                <Grid container  key={currency}   direction="row">
                    <Grid item xs={12}>
                        <CurrencyInput
                            onAmountChange={(amount: any) => onAmountChange(amount, currency)}
                            amount={amounts[currency]}
                            currency={currency}
                            value={inputValues}
                            onClearClick={handleRemoveCurrency}
                            baseCurrency={baseCurrency}
                        />
                    </Grid>
                </Grid>
            ))}
        </>
    );
};

export default CurrencyInputs;
