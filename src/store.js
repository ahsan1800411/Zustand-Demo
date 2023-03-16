import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import axios from 'axios';

let store = (set) => ({
    users: [],
    fetchUsers: async () => {
        const { data } = await axios('https://jsonplaceholder.typicode.com/users');
        set({ users: data });
    },
});
store = devtools(store);
store = persist(store, {
    name: 'peoples',
    storage: createJSONStorage(() => sessionStorage),
})

export const usePeopleStore = create(store);
