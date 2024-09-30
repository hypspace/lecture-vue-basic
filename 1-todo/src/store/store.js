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
  getters: {
    getTodos(state) {
      return state.todos
    },
  },
  mutations: {
    addTodoItem(state, newTodo) {
      console.log(['store'], 'addTodoItem()', state, newTodo)
      localStorage.setItem(newTodo, newTodo)
      state.todos.push(newTodo)
    },
    deleteTodoItem(state, payload) {
      console.log(['store'], 'deleteTodoItem', state, payload)
      localStorage.removeItem(payload.todo)
      state.todos.splice(payload.idx, 1) // Array.from(event.target.closest('li').parentNode.children ).indexOf(event.target.closest('li'))
    },
    clearTodoItem(state) {
      console.log(['store'], 'clearTodoItem()', state)
      localStorage.clear()
      state.todos = []
    },
  },
})
