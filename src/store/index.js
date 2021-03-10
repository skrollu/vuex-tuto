import { createStore } from 'vuex'
import axios from 'axios'

// create store 
export default createStore({
    state:{
        counter: 0,
        colorCode: '#fff'
    },
    mutations: { //cannot have async code. Only a setter  ????
        increaseCounter(state) {
            state.counter++;
        },
        decreaseCounter(state) {
            state.counter--
        },
        randomNumber(state, randomNumber) {
            state.counter = randomNumber
        },
        setColorCode(state, newValue){
            state.colorCode = newValue
        }
    },
    actions: { //can have async code and call mutations 
        randomNumber({ commit }) { //in order to commit a mutation from an action we need to pass th ecommit method in params
            axios.get('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(res => {
                commit(`randomNumber`, res.data)
            })
        },
        setColorCode({commit}, newValue) {
            commit('setColorCode', newValue)
        }
    },
    getters: { // get and modify data from the store to get in components but don't modify data in state
        counterSquared(state){
            return state.counter * state.counter
        }
    },
    modules: { // cf reducer react
        
    }
})