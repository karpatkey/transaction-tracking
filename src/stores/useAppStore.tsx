import { create } from 'zustand'

interface AppState {
    DAOs: string[];
    addresses: string[];
    transactions: any[];
    setDAOs: (DAOs: string[]) => void;
    setAddresses: (addresses: string[]) => void;
    setTransactions: (transactions: any[]) => void;
}

export const useAppStore = create<AppState>(
        (set) => ({
            DAOs: [],
            addresses: [],
            transactions: [],
            setDAOs: (DAOs) => set((state) => ({ ...state, DAOs: DAOs })),
            setAddresses: (addresses) => set((state) => ({ ...state, addresses: addresses })),
            setTransactions: (transactions) => set((state) => ({ ...state, transactions: transactions })),
        })
);
