<template>
  <TransitionGroup name="list" tag="ul">
    <li v-for="(todo, idx) in this.getTodos" v-bind:key="idx">
      {{ todo }}
      <button v-on:click="deleteTodo(todo, idx)">X</button>
    </li>
  </TransitionGroup>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TodoList',
  methods: {
    deleteTodo(todo, idx) {
      this.$store.commit('deleteTodoItem', { todo, idx })
    },
  },
  computed: {
    ...mapGetters(['getTodos']),
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
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
