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
import { mapMutations } from 'vuex'

export default {
  name: 'TodoInput',
  data() {
    return {
      newTodo: '',
    }
  },
  methods: {
    ...mapMutations({
      addTodoItem: 'addTodoItem',
    }),
    addTodo() {
      if (this.newTodo.trim()) {
        this.addTodoItem(this.newTodo)
        this.clearInput()
      }
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
