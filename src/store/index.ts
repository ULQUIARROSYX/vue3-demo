import { defineStore } from 'pinia'

export const mainStore = defineStore('main', {
    state() {
        return {
            msg: 'hello world!',
            counter: 0
        }
    },
    getters: {
        count10(state) {
            return state.counter + 10
        }
    },
    actions: {
        updateCounter(value: number) {
            this.counter = value * 1000
        }
    },
    persist: {
        enabled: true, // 开启持久化
        strategies: [
            { storage: localStorage, paths: ['counter', 'msg'] }
        ]
    }
})
