export const mapDAOs = {
    'karpatkey DAO': 'karpatkey',
    'Gnosis Ltd': 'Gnosis LTD',
    'Gnosis DAO': 'GnosisDAO',
    'ENS DAO': 'ENS',
    'Balancer DAO': 'Balancer',
}

export type DAOType = {
    id: string
    name: string
    icon: string
}

export const DAOs: DAOType[] = [
    {
        id: 'Gnosis DAO',
        name: 'Gnosis',
        icon: '/images/protocols/gnosis.svg',
    },
    {
        id: 'Gnosis LTD',
        name: 'Gnosis LTD',
        icon: '/images/protocols/gnosis.svg',
    },
    {
        id: 'Balancer DAO',
        name: 'Balancer',
        icon: '/images/protocols/balancer.svg',
    },
    {
        id: 'ENS DAO',
        name: 'ENS',
        icon: '/images/protocols/ens.svg',
    },
    {
        id: 'CoW DAO',
        name: 'CoW Protocol',
        icon: '/images/protocols/cow.svg',
    },
    {
        id: 'karpatkey DAO',
        name: 'karpatkey',
        icon: '/images/protocols/karpatkey.svg',
    },
    {
        id: 'Gnosis Guild',
        name: 'Gnosis Guild',
        icon: '/images/protocols/gnosis.svg',
    },
    {
        id: 'Lido',
        name: 'Lido',
        icon: '/images/protocols/lido.svg',
    },
    {
        id: 'Aave DAO',
        name: 'Aave',
        icon: '/images/protocols/aave.svg',
    },
    {
        id: 'Safe<>Gnosis',
        name: 'Safe<>Gnosis',
        icon: '/images/protocols/safe-gnosis.svg',
    },
    {
        id: 'Safe',
        name: 'Safe',
        icon: '/images/protocols/safe.svg',
    }
]
