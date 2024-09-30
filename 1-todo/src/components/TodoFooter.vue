<template>
  <footer>
    <button v-on:click="clearTodo">clear all</button>
  </footer>
</template>

<script>
export default {
  name: 'TodoFooter',
  methods: {
    clearTodo() {
      this.$store.commit('clearTodoItem')
    },
  },
}
</script>

<style scoped>
footer {
  text-align: center;
  margin-top: 20px;
}
</style>
