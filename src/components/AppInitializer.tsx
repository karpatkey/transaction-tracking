'use client'

import { useAppStore } from '@/stores/useAppStore'

export default function AppInitializer({ DAOs, addresses, transactions, children }) {
    useAppStore.setState?.({
        DAOs,
        addresses,
        transactions
    })

    return children
}
