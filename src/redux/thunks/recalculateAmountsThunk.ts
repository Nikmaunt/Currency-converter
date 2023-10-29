import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {setError} from "../currencySlice";
import {CONVERT_API} from "../../api/apiConstants";

export const recalculateAmounts = createAsyncThunk(
    "currency/recalculateAmounts",
    async (
        { baseCurrency, value }: { baseCurrency: string; value: number },
        { rejectWithValue, dispatch }
    ) => {
        try {
            const requestData = {
                amount: value,
                from: baseCurrency,
            };
            const response = await axios.get(CONVERT_API, {
                params: requestData,
            });
            return response.data.convertedCurrencies;
        } catch (error) {
            dispatch(setError("Error while converting currencies"));
            return rejectWithValue({
                message: "Error while converting currencies",
                code: "CONVERT_ERROR"
            });
        }
    }
);