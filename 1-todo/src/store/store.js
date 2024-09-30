import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storage = {
  fetch() {
    return Array.from({ length: localStorage.length }, (_, i) =>
      localStorage.key(i)
    )
  },
}

export const store = new Vuex.Store({
  state: {
    todos: storage.fetch(),
  },
  mutations: {
    addTodoItem(state, newTodo) {
      console.log(['store'], 'addTodoItem()', state, newTodo)
      localStorage.setItem(newTodo, newTodo)
      state.todos.push(newTodo)
    },
  },
})
