<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodoItem"></TodoInput>
    <TodoList v-bind:todos="todos" v-on:deleteTodo="deleteTodoItem"></TodoList>
    <TodoFooter v-on:clearTodo="clearTodoItem"></TodoFooter>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  data() {
    return {
      todos: [],
    }
  },
  methods: {
    addTodoItem(newTodo) {
      localStorage.setItem(newTodo, newTodo)
      this.todos.push(newTodo)
    },
    deleteTodoItem(todo, idx) {
      localStorage.removeItem(todo)
      this.todos.splice(idx, 1) // Array.from(event.target.closest('li').parentNode.children ).indexOf(event.target.closest('li'))
    },
    clearTodoItem() {
      localStorage.clear()
      this.todos = []
    },
  },
}
</script>

<style>
#app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
</style>
