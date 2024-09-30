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
  props: ['todos'],
  methods: {
    deleteTodo: function (todo, idx) {
      console.log('[TodoList]', 'deleteTodo()', todo, idx)
      this.$emit('deleteTodo', todo, idx)
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
