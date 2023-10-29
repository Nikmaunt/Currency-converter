interface CurrencyState {
    amounts: Record<string, number>;
    sortState: Record<string, Record<string, Record<string, number>>>;
    selectedCurrencies: string[];
    sortedCurrencies: Record<string, number>;
    error:string|null
}

const initialState: CurrencyState = {
    amounts: {},
    selectedCurrencies: ["USD", "EUR", "RUB", "BYN"],
    sortedCurrencies: {},
    sortState: {},
    error:'',
};

export default initialState;
