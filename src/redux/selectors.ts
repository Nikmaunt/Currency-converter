import { RootState } from "./store";

export const selectAmounts = (state: RootState) => state.currency.amounts;
export const selectSelectedCurrencies = (state: RootState) => state.currency.selectedCurrencies;
export const selectSortedCurrencies = (state: RootState) => state.currency.sortedCurrencies;
export const selectError = (state:RootState) => state.currency.error;
export const selectSortState = (state: RootState) => state.currency.sortState;