import { createStore } from 'vuex'
// import { ADD } from "./mutation-type.js"
/**
 * 创建仓库和导出
 */
export default createStore({
    state: {
        num: 111,
        name: "ming",
        age: 22,
        gender: "male",
        product: [
            { name: "面包", price: 10, count: 11 },
            { name: "火腿", price: 12, count: 2 },
            { name: "方便面", price: 13, count: 3 },
            { name: "牛奶", price: 14, count: 5 }
        ],
        counter: 0
    },
    getters: {
        /**
         * state 获取state中的数据
         * getters 使用getters中其他的方法
         */
        totalPrice(state, getters) {
            let totalPrice = 0
            for (let i = 0; i < state.product.length; i++) {
                totalPrice += state.product[i].price
            }
            return totalPrice + getters.unit
        },
        unit() {
            return "元"
        },
        moreThanThe(state, getters) {
            return function (n) {
                let totalPrice = 0
                for (let i = 0; i < state.product.length; i++) {
                    if (state.product[i].count > n) continue
                    totalPrice += state.product[i].price
                }
                return totalPrice + getters.unit
            }
        },
        nameInfo(state) {
            return state.name
        }
    },
    mutations: {
        /**
         * mutations修改数据源
         * @param state 数据原
         * @param payload 外部调用时 传入的参数
         */
        add(state, payload) {
            state.counter += payload
        },
        reduce(state) {
            state.counter--
        }
    }
})