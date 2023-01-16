//store.ts
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useStore = defineStore('storeId', {
    state: () => {
        return {
            counter: 10,
            name: 'Maki',
        }
    },
    persist: true,

    actions: {
        hit() {
            this.counter++;
        },
        clear() {
            this.counter = 0
        }
    },

    getters: {
        getCount: (state) => state.counter,
        getUser: (state) => {
            state.name
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}