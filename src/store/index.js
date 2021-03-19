import { createStore } from 'vuex'
import todos from './modules/todos'
import counter from './modules/counter'
import sliders from './modules/sliders'

// create store 
export default createStore({
    modules: { // cf reducer react.
        counter,
        todos,
        sliders
    }
})