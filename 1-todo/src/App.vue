<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodoItem"></TodoInput>
    <TodoList v-bind:todos="todos"></TodoList>
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
