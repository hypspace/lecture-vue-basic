<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodoItem"></TodoInput>
    <TodoList v-bind:todos="todos" v-on:deleteTodo="deleteTodoItem"></TodoList>
    <TodoFooter></TodoFooter>
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
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter,
  },
  data: function () {
    return {
      todos: [],
    }
  },
  created: function () {
    this.todos = Array.from({ length: localStorage.length }, (_, i) =>
      localStorage.key(i)
    )
  },
  methods: {
    addTodoItem: function (newTodo) {
      console.log('[root]', 'addTodoItem()', newTodo)
      localStorage.setItem(newTodo, newTodo)
      this.todos.push(newTodo)
    },
    deleteTodoItem: function (todo, idx) {
      console.log('[root]', 'deleteTodoItem()', todo, idx)
      localStorage.removeItem(todo)
      this.todos.splice(idx, 1) // Array.from(event.target.closest('li').parentNode.children ).indexOf(event.target.closest('li'))
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
