import axios from 'axios'

const todos = {

    state: {
        todos: [
            {
                id: 1,
                title: 'Todo One'
            },{
                id: 2,
                title: 'Todo Two'
            },
        ]
    },
    
    getters: {
        allTodos: (state) => state.todos
    },

    actions: {
        async fetchTodos({ commit }) {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            commit('setTodos', response.data)
        },
        async addTodo({commit}, title) {
            const body = { title, completed: false}
            const response = await axios.post('https://jsonplaceholder.typicode.com/todos', body)
            commit('newTodo', response.data)
        },
        async deleteTodo({ commit }, id) {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
            commit('removeTodo', id)
        },
        async filterTodos({ commit }, e) {
            // Get selected number
            const limit = parseInt(
                e.target.options[e.target.options.selectedIndex].innerText //vanilla JS
            );

            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
            );

            commit('setTodos', response.data);
        },
        async updateTodo({ commit }, updatedTodo) {
            const response = await axios.put(
                `https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, updatedTodo
            );
            commit('updateTodo', response.data)
        }
    },

    mutations: {
        setTodos: (state, todos) => {
            state.todos = todos
        },
        newTodo: (state, todo) => {
            state.todos.unshift(todo)
        },
        removeTodo: (state, id) => {
            state.todos = state.todos.filter(todo => todo.id !== id)
        },
        updateTodo: (state, updatedTodo) => {
            const index = state.todos.findIndex(todo => todo.id === updatedTodo.id)
            if(index !== -1) {
                state.todos.splice(index, 1, updatedTodo); // remplace l'élément à l'index de l'élément (1 element) par le updatedTodo
            }
        }
    }
}
    
export default todos