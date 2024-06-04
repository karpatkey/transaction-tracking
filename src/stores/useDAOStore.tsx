import create from 'zustand';

interface DAOState {
    DAO: any;
    setDAO: (DAO: any) => void;
}

const useDAOStore = create<DAOState>((set) => ({
    DAO: null,
    setDAO: (DAO) => set({ DAO }),
}));

export default useDAOStore;
