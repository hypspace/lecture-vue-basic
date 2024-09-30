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
  data: function () {
    return {
      newTodo: '',
    }
  },
  methods: {
    addTodo: function () {
      console.log('[TodoInput]', 'addTodo()', this.newTodo)
      localStorage.setItem(this.newTodo, this.newTodo)
      this.clearInput()
    },
    clearInput: function () {
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
