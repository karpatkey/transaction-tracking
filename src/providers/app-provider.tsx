'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { type StoreApi, useStore } from 'zustand'

import { type AppStore, createAppStore } from '@/stores/use-app-store'

export const AppStoreContext = createContext<StoreApi<AppStore> | null>(
    null,
)

export interface AppStoreProviderProps {
    children: ReactNode
    initialState?: AppStore
}

export const AppStoreProvider = ({ children, initialState }: AppStoreProviderProps) => {
    const storeRef = useRef<StoreApi<AppStore>>();
    if (!storeRef.current) {
        storeRef.current = createAppStore(initialState)
    }

    return (
        <AppStoreContext.Provider value={storeRef.current as StoreApi<AppStore>}>
            {children}
        </AppStoreContext.Provider>
    )
}

export const useAppStore = <T,>(selector: (store: AppStore) => T,): T => {
    const appStoreContext = useContext(AppStoreContext)

    if (!appStoreContext) {
        throw new Error(`useAppStore must be use within AppStoreProvider`)
    }

    return useStore(appStoreContext, selector)
}
