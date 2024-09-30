<template>
  <ul>
    <li v-for="(todo, idx) in todos" v-bind:key="idx">
      {{ todo }}
      <button>X</button>
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
