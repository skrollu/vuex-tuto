
import vue from '../../assets/images/vue_logo.png'
import angular from '../../assets/images/angular_logo.png'
import react from '../../assets/images/react_logo.png'

const sliders = {
    state: () => ({
        paysages: [
            {
                id: 1,
                title: "Vue.js",
                cover_picture: vue
            },
             {
                id: 2,
                title: "Angular",
                cover_picture: angular
            },
             {
                id: 3,
                title: "React",
                cover_picture: react
            },
        ]
    }),

    getters: { // get and modify data from the store to get in components but don't modify data in state
        paysages(state) {
            return state.paysages
        }
    },
    actions: {//can have async code and call mutations 
       
    },
    mutations: {
       
    }
}

export default sliders;