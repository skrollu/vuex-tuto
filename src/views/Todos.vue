<template>
    <div class="todos-container">
        <AddTodo />
        <FilterTodos />
         <div class="legend">
            <span>Double click to mark as complete</span>
            <span>
                <span class="incomplete-box"></span> = Incomplete
            </span>
            <span>
                <span class="complete-box"></span> = Complete
            </span>
        </div>
        <div class="todos">
            <div @dblclick="onDoubleClick(todo)" class="todo" v-bind:class="{'is-complete': todo.completed}" v-for="todo in allTodos" :key="todo.id">
                {{ todo.title }}
                <i class="fas fa-trash-alt" @click="deleteTodo(todo.id)"></i>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions} from 'vuex';
import AddTodo from '../components/todos/AddTodo'
import FilterTodos from '../components/todos/FilterTodos'

export default {
    name: 'Todos',
    components: {
        AddTodo,
        FilterTodos
    },
    computed: mapGetters(['allTodos']),
    methods: {
        ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
        onDoubleClick(todo) {
            const updatedTodo ={
                id: todo.id,
                title: todo.title,
                completed: !todo.completed
            }
            this.updateTodo(updatedTodo)
        }
    },
    created() {
        this.fetchTodos();
    }
}
</script>
<style scoped>
   
   .todos-container {
       margin: 0 100px;
   }

        .todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    }
    .todo {
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
    }
    i {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    cursor: pointer;
    }
    .legend {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
    }
    .complete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #35495e;
    }
    .incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #41b883;
    }
    .is-complete {
    background: #35495e;
    color: #fff;
    }
    @media (max-width: 500px) {
    .todos {
        grid-template-columns: 1fr;
    }
    }
</style>