<template>
  <footer>
    <button v-on:click="clearTodo">clear all</button>
  </footer>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'TodoFooter',
  methods: {
    ...mapMutations({
      clearTodo: 'clearTodoItem',
    }),
  },
}
</script>

<style scoped>
footer {
  text-align: center;
  margin-top: 20px;
}
</style>
