<template>
  <div>
    <input
      placeholder="Add a new todo"
      v-model="newTodo"
      v-on:keyup.enter="addTodo"
      autofocus
    />
    <button type="button" v-on:click="addTodo">add</button>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data() {
    return {
      newTodo: '',
    }
  },
  methods: {
    addTodo() {
      this.$store.commit('addTodoItem', this.newTodo)
      this.clearInput()
    },
    clearInput() {
      this.newTodo = ''
    },
  },
}
</script>

<style scoped>
input {
  width: 100%;
  padding: 10px;
}
</style>
