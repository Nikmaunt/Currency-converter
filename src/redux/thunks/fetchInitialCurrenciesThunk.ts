import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {INITIAL_CURRENCIES_API} from "../../api/apiConstants";
import {setError} from "../currencySlice";
export const fetchInitialCurrencies = createAsyncThunk(
    "currency/fetchInitialCurrencies",
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.get(INITIAL_CURRENCIES_API);
            return response.data.initialCurrencies;
        } catch (error) {
            dispatch(setError("Error while loading data"));
            return rejectWithValue({
                message: "Error while loading data",
                code: "FETCH_ERROR"
            });
        }
    }
);