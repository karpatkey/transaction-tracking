export type DAOType = {
    role: string
    dbId: string
    name: string
    icon: string
}

export const DAOs: DAOType[] = [
    {
        role: 'Gnosis DAO',
        dbId: 'GnosisDAO',
        name: 'Gnosis',
        icon: '/images/protocols/gnosis.svg',
    },
    {
        role: 'Gnosis Ltd',
        dbId: 'Gnosis LTD',
        name: 'Gnosis Ltd',
        icon: '/images/protocols/gnosis.svg',
    },
    {
        role: 'Balancer DAO',
        dbId: 'Balancer-2',
        name: 'Balancer',
        icon: '/images/protocols/balancer.svg',
    },
    {
        role: 'ENS DAO',
        dbId: 'ENS',
        name: 'ENS',
        icon: '/images/protocols/ens.svg',
    },
    {
        role: 'CoW DAO',
        dbId: 'Cow-2',
        name: 'CoW Protocol',
        icon: '/images/protocols/cow.svg',
    },
    {
        role: 'karpatkey DAO',
        dbId: 'Karpatkey',
        name: 'karpatkey',
        icon: '/images/protocols/karpatkey.svg',
    },
    {
        role: 'Lido',
        dbId: 'Lido',
        name: 'Lido',
        icon: '/images/protocols/lido.svg',
    },
    {
        role: 'Aave DAO',
        dbId: 'Aave DAO',
        name: 'Aave',
        icon: '/images/protocols/aave.svg',
    }
]
