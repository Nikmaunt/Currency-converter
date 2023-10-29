import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import CurrencyInputs from "../CurrencyInput/CurrencyInputs";
import { selectAmounts, selectSelectedCurrencies, selectError } from "../../redux/selectors";
import AllCurrenciesTable from "../AllCurrenciesTable/AllCurrenciesTable";
import {
    addCurrency,
    removeCurrency,
    updateAmounts
} from "../../redux/currencySlice";
import CustomCurrencyInputSkeleton from "../CurrencyInput/CustomCurrencyInputSkeleton";
import CustomSelect from "../CustomSelect/CustomSelect";
import TabsComponent from "../TabsComponent/TabsComponent";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import { fetchInitialCurrencies } from "../../redux/thunks/fetchInitialCurrenciesThunk";
import {recalculateAmounts} from "../../redux/thunks/recalculateAmountsThunk";

interface MainContentProps {
    selectedTab: number;
    onTabChange: (newValue: number) => void;
}

const MainContent: React.FC<MainContentProps> = ({ selectedTab, onTabChange }) => {
    const dispatch = useDispatch();
    const amounts = useSelector(selectAmounts);
    const selectedCurrencies = useSelector(selectSelectedCurrencies);
    const error = useSelector(selectError);

    const [inputValues, setInputValues] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        dispatch(fetchInitialCurrencies()  as any)
            .then(() => {
                setLoading(false);
            })
    }, [dispatch]);

    useEffect(() => {
        dispatch(updateAmounts(amounts));
    }, [amounts, dispatch]);

    const handleAmountChange = (value: number, currency: string) => {
        dispatch(recalculateAmounts({ baseCurrency: currency, value })as any);
        setInputValues(value);
    };

    const handleAddCurrency = (newCurrency: string) => {
        dispatch(addCurrency(newCurrency));
    };

    const handleRemoveCurrency = (currency: string) => {
        dispatch(removeCurrency(currency));
    };

    const baseCurrency = ["USD", "EUR", "RUB", "BYN"];

    return (
        <Paper elevation={3} style={{ padding: "1rem", width: "50%", margin: "0 auto" }}>
            {error && <ErrorComponent />}
            <TabsComponent selectedTab={selectedTab} onTabChange={onTabChange} />
            {loading ? (
                <CustomCurrencyInputSkeleton />
            ) : selectedTab === 0 ? (
                <div>
                    <CurrencyInputs
                        selectedCurrencies={selectedCurrencies}
                        amounts={amounts}
                        onAmountChange={handleAmountChange}
                        handleRemoveCurrency={handleRemoveCurrency}
                        inputValues={inputValues}
                        baseCurrency={baseCurrency}
                    />
                    <CustomSelect
                        options={Object.keys(amounts).filter(
                            (currency) => !selectedCurrencies.includes(currency)
                        )}
                        onChange={handleAddCurrency}
                    />
                </div>
            ) : (
                <AllCurrenciesTable />
            )}
        </Paper>
    );
};

export default MainContent;
