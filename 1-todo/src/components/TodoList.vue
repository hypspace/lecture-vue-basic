<template>
  <ul>
    <li v-for="(todo, idx) in todos" v-bind:key="idx">
      {{ todo }}
      <button v-on:click="deleteTodo(todo, idx)">X</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
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
    deleteTodo: function (todo, idx) {
      console.log('[TodoList]', 'deleteTodo()', todo, idx)

      localStorage.removeItem(todo)
      this.todos.splice(idx, 1) // Array.from(event.target.closest('li').parentNode.children ).indexOf(event.target.closest('li'))
    },
  },
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}
</style>
