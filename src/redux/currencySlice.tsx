import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./initialState";
import {fetchInitialCurrencies} from "./thunks/fetchInitialCurrenciesThunk";
import {recalculateAmounts} from "./thunks/recalculateAmountsThunk";
import {sortCurrencies} from "./thunks/sortCurrenciesThunk";


const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        updateAmounts: (state, action: PayloadAction<Record<string, number>>) => {
            state.amounts = action.payload;
        },
        addCurrency: (state, action: PayloadAction<string>) => {
            state.selectedCurrencies.push(action.payload);
        },
        removeCurrency: (state, action: PayloadAction<string>) => {
            const index = state.selectedCurrencies.indexOf(action.payload);
            if (index !== -1) {
                state.selectedCurrencies.splice(index, 1);
            }
        },
        updateSortState: (state, action: PayloadAction<{ sortBy: string, sortOrder: string, data: Record<string, number> }>) => {
            const { sortBy, sortOrder, data } = action.payload;
            state.sortState[sortBy] = state.sortState[sortBy] || {};
            state.sortState[sortBy][sortOrder] = data as Record<string, number>;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchInitialCurrencies.fulfilled, (state, action) => {
            state.amounts = action.payload;
        });
        builder.addCase(recalculateAmounts.fulfilled, (state, action) => {
            state.amounts = action.payload;
        });
        builder.addCase(sortCurrencies.fulfilled, (state, action) => {
            state.sortedCurrencies = action.payload;
        });
    },
});

export const { updateAmounts, addCurrency, removeCurrency, clearError, setError, updateSortState } = currencySlice.actions;
export default currencySlice.reducer;
