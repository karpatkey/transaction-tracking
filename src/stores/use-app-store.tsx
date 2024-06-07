import { createStore } from 'zustand/vanilla'

export type Filter = {
    value: string;
    selected: boolean;
}

export type AppState = {
    DAOs: Filter[];
    addresses: Filter[];
    transactions: any[];
    transactionsFiltered: any[];
}

export type AppActions = {
    setDAOs: (DAOs: Filter[]) => void;
    setAddresses: (addresses: Filter[]) => void;
    setTransactions: (transactions: any[]) => void;
    setTransactionsFiltered: (transactions: any[]) => void;
}

export type AppStore = AppState & AppActions

export const defaultInitState: AppState = {
    DAOs: [],
    addresses: [],
    transactions: [],
    transactionsFiltered: []
}


export const createAppStore = (initState: AppState = defaultInitState) => createStore<AppStore>((set) => ({
    ...initState,
    setDAOs: (DAOs) => set({DAOs}),
    setAddresses: (addresses) => set({addresses}),
    setTransactions: (transactions) => set({transactions}),
    setTransactionsFiltered: (transactions) => set({transactionsFiltered: transactions})
}))
