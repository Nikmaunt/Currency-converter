interface CurrencyState {
    amounts: Record<string, number>;
    selectedCurrencies: string[];
    sortedCurrencies: Record<string, number>;
    error:string|null
}

const initialState: CurrencyState = {
    amounts: {
        // USD: 1,
        // EUR: 1,
        // RUB: 1,
        // BYN: 1,
    },
    selectedCurrencies: ["USD", "EUR", "RUB", "BYN"],
    sortedCurrencies: {},
    error:'',
};

export default initialState;
