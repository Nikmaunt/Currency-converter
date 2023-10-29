import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {setError} from "../currencySlice";
import {SORT_CURRENCIES_API} from "../../api/apiConstants";

export const sortCurrencies = createAsyncThunk(
    "currency/sortCurrencies",
    async ({ sortBy, sortOrder }: { sortBy: string; sortOrder: string }, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.get(
                `${SORT_CURRENCIES_API}?sortBy=${sortBy}&sortOrder=${sortOrder}`
            );
            return response.data.rates;
        } catch (error) {
            dispatch(setError("Error while sorting currencies"));
            return rejectWithValue({
                message: "Error while sorting currencies",
                code: "SORT_ERROR"
            });
        }
    }
);